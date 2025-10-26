import { useState } from "react";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import ProductionPlanRowForm from "./ProductionPlanRowForm";
import { useSearchPlans } from "../../hooks/useSearchPlans";
import { usePlanDetails } from "../../hooks/usePlanDetails";
import { submitMaterialProductionEntry } from "../../api/addData";
import type { IExitFormProps, IDarkhastMavadListItem } from "../../types/type";

export default function ProductionExitForm() {
  const { control, watch, setValue } = useForm<IExitFormProps>();
  const selectedPlan = watch("productionPlanNumber");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const {
    searchResults,
    isLoading: searchLoading,
    handleSearch,
  } = useSearchPlans();

  const { planDetails, isLoading: planLoading } = usePlanDetails(
    selectedPlan || ""
  );

  const handleProductionSubmit = async (
    data: IExitFormProps,
    planItem: IDarkhastMavadListItem,
    index: number
  ) => {
    return await submitMaterialProductionEntry(data, planItem, index);
  };

  return (
    <div className="space-y-4">
      <div className="w-full flex items-center justify-center relative">
        <div className="flex items-center justify-start gap-3">
          <label htmlFor="productionPlanNumber" className="min-w-[150px]">
            شماره برنامه را وارد کنید:
          </label>
          <div className="relative">
            <Controller
              name="productionPlanNumber"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="شماره برنامه را وارد کنید..."
                  className="w-[250px]"
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    handleSearch(e.target.value);
                    setShowSuggestions(e.target.value.length >= 2);
                  }}
                  onFocus={() => {
                    if (field.value && field.value.length >= 2) {
                      setShowSuggestions(true);
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowSuggestions(false), 200);
                  }}
                />
              )}
            />

            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {searchLoading ? (
                  <div className="px-3 py-2 text-sm text-gray-500 flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0ead69]"></div>
                    در حال جستجو...
                  </div>
                ) : searchResults.length > 0 ? (
                  searchResults.map((plan, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setValue("productionPlanNumber", plan);
                        setShowSuggestions(false);
                      }}
                    >
                      {plan}
                    </div>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-gray-500">
                    شماره برنامه‌ای یافت نشد
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedPlan && (
        <div className="space-y-4">
          {planLoading ? (
            <div className="flex items-center justify-center py-8">
              <div className="flex items-center gap-3 bg-transparent border border-[#0ead69] rounded-lg px-6 py-4">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#0ead69]"></div>
                <span className="text-[#0ead69] font-medium">
                  در حال بارگذاری جزئیات برنامه {selectedPlan}
                </span>
              </div>
            </div>
          ) : planDetails.length > 0 ? (
            planDetails.map((planItem, index) => (
              <ProductionPlanRowForm
                key={index}
                index={index}
                planItem={planItem}
                onSubmit={handleProductionSubmit}
              />
            ))
          ) : (
            <div className="flex items-center justify-center py-8">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-6 py-4">
                <span className="text-yellow-700 font-medium">
                  هیچ ردیفی برای برنامه {selectedPlan} یافت نشد
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
