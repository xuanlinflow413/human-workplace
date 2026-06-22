export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { getAllSlugs } from "../data/replies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kindreply.co";

  // Static routes — automatically discovered from the filesystem
  // Any new page.tsx added to app/ will be picked up by Next.js automatically
  // This list covers routes that need explicit priority/changefreq config
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/about/`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${baseUrl}/privacy/`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${baseUrl}/terms/`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${baseUrl}/type-and-release/`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/workplace/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/workplace/categories/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-examples/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-writer/`, priority: 0.95, changeFrequency: "weekly" },
    { url: `${baseUrl}/salary-negotiation-generator/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-for-career-change/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-for-project-manager/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-for-software-engineer/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-for-internship/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-for-customer-service/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-for-marketing-manager/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-for-data-analyst/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-for-teacher/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-mistakes/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/cover-letter-with-no-experience/`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/job-search/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/resume-summary-examples/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/interview-thank-you-email/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/job-offer-response-email/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/resignation-letter-generator/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/two-weeks-notice-generator/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/professional-email-generator/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/ai-email-writer/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/ai-email-agent/`, priority: 0.88, changeFrequency: "weekly" },
    { url: `${baseUrl}/customer-service-email-writer/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/apology-email-writer/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/cold-email-writer/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/follow-up-email-writer/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/job-application-email-writer/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/polite-email-rewriter/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/resignation-email-writer/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/burnout-email-reply/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/difficult-conversation-email/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/polite-professional-email-replies/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/workplace-email-templates/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/how-to-tell-your-boss-you-are-overwhelmed/`, priority: 0.82, changeFrequency: "weekly" },
    { url: `${baseUrl}/burnout-email-template/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/salary-negotiation-email-template/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/follow-up-email-after-interview/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/tools/email-reply-generator/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/tools/customer-service-reply-generator/`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/reply-to-rude-email/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/reply-to-negative-review/`, priority: 0.88, changeFrequency: "weekly" },
    { url: `${baseUrl}/refund-response-generator/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/templates/apology-email/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/templates/follow-up-reply/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/templates/decline-politely/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/for-customer-support/`, priority: 0.86, changeFrequency: "weekly" },
    { url: `${baseUrl}/for-freelancers/`, priority: 0.84, changeFrequency: "weekly" },
    { url: `${baseUrl}/for-small-business/`, priority: 0.84, changeFrequency: "weekly" },
  ];

  // Dynamic routes — automatically generated from data source
  const slugs = getAllSlugs();
  const dynamicRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/workplace/${slug}/`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
