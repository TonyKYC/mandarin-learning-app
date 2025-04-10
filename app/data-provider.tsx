"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { updateQuestionProgress } from "@/src/db/questions";

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

  const toggleCardCompletion = async (id: string) => {
    const newValue = !completedCards[id];

    try {
      await updateQuestionProgress(parseInt(id), newValue);
      setCompletedCards((prev) => ({
        ...prev,
        [id]: newValue,
      }));
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  // Debug log when completedCards changes
  useEffect(() => {}, [completedCards]);

  return (
    <DataContext.Provider
      value={{ data, setData, completedCards, toggleCardCompletion }}
    >
      {children}
    </DataContext.Provider>
  );
}
