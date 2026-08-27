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
  title: "Wooffstock — Rescue Pet Adoption Day and Blessing of the Animals",
  description:
    "Join us for our 3rd Annual Rescue Pet Adoption Day and Blessing of the Animals, with guest musical artist Alex Cano. Sunday, October 4th, 1:00–4:00 PM at Pound Ridge Community Church.",
  openGraph: {
    title: "Wooffstock — Rescue Pet Adoption Day and Blessing of the Animals",
    description:
      "Join us for our 3rd Annual Rescue Pet Adoption Day and Blessing of the Animals, with guest musical artist Alex Cano. Sunday, October 4th, 1:00–4:00 PM at Pound Ridge Community Church.",
    images: [{ url: "/images/wooffstock-lockup.png", width: 1512, height: 579 }],
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
