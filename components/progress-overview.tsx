"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2 } from "lucide-react";
import type { QAData } from "@/data/interviewData";

interface ProgressOverviewProps {
  data: QAData;
  filteredData: [string, QAData[keyof QAData]][];
  completedCards: Record<string, boolean>;
  toggleCardCompletion: (id: string) => void;
  progressPercentage: number;
  completedCount: number;
}

export function ProgressOverview({
  data,
  filteredData,
  completedCards,
  toggleCardCompletion,
  progressPercentage,
  completedCount,
}: ProgressOverviewProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Your Progress</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="h-8 w-8 p-0"
        >
          {isExpanded ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isExpanded ? "Compact View" : "Expanded View"}
          </span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-center text-muted-foreground">
            {completedCount} of {Object.keys(data).length} cards completed (
            {Math.round(progressPercentage)}%)
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {filteredData.map(([id, card]) => (
              <div
                key={id}
                className={`p-4 border rounded-lg flex ${
                  isExpanded ? "flex-col" : "items-center"
                } justify-between ${
                  completedCards[id]
                    ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900"
                    : ""
                }`}
              >
                <div className={`min-w-0 flex-1 ${isExpanded ? "" : "pr-2"}`}>
                  <div className="flex items-center">
                    <span className="font-medium">Question {id}</span>
                  </div>
                  {isExpanded ? (
                    <>
                      <p className="text-sm text-muted-foreground mt-2">
                        {card.english.question}
                      </p>
                      <p className="text-sm text-rose-600 dark:text-rose-400 mt-1">
                        {card.pinyin.question}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {card.chinese.question}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground truncate">
                      {card.english.question}
                    </p>
                  )}
                </div>
                <Checkbox
                  checked={completedCards[id] || false}
                  onCheckedChange={() => toggleCardCompletion(id)}
                  className={isExpanded ? "mt-2 self-end" : ""}
                />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
