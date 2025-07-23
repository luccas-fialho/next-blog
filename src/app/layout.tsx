import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "The blog - This is a Next.js blog",
    template: "%s | The blog",
  },
  description: "Page description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
