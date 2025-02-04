import React, { Suspense } from "react";
import { NavBar } from "./navbar";
import { getMenu } from "@/lib/actions/shopify";

export default async function NavigationProvider() {
  const menu = await getMenu();
  return (
    <Suspense fallback={null}>
      <NavBar menu={menu} />
    </Suspense>
  );
}
