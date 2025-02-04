import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import NavigationProvider from "@/components/navigation-provider";
import Footer from "@/components/footer";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Ecom Intership Task",
  description: "frontend internship task",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <NavigationProvider />
        {children}
        <Footer />
      </body>
    </html>
  );
}
