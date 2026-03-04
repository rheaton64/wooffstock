import Link from "next/link";

export default function CheckoutSuccess() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        background: "var(--bg-warm)",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "24px" }}>🐾</div>
      <h1
        style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 900,
          color: "var(--charcoal)",
          marginBottom: "16px",
        }}
      >
        Thank You!
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "var(--rust)",
          maxWidth: "500px",
          lineHeight: 1.8,
          marginBottom: "40px",
          fontWeight: 300,
        }}
      >
        Your purchase is confirmed. We can&apos;t wait to see you at Wooffstock on May 2nd!
        Check your email for your receipt.
      </p>
      <Link
        href="/"
        style={{
          background: "var(--gold)",
          color: "var(--charcoal)",
          padding: "16px 40px",
          borderRadius: "4px",
          fontWeight: 700,
          letterSpacing: "2px",
          textTransform: "uppercase",
          textDecoration: "none",
          fontSize: "0.9rem",
        }}
      >
        Back to Wooffstock
      </Link>
    </div>
  );
}
