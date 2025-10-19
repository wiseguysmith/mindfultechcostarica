import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { config } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${config.brand.name} - ${config.brand.tagline}`,
    template: `%s | ${config.brand.name}`,
  },
  description: "Bilingual AI agents that answer, book, and follow up—quietly. Automate your business. Keep the Pura Vida.",
  keywords: ["AI agents", "WhatsApp automation", "Costa Rica", "bilingual", "business automation"],
  authors: [{ name: "MindfulTech" }],
  creator: "MindfulTech",
  publisher: "MindfulTech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`https://${config.brand.site}`),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "es": "/es",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${config.brand.site}`,
    title: `${config.brand.name} - ${config.brand.tagline}`,
    description: "Bilingual AI agents that answer, book, and follow up—quietly. Automate your business. Keep the Pura Vida.",
    siteName: config.brand.name,
    images: [
      {
        url: config.assets.og,
        width: 1200,
        height: 630,
        alt: `${config.brand.name} - Bilingual AI Agents`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.brand.name} - ${config.brand.tagline}`,
    description: "Bilingual AI agents that answer, book, and follow up—quietly. Automate your business. Keep the Pura Vida.",
    images: [config.assets.og],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables}>
      <head>
        {/* Plausible Analytics */}
        <script
          defer
          data-domain={config.analytics.plausible.domain}
          src="https://plausible.io/js/script.js"
        />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": config.brand.name,
              "url": `https://${config.brand.site}`,
              "logo": `https://${config.brand.site}${config.assets.logo.mark}`,
              "description": "Bilingual AI agents that answer, book, and follow up—quietly. Automate your business. Keep the Pura Vida.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tamarindo",
                "addressRegion": "Guanacaste",
                "addressCountry": "Costa Rica",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": config.contact.whatsapp.phone,
                "contactType": "customer service",
                "availableLanguage": ["English", "Spanish"],
              },
              "sameAs": [
                config.contact.facebook,
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
