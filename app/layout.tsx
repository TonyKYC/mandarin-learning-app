import { DataProvider } from "@/app/data-provider";
import { ThemeProvider } from "@/src/components/theme-provider";
import { fetchAllQuestions } from "@/src/db/questions";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mandarin Learning App",
  description: "Learn Mandarin with Q&A cards",
  generator: "v0.dev",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, progress } = await fetchAllQuestions();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DataProvider initialData={data} initialProgress={progress}>
            {children}
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
