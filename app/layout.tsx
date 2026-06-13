import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Operiq Systems | Intelligent Public Sector Workflows",
  description:
    "AI-powered workflow infrastructure for government contractors and public sector agencies."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${orbitron.variable}`}>
      <body>{children}</body>
    </html>
  );
}
