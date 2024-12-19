import type { Metadata } from "next";
import "./globals.css";
import ReactLenis from "lenis/react";
import { languages } from "../i18n/settings";
import { dir } from "i18next";
import { AnimationScreen } from "../components/AnimationScreen";
import { Toaster } from "@/components/ui/toaster";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

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

type LayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default async function RootLayout({ children, params }: LayoutProps) {
  return (
    <html lang={params.lang} dir={dir(params.lang)}>
      <ReactLenis root>
        <body>
          <AnimationScreen />
          {children}
          <Toaster />
        </body>
      </ReactLenis>
    </html>
  );
}
