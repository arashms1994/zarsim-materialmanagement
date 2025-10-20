import type DateObject from "react-date-object";

export interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface IPersianDatePickerProps {
  value: string | Date | DateObject | null;
  onChange: (date: string) => void;
}

export interface IExitFormProps {
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

export interface IEnterFormInput {
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
  materialEnterDate: string;
}
