import "./globals.css";

import Navbar from "./components/Navbar";
import AuthProvider from "./components/providers/AuthProvider";
import { Toaster } from "react-hot-toast";

import ThemeClient from "./components/ThemeClient";

export const metadata = {
  title: "Nexora",
  icons: {
    icon: "/Nexora-removebg-preview.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">

        <AuthProvider>

          <ThemeClient />

          <Navbar />

          <main className="min-h-screen">
            {children}
          </main>

          <Toaster />

        </AuthProvider>

      </body>
    </html>
  );
}