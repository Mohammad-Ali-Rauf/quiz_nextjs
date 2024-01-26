import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test your Next.js Skills",
  description: "Created, designed and developed by Mohammad Ali",
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
