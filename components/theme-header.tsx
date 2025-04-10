"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { CreateQuestionModal } from "@/components/create-question-modal"
import type { QAData } from "@/data/interviewData"

interface ThemeHeaderProps {
  title: string
  onAddQuestion: (question: QAData[keyof QAData]) => void
}

export function ThemeHeader({ title, onAddQuestion }: ThemeHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left">{title}</h1>
      <div className="flex items-center gap-2">
        <CreateQuestionModal onAddQuestion={onAddQuestion} />
        <ThemeToggle />
      </div>
    </div>
  )
}
