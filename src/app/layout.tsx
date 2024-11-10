import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./JSON/content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"], // specify the weights you want
  variable: "--font-inter",
});

// Metadata and SEO-related fields
export const metadata: Metadata = {
  title: Content.SiteFullTitle,
  description: Content.SiteDescription,
  openGraph: {
    title: Content.SiteFullTitle,
    description: Content.SiteDescription,
    url: "https://your-website-url.com", // Add your canonical URL
    siteName: Content.SiteFullTitle,
    images: [
      {
        url: Content.SiteLogo, // Ensure this image exists
        width: 1200,
        height: 630,
        alt: Content.SiteFullTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: Content.SiteFullTitle,
    description: Content.SiteDescription,
    images: [Content.SiteLogo], // Add Twitter card image
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
        {/* Add additional SEO and performance improvements */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content={Content.SiteAuthor} />
        <link rel="canonical" href="https://your-website-url.com" />
        <meta
          name="keywords"
          content={Content.SiteKeywords} // Ensure you have relevant keywords in the content JSON
        />
        <meta name="theme-color" content="#ffffff" />
        {/* Structured Data for Search Engines */}
      </head>
      <body className={`${inter.variable}} antialiased`}>
        <Header textColor="white" background="black" />
        {children}
        <Footer
          contactNumber={Content.SupportNumber}
          email={Content.SupportEmail}
          address={Content.OfficeAddress}
          socialMedia={Content.SocialMedia}
        />
      </body>
    </html>
  );
}
