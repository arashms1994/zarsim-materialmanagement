import { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import type { IExitFormProps } from "../../types/type";
import ProductionPlanRowForm from "./ProductionPlanRowForm";
import { useSearchPlans } from "../../hooks/useSearchPlans";
import { usePlanDetails } from "../../hooks/usePlanDetails";

export default function ShargeExitForm() {
  const { handleSubmit, control, watch } = useForm<IExitFormProps>({
    defaultValues: {
      productionPlanNumber: "",
      materialCategories: "",
      materialName: "",
      supplier: "",
      selectedMachine: "",
      materialPacking: "",
      materialWeight: "",
      materialPackingCount: "",
      responsible: "",
      materialExitDate: "",
      isCharge: false,
    },
  });

  const [loading, setLoading] = useState(false);
  const {
    searchResults,
    isLoading: searchLoading,
    handleSearch,
  } = useSearchPlans();

  const selectedPlanNumber = watch("productionPlanNumber");
  const { planDetails } = usePlanDetails(selectedPlanNumber);

  const planOptions = searchResults.map((plan) => ({
    value: plan,
    label: plan,
  }));

  const onSubmit = async (data: IExitFormProps) => {
    try {
      setLoading(true);
      console.log("Form Data:", data);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("اطلاعات با موفقیت ثبت شد ✅");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 p-4 bg-white rounded-lg justify-center items-center"
    >
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

      {planDetails.map((planItem, index) => (
        <ProductionPlanRowForm
          key={index}
          index={index}
          planItem={planItem}
          control={control}
        />
      ))}

      <div
        onClick={!loading ? handleSubmit(onSubmit) : undefined}
        className={`cursor-pointer text-center rounded-lg px-6 py-2 mt-4 transition-all duration-300 select-none ${
          loading
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-[#0ead69] hover:bg-green-800 text-white"
        }`}
      >
        {loading ? "در حال ارسال..." : "ثبت اطلاعات"}
      </div>
    </form>
  );
}
