import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IkuBand Institute — Next-Generation Smart Ring Research",
  description: "Pioneering non-invasive health diagnostics through advanced smart ring technology. Raman spectroscopy, NIR sensors, machine learning, and beyond — the future of wearable medical-grade monitoring.",
  keywords: ["smart ring", "health monitoring", "non-invasive glucose", "Raman spectroscopy", "wearable biosensor", "SpO2", "blood pressure", "IkuBand"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
