import type DateObject from "react-date-object";

export interface ITabPanelProps {
  index: number;
  value: number;
  children?: React.ReactNode;
}

export interface IPersianDatePickerProps {
  onChange: (date: string) => void;
  value: string | Date | DateObject | null;
}

export interface IProductionPlanRowFormProps {
  index?: number;
  onDelete?: () => void;
  showDeleteButton?: boolean;
  planItem: IDarkhastMavadListItem;
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

export interface IDarkhastMavadListItem {
  AuthorId: number;
  ContentTypeId: string;
  Created: string;
  EditorId: number;
  FileSystemObjectType: number;
  GUID: string;
  ID: number;
  Id: number;
  KalaCCod: string;
  Modified: string;
  OData__UIVersionString: string;
  OData__x067e__x0627__x06a9__x06a9__x06: number;
  OData__x0645__x0642__x062f__x0627__x06: number;
  Title: string;
  codekala: string;
  codemahsol: string;
  codetamin: string;
  dastemavadi: string;
  dastghah: string;
  elatadameentebagh: null;
  excle: boolean;
  factorname: string;
  idbarname: null;
  marhaleha: string;
  meghdarbarnamerikol: null;
  meghdarcontrol: null;
  meghdardarkhast: string;
  meghdartahvili: string;
  namemoshtari: string;
  radvahedtolid: boolean;
  request_stock_material: boolean;
  rizmavad: string;
  shakhsetahvilgirande: null;
  sharj: boolean;
  shomareradifdarkhast: string;
  shpmarebarname: string;
  taidevahedekontrol: boolean;
  tamin: string;
  test: null;
  time: string;
  tojihatkontroltolid: null;
  tozihat: null;
}
