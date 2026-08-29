import type { Metadata } from "next";
import Link from "next/link";
import Honoree from "@/components/Honoree";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr. Renee Bayha — Wooffstock's May 2026 Honoree",
  description:
    "Meet Dr. Renee Bayha, long-time local vet and animal lover, honored at Wooffstock's May 2026 benefit.",
};

export default function HonoreePage() {
  return (
    <>
      <nav>
        <Link href="/" className="nav-brand" style={{ textDecoration: "none" }}>
          Wooffstock
        </Link>
        <Link href="/" className="nav-back">
          ← Back to Site
        </Link>
      </nav>
      <main style={{ paddingTop: "60px" }}>
        <Honoree />
      </main>
      <Footer />
    </>
  );
}
