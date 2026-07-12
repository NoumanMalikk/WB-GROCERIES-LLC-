import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Providers } from "@/components/layout/providers";
import { buildPageMetadata, organizationJsonLd, websiteJsonLd, onlineStoreJsonLd } from "@/lib/seo/metadata";
import { storeConfig } from "@/data/store-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: storeConfig.seo.homepageTitle,
    description: storeConfig.seo.homepageDescription,
    path: "/",
  }),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#184C35",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), websiteJsonLd(), onlineStoreJsonLd()]),
          }}
        />
        <Providers>
          <AnnouncementBar />
          <SiteHeader />
          <main id="main-content" className="min-h-[70vh]">
            {children}
          </main>
          <SiteFooter />
          <CartDrawer />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
