import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "YO! Visual",
  description:
    "We work for video production, video editing and motion graphic, currently available for work.",
  generator: "Next.js",
  applicationName: "YO! Visual",
  keywords: [
    "freelance",
    "videography",
    "freelance video editor",
    "visual",
    "motion graphic",
  ],
  colorScheme: "light",
  openGraph: {
    title: "YO! Visual",
    description:
      "We work for video production, video editing and motion graphic, currently available for work.",
    url: "http://localhost:3000",
    siteName: "http://localhost:3000",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
