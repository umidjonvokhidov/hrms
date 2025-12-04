import { Lexend } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontSans = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <Providers>
          <Navbar />
          <main className="w-full pt-[100px]">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
