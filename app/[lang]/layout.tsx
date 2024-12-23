import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";
import { dir } from "i18next";
import { AnimationScreen } from "../components/AnimationScreen";
import { Toaster } from "@/components/ui/toaster";
import { ProgressBar } from "../components/ProgressBar";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Louis-Émile Vromet's Portfolio",
  description: "Louis-Émile Vromet's portfolio",
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "32x32" },
      { url: "/assets/icon.png", sizes: "192x192" },
    ],
    apple: [{ url: "/assets/apple-icon.png", sizes: "180x180" }],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} dir={dir(lang)} className={myFont.className}>
      <body>
        <ReactLenis root>
          <AnimationScreen />
          <ProgressBar />
          <div className="start-loading loading">{children}</div>
          <Toaster />
        </ReactLenis>
      </body>
    </html>
  );
}
