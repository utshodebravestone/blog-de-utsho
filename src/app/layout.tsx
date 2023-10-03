import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
        <main className="w-full flex justify-center">
          <div className="max-w-[888px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
