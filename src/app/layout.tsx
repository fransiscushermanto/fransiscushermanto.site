import type { Metadata } from "next";
import localFont from "next/font/local";

import { Provider } from "@/components/ui/provider";
import { DefaultLayout } from "@/components/layouts";
import { ApolloWrapper } from "@/graphql/apollo-wrapper";

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

if (process.env.NODE_ENV === "development") {
  // Adds messages only in a dev environment
  import("@apollo/client/dev").then(
    ({ loadDevMessages, loadErrorMessages }) => {
      loadDevMessages();
      loadErrorMessages();
    },
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <ApolloWrapper>
            <DefaultLayout>{children}</DefaultLayout>
          </ApolloWrapper>
        </Provider>
      </body>
    </html>
  );
}
