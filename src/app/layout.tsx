// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { getSeo, SeoData } from "@/lib/getSeo";
import ClientLayout from "../components/layout/ClientLayout";

export const metadata: Metadata = {
  title: "Achariya Technologies Private Limited",
  description: "My awesome Next.js site with MUI",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ Fetch SEO data (server-side)
  const seo: SeoData | null = await getSeo();

  return (
    <html lang="en">
      <body>
        {/* ✅ Pass children into client layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
