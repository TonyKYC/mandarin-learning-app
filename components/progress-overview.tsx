"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  List,
  Grid,
  Grid2X2,
  Square,
  UnfoldVertical,
  ListCollapse,
  EyeOff,
  Eye,
} from "lucide-react";
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
  const [hideCompleted, setHideCompleted] = useState(false);

  const visibleData = hideCompleted
    ? filteredData.filter(([id]) => !completedCards[id])
    : filteredData;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Your Progress</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setHideCompleted(!hideCompleted)}
            className={`h-8 ${
              hideCompleted && "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            {hideCompleted ? (
              <>
                <Eye className="h-4 w-4 mr-2" />
                Show Completed
              </>
            ) : (
              <>
                <EyeOff className="h-4 w-4 mr-2" />
                Hide Completed
              </>
            )}
          </Button>
          <div className="inline-flex items-center rounded-md border border-input bg-muted shadow-sm">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(false)}
              className={`h-8 px-3 rounded-r-none ${
                !isExpanded && "bg-background hover:bg-background"
              }`}
            >
              <ListCollapse className="h-4 w-4" />
              <span className="sr-only">Compact View</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(true)}
              className={`h-8 px-3 rounded-l-none ${
                isExpanded && "bg-background hover:bg-background"
              }`}
            >
              <UnfoldVertical className="h-4 w-4" />
              <span className="sr-only">Expanded View</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-center text-muted-foreground">
            {completedCount} of {Object.keys(data).length} cards completed (
            {Math.round(progressPercentage)}%)
          </p>

          {visibleData.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              {filteredData.length === 0
                ? "No cards match your search."
                : "All cards are completed."}
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
              {visibleData.map(([id, card]) => (
                <div
                  key={id}
                  onClick={() => toggleCardCompletion(id)}
                  className={`p-4 border rounded-lg ${
                    isExpanded ? "flex-col" : ""
                  } 
                    ${
                      completedCards[id]
                        ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900 hover:bg-green-100 dark:hover:bg-green-900/30"
                        : "hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    } cursor-pointer transition-colors`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Question {id}</span>
                      <Checkbox
                        checked={completedCards[id] || false}
                        onCheckedChange={() => toggleCardCompletion(id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    {isExpanded ? (
                      <>
                        <p className="text-sm text-muted-foreground">
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
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
