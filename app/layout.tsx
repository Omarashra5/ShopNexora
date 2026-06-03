"use client";

import "./globals.css";
import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./components/providers/AuthProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />

          {children}

          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}