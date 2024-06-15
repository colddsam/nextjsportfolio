import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import GoogleAnalytics from './GoogleAnalytics';

const inter = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "colddsam | Web Developer & Machine Learning Enthusiast",
  description: "Welcome to my portfolio. Explore my projects, skills, achievements, experiences in web development, machine learning, app development and problem solving.",
  authors: [{ name: "colddsam", url: "https://github.com/colddsam" }],
  keywords: [
    "colddsam", "web developer", "full-stack developer", "portfolio", "projects",
    "skills", "experience", "achievements", "problem-solving", "machine learning",
    "machine learning engineer", "web development", "app development",
    "mobile app development", "frontend development", "backend development",
    "graphics design", "software development", "full-stack development",
    "JavaScript", "React", "Node.js", "Python", "contact", "hire web developer",
    "hire machine learning engineer", "attended", "events list", "colddsam", "visiting", "narula", "narula institute of technology", "tech", "developer", "learning", "feedback", "connect", "world"
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
    description: "Welcome to my portfolio. Explore my projects, skills, achievements, experiences in web development, machine learning, app development and problem solving.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Samrat",
          "alternateName": "colddsam",
          "url": "https://colddsam.dev",
          "image": "https://colddsam.dev/profile.jpg",
          "sameAs": [
            "https://github.com/colddsam",
            "https://twitter.com/colddsam",
            "https://www.linkedin.com/in/colddsam",
            "https://www.instagram.com/colddsam",
            "https://colddsam.medium.com"
          ],
          "jobTitle": "Web Developer & Machine Learning Enthusiast",
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Narula Institute of Technology",
            "location": {
              "@type": "Place",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kolkata",
                "addressCountry": "India"
              }
            }
          },
          "knowsAbout": ["Machine Learning", "Web Development", "Problem Solving", "Artificial Intelligence", "Data Science"],
          "workLocation": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kolkata",
              "addressCountry": "India"
            }
          },
          "email": "mailto:contact@colddsam.dev",
          "description": "A passionate Machine Learning developer with a strong background in web development and problem-solving. Enthusiastic about continuous learning and sharing knowledge through various platforms.",
          "worksFor": {
            "@type": "Organization",
            "name": "Self-Employed"
          },
          "hasOccupation": [{
            "@type": "Occupation",
            "name": "Web Developer",
            "description": "Developing responsive and modern web applications using latest technologies.",
            "skills": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js"]
          },
          {
            "@type": "Occupation",
            "name": "Machine Learning Engineer",
            "description": "Creating and optimizing machine learning models for various applications.",
            "skills": ["Python", "TensorFlow", "Keras", "scikit-learn", "Data Analysis"]
          }]
        }) }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/profile/favicon.ico" sizes="any" />
        <meta name="next-size-adjust" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colddsam.dev" />
        <meta property="og:title" content="colddsam | Web Developer & Machine Learning Enthusiast" />
        <meta property="og:description" content="Explore the portfolio of colddsam, showcasing projects, skills, achievements, and experience in web development, machine learning, app development, and problem-solving." />
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
