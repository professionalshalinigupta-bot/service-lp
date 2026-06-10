import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Free Digital Marketing Consultation in Nepal | Shalini Gupta",
  description:
    "Nepal-based business owners can book a free 1:1 consultation and get a simple customized digital marketing plan.",
  openGraph: {
    title: "Struggling to grow your business?",
    description:
      "Book a free 1:1 marketing consultation call and get a customized plan to generate more leads, customers, and sales.",
    type: "website",
    images: [
      {
        url: "/shalini-gupta-logo-sharp.png",
        width: 1436,
        height: 344,
        alt: "Shalini Gupta Digital Marketing Expert"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Digital Marketing Consultation in Nepal",
    description:
      "Get a simple customized digital marketing plan for your Nepal-based business."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
