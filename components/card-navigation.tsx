"use client";

import { Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { QAData } from "@/mock-data/interviewData";

interface CardNavigationProps {
  data: QAData;
  currentCard: string;
  setCurrentCard: (id: string) => void;
  goToPreviousCard: () => void;
  goToNextCard: () => void;
  goToRandomCard: () => void;
  isFirstCard: boolean;
  isLastCard: boolean;
}

export function CardNavigation({
  data,
  currentCard,
  setCurrentCard,
  goToPreviousCard,
  goToNextCard,
  goToRandomCard,
  isFirstCard,
  isLastCard,
}: CardNavigationProps) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <Select value={currentCard} onValueChange={setCurrentCard}>
        <SelectTrigger className="w-full truncate">
          <SelectValue placeholder="Select a question" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {Object.entries(data).map(([id, card]) => (
            <SelectItem key={id} value={id} className="truncate">
              {id}: {card.english.question}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex gap-2 w-full sm:w-auto sm:ml-auto">
        <Button
          variant="outline"
          className="flex-1 sm:flex-none"
          onClick={goToPreviousCard}
          disabled={isFirstCard}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          className="flex-1 sm:flex-none"
          onClick={goToRandomCard}
          title="Show random question"
        >
          <Shuffle className="h-4 w-4" />
          <span className="sr-only">Random</span>
        </Button>
        <Button
          className="flex-1 sm:flex-none"
          onClick={goToNextCard}
          disabled={isLastCard}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
