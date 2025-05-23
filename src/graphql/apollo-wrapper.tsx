"use client";

import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";

import { makeClient } from "./client";

export function ApolloWrapper(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
