import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/navbar";
import { Container, Theme } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import AuthProvider from "@/app/auth/provider";
import QueryClientProvider from "@/app/queryClientProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata: Metadata = {
  title: "Issue Tracker App",
  description: "this is a simple app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <QueryClientProvider>
          <AuthProvider>
            <ToastContainer
              style={{ top: "1rem" }}
              hideProgressBar={false}
              position="top-right"
              autoClose={3000}
              limit={2}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Theme>
              <Navbar />
              <main className="p-5">
                <Container>{children}</Container>
              </main>
            </Theme>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
