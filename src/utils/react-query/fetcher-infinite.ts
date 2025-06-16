import type { QueryKey } from "@tanstack/react-query";

import type { QueryFunctionContext } from "@/hooks/react-query";
import { API_BASE_PATH } from "@/react-query/config";

import queryStringify from "../url/query-stringify";
import type { InfiniteResult } from "./model/fetcher-infinite";
import http from "./http";

/**
 * @function fetcherInfinite
 * @param options
 */
const fetcherInfinite = async (
  options: QueryFunctionContext<QueryKey, Record<string, unknown>>,
): Promise<InfiniteResult> => {
  const { queryKey = [], pageParam, meta = {} } = options;

  const { apiVersion, basePath, ignoreCamelize, headers } = meta;

  const version = apiVersion ? `/v${apiVersion}` : "";

  const [rpath, rparams] = queryKey;
  const path = rpath ? `${basePath ?? API_BASE_PATH}${version}/${rpath}` : "";

  let variables: Record<string, unknown>;
  if (pageParam) {
    variables = pageParam;
  } else {
    variables = rparams ? (rparams as Record<string, unknown>) : {};
  }

  const params = queryStringify(variables);
  const response = await http({
    path,
    params,
    ignoreCamelize,
    headers,
  });

  return Promise.resolve({ data: response, variables: variables });
};

export default fetcherInfinite;
