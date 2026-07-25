import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Suparn Posina | Computer Science Student | Software Engineering Portfolio",

  description:
    "Suparn Posina is a Computer Science student at San José State University building software projects focused on backend engineering, artificial intelligence, machine learning, and modern software development.",


  keywords: [
    "Suparn Posina",
    "Software Engineering Intern",
    "Computer Science Student",
    "San José State University Computer Science",
    "Backend Engineer",
    "Backend Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Java",
    "Python",
    "TypeScript",
    "SQL",
    "Silicon Valley Software Engineer",
    "Software Developer Portfolio",
  ],


  authors: [
    {
      name: "Suparn Posina",
    },
  ],


  creator: "Suparn Posina",


  openGraph: {
    title:
      "Suparn Posina | Software Engineering Portfolio",

    description:
      "Computer Science student at San José State University focused on backend engineering, AI, and software development.",

    url: siteUrl,

    siteName:
      "Suparn Posina Portfolio",

    type:
      "website",

    locale:
      "en_US",
  },


  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        {children}

      </body>

    </html>
  );
}