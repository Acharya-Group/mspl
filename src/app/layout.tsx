import "./globals.css";
import type { Metadata } from "next";
import { getSeo } from "@/lib/getSeo";
import ClientLayout from "@/components/layout/ClientLayout";
import "aos/dist/aos.css";
import AosInit from "../components/common/AosInit";
import { Analytics } from "@vercel/analytics/next"


// ✅ Fetch SEO data safely
export async function generateMetadata(): Promise<Metadata> {
  try {
    const seo = await getSeo();
    return {
      title: seo?.title || "Mspl",
      description: seo?.description || "mspl description",
      keywords: seo?.keywords || "mspl",
    };
  } catch (error) {
    console.error("SEO fetch failed:", error);
    return {
      title: "Mspl",
      description: "mspl description",
      keywords: "mspl",
    };
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AosInit />
        <ClientLayout>{children}   <Analytics /></ClientLayout>
      </body>
    </html>
  );
}
