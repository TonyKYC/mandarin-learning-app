"use client";

import { updateQuestionProgress } from "@/src/db/questions";
import {
  createContext,
  useContext,
  useMemo,
  useState,
  useOptimistic,
  type ReactNode,
} from "react";

// Define the data structure
export type QAData = {
  [key: string]: {
    english: {
      question: string;
      answer: string;
    };
    pinyin: {
      question: string;
      answer: string;
    };
    chinese: {
      question: string;
      answer: string;
    };
    completed?: boolean;
  };
};

// Create a context for the data
type DataContextType = {
  data: QAData;
  setData: (data: QAData) => void;
  completedCards: Record<string, boolean>;
  toggleCardCompletion: (id: string) => void;
};

const DataContext = createContext<DataContextType | null>(null);

// Create a hook to use the data context
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}

// Create a provider component
export function DataProvider({
  children,
  initialData,
  initialProgress,
}: {
  children: ReactNode;
  initialData?: QAData;
  initialProgress?: Record<string, boolean>;
}) {
  const [data, setData] = useState<QAData>(initialData || {});
  const [completedCards, setCompletedCards] = useState<Record<string, boolean>>(
    initialProgress || {}
  );
  const [optimisticCompletedCards, setOptimisticCompletedCards] = useOptimistic(
    completedCards,
    (state, newValue: { id: string; value: boolean }) => ({
      ...state,
      [newValue.id]: newValue.value,
    })
  );

  const toggleCardCompletion = useMemo(
    () => async (id: string) => {
      const newValue = !optimisticCompletedCards[id];

      // Optimistically update the UI
      setOptimisticCompletedCards({ id, value: newValue });

      try {
        await updateQuestionProgress(parseInt(id), newValue);
        setCompletedCards((prev) => ({
          ...prev,
          [id]: newValue,
        }));
      } catch (error) {
        console.error("Error updating progress:", error);
        // Revert optimistic update on error
        setOptimisticCompletedCards({ id, value: !newValue });
      }
    },
    [optimisticCompletedCards]
  );

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      data,
      setData,
      completedCards: optimisticCompletedCards,
      toggleCardCompletion,
    }),
    [data, optimisticCompletedCards, toggleCardCompletion]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
