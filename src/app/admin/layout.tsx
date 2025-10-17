import React from "react";
import AdminHeader from "@/components/admin/Header";
import AdminFooter from "@/components/admin/Footer";
import AdminSidebar from "@/components/admin/Sidebar";
import "@/styles/globals.css"; 

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin panel layout",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <AdminHeader />
        <div className="flex flex-1">
          <AdminSidebar />
          <main className="flex-1 p-6">{children}</main>
        </div>
        <AdminFooter />
      </body>
    </html>
  );
}
