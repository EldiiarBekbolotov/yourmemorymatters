import React from "react";
import type { Metadata, Viewport } from "next";
import "../styles/index.css";
import "../styles/tailwind.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#391d47",
};

export const metadata: Metadata = {
  title: "Memory Matters — Dementia Awareness & Education",
  description:
    "Memory Matters is a youth-led organization dedicated to raising awareness about memory-related conditions through storytelling, science, and community.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "android-chrome", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
