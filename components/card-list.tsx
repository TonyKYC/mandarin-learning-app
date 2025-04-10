"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Columns, LayoutGrid, EyeOff } from "lucide-react";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [hideCompleted, setHideCompleted] = useState(false);

  const visibleData = hideCompleted
    ? filteredData.filter(([id]) => !completedCards[id])
    : filteredData;

  if (visibleData.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-8">
        {filteredData.length === 0
          ? "No cards match your search."
          : "All cards are completed."}
      </p>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setHideCompleted(!hideCompleted)}
          className={`h-8 ${hideCompleted && "bg-slate-100 dark:bg-slate-800"}`}
        >
          <EyeOff className="h-4 w-4 mr-2" />
          Hide Completed
        </Button>
        <div className="inline-flex items-center rounded-md border border-input bg-muted shadow-sm">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(true)}
            className={`h-8 px-3 rounded-l-none ${
              isExpanded && "bg-background hover:bg-background"
            }`}
          >
            <Columns className="h-4 w-4" />
            <span className="sr-only">Grid View</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(false)}
            className={`h-8 px-3 rounded-r-none ${
              !isExpanded && "bg-background hover:bg-background"
            }`}
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="sr-only">Column View</span>
          </Button>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          isExpanded ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"
        }`}
      >
        {visibleData.map(([id, card]) => (
          <Card
            key={id}
            onClick={() => toggleCardCompletion(id)}
            className={`overflow-hidden cursor-pointer transition-colors
              ${
                completedCards[id]
                  ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900 hover:bg-green-100 dark:hover:bg-green-900/30"
                  : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
              }`}
          >
            <CardHeader className="flex flex-row items-center justify-between p-4">
              <CardTitle className="text-base font-medium">
                Question {id}
              </CardTitle>
              <Checkbox
                checked={completedCards[id] || false}
                onCheckedChange={() => toggleCardCompletion(id)}
                onClick={(e) => e.stopPropagation()}
              />
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 divide-y dark:divide-slate-700">
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
    </div>
  );
}
