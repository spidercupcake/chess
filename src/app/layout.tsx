import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chess in  NextJS",
  description: "A NextJS Chess game by Hamza Zain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
