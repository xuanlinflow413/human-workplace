export const dynamic = "force-static";

import { getAllSlugs } from "@/data/replies";

export function GET() {
  const baseUrl = "https://kindreply.co";
  const slugs = getAllSlugs();

  const staticPaths = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/workplace/", priority: "0.9", changefreq: "weekly" },
    { path: "/about/", priority: "0.5", changefreq: "monthly" },
    { path: "/privacy/", priority: "0.3", changefreq: "yearly" },
    { path: "/terms/", priority: "0.3", changefreq: "yearly" },
    { path: "/type-and-release/", priority: "0.7", changefreq: "monthly" },
  ];

  const dynamicPaths = slugs.map((slug) => ({
    path: `/workplace/${slug}/`,
    priority: "0.8",
    changefreq: "weekly",
  }));

  const allPaths = [...staticPaths, ...dynamicPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map(
    (p) => `  <url>
    <loc>${baseUrl}${p.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
