import { useState } from "react";
import { Input } from "../ui/input";
import { Controller, useForm } from "react-hook-form";
import { getPersianDate } from "../../lib/getPersianDate";
import type {
  IExitFormProps,
  IProductionPlanRowFormProps,
} from "../../types/type";

export default function ProductionPlanRowForm({
  index = 0,
  planItem,
}: IProductionPlanRowFormProps) {
  const { control, handleSubmit } = useForm<IExitFormProps>({
    defaultValues: {
      productionPlanNumber: planItem.shpmarebarname,
      materialCategories: planItem.dastemavadi,
      materialName: planItem.rizmavad,
      supplier: planItem.tamin,
      selectedMachine: planItem.dastghah,
      materialPacking: "",
      materialWeight: "",
      materialPackingCount: "",
      responsible: "",
      materialExitDate: getPersianDate(),
      isCharge: false,
    },
  });

  const [loading, setLoading] = useState(false);

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
    <div className="w-full p-5 gap-2 flex justify-between items-center flex-wrap rounded-[4px] border-2 shadow border-[#0ead69] relative">
      <div className="w-full flex justify-between items-center mb-4">
        <div className="bg-[#0ead69] text-center px-3 py-2 rounded-lg">
          <span className="text-lg font-normal text-white">
            جزئیات ردیف {index + 1}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-start gap-2 border border-[#0ead69] rounded-lg py-2 px-3">
            <label className="min-w-[150px] font-medium">دسته‌بندی مواد:</label>
            <span className="text-lg font-normal">{planItem.dastemavadi}</span>
          </div>

          <div className="flex items-center justify-start gap-2 border border-[#0ead69] rounded-lg py-2 px-3">
            <label className="min-w-[150px] font-medium">نام مواد:</label>
            <span className="text-lg font-normal">{planItem.rizmavad}</span>
          </div>

          <div className="flex items-center justify-start gap-2 border border-[#0ead69] rounded-lg py-2 px-3">
            <label className="min-w-[150px] font-medium">تأمین‌کننده:</label>
            <span className="text-lg font-normal">{planItem.tamin}</span>
          </div>

          <div className="flex items-center justify-start gap-2 border border-[#0ead69] rounded-lg py-2 px-3">
            <label className="min-w-[150px] font-medium">دستگاه:</label>
            <span className="text-lg font-normal">{planItem.dastghah}</span>
          </div>

          <div className="flex items-center justify-start gap-2 border border-[#0ead69] rounded-lg py-2 px-3">
            <label className="min-w-[150px] font-medium">تاریخ درخواست:</label>
            <span className="text-lg font-normal">{planItem.time}</span>
          </div>

          <div className="flex items-center justify-start gap-2 border border-[#0ead69] rounded-lg py-2 px-3">
            <label className="min-w-[150px] font-medium">مرحله:</label>
            <span className="text-lg font-normal">{planItem.marhaleha}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-start gap-2 border border-[#0ead69] rounded-lg py-2 px-3">
            <label className="min-w-[150px] font-medium">
              موجودی(کیلوگرم):
            </label>
            <span className="text-lg font-normal">
              {planItem.meghdardarkhast}
            </span>
          </div>

          <div className="flex items-center justify-start gap-2">
            <label className="min-w-[150px] font-medium">
              تاریخ خروج مواد:
            </label>
            <Controller
              name="materialExitDate"
              control={control}
              render={({ field }) => (
                <Input {...field} className="w-[250px]" readOnly />
              )}
            />
          </div>

          <div className="flex items-center justify-start gap-2">
            <label className="min-w-[150px] font-medium">
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
            <label className="min-w-[150px] font-medium">
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
        </div>

        <div className="flex justify-center mt-6">
          <div
            onClick={!loading ? handleSubmit(onSubmit) : undefined}
            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#0ead69] hover:bg-green-800 text-white cursor-pointer"
            }`}
          >
            {loading ? "در حال ارسال..." : "ثبت اطلاعات خروج"}
          </div>
        </div>
      </form>
    </div>
  );
}
