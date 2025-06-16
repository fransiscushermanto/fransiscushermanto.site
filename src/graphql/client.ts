import { GraphQLClient } from "graphql-request";

import { SSR_API_BASE_PATH } from "@/constants/config";

export function getGraphQLUri() {
  // Local development fallback
  const host = process.env.NEXT_PUBLIC_HOST || "localhost";
  const port = process.env.NEXT_PUBLIC_PORT || "3000";
  const protocol = "http";

  const url = new URL(`${SSR_API_BASE_PATH}/graphql`, `${protocol}://${host}`);

  if (process.env.NODE_ENV === "development") {
    url.port = port;
  }

  if (process.env.NODE_ENV === "production") {
    url.host = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ?? "";
    url.protocol = "https";
  }

  return url.toString();
}

export const graphqlClient = new GraphQLClient(getGraphQLUri());
