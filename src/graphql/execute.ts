import ky from "ky";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";

import { API_TIMEOUT } from "@/react-query/config";
import { getGraphQLUri } from "./client";

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{
    message: string;
    locations?: Array<{ line: number; column: number }>;
    path?: Array<string | number>;
  }>;
}

export async function execute<TResult, TVariables>(
  query: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const response = await ky(getGraphQLUri(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/graphql-response+json",
    },
    body: JSON.stringify({
      query: print(query),
      variables,
    }),
    timeout: API_TIMEOUT,
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const result = (await response.json()) as GraphQLResponse<TResult>;

  if (result.errors) {
    throw new Error(result.errors.map((error) => error.message).join(", "));
  }

  if (!result.data) {
    throw new Error("No data returned from GraphQL query");
  }

  return result.data;
}
