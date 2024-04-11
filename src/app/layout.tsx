import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "./components/navbar/Navbar";
import AuthProvider from "@/components/providers/AuthProvider";
import Navbar from "@/components/navbar/Navbar";
import { getServerSession } from "next-auth";

import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ESRP Pour tous | Le Meilleur  sit pour gérer votre formation",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <AuthProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <MantineProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </MantineProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
