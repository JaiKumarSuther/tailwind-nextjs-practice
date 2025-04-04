import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "./components/QueryProvider";
import MyCartProvider from "./CartProvider"; // ✅ Corrected

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MyCartProvider> {/* ✅ Wrap inside Client Component */}
          <QueryProvider>{children}</QueryProvider>
        </MyCartProvider>
      </body>
    </html>
  );
}
