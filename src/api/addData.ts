import { BASE_URL } from "./base";
import { config } from "./config";
import type { IEnterFormInput } from "../types/type";

export async function submitMaterialChargeEntry(
  formData: IEnterFormInput
): Promise<{ success: boolean; message: string }> {
  const listGuid = config.LIST_GUIDS.MATERIAL_CHARGE;

  if (!listGuid) {
    throw new Error("GUID لیست MATERIAL_CHARGE تنظیم نشده است");
  }

  try {
    const payload = {
      __metadata: {
        type: "SP.Data.Material_ChargeListItem",
      },
      Material_Category: formData.materialCategories,
      Material_Name: formData.materialName,
      Material_Supplier: formData.supplier,
      Inventory: formData.materialWeight,
      Enter_Responsible: formData.responsible,
      Enterance_Date: formData.materialEnterDate,
    };

    const response = await fetch(
      `${BASE_URL}/_api/web/lists(guid'${listGuid}')/items`,
      {
        method: "POST",
        headers: {
          Accept: "application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
          "X-RequestDigest": await getRequestDigest(),
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `خطا در ارسال داده: ${errorText} (Status: ${response.status})`
      );
    }

    return {
      success: true,
      message: "اطلاعات با موفقیت ثبت شد ✅",
    };
  } catch (error) {
    console.error("خطا در ارسال داده به MATERIAL_CHARGE:", error);
    return {
      success: false,
      message: `خطا در ثبت اطلاعات: ${
        error instanceof Error ? error.message : "خطای نامشخص"
      }`,
    };
  }
}

async function getRequestDigest(): Promise<string> {
  try {
    const response = await fetch(`${BASE_URL}/_api/contextinfo`, {
      method: "POST",
      headers: {
        Accept: "application/json;odata=verbose",
        "Content-Type": "application/json;odata=verbose",
      },
    });

    if (!response.ok) {
      throw new Error(`خطا در دریافت Request Digest: ${response.status}`);
    }

    const data = await response.json();
    return data.d.GetContextWebInformation.FormDigestValue;
  } catch (error) {
    console.error("خطا در دریافت Request Digest:", error);
    throw error;
  }
}
