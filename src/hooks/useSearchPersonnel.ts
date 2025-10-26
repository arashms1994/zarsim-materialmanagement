import { useState, useCallback, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPersonnel } from "../api/getData";
import { config } from "../api/config";
import { useDebounce } from "./useDebounce";

export const useSearchPersonnel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const debouncedSetSearchTerm = useDebounce((term: string) => {
    setDebouncedSearchTerm(term);
  }, config.DEBOUNCE_DELAY);

  useEffect(() => {
    debouncedSetSearchTerm(searchTerm);
  }, [searchTerm, debouncedSetSearchTerm]);

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
    queryKey: ["search-personnel", debouncedSearchTerm],
    queryFn: () => {
      if (!debouncedSearchTerm || debouncedSearchTerm.length < 1)
        return allPersonnel;
      return allPersonnel.filter((personnel) =>
        personnel.Title.toLowerCase().includes(
          debouncedSearchTerm.toLowerCase()
        )
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
