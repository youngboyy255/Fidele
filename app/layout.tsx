import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fidèle — Le rappel qui fait revenir tes clients",
  description:
    "Fidèle relance automatiquement tes clients au bon moment, pour qu'ils reviennent sans que tu aies à y penser.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="bg-navy text-paper font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
