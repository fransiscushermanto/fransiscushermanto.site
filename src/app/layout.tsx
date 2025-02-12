import type { Metadata } from "next";
import localFont from "next/font/local";

import { Provider } from "@/components/ui/provider";
import { ColorModeButton } from "@/components/ui/color-mode";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 400 600 700 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 400 600 700 900",
});

export const metadata: Metadata = {
  title: "Fransiscus Hermanto",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          {children}

          <ColorModeButton className="color-switch" />
        </Provider>
      </body>
    </html>
  );
}
