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
import { fetchAllQuestions } from "@/src/db/questions";
import { Card } from "@/src/components/ui/card";
import { useEffect, useState } from "react";
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

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTab", value);
    }
  };

  const loadDbQuestions = async () => {
    try {
      const questions = await fetchAllQuestions();
      setDbQuestions(questions || {});
    } catch (error) {
      console.error("Error loading questions:", error);
      setDbQuestions({});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadDbQuestions();
  }, []);

  // Only initialize useCardData when we have dbQuestions
  const cardData = useCardData(dbQuestions);
  const {
    data,
    searchTerm,
    setSearchTerm,
    currentCard,
    setCurrentCard,
    filteredData,
    goToNextCard,
    goToPreviousCard,
    goToRandomCard,
    addQuestion,
    isFirstCard,
    isLastCard,
  } = cardData;

  const {
    completedCards,
    toggleCardCompletion,
    completedCount,
    progressPercentage,
  } = useCardProgress(Object.keys(data).length);

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
        onAddQuestion={addQuestion}
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
            data={data}
            filteredData={filteredData}
            completedCards={completedCards}
            toggleCardCompletion={toggleCardCompletion}
            progressPercentage={progressPercentage}
            completedCount={completedCount}
            onRefetch={loadDbQuestions}
          />
        </TabsContent>

        {/* All Cards Tab */}
        <TabsContent value="all" className="space-y-6">
          <CardList
            filteredData={filteredData}
            completedCards={completedCards}
            toggleCardCompletion={toggleCardCompletion}
            onRefetch={loadDbQuestions}
          />
        </TabsContent>

        {/* Single Card Tab */}
        <TabsContent value="single">
          <CardNavigation
            data={data}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            goToPreviousCard={goToPreviousCard}
            goToNextCard={goToNextCard}
            goToRandomCard={goToRandomCard}
            isFirstCard={isFirstCard}
            isLastCard={isLastCard}
          />

          {data[currentCard] && (
            <QuestionCard
              id={currentCard}
              card={data[currentCard]}
              isCompleted={completedCards[currentCard] || false}
              onToggleCompletion={() => toggleCardCompletion(currentCard)}
              onRefetch={loadDbQuestions}
            />
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
}
