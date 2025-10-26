import { useQuery } from "@tanstack/react-query";
import { getDarkhastMavadList } from "../api/getData";
import { config } from "../api/config";

export const usePlanDetails = (planItem: string) => {
  const {
    data: allItems = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["darkhast-mavad-list"],
    queryFn: () => getDarkhastMavadList(),
    staleTime: config.CACHE_STALE_TIME,
  });

  const planDetails =
    allItems?.filter((item) => item.shpmarebarname === planItem) || [];

  return {
    planDetails,
    isLoading,
    error,
  };
};
