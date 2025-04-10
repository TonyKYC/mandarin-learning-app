"use client";

import { useState, useEffect } from "react";
import type { QAData } from "@/app/data-provider";

export function useCardData(initialData: QAData) {
  const [data, setData] = useState<QAData>(initialData);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCard, setCurrentCard] = useState(() => {
    const keys = Object.keys(initialData);
    return keys.length > 0 ? keys[0] : "1";
  });

  // Update data when initialData changes
  useEffect(() => {
    setData(initialData);
    // Update currentCard if needed
    if (Object.keys(initialData).length > 0 && !initialData[currentCard]) {
      setCurrentCard(Object.keys(initialData)[0]);
    }
  }, [initialData, currentCard]);

  // Filter data based on search term
  const filteredData = Object.entries(data).filter(([id, card]) => {
    if (!searchTerm) return true;

    const searchLower = searchTerm.toLowerCase();
    return (
      card.english.question.toLowerCase().includes(searchLower) ||
      card.english.answer.toLowerCase().includes(searchLower) ||
      card.pinyin.question.toLowerCase().includes(searchLower) ||
      card.pinyin.answer.toLowerCase().includes(searchLower) ||
      card.chinese.question.toLowerCase().includes(searchLower) ||
      card.chinese.answer.toLowerCase().includes(searchLower)
    );
  });

  // Navigation functions
  const goToNextCard = () => {
    const keys = Object.keys(data);
    const currentIndex = keys.indexOf(currentCard);
    if (currentIndex < keys.length - 1) {
      setCurrentCard(keys[currentIndex + 1]);
    }
  };

  const goToPreviousCard = () => {
    const keys = Object.keys(data);
    const currentIndex = keys.indexOf(currentCard);
    if (currentIndex > 0) {
      setCurrentCard(keys[currentIndex - 1]);
    }
  };

  const goToRandomCard = () => {
    const keys = Object.keys(data);
    if (keys.length <= 1) return;

    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * keys.length);
    } while (keys[randomIndex] === currentCard && keys.length > 1);

    setCurrentCard(keys[randomIndex]);
  };

  const addQuestion = (question: QAData[keyof QAData], id: string) => {
    setData((prevData) => ({
      ...prevData,
      [id]: question,
    }));

    // Navigate to the new card
    setCurrentCard(id);
  };

  return {
    data,
    setData,
    searchTerm,
    setSearchTerm,
    currentCard,
    setCurrentCard,
    filteredData,
    goToNextCard,
    goToPreviousCard,
    goToRandomCard,
    addQuestion,
    isFirstCard: currentCard === Object.keys(data)[0],
    isLastCard: currentCard === Object.keys(data)[Object.keys(data).length - 1],
  };
}
