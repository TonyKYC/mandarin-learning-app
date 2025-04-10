"use client"

import { useState, useEffect } from "react"

export function useCardProgress(totalCards: number) {
  const [completedCards, setCompletedCards] = useState<Record<string, boolean>>({})

  // Load completed cards from localStorage
  useEffect(() => {
    const savedCompletedCards = localStorage.getItem("completedCards")
    if (savedCompletedCards) {
      setCompletedCards(JSON.parse(savedCompletedCards))
    }
  }, [])

  // Save completed cards to localStorage
  useEffect(() => {
    localStorage.setItem("completedCards", JSON.stringify(completedCards))
  }, [completedCards])

  const toggleCardCompletion = (id: string) => {
    setCompletedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Calculate progress
  const completedCount = Object.values(completedCards).filter(Boolean).length
  const progressPercentage = totalCards > 0 ? (completedCount / totalCards) * 100 : 0

  return {
    completedCards,
    toggleCardCompletion,
    completedCount,
    progressPercentage,
  }
}
