import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jenia Brook | Frontend engineer",
  description: "My small place in the big web",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(rubik.className, "min-h-screen flex flex-col")}>
        {children}
      </body>
    </html>
  );
}
