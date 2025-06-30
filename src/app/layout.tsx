import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { DefaultLayout } from "@/components/layouts";
import { Provider } from "@/components/ui/provider";
import { Toaster } from "@/components/ui/toaster";
import { ReactQueryWrapper } from "@/react-query/react-query-wrapper";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReactQueryWrapper>
          <Provider>
            <DefaultLayout>{children}</DefaultLayout>
            <Toaster />
          </Provider>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
