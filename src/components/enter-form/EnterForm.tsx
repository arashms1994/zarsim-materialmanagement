import { useState } from "react";
import { Input } from "../ui/input";
import { useForm, Controller } from "react-hook-form";
import PersianDatePicker from "../ui/PersianDatePicker";
import type { IEnterFormInput } from "../../types/type";
import { MATERIAL_CATEGORIES } from "../../lib/constants";

const options = [
  { value: "111", label: "111" },
  { value: "222", label: "222" },
  { value: "333", label: "333" },
];

export default function EnterForm() {
  const { handleSubmit, control, setValue } = useForm<IEnterFormInput>({
    defaultValues: {
      materialCategories: "",
      materialName: "",
      supplier: "",
      materialPacking: "",
      materialWeight: "",
      materialPackingCount: "",
      responsible: "",
      materialEnterDate: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
  const [showMaterialSuggestions, setShowMaterialSuggestions] = useState(false);
  const [showSupplierSuggestions, setShowSupplierSuggestions] = useState(false);

  // Filter functions for suggestions
  const filterCategories = (searchTerm: string) => {
    return MATERIAL_CATEGORIES.filter((category) =>
      category.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterMaterials = (searchTerm: string) => {
    return options.filter((option) =>
      option.value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const onSubmit = async (data: IEnterFormInput) => {
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
      <div className="flex items-center justify-start gap-2">
        <label htmlFor="materialEnter" className="min-w-[150px]">
          تاریخ ورود مواد:
        </label>
        <Controller
          name="materialEnterDate"
          control={control}
          render={({ field }) => (
            <PersianDatePicker
              value={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="materialCategories" className="min-w-[150px]">
          دسته‌بندی مواد:
        </label>
        <div className="relative">
          <Controller
            name="materialCategories"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="جستجو دسته‌بندی مواد..."
                className="w-[250px]"
                onChange={(e) => {
                  field.onChange(e.target.value);
                  setShowCategorySuggestions(e.target.value.length >= 2);
                }}
                onFocus={() => {
                  if (field.value && field.value.length >= 2) {
                    setShowCategorySuggestions(true);
                  }
                }}
                onBlur={() => {
                  setTimeout(() => setShowCategorySuggestions(false), 200);
                }}
              />
            )}
          />

          {/* Category Suggestions Dropdown */}
          {showCategorySuggestions && (
            <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filterCategories(control._formValues.materialCategories || "")
                .length > 0 ? (
                filterCategories(
                  control._formValues.materialCategories || ""
                ).map((category) => (
                  <div
                    key={category.id}
                    className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => {
                      setValue("materialCategories", category.value);
                      setShowCategorySuggestions(false);
                    }}
                  >
                    {category.value}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-gray-500">
                  دسته‌بندی یافت نشد
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="materialName" className="min-w-[150px]">
          نام مواد:
        </label>
        <div className="relative">
          <Controller
            name="materialName"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="جستجو نام مواد..."
                className="w-[250px]"
                onChange={(e) => {
                  field.onChange(e.target.value);
                  setShowMaterialSuggestions(e.target.value.length >= 2);
                }}
                onFocus={() => {
                  if (field.value && field.value.length >= 2) {
                    setShowMaterialSuggestions(true);
                  }
                }}
                onBlur={() => {
                  setTimeout(() => setShowMaterialSuggestions(false), 200);
                }}
              />
            )}
          />

          {/* Material Suggestions Dropdown */}
          {showMaterialSuggestions && (
            <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filterMaterials(control._formValues.materialName || "").length >
              0 ? (
                filterMaterials(control._formValues.materialName || "").map(
                  (material, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setValue("materialName", material.value);
                        setShowMaterialSuggestions(false);
                      }}
                    >
                      {material.value}
                    </div>
                  )
                )
              ) : (
                <div className="px-3 py-2 text-sm text-gray-500">
                  نام ماده‌ای یافت نشد
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="materialWeight" className="min-w-[150px]">
          وزن مواد (کیلوگرم):
        </label>
        <Controller
          name="materialWeight"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="string"
              placeholder="مثلاً 50"
              className="w-[250px]"
            />
          )}
        />
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="supplier" className="min-w-[150px]">
          تأمین‌کننده:
        </label>
        <div className="relative">
          <Controller
            name="supplier"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="جستجو تأمین‌کننده..."
                className="w-[250px]"
                onChange={(e) => {
                  field.onChange(e.target.value);
                  setShowSupplierSuggestions(e.target.value.length >= 2);
                }}
                onFocus={() => {
                  if (field.value && field.value.length >= 2) {
                    setShowSupplierSuggestions(true);
                  }
                }}
                onBlur={() => {
                  setTimeout(() => setShowSupplierSuggestions(false), 200);
                }}
              />
            )}
          />

          {/* Supplier Suggestions Dropdown */}
          {showSupplierSuggestions && (
            <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filterMaterials(control._formValues.supplier || "").length >
              0 ? (
                filterMaterials(control._formValues.supplier || "").map(
                  (supplier, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                      onClick={() => {
                        setValue("supplier", supplier.value);
                        setShowSupplierSuggestions(false);
                      }}
                    >
                      {supplier.value}
                    </div>
                  )
                )
              ) : (
                <div className="px-3 py-2 text-sm text-gray-500">
                  تأمین‌کننده‌ای یافت نشد
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="responsible" className="min-w-[150px]">
          شخص تحویل‌گیرنده:
        </label>
        <Controller
          name="responsible"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="نام کامل تحویل‌گیرنده..."
              className="w-[250px]"
            />
          )}
        />
      </div>

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
