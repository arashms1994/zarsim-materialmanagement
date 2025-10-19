import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { Input } from "../ui/input";
import PersianDatePicker from "../ui/PersianDatePicker";
import { useState } from "react";

interface IFormInput {
  firstName: string;
  productionPlanNumber: string;
  materialCategories: string;
  materialName: string;
  supplier: string;
  selectedMachine: string;
  materialPacking: string;
  materialWeight: string;
  materialPackingCount: string;
  responsible: string;
  materialExitDate: string;
  isCharge: boolean;
}

const options = [
  { value: "111", label: "111" },
  { value: "222", label: "222" },
  { value: "333", label: "333" },
];

export default function ProductionExitForm() {
  const { handleSubmit, control } = useForm<IFormInput>({
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

  const onSubmit = async (data: IFormInput) => {
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
        <label htmlFor="productionPlanNumber" className="min-w-[150px]">
          شماره برنامه:
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

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="materialCategories" className="min-w-[150px]">
          دسته‌بندی مواد:
        </label>
        <Controller
          name="materialCategories"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isSearchable
              placeholder="انتخاب دسته‌بندی مواد..."
              className="w-[250px]"
              onChange={(opt) => field.onChange(opt ? opt.value : "")}
              value={options.find((opt) => opt.value === field.value)}
            />
          )}
        />
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="materialName" className="min-w-[150px]">
          نام مواد:
        </label>
        <Controller
          name="materialName"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isSearchable
              placeholder="انتخاب نام مواد..."
              className="w-[250px]"
              onChange={(opt) => field.onChange(opt ? opt.value : "")}
              value={options.find((opt) => opt.value === field.value)}
            />
          )}
        />
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="materialPacking" className="min-w-[150px]">
          نوع بسته‌بندی مواد:
        </label>
        <Controller
          name="materialPacking"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isSearchable
              placeholder="انتخاب نوع بسته‌بندی..."
              className="w-[250px]"
              onChange={(opt) => field.onChange(opt ? opt.value : "")}
              value={options.find((opt) => opt.value === field.value)}
            />
          )}
        />
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
        <label htmlFor="materialPackingCount" className="min-w-[150px]">
          مقدار بسته‌بندی:
        </label>
        <Controller
          name="materialPackingCount"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="string"
              placeholder="مثلاً 3 بسته"
              className="w-[250px]"
            />
          )}
        />
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="supplier" className="min-w-[150px]">
          تأمین‌کننده:
        </label>
        <Controller
          name="supplier"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isSearchable
              placeholder="انتخاب تأمین‌کننده..."
              className="w-[250px]"
              onChange={(opt) => field.onChange(opt ? opt.value : "")}
              value={options.find((opt) => opt.value === field.value)}
            />
          )}
        />
      </div>

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="selectedMachine" className="min-w-[150px]">
          خروج جهت دستگاه:
        </label>
        <Controller
          name="selectedMachine"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={options}
              isSearchable
              placeholder="انتخاب دستگاه..."
              className="w-[250px]"
              onChange={(opt) => field.onChange(opt ? opt.value : "")}
              value={options.find((opt) => opt.value === field.value)}
            />
          )}
        />
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

      <div className="flex items-center justify-start gap-2">
        <label htmlFor="materialEnter" className="min-w-[150px]">
          تاریخ خروج مواد:
        </label>
        <Controller
          name="materialExitDate"
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
        <label htmlFor="isCharge" className="min-w-[150px]">
          آیا مواد از انبار شارژ برداشت شوند؟
        </label>
        <Controller
          name="isCharge"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              id="isCharge"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              className="w-5 h-5 accent-blue-600 cursor-pointer"
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
