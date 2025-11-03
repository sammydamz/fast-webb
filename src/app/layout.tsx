import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pertest - Personal Portfolio Next.js Template",
  description: "Discover Pertest, a versatile personal portfolio Next.js template by Creativemela. Ideal for showcasing your work, Pertest offers sleek design, multiple layouts, and comprehensive UI/UX services. Perfect for designers, developers, and creatives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
