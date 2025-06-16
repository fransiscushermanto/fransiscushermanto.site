export const captchaErrorCodes = [
  "missing-input-secret",
  "invalid-input-secret",
  "missing-input-response",
  "invalid-input-response",
  "bad-request",
  "timeout-or-duplicate",
  "expired-input-response",
  "already-seen-response",
] as const;

export interface CaptchaVerifyResponse {
  success: boolean;
  errorCodes?: (typeof captchaErrorCodes)[number][];
}
