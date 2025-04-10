"use client";

import type { QAData } from "@/app/data-provider";
import { startTransition, useCallback, useMemo } from "react";
import { useCardProgress } from "./use-card-progress";

export function useCardData(
  cardId: string,
  data: QAData,
  initialCompletedCards: Set<string>,
  totalCards: number
) {
  const progress = useCardProgress(initialCompletedCards, totalCards);

  const isCompleted = useCallback(
    () => progress.isCompleted(cardId),
    [progress, cardId]
  );

  const toggleCompletion = useCallback(() => {
    startTransition(() => {
      progress.toggleCompletion(cardId);
    });
  }, [progress, cardId]);

  const cardData = useMemo(() => {
    return {
      ...data,
      isCompleted: isCompleted(),
      toggleCompletion,
      isPending: false,
      error: undefined,
    };
  }, [data, isCompleted, toggleCompletion]);

  return cardData;
}
