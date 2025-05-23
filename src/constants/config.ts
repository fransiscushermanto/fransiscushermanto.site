const CONFIG = {
  SSR_API_BASE_PATH: String(process.env.NEXT_PUBLIC_SSR_API_BASE_PATH ?? ""),
};

export const { SSR_API_BASE_PATH } = CONFIG;
