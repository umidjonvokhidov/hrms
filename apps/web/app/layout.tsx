import { Lexend } from "next/font/google";
import "@workspace/ui/globals.css";

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
        {children}
      </body>
    </html>
  );
}
