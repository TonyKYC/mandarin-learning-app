"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define the data structure
export type QAData = {
  [key: string]: {
    english: {
      question: string
      answer: string
    }
    pinyin: {
      question: string
      answer: string
    }
    chinese: {
      question: string
      answer: string
    }
  }
}

// Create a context for the data
type DataContextType = {
  data: QAData
  setData: (data: QAData) => void
  completedCards: Record<string, boolean>
  toggleCardCompletion: (id: string) => void
}

const DataContext = createContext<DataContextType | null>(null)

// Create a hook to use the data context
export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData must be used within a DataProvider")
  }
  return context
}

// Create a provider component
export function DataProvider({ children, initialData }: { children: ReactNode; initialData?: QAData }) {
  const [data, setData] = useState<QAData>(initialData || {})
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

  return (
    <DataContext.Provider value={{ data, setData, completedCards, toggleCardCompletion }}>
      {children}
    </DataContext.Provider>
  )
}
