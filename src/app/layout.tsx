import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhaskar Vijay Kumar Golusu | Full Stack Developer",
  description:
    "Full Stack Developer with 2+ years of experience building scalable enterprise applications using React, TypeScript, and .NET in the pharmaceutical and clinical supply chain domain.",
  keywords: [
    "Full Stack Developer",
    "React",
    ".NET",
    "TypeScript",
    "Portfolio",
    "Bhaskar Vijay Kumar",
    "Software Engineer",
  ],
  openGraph: {
    title: "Bhaskar Vijay Kumar Golusu | Full Stack Developer",
    description:
      "Full Stack Developer building scalable enterprise applications with React, TypeScript & .NET.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
