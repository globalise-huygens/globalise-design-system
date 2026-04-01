"use client";

import { useRouter } from "next/navigation";
import { I18nProvider, RouterProvider } from "react-aria-components";

declare module "react-aria-components" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <I18nProvider locale="en">
      <RouterProvider navigate={router.push}>{children}</RouterProvider>
    </I18nProvider>
  );
}
