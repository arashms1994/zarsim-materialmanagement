import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchDarkhastMavadPlans } from "../api/getData";

export const useSearchPlans = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: searchResults = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["search-plans", searchTerm],
    queryFn: () => searchDarkhastMavadPlans(searchTerm),
    enabled: searchTerm.length >= 2,
    staleTime: 5 * 60 * 1000,
  });

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return {
    searchResults,
    isLoading,
    error,
    handleSearch,
    clearSearch,
    searchTerm,
  };
};
