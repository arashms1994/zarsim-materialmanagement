import { Input } from "../ui/input";
import { Controller } from "react-hook-form";
import PersianDatePicker from "../ui/PersianDatePicker";
import type { IProductionPlanRowFormProps } from "../../types/type";

export default function ProductionPlanRowForm({
  index = 0,
  planItem,
  control,
}: IProductionPlanRowFormProps) {
  return (
    <div className="w-full p-5 gap-2 flex justify-between items-center flex-wrap rounded-[4px] border-2 shadow border-[#0ead69]">
      <div className="w-full">
        <div className="bg-[#0ead69] right-0 text-center w-fit px-3 py-2 rounded-lg">
        <span className="text-lg font-normal text-white">
          جزئیات ردیف {index + 1}
        </span>
      </div>
      </div>

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
        <label htmlFor="materialCategories" className="min-w-[150px]">
          دسته‌بندی مواد:
        </label>
        <span className="text-lg font-normal">{planItem.dastemavadi}</span>
      </div>

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
        <label htmlFor="materialName" className="min-w-[150px]">
          نام مواد:
        </label>
        <span className="text-lg font-normal">{planItem.rizmavad}</span>
      </div>

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
        <label htmlFor="supplier" className="min-w-[150px]">
          تأمین‌کننده:
        </label>
        <span className="text-lg font-normal">{planItem.tamin}</span>
      </div>

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
        <label htmlFor="selectedMachine" className="min-w-[150px]">
          خروج جهت دستگاه:
        </label>
        <span className="text-lg font-normal">{planItem.dastghah}</span>
      </div>

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
        <label htmlFor="selectedMachine" className="min-w-[150px]">
          تاریخ درخواست:
        </label>
        <span className="text-lg font-normal">{planItem.time}</span>
      </div>

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
        <label htmlFor="selectedMachine" className="min-w-[150px]">
          مرحله:
        </label>
        <span className="text-lg font-normal">{planItem.marhaleha}</span>
      </div>

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
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

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
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

      <div className="flex items-center justify-start gap-2 w-[450px] border border-[#0ead69] rounded-lg py-2 px-3">
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
    </div>
  );
}
