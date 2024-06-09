import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Roboto({
  subsets: ["latin"],
  weight: ['400', '700','500'],
  style: ['normal', 'italic'],
  display: 'swap',});

export const metadata: Metadata = {
  title: "colddsam",
  description: "Welcome to my portfolio. Explore my projects, skills, achievements and experience in web development, machine learning, app development and problem solving. Contact me for collaborations and opportunities.",
  authors: [{ name: "colddsam", url: "https://github.com/colddsam" }],
  keywords: ["colddsam", "web developer", "portfolio", "projects", "skills", "experience","achievements","projects","problem solving","machine learning","web development","app development","graphics designing", "contact"],
  creator: "colddsam",

  icons: {
    icon: ['/images/profile/favicon.ico'],
    apple: ['/images/profile/apple-touch-icon.png'],
    shortcut: ['/images/profile/apple-touch-icon.png'],


  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/profile/favicon.ico'" sizes="any" />
        <link
            rel="icon"
            href="/icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
