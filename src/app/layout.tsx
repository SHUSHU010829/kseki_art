import type { Metadata } from 'next'
import { Noto_Sans_TC as FontSans } from "next/font/google";
import './globals.css'
import { cn } from "@/lib/utils";
import { ThemeProvider } from '@/components/theme-provider';

export const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-tc",
});

export const metadata: Metadata = {
  title: "#KSeki",
  description: "這裡是 KSEKI 文學鑑賞區。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
