import { BASE_URL } from "./base";
import type { IDarkhastMavadListItem, ISupplierItem } from "../types/type";

export async function getDarkhastMavadList(): Promise<
  IDarkhastMavadListItem[] | null
> {
  let items: IDarkhastMavadListItem[] = [];

  const listGuid = "BECA87A8-2DEC-4929-8E64-2BF675FC081E";
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
  const listGuid = "BECA87A8-2DEC-4929-8E64-2BF675FC081E";
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

  const listGuid = "C613B477-AD61-4C26-AD72-9222CD073A6D";
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
