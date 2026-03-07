import type { Metadata } from "next";
import { Playfair_Display, Josefin_Sans, Sacramento } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-josefin",
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sacramento",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"
  ),
  title: "Wooffstock — An Evening to Benefit Local Animal Rescues",
  description:
    "Join us for a magical night of art, music, and community — all to support our furry friends in need. Saturday, May 2nd at Waccabuc Country Club.",
  openGraph: {
    title: "Wooffstock — An Evening to Benefit Local Animal Rescues",
    description:
      "Join us for a magical night of art, music, and community — all to support our furry friends in need. Saturday, May 2nd at Waccabuc Country Club.",
    images: [{ url: "/images/logo.jpg", width: 220, height: 220 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${josefin.variable} ${sacramento.variable}`}>
        {children}
      </body>
    </html>
  );
}
