import type { Metadata, Viewport } from "next";
import { site } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.appName}: Help, Privacy & Terms`,
    template: `%s · ${site.appName}`,
  },
  description: `Support, privacy policy and terms of use for ${site.appName}, an independent revision app for iPhone and iPad.`,
  applicationName: site.appName,
  authors: [{ name: site.developerName }],
  metadataBase: new URL(`${site.siteUrl}/`),
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
  other: {
    "apple-itunes-app": `app-id=${site.appStoreId}`,
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f12" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
