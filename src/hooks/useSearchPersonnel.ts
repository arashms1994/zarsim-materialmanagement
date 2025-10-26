import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPersonnel } from "../api/getData";
import { config } from "../api/config";

export const useSearchPersonnel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: allPersonnel = [],
    isLoading: allLoading,
    error: allError,
  } = useQuery({
    queryKey: ["all-personnel"],
    queryFn: getPersonnel,
    staleTime: config.CACHE_STALE_TIME,
  });

  const {
    data: searchResults = [],
    isLoading: searchLoading,
    error: searchError,
  } = useQuery({
    queryKey: ["search-personnel", searchTerm],
    queryFn: () => {
      if (!searchTerm || searchTerm.length < 1) return allPersonnel;
      return allPersonnel.filter((personnel) =>
        personnel.Title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    enabled: true,
    staleTime: config.CACHE_STALE_TIME,
  });

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return {
    searchResults,
    isLoading: searchLoading || allLoading,
    error: searchError || allError,
    handleSearch,
    clearSearch,
    searchTerm,
  };
};
