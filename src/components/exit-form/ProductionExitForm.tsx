import { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import type { IExitFormProps } from "../../types/type";
import ProductionPlanRowForm from "./ProductionPlanRowForm";

const options = [
  { value: "111", label: "111" },
  { value: "222", label: "222" },
  { value: "333", label: "333" },
];

export default function ProductionExitForm() {
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
  const [productionRows, setProductionRows] = useState([0]); // Array of row indices

  const selectedPlanNumber = watch("productionPlanNumber");

  const addProductionRow = () => {
    setProductionRows((prev) => [...prev, Math.max(...prev) + 1]);
  };

  const deleteProductionRow = (indexToDelete: number) => {
    setProductionRows((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

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
            شماره برنامه را انتخاب کنید:
          </label>
          <Controller
            name="productionPlanNumber"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={options}
                isSearchable
                placeholder="انتخاب شماره برنامه..."
                className="w-[250px]"
                onChange={(opt) => field.onChange(opt ? opt.value : "")}
                value={options.find((opt) => opt.value === field.value)}
              />
            )}
          />
        </div>
        {selectedPlanNumber && (
          <div
            onClick={addProductionRow}
            className="bg-[#0ead69] absolute top-0 left-0 text-white text-sm cursor-pointer text-center rounded-lg px-6 py-2 hover:bg-green-800 transition-all duration-300 select-none"
          >
            افزودن ردیف از کارت تولید +
          </div>
        )}
      </div>

      {selectedPlanNumber && (
        <div className="w-full space-y-4">
          {productionRows.map((rowIndex, index) => (
            <ProductionPlanRowForm
              key={rowIndex}
              control={control}
              index={rowIndex}
              onDelete={() => deleteProductionRow(index)}
              showDeleteButton={productionRows.length > 1}
            />
          ))}
        </div>
      )}

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
