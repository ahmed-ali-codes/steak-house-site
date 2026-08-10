import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Steak House | Fire-Kissed. Slow-Aged. Unforgettable.",
  description: "A premium, dark-themed steakhouse offering a cinematic fine-dining experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} antialiased h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-body bg-background text-text-primary selection:bg-accent selection:text-white">{children}</body>
    </html>
  );
}
