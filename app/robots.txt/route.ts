export const dynamic = "force-static";

export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://kindreply.co/sitemap.xml
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
