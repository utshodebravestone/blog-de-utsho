import type { Metadata } from "next";

import Navbar from "@/components/Navbar";

import "./globals.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Utsho de Bravestone's Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-white">
        <Navbar />
        <div className="h-5" />
        <main className="px-5 w-full flex justify-center">
          <div className="w-full max-w-[888px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
