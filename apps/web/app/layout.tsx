import { Lexend } from "next/font/google";
import "@workspace/ui/globals.css";
import type { Metadata } from "next";

const fontSans = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "HRMS - Transform Your HR Process with Our HRMS System",
    template: "HRMS - %s",
  },
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
