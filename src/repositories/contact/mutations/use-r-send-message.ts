import { SSR_API_BASE_PATH } from "@/constants/config";
import { useMutation, type UseMutationOptions } from "@/hooks/react-query";
import { fetcherMutation } from "@/utils/react-query";
import type { ApiError } from "@/models/api";

import type { ContactParams } from "../models";

export function useRSendMessage(
  options: UseMutationOptions<unknown, ApiError, ContactParams> = {},
) {
  return useMutation<unknown, ApiError, ContactParams>({
    mutationFn: async ({ context, variables }) =>
      await fetcherMutation({
        context: {
          ...context,
          basePath: SSR_API_BASE_PATH,
          path: "/contact",
        },
        variables,
      }),
    ...options,
  });
}
