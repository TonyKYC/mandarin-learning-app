"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { createQuestion } from "@/db/questions";
import type { QAData } from "@/mock-data/interviewData";
import { Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

interface CreateQuestionModalProps {
  onAddQuestion: (question: QAData[keyof QAData], id: string) => void;
  onRefetch?: () => Promise<void>;
}

export function CreateQuestionModal({
  onAddQuestion,
  onRefetch,
}: CreateQuestionModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    english: {
      question: "",
      answer: "",
    },
    pinyin: {
      question: "",
      answer: "",
    },
    chinese: {
      question: "",
      answer: "",
    },
  });

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
      // Basic validation
      if (!formData.english.question || !formData.english.answer) {
        toast.error("English question and answer are required");
        return;
      }

      // Create question in database
      const id = uuidv4();
      const newQuestion = {
        english: {
          question: formData.english.question,
          answer: formData.english.answer,
        },
        pinyin: {
          question: formData.pinyin.question,
          answer: formData.pinyin.answer,
        },
        chinese: {
          question: formData.chinese.question,
          answer: formData.chinese.answer,
        },
      };
      await createQuestion(newQuestion);
      await onRefetch?.();
      onAddQuestion(newQuestion, id);

      // Reset form and close modal
      setFormData({
        english: { question: "", answer: "" },
        pinyin: { question: "", answer: "" },
        chinese: { question: "", answer: "" },
      });
      setOpen(false);
      toast.success("Question created successfully!");
    } catch (error) {
      console.error("Error creating question:", error);
      toast.error("Failed to create question. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-1">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Create Question</span>
          <span className="sm:hidden">New</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Question</DialogTitle>
            <DialogDescription>
              Add a new question and answer in English, Pinyin, and Chinese.
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
              {isSubmitting ? "Creating..." : "Add Question"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
