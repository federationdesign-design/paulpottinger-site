import type { Metadata } from "next";
import "@fontsource/raleway/400.css";
import { SITE } from "@/lib/projects";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Builder, Carpentry, Brickwork - Paul Pottinger Ltd",
  description:
    "Paul Pottinger Ltd: general builder with over 25 years of experience. Carpentry, joinery, brickwork, extensions, heritage work and hard landscaping in East Hertfordshire and East Anglia.",
  icons: { icon: "/wp-content/uploads/2018/10/pottinger-favi.jpg", apple: "/wp-content/uploads/2018/10/pottinger-favi.jpg" },
  openGraph: { siteName: "Paul Pottinger Ltd", type: "website", locale: "en_GB" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/site.css" precedence="default" />
      </head>
      <body>{children}</body>
    </html>
  );
}
