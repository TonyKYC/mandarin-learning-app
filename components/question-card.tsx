"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import type { QAData } from "@/mock-data/interviewData";
import { EditQuestionModal } from "./edit-question-modal";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";

interface QuestionCardProps {
  id: string;
  card: QAData[keyof QAData];
  isCompleted: boolean;
  onToggleCompletion: () => void;
  onRefetch?: () => Promise<void>;
}

export function QuestionCard({
  id,
  card,
  isCompleted,
  onToggleCompletion,
  onRefetch,
}: QuestionCardProps) {
  return (
    <Card
      onClick={onToggleCompletion}
      className={`cursor-pointer transition-colors group
        ${
          isCompleted
            ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900 hover:bg-green-100 dark:hover:bg-green-900/30"
            : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
        }`}
    >
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <CardTitle className="text-base font-medium">Question {id}</CardTitle>
        <div className="flex items-center gap-2">
          <EditQuestionModal
            id={Number(id)}
            question={card}
            onRefetch={onRefetch}
            className="opacity-0 group-hover:opacity-100 transition-opacity mt-1"
          />
          <Checkbox
            checked={isCompleted}
            onCheckedChange={onToggleCompletion}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x dark:divide-slate-700">
          <div className="p-4 space-y-4">
            <div>
              <h3 className="font-medium text-slate-800 dark:text-slate-200">
                Question
              </h3>
              <p className="mt-1 text-slate-700 dark:text-slate-300 break-words">
                {card.english.question}
              </p>
              <p className="mt-1 text-rose-600 dark:text-rose-400 font-medium break-words">
                {card.pinyin.question}
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm break-words">
                {card.chinese.question}
              </p>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <div>
              <h3 className="font-medium text-slate-800 dark:text-slate-200">
                Answer
              </h3>
              <p className="mt-1 text-slate-700 dark:text-slate-300 break-words">
                {card.english.answer}
              </p>
              <p className="mt-1 text-rose-600 dark:text-rose-400 font-medium break-words">
                {card.pinyin.answer}
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm break-words">
                {card.chinese.answer}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
