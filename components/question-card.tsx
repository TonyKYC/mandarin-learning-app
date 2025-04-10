"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import type { QAData } from "@/data/interviewData"

interface QuestionCardProps {
  id: string
  card: QAData[keyof QAData]
  isCompleted: boolean
  onToggleCompletion: () => void
}

export function QuestionCard({ id, card, isCompleted, onToggleCompletion }: QuestionCardProps) {
  return (
    <Card>
      <CardHeader className="bg-slate-50 dark:bg-neutral-950 border-b border-white/20 flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Question {id}</CardTitle>
        <Checkbox checked={isCompleted} onCheckedChange={onToggleCompletion} />
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x dark:divide-slate-700">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Question</h3>
              <p className="mt-2 text-lg sm:text-xl text-slate-700 dark:text-slate-300 break-words">
                {card.english.question}
              </p>
              <p className="mt-2 text-lg sm:text-xl text-rose-600 dark:text-rose-400 font-medium break-words">
                {card.pinyin.question}
              </p>
              <p className="mt-2 text-base sm:text-lg text-slate-500 dark:text-slate-400 break-words">
                {card.chinese.question}
              </p>
            </div>
          </div>
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg font-medium text-slate-800 dark:text-slate-200">Answer</h3>
              <p className="mt-2 text-lg sm:text-xl text-slate-700 dark:text-slate-300 break-words">
                {card.english.answer}
              </p>
              <p className="mt-2 text-lg sm:text-xl text-rose-600 dark:text-rose-400 font-medium break-words">
                {card.pinyin.answer}
              </p>
              <p className="mt-2 text-base sm:text-lg text-slate-500 dark:text-slate-400 break-words">
                {card.chinese.answer}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
