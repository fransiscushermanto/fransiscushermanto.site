import humps from "humps";

import type { ContactParams } from "@/repositories/contact";
import type { CaptchaVerifyResponse } from "./types";

export async function POST(request: Request) {
  const emailJsURL = process.env.EMAILJS_URL ?? "";
  const templateId = process.env.EMAILJS_TEMPLATE_ID ?? "";
  const serviceId = process.env.EMAILJS_SERVICE_ID ?? "";
  const accessToken = process.env.EMAILJS_PRIVATE_KEY ?? "";
  const userId = process.env.EMAILJS_PUBLIC_KEY ?? "";
  const captchaVerifyURL = process.env.CAPTCHA_VERIFY_URL ?? "";
  const captchaSecretKey = process.env.CAPTCHA_SECRET_KEY ?? "";

  const { captchaResponse, ...templateParams } = humps.camelizeKeys(
    await request.json(),
  ) as ContactParams;

  const sendEmailData = {
    ...humps.decamelizeKeys({
      serviceId,
      templateId,
      userId,
      templateParams,
    }),
    accessToken,
  };

  try {
    const captchaRes = await fetch(captchaVerifyURL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: captchaSecretKey,
        response: captchaResponse,
      }),
    });

    const { errorCodes, success } = humps.camelizeKeys(
      await captchaRes.json(),
    ) as CaptchaVerifyResponse;

    if (
      success === false &&
      !(errorCodes?.length === 1 && errorCodes[0] === "already-seen-response")
    ) {
      return Response.json(
        {
          errors: { captchaResponse: "Invalid captcha response" },
          meta: { errorCodes },
        },
        {
          status: 400,
        },
      );
    }

    const sendEmailRes = await fetch(emailJsURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sendEmailData),
    });

    if (!sendEmailRes.ok) {
      return Response.json(sendEmailRes.statusText, {
        status: sendEmailRes.status,
        headers: sendEmailRes.headers,
      });
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("EmailJS error:", error);
    throw error;
  }
}
