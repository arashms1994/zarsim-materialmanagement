import { BASE_URL } from "./base";
import { config } from "./config";
import type {
  IDarkhastMavadListItem,
  ISupplierItem,
  IPersonnelItem,
} from "../types/type";

export async function getDarkhastMavadList(): Promise<
  IDarkhastMavadListItem[] | null
> {
  let items: IDarkhastMavadListItem[] = [];

  const listGuid = config.LIST_GUIDS.DARKHAST_MAVAD;
  let nextUrl:
    | string
    | null = `${BASE_URL}/_api/web/lists(guid'${listGuid}')/items?$orderby=ID desc`;

  try {
    while (nextUrl) {
      const res = await fetch(nextUrl, {
        headers: {
          Accept: "application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
        },
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(
          `خطا در گرفتن آیتم‌های DarkhastMavad: ${err} (Status: ${res.status})`
        );
      }

      const json: {
        d: { results: IDarkhastMavadListItem[]; __next?: string };
      } = await res.json();

      const results = json.d?.results;
      if (!Array.isArray(results)) {
        throw new Error(
          "ساختار داده‌ی برگشتی نامعتبر است: results یک آرایه نیست"
        );
      }

      items = [...items, ...results];
      nextUrl = json.d.__next ?? null;
    }

    return items;
  } catch (err) {
    console.error("خطا در دریافت آیتم‌های DarkhastMavad:", err);
    throw err;
  }
}

export async function searchDarkhastMavadPlans(
  term: string
): Promise<string[]> {
  const listGuid = config.LIST_GUIDS.DARKHAST_MAVAD;
  if (!term || term.trim().length < 2) return [];

  const encodedTerm = encodeURIComponent(term.trim());
  const url = `${BASE_URL}/_api/web/lists(guid'${listGuid}')/items?$select=Id,shpmarebarname&$filter=substringof('${encodedTerm}',shpmarebarname)`;

  const res = await fetch(url, {
    headers: {
      Accept: "application/json;odata=verbose",
      "Content-Type": "application/json;odata=verbose",
    },
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(
      `خطا در جستجوی شماره برنامه: ${err} (Status: ${res.status})`
    );
  }

  const json: {
    d: { results: Pick<IDarkhastMavadListItem, "shpmarebarname">[] };
  } = await res.json();

  const uniques = (json.d?.results ?? [])
    .map((i) => i.shpmarebarname)
    .filter((v): v is string => Boolean(v))
    .reduce<string[]>((acc, cur) => {
      if (!acc.includes(cur)) acc.push(cur);
      return acc;
    }, []);

  return uniques;
}

export async function getSuppliers(): Promise<ISupplierItem[]> {
  let items: ISupplierItem[] = [];

  const listGuid = config.LIST_GUIDS.SUPPLIERS;
  let nextUrl:
    | string
    | null = `${BASE_URL}/_api/web/lists(guid'${listGuid}')/items??$select=ID,Supplier`;

  try {
    while (nextUrl) {
      const res = await fetch(nextUrl, {
        headers: {
          Accept: "application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
        },
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(
          `خطا در گرفتن آیتم‌های DarkhastMavad: ${err} (Status: ${res.status})`
        );
      }

      const json: {
        d: { results: ISupplierItem[]; __next?: string };
      } = await res.json();

      const results = json.d?.results;
      if (!Array.isArray(results)) {
        throw new Error(
          "ساختار داده‌ی برگشتی نامعتبر است: results یک آرایه نیست"
        );
      }

      items = [...items, ...results];
      nextUrl = json.d.__next ?? null;
    }

    return items;
  } catch (err) {
    console.error("خطا در دریافت آیتم‌های DarkhastMavad:", err);
    throw err;
  }
}

export async function getPersonnel(): Promise<IPersonnelItem[]> {
  let items: IPersonnelItem[] = [];

  const listGuid = config.LIST_GUIDS.PERSONNEL;
  let nextUrl:
    | string
    | null = `${BASE_URL}/_api/web/lists(guid'${listGuid}')/items?$select=ID,Title`;

  try {
    while (nextUrl) {
      const res = await fetch(nextUrl, {
        headers: {
          Accept: "application/json;odata=verbose",
          "Content-Type": "application/json;odata=verbose",
        },
      });

      if (!res.ok) {
        const err = await res.text();
        throw new Error(
          `خطا در گرفتن لیست پرسنل: ${err} (Status: ${res.status})`
        );
      }

      const json: {
        d: { results: IPersonnelItem[]; __next?: string };
      } = await res.json();

      const results = json.d?.results;
      if (!Array.isArray(results)) {
        throw new Error(
          "ساختار داده‌ی برگشتی نامعتبر است: results یک آرایه نیست"
        );
      }

      items = [...items, ...results];
      nextUrl = json.d.__next ?? null;
    }

    return items;
  } catch (err) {
    console.error("خطا در دریافت لیست پرسنل:", err);
    throw err;
  }
}
