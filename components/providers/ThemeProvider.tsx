"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// We omit the complex typing to avoid strict tsconfig errors mapping to next-themes version
export function ThemeProvider({ 
  children, 
  ...props 
}: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
