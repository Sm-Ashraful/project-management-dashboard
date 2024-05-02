import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/UI/Layout/Header";
import Sidebar from "@/UI/Layout/Sidebar";
import QueryProvider from "@/components/provider/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project Management Dashboard",
  description: "To maintain project, task, and other by admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
