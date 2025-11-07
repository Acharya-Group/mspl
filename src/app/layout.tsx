// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../components/layout/ClientLayout";

export const metadata: Metadata = {
  title: "mspl",
  description: "My awesome Next.js site with MUI",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        {/* ✅ Pass children into client layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
