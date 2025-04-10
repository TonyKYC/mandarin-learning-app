"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { ThemeHeader } from "@/src/components/theme-header";
import { SearchBar } from "@/src/components/search-bar";
import { ProgressOverview } from "@/src/components/progress-overview";
import { CardList } from "@/src/components/card-list";
import { CardNavigation } from "@/src/components/card-navigation";
import { QuestionCard } from "@/src/components/question-card";
import { useCardData } from "@/src/hooks/use-card-data";
import { useCardProgress } from "@/src/hooks/use-card-progress";
import { fetchAllQuestions, updateQuestionProgress } from "@/src/db/questions";
import { Card } from "@/src/components/ui/card";
import { useEffect, useState, useMemo } from "react";
import { QAData } from "@/app/data-provider";

export default function Home() {
  const [dbQuestions, setDbQuestions] = useState<QAData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("activeTab") || "overview";
    }
    return "overview";
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentCard, setCurrentCard] = useState("");
  const [initialCompletedCards, setInitialCompletedCards] = useState<
    Set<string>
  >(new Set());

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTab", value);
    }
  };

  const loadDbQuestions = async () => {
    try {
      const { data: questions, progress } = await fetchAllQuestions();
      setDbQuestions(questions);

      // Initialize completedCards from progress
      const completedSet = new Set<string>();
      Object.entries(progress).forEach(([id, isCompleted]) => {
        if (isCompleted) {
          completedSet.add(id);
        }
      });
      setInitialCompletedCards(completedSet);

      if (!currentCard && Object.keys(questions).length > 0) {
        setCurrentCard(Object.keys(questions)[0]);
      }
    } catch (error) {
      console.error("Error loading questions:", error);
      setDbQuestions({});
      setInitialCompletedCards(new Set());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadDbQuestions();
  }, []);

  // Calculate progress directly from dbQuestions
  const completedCount = Object.values(dbQuestions).filter(
    (card) => card.completed
  ).length;
  const progressPercentage =
    (completedCount / Object.keys(dbQuestions).length) * 100;

  // Filter data based on search term
  const filteredData = Object.entries(dbQuestions).filter(([_, card]) => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      card.english.question.toLowerCase().includes(searchLower) ||
      card.english.answer.toLowerCase().includes(searchLower) ||
      card.pinyin.question.toLowerCase().includes(searchLower) ||
      card.pinyin.answer.toLowerCase().includes(searchLower) ||
      card.chinese.question.toLowerCase().includes(searchLower) ||
      card.chinese.answer.toLowerCase().includes(searchLower)
    );
  });

  // Navigation functions
  const goToNextCard = () => {
    const currentIndex = filteredData.findIndex(([id]) => id === currentCard);
    if (currentIndex < filteredData.length - 1) {
      setCurrentCard(filteredData[currentIndex + 1][0]);
    }
  };

  const goToPreviousCard = () => {
    const currentIndex = filteredData.findIndex(([id]) => id === currentCard);
    if (currentIndex > 0) {
      setCurrentCard(filteredData[currentIndex - 1][0]);
    }
  };

  const goToRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    setCurrentCard(filteredData[randomIndex][0]);
  };

  const isFirstCard = currentCard === filteredData[0]?.[0];
  const isLastCard = currentCard === filteredData[filteredData.length - 1]?.[0];

  // Create a mapping function to get completed status from QAData
  const getCompletedCards = (data: QAData): Record<string, boolean> => {
    const completed: Record<string, boolean> = {};
    Object.entries(data).forEach(([id, card]) => {
      completed[id] = card.completed || false;
    });
    return completed;
  };

  const toggleCompletion = async (id: string) => {
    try {
      const newCompleted = !dbQuestions[id].completed;
      await updateQuestionProgress(parseInt(id), newCompleted);
      setDbQuestions((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          completed: newCompleted,
        },
      }));
    } catch (error) {
      console.error("Error updating progress:", error);
    }
  };

  // Show loading state while fetching data
  if (isLoading) {
    return (
      <main className="container mx-auto p-4 max-w-5xl">
        <div className="space-y-4">
          <div className="h-8 w-[200px] bg-gray-200 animate-pulse rounded" />
          <div className="h-8 w-full bg-gray-200 animate-pulse rounded" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-[200px] w-full bg-gray-200 animate-pulse rounded"
              />
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Show message if no data is available
  if (!isLoading && Object.keys(dbQuestions).length === 0) {
    return (
      <main className="container mx-auto p-4 max-w-5xl">
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">No Questions Available</h2>
          <p className="text-gray-600">
            Please add some questions to get started.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4 max-w-5xl">
      <ThemeHeader
        title="Mandarin Learning Cards"
        onAddQuestion={loadDbQuestions}
        onRefetch={loadDbQuestions}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="w-full"
      >
        <TabsList className="grid grid-cols-3 mb-6 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="all">All Cards</TabsTrigger>
          <TabsTrigger value="single">Single Card</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          <ProgressOverview
            data={dbQuestions}
            filteredData={filteredData}
            completedCards={getCompletedCards(dbQuestions)}
            toggleCardCompletion={toggleCompletion}
            progressPercentage={progressPercentage}
            completedCount={completedCount}
            onRefetch={loadDbQuestions}
          />
        </TabsContent>

        {/* All Cards Tab */}
        <TabsContent value="all" className="space-y-6">
          <CardList
            filteredData={filteredData}
            completedCards={getCompletedCards(dbQuestions)}
            toggleCardCompletion={toggleCompletion}
            onRefetch={loadDbQuestions}
          />
        </TabsContent>

        {/* Single Card Tab */}
        <TabsContent value="single">
          <CardNavigation
            data={dbQuestions}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            goToPreviousCard={goToPreviousCard}
            goToNextCard={goToNextCard}
            goToRandomCard={goToRandomCard}
            isFirstCard={isFirstCard}
            isLastCard={isLastCard}
          />

          {dbQuestions[currentCard] && (
            <QuestionCard
              id={currentCard}
              card={dbQuestions[currentCard]}
              isCompleted={dbQuestions[currentCard].completed || false}
              onToggleCompletion={() => toggleCompletion(currentCard)}
              onRefetch={loadDbQuestions}
            />
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
}
