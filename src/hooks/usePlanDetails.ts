import { useQuery } from "@tanstack/react-query";
import { getDarkhastMavadList } from "../api/getData";

export const usePlanDetails = (selectedPlanNumber: string) => {
  const {
    data: allItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["darkhast-mavad-list"],
    queryFn: () => getDarkhastMavadList(),
    staleTime: 5 * 60 * 1000,
  });

  const planDetails =
    allItems?.filter((item) => item.shpmarebarname === selectedPlanNumber) ||
    [];

  return {
    planDetails,
    isLoading,
    error,
  };
};
