"use client";

import { useMemo, useCallback, startTransition, useState } from "react";
import { updateQuestionProgress } from "@/src/db/questions";

export function useCardProgress(
  initialCompletedCards: Set<string>,
  totalCards: number
) {
  const [completedCards, setCompletedCards] = useState(initialCompletedCards);

  const completedCount = useMemo(() => completedCards.size, [completedCards]);
  const progressPercentage = useMemo(
    () => (completedCount / totalCards) * 100,
    [completedCount, totalCards]
  );

  const isCompleted = useCallback(
    (cardId: string) => completedCards.has(cardId),
    [completedCards]
  );

  const toggleCompletion = useCallback(
    async (cardId: string) => {
      const newValue = !completedCards.has(cardId);

      // Optimistic update
      startTransition(() => {
        setCompletedCards((prev) => {
          const newSet = new Set(prev);
          if (newSet.has(cardId)) {
            newSet.delete(cardId);
          } else {
            newSet.add(cardId);
          }
          return newSet;
        });
      });

      try {
        // Update database
        await updateQuestionProgress(parseInt(cardId), newValue);
      } catch (error) {
        console.error("Error updating progress:", error);
        // Revert optimistic update on error
        startTransition(() => {
          setCompletedCards((prev) => {
            const newSet = new Set(prev);
            if (newValue) {
              newSet.delete(cardId);
            } else {
              newSet.add(cardId);
            }
            return newSet;
          });
        });
      }
    },
    [completedCards]
  );

  return {
    completedCount,
    progressPercentage,
    isCompleted,
    toggleCompletion,
    completedCards,
  };
}
