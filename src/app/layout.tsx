import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import Spotlight from "@/components/Spotlight";

const roboto = Roboto({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Sithu Aung | Frontend Developer",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth scroll-pt-12 ${roboto.variable}`}
    >
      <body className={`antialiased relative`}>
        {/* 🌟 Spotlight layer */}
        <Spotlight />

        {/* Your content */}
        {children}
      </body>
    </html>
  );
}
