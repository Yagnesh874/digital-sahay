// app/layout.tsx
import { ReactNode } from "react";

import About from "@/app/components/Landing-page";
import "./globals.css";
// import Animation from "./animation/Animation";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen">
        <About />
      </body>
    </html>
  );
}
