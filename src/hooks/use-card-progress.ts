"use client";

import { useState, useEffect } from "react";
import { updateQuestionProgress } from "@/src/db/questions";

export function useCardProgress(
  totalCards: number,
  initialProgress: Record<string, boolean>
) {
  const [completedCards, setCompletedCards] =
    useState<Record<string, boolean>>(initialProgress);

  const toggleCardCompletion = async (id: string) => {
    const newIsCompleted = !completedCards[id];

    // Optimistically update UI
    setCompletedCards((prev) => ({
      ...prev,
      [id]: newIsCompleted,
    }));

    try {
      await updateQuestionProgress(parseInt(id), newIsCompleted);
    } catch (error) {
      console.error("Error updating progress:", error);
      // Revert on error
      setCompletedCards((prev) => ({
        ...prev,
        [id]: !newIsCompleted,
      }));
    }
  };

  // Calculate progress
  const completedCount = Object.values(completedCards).filter(Boolean).length;
  const progressPercentage =
    totalCards > 0 ? (completedCount / totalCards) * 100 : 0;

  return {
    completedCards,
    toggleCardCompletion,
    completedCount,
    progressPercentage,
  };
}
