"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import AOSProvider from "@/providers/AOSProvider";
import ClientProvider from "@/providers/ReactQueryProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // ✅ Check if current route starts with /admin
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <ClientProvider>
      <AOSProvider>
        {/* ✅ Hide Header & Footer on admin routes */}
        {!isAdminRoute && <Header />}
        {children}
        {!isAdminRoute && <Footer />}
      </AOSProvider>

      {/* ✅ Hide Tawk.to chat on admin routes */}
      {!isAdminRoute && (
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
          (function() {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5b2b664cd0b5a54796820793/1j8v0inrd';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
          })();
        `,
      }}
    />
      )}
    </ClientProvider>
  );
}
