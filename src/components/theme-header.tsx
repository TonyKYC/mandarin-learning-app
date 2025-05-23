"use client";

import { CreateQuestionModal } from "@/src/components/create-question-modal";
import { ThemeToggle } from "@/src/components/theme-toggle";
import type { QAData } from "@/src/types/questions.types";

interface ThemeHeaderProps {
  title: string;
  onAddQuestion: (question: QAData[keyof QAData], id: string) => void;
  onRefetch?: () => Promise<void>;
}

export function ThemeHeader({
  title,
  onAddQuestion,
  onRefetch,
}: ThemeHeaderProps) {
  const handleAddQuestion = (question: QAData[keyof QAData], id: string) => {
    onAddQuestion(question, id);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-0 text-center sm:text-left">
        {title}
      </h1>
      <div className="flex items-center gap-2">
        <CreateQuestionModal
          onAddQuestion={handleAddQuestion}
          onRefetch={onRefetch}
        />
        <ThemeToggle />
      </div>
    </div>
  );
}
