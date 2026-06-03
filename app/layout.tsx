import "./globals.css";
import { AuthProvider } from "./components/AuthContext";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nexora",
  description: "Premium Shopping Experience",
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
      <body>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}