"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThemeHeader } from "@/components/theme-header";
import { SearchBar } from "@/components/search-bar";
import { ProgressOverview } from "@/components/progress-overview";
import { CardList } from "@/components/card-list";
import { CardNavigation } from "@/components/card-navigation";
import { QuestionCard } from "@/components/question-card";
import { useCardData } from "@/hooks/use-card-data";
import { useCardProgress } from "@/hooks/use-card-progress";

import interviewData from "@/data/interviewData";

export default function Home() {
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
  } = useCardData(interviewData);

  const {
    completedCards,
    toggleCardCompletion,
    completedCount,
    progressPercentage,
  } = useCardProgress(Object.keys(data).length);

  return (
    <main className="container mx-auto p-4 max-w-5xl">
      <ThemeHeader
        title="Mandarin Learning Cards"
        onAddQuestion={addQuestion}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Tabs defaultValue="overview" className="w-full">
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
          />
        </TabsContent>

        {/* All Cards Tab */}
        <TabsContent value="all" className="space-y-6">
          <CardList
            filteredData={filteredData}
            completedCards={completedCards}
            toggleCardCompletion={toggleCardCompletion}
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
            />
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
}
