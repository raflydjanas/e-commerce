"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/(navbar)/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const disabledNavbar = ["/login"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900`}>
        {!disabledNavbar.includes(pathname) && <Navbar />}
        <main className="h-screen w-full ">{children}</main>
      </body>
    </html>
  );
}
