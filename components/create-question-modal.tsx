"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { QAData } from "@/data/interviewData"

interface CreateQuestionModalProps {
  onAddQuestion: (question: QAData[keyof QAData]) => void
}

export function CreateQuestionModal({ onAddQuestion }: CreateQuestionModalProps) {
  const [open, setOpen] = useState(false)
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
  })

  const handleChange = (language: "english" | "pinyin" | "chinese", field: "question" | "answer", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [language]: {
        ...prev[language],
        [field]: value,
      },
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.english.question || !formData.english.answer) {
      alert("English question and answer are required")
      return
    }

    onAddQuestion(formData)
    setFormData({
      english: { question: "", answer: "" },
      pinyin: { question: "", answer: "" },
      chinese: { question: "", answer: "" },
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
            <DialogDescription>Add a new question and answer in English, Pinyin, and Chinese.</DialogDescription>
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
                  onChange={(e) => handleChange("english", "question", e.target.value)}
                  placeholder="Enter the question in English"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="english-answer">Answer (English) *</Label>
                <Textarea
                  id="english-answer"
                  value={formData.english.answer}
                  onChange={(e) => handleChange("english", "answer", e.target.value)}
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
                  onChange={(e) => handleChange("pinyin", "question", e.target.value)}
                  placeholder="Enter the question in Pinyin"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pinyin-answer">Answer (Pinyin)</Label>
                <Textarea
                  id="pinyin-answer"
                  value={formData.pinyin.answer}
                  onChange={(e) => handleChange("pinyin", "answer", e.target.value)}
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
                  onChange={(e) => handleChange("chinese", "question", e.target.value)}
                  placeholder="Enter the question in Chinese"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="chinese-answer">Answer (Chinese)</Label>
                <Textarea
                  id="chinese-answer"
                  value={formData.chinese.answer}
                  onChange={(e) => handleChange("chinese", "answer", e.target.value)}
                  placeholder="Enter the answer in Chinese"
                />
              </div>
            </TabsContent>
          </Tabs>

          <DialogFooter className="mt-6">
            <Button type="submit">Add Question</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
