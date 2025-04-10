"use client";

import { Search } from "lucide-react";
import { Input } from "@/src/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-5 h-5 text-muted-foreground" />
        <Input
          placeholder="Search questions or answers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
      </div>
    </div>
  );
}
