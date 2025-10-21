import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import type { IExitFormProps } from "../../types/type";
import ProductionPlanRowForm from "./ProductionPlanRowForm";
import { useSearchPlans } from "../../hooks/useSearchPlans";
import { usePlanDetails } from "../../hooks/usePlanDetails";

export default function ShargeExitForm() {
  const { control, watch } = useForm<IExitFormProps>();
  const selectedPlan = watch("productionPlanNumber");

  const {
    searchResults,
    isLoading: searchLoading,
    handleSearch,
  } = useSearchPlans();

  const { planDetails, isLoading: planLoading } = usePlanDetails(
    selectedPlan || ""
  );

  const planOptions = searchResults.map((plan) => ({
    value: plan,
    label: plan,
  }));

  return (
    <div className="space-y-4">
      <div className="w-full flex items-center justify-center relative">
        <div className="flex items-center justify-start gap-3">
          <label htmlFor="productionPlanNumber" className="min-w-[150px]">
            شماره برنامه را وارد کنید:
          </label>
          <Controller
            name="productionPlanNumber"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={planOptions}
                isSearchable
                isLoading={searchLoading}
                placeholder="جستجو شماره برنامه..."
                className="w-[250px]"
                onInputChange={handleSearch}
                onChange={(opt) => field.onChange(opt ? opt.value : "")}
                value={planOptions.find((opt) => opt.value === field.value)}
                noOptionsMessage={() => "شماره برنامه‌ای یافت نشد"}
                loadingMessage={() => "در حال جستجو..."}
              />
            )}
          />
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
