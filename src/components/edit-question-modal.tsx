"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import type { QAData } from "@/src/types/questions.types";
import { updateQuestion } from "@/src/db/questions";
import { toast } from "sonner";

interface EditQuestionModalProps {
  id: number;
  question: QAData[keyof QAData];
  onRefetch?: () => Promise<void>;
  className?: string;
}

export function EditQuestionModal({
  id,
  question,
  onRefetch,
  className,
}: EditQuestionModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(question);

  const handleChange = (
    language: "english" | "pinyin" | "chinese",
    field: "question" | "answer",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [language]: {
        ...prev[language],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!formData.english.question || !formData.english.answer) {
        toast.error("English question and answer are required");
        return;
      }

      await updateQuestion(id, formData);
      await onRefetch?.();
      setOpen(false);
      toast.success("Question updated successfully!");
    } catch (error) {
      console.error("Error updating question:", error);
      toast.error("Failed to update question. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation()} className={className}>
      <Dialog open={open} onOpenChange={setOpen} modal={true}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0.5 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <Pencil className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400" />
          </Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Edit Question</DialogTitle>
              <DialogDescription>
                Update the question and answer in English, Pinyin, and Chinese.
              </DialogDescription>
            </DialogHeader>

            <Tabs defaultValue="english" className="mt-4">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="english">English</TabsTrigger>
                <TabsTrigger value="pinyin">Pinyin</TabsTrigger>
                <TabsTrigger value="chinese">Chinese</TabsTrigger>
              </TabsList>

              <TabsContent value="english" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="english-question">Question (English) *</Label>
                  <Textarea
                    id="english-question"
                    value={formData.english.question}
                    onChange={(e) =>
                      handleChange("english", "question", e.target.value)
                    }
                    placeholder="Enter the question in English"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="english-answer">Answer (English) *</Label>
                  <Textarea
                    id="english-answer"
                    value={formData.english.answer}
                    onChange={(e) =>
                      handleChange("english", "answer", e.target.value)
                    }
                    placeholder="Enter the answer in English"
                    required
                  />
                </div>
              </TabsContent>

              <TabsContent value="pinyin" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pinyin-question">Question (Pinyin)</Label>
                  <Textarea
                    id="pinyin-question"
                    value={formData.pinyin.question}
                    onChange={(e) =>
                      handleChange("pinyin", "question", e.target.value)
                    }
                    placeholder="Enter the question in Pinyin"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pinyin-answer">Answer (Pinyin)</Label>
                  <Textarea
                    id="pinyin-answer"
                    value={formData.pinyin.answer}
                    onChange={(e) =>
                      handleChange("pinyin", "answer", e.target.value)
                    }
                    placeholder="Enter the answer in Pinyin"
                  />
                </div>
              </TabsContent>

              <TabsContent value="chinese" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="chinese-question">Question (Chinese)</Label>
                  <Textarea
                    id="chinese-question"
                    value={formData.chinese.question}
                    onChange={(e) =>
                      handleChange("chinese", "question", e.target.value)
                    }
                    placeholder="Enter the question in Chinese"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="chinese-answer">Answer (Chinese)</Label>
                  <Textarea
                    id="chinese-answer"
                    value={formData.chinese.answer}
                    onChange={(e) =>
                      handleChange("chinese", "answer", e.target.value)
                    }
                    placeholder="Enter the answer in Chinese"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <DialogFooter className="mt-6">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Update Question"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
