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
  process.env.NEXT_PUBLIC_SITE_URL || "https://suparnposina.com";


export const metadata: Metadata = {

  metadataBase: new URL(siteUrl),


  title:
    "Suparn Posina | Software Engineer Portfolio",


  description:
    "Suparn Posina is a Computer Science student at San José State University specializing in software engineering, backend development, AI, machine learning, and scalable software systems.",


  keywords: [
    "Suparn Posina",
    "Software Engineer",
    "Software Engineering Student",
    "Computer Science Student",
    "San José State University",
    "Backend Engineer",
    "Backend Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Full Stack Developer",
    "Java",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "SQL",
    "Software Engineer Portfolio",
  ],


  authors: [
    {
      name: "Suparn Posina",
    },
  ],


  creator:
    "Suparn Posina",


  publisher:
    "Suparn Posina",


  category:
    "Technology",



  openGraph: {

    title:
      "Suparn Posina | Software Engineer Portfolio",


    description:
      "Software engineering portfolio showcasing backend systems, AI projects, machine learning, and modern software development.",


    url:
      siteUrl,


    siteName:
      "Suparn Posina Portfolio",


    locale:
      "en_US",


    type:
      "website",

  },



  twitter: {

    card:
      "summary_large_image",


    title:
      "Suparn Posina | Software Engineer Portfolio",


    description:
      "Computer Science student building backend systems, AI applications, and scalable software.",

  },



  robots: {

    index:
      true,

    follow:
      true,

    googleBot: {

      index:
        true,

      follow:
        true,

    },

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