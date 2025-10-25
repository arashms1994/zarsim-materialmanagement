import { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSuppliers } from "../api/getData";

export const useSearchSuppliers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: allSuppliers = [],
    isLoading: allLoading,
    error: allError,
  } = useQuery({
    queryKey: ["all-suppliers"],
    queryFn: getSuppliers,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });

  const {
    data: searchResults = [],
    isLoading: searchLoading,
    error: searchError,
  } = useQuery({
    queryKey: ["search-suppliers", searchTerm],
    queryFn: () => {
      if (!searchTerm || searchTerm.length < 1) return allSuppliers;
      return allSuppliers.filter((supplier) =>
        supplier.Supplier.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    enabled: true,
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
    isLoading: searchLoading || allLoading,
    error: searchError || allError,
    handleSearch,
    clearSearch,
    searchTerm,
  };
};
