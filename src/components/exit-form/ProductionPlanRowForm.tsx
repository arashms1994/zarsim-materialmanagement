import Select from "react-select";
import { Input } from "../ui/input";
import { useForm, Controller } from "react-hook-form";
import type { IExitFormProps } from "../../types/type";
import PersianDatePicker from "../ui/PersianDatePicker";

const options = [
  { value: "111", label: "111" },
  { value: "222", label: "222" },
  { value: "333", label: "333" },
];

export default function ProductionPlanRowForm() {
  const { control } = useForm<IExitFormProps>({
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

  return (
    <div className="w-full p-5 gap-2 flex justify-between items-center flex-wrap rounded-[4px] border-2 shadow border-[#cccccc]">
      <div className="flex items-center justify-center gap-2 w-full">
        <label htmlFor="productionPlanNumber" className="min-w-[150px]">
          ردیف کارت برنامه را انتخاب کنید:
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
    </div>
  );
}
