import Header from "./components/Header";
import Footer from "./components/Footer";
import "../styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakar.me",
  description: "Finding local trainers for your business needs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <div className="bg-black">
          <div className="relative z-20 mx-auto flex flex-row items-center justify-center">
            <Header />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
