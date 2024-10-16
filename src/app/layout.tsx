import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; 
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rebooted",
  description: "Sustainable Tech for All",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Basic favicon */}
        <link rel="icon" href="/f/favicon.ico" type="image/x-icon" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/f/apple-touch-icon.png" />

        {/* Android Chrome Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/f/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/f/favicon-16x16.png" />
        <link rel="manifest" href="/f/site.webmanifest" />

        {/* Android Chrome Icons */}
        <link rel="icon" sizes="192x192" href="/f/android-chrome-192x192.png" />
        <link rel="icon" sizes="512x512" href="/f/android-chrome-512x512.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer /> {/* Move Footer inside the body */}
      </body>
    </html>
  );
}
