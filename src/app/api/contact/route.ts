import humps from "humps";

const EMAILJS_URL = "https://api.emailjs.com/api/v1.0/email/send";

export async function POST(request: Request) {
  const templateId = process.env.EMAILJS_TEMPLATE_ID ?? "";
  const serviceId = process.env.EMAILJS_SERVICE_ID ?? "";
  const userId = process.env.EMAILJS_PUBLIC_KEY ?? "";
  const templateParams = await request.json();
  const accessToken = process.env.EMAILJS_PRIVATE_KEY ?? "";

  const data = {
    ...humps.decamelizeKeys({
      serviceId,
      templateId,
      userId,
      templateParams,
    }),
    accessToken,
  };

  try {
    console.log(data);
    const res = await fetch(EMAILJS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    console.log("response", res);
    if (!res.ok) {
      return new Response(res.statusText, {
        status: res.status,
        headers: res.headers,
      });
    }

    return new Response("Email sent successfully", {
      status: res.status,
    });
  } catch (error) {
    console.error("EmailJS error:", error);
    throw error;
  }
}
