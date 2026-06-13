import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <body className={inter.className}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2452096441903659');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2452096441903659&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
