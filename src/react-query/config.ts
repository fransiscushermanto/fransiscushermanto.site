const CONFIG = {
  API_BASE_PATH: String(process.env.NEXT_PUBLIC_API_BASE_PATH ?? ""),
  API_HOST: String(process.env.NEXT_PUBLIC_API_HOST ?? ""),
  API_TIMEOUT: Number(process.env.NEXT_PUBLIC_API_TIMEOUT ?? 3500),
  APP_NAME: String(process.env.NEXT_PUBLIC_NAME ?? ""),
};

export const { API_BASE_PATH, API_HOST, API_TIMEOUT, APP_NAME } = CONFIG;
