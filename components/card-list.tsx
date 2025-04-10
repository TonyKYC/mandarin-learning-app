"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import type { QAData } from "@/data/interviewData";

interface CardListProps {
  filteredData: [string, QAData[keyof QAData]][];
  completedCards: Record<string, boolean>;
  toggleCardCompletion: (id: string) => void;
}

export function CardList({
  filteredData,
  completedCards,
  toggleCardCompletion,
}: CardListProps) {
  if (filteredData.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-8">
        No cards match your search.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {filteredData.map(([id, card]) => (
        <Card
          key={id}
          className={`overflow-hidden ${
            completedCards[id]
              ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900"
              : ""
          }`}
        >
          <CardHeader className="bg-slate-50 dark:bg-neutral-950 border-b border-white/20 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Question {id}</CardTitle>
            <Checkbox
              checked={completedCards[id] || false}
              onCheckedChange={() => toggleCardCompletion(id)}
            />
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
      ))}
    </div>
  );
}
