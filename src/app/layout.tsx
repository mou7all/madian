import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";
import { DataProvider } from "@/context/DataContext";

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "Print Madian | برنت مديان - مطبوعات فاخرة",
  description: "مطبعة برنت مديان - حلول طباعة متكاملة بجودة استثنائية وتصاميم تليق بعلامتك التجارية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${tajawal.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <LocaleProvider>
          <DataProvider>
            {children}
          </DataProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
