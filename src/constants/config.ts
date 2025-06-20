const CONFIG = {
  SSR_API_BASE_PATH: String(process.env.NEXT_PUBLIC_SSR_API_BASE_PATH ?? ""),
  HCAPTCHA_SITE_KEY: String(process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? "")
};

export const { SSR_API_BASE_PATH, HCAPTCHA_SITE_KEY } = CONFIG;
