export async function POST(request: Request) {
  const url = process.env.GITHUB_GRAPHQL_API;
  const token = process.env.GITHUB_PAT;

  if (!url) {
    throw new Error("GITHUB_GRAPHQL_API is not defined");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      authorization: token ? `bearer ${token}` : "",
    },
    body: JSON.stringify(await request.json()),
  });

  const data = await res.json();

  return Response.json({ ...data });
}
