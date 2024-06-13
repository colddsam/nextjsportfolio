import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "colddsam | Web Developer & Machine Learning Enthusiast",
  description: "Discover colddsam's professional portfolio showcasing cutting-edge web development projects, innovative machine learning solutions, app development expertise, and problem-solving skills. Explore achievements, experience, and skills in full-stack development, graphics design, and more. Contact colddsam for collaborations and opportunities.",
  authors: [{ name: "colddsam", url: "https://github.com/colddsam" }],
  keywords: [
    "colddsam", "web developer", "full-stack developer", "portfolio", "projects", 
    "skills", "experience", "achievements", "problem-solving", "machine learning", 
    "machine learning engineer", "web development", "app development", 
    "mobile app development", "frontend development", "backend development", 
    "graphics design", "software development", "full-stack development", 
    "JavaScript", "React", "Node.js", "Python", "contact", "hire web developer", 
    "hire machine learning engineer"
  ],
  creator: "colddsam",
  icons: {
    icon: ['/images/profile/favicon.ico'],
    apple: ['/images/profile/apple-touch-icon.png'],
    shortcut: ['/images/profile/apple-touch-icon.png'],
  },
  openGraph: {
    type: 'website',
    url: 'https://colddsam.dev',
    title: 'colddsam | Web Developer & Machine Learning Enthusiast',
    description: "Discover colddsam's professional portfolio showcasing cutting-edge web development projects, innovative machine learning solutions, app development expertise, and problem-solving skills. Explore achievements, experience, and skills in full-stack development, graphics design, and more. Contact colddsam for collaborations and opportunities.",
    images: [
      {
        url: '/images/profile/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'colddsam Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@colddsam',
    title: 'colddsam | Web Developer & Machine Learning Enthusiast',
    description: 'Explore the portfolio of colddsam, showcasing projects, skills, achievements, and experience in web development, machine learning, app development, and problem-solving.',
    images: ['/images/profile/1200x628.png'],
  },
  metadataBase: new URL("https://colddsam.dev"),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile/favicon.ico" sizes="any" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colddsam.dev" />
        <meta property="og:title" content="colddsam | Web Developer & Machine Learning Enthusiast" />
        <meta property="og:description" content="Discover colddsam's professional portfolio showcasing cutting-edge web development projects, innovative machine learning solutions, app development expertise, and problem-solving skills. Explore achievements, experience, and skills in full-stack development, graphics design, and more. Contact colddsam for collaborations and opportunities." />
        <meta property="og:image" content="/images/profile/1200x630.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@colddsam" />
        <meta name="twitter:title" content="colddsam | Web Developer & Machine Learning Enthusiast" />
        <meta name="twitter:description" content="Explore the portfolio of colddsam, showcasing projects, skills, achievements, and experience in web development, machine learning, app development, and problem-solving." />
        <meta name="twitter:image" content="/images/profile/1200x628.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
