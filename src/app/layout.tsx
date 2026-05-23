import React from "react";
import type { Metadata, Viewport } from "next";
import "../styles/index.css";
import "../styles/tailwind.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "HopeWorks Foundation — Empowering Communities Worldwide",
  description:
    "Join HopeWorks Foundation in our mission to provide education, healthcare, and sustainable livelihoods to underserved communities around the world.",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
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
