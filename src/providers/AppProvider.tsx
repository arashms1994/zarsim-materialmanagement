import type { PropsWithChildren } from "react";
import QueryProvider from "./QueryPrivider";

export default function AppProviders({ children }: PropsWithChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}
