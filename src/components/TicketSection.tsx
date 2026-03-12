"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

interface TicketTier {
  id: string;
  name: string;
  price: number;
  image: string;
  features: string[];
  featured?: boolean;
}

const tiers: TicketTier[] = [
  {
    id: "robbie",
    name: "Robbie the Yellow Lab",
    price: 125,
    image: "/images/robbie.jpg",
    features: ["General Admission", "Support our Rescues"],
  },
  {
    id: "dottie",
    name: "Dottie the Terrier Mix",
    price: 250,
    image: "/images/dottie.jpg",
    features: ["Event Sponsor Recognition", "Make a Bigger Impact"],
  },
  {
    id: "ruby",
    name: "Ruby the Black Lab",
    price: 500,
    image: "/images/ruby.jpg",
    features: ["Top Level Sponsor Recognition", "Champion for our Rescues"],
    featured: true,
  },
];

export default function TicketSection() {
  // Cart = confirmed quantities, pending = what the +/- buttons adjust before "Add to Cart"
  const [cart, setCart] = useState<Record<string, number>>({
    robbie: 0,
    dottie: 0,
    ruby: 0,
  });
  const [pending, setPending] = useState<Record<string, number>>({
    robbie: 1,
    dottie: 1,
    ruby: 1,
  });
  const [donationAmount, setDonationAmount] = useState("");
  const [donationInCart, setDonationInCart] = useState(0);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const updatePending = (id: string, delta: number) => {
    setPending((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const addToCart = (id: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + pending[id],
    }));
    setPending((prev) => ({ ...prev, [id]: 1 }));
  };

  const totalTickets = Object.values(cart).reduce((a, b) => a + b, 0);
  const ticketPrice = tiers.reduce((sum, t) => sum + (cart[t.id] || 0) * t.price, 0);
  const totalPrice = ticketPrice + donationInCart;
  const hasItems = totalTickets > 0 || donationInCart > 0;

  const doCheckout = async (lineItems: { name: string; price: number; unitQty: number }[]) => {
    setCheckoutLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lineItems }),
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Something went wrong. Please try again.");
        return;
      }

      window.location.href = data.checkoutUrl;
    } catch {
      alert("Unable to connect to payment service. Please try again.");
    } finally {
      setCheckoutLoading(false);
    }
  };

  const handleCheckout = () => {
    if (!hasItems) return;

    const lineItems = tiers
      .filter((t) => cart[t.id] > 0)
      .map((t) => ({
        name: t.name,
        price: t.price * 100, // Clover expects cents
        unitQty: cart[t.id],
      }));

    if (donationInCart > 0) {
      lineItems.push({
        name: "Donation to Wooffstock",
        price: Math.round(donationInCart * 100),
        unitQty: 1,
      });
    }

    doCheckout(lineItems);
  };

  const handleDonation = () => {
    const amount = parseFloat(donationAmount);
    if (!amount || amount <= 0) {
      alert("Please enter a donation amount.");
      return;
    }

    setDonationInCart(amount);
    setDonationAmount("");
  };

  return (
    <section className="tickets" id="tickets">
      <FadeIn><div className="section-label">Tickets</div></FadeIn>
      <FadeIn><div className="section-title">Reserve Your Spot</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">Choose your tier and join us for an unforgettable evening. Your receipt is your ticket.</div>
      </FadeIn>

      <div className="tickets-grid">
        {tiers.map((tier) => (
          <FadeIn key={tier.id}>
            <div className={`ticket-card${tier.featured ? " featured" : ""}`}>
              {tier.featured && <div className="ticket-badge">Top Tier</div>}
              <div className="ticket-header">
                <Image
                  src={tier.image}
                  alt={tier.name}
                  width={100}
                  height={100}
                  className="ticket-dog-photo"
                />
                <div className="ticket-tier">{tier.name}</div>
                <div className="ticket-price">
                  <span>$</span>
                  {tier.price}
                </div>
              </div>
              <div className="ticket-body">
                <ul className="ticket-features">
                  {tier.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="ticket-qty">
                  <button className="qty-btn" onClick={() => updatePending(tier.id, -1)}>
                    −
                  </button>
                  <span className="qty-display">{pending[tier.id]}</span>
                  <button className="qty-btn" onClick={() => updatePending(tier.id, 1)}>
                    +
                  </button>
                </div>
                <button className="ticket-btn" onClick={() => addToCart(tier.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="donation-section">
          <div className="donation-inner">
            <Image
              src="/images/pete-the-cat.png"
              alt="Pete the Cat"
              width={100}
              height={100}
              className="ticket-dog-photo"
            />
            <div className="donation-text">
              <h3>Pete the Cat — Can&apos;t Attend? You Can Still Help!</h3>
              <p>Make a donation to support our furry friends in need.</p>
            </div>
            <div className="donation-input-group">
              <div className="donation-amount-wrap">
                <span className="dollar-sign">$</span>
                <input
                  type="number"
                  className="donation-input"
                  placeholder="0"
                  min="1"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                />
              </div>
              <button className="donation-btn" onClick={handleDonation}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className={`cart-summary${hasItems ? " visible" : ""}`}>
        <div className="cart-info">
          <div className="cart-label">Your Order</div>
          <div className="cart-total">${totalPrice}</div>
          <div className="cart-items-text">
            {[
              totalTickets > 0
                ? `${totalTickets} ticket${totalTickets !== 1 ? "s" : ""}: ${tiers
                    .filter((t) => cart[t.id] > 0)
                    .map((t) => `${cart[t.id]}× ${t.name.split(" the ")[0]}`)
                    .join(", ")}`
                : null,
              donationInCart > 0 ? `$${donationInCart} donation` : null,
            ]
              .filter(Boolean)
              .join(" + ")}
          </div>
        </div>
        <div className="cart-actions">
          <button
            className="cart-clear-btn"
            onClick={() => {
              setCart({ robbie: 0, dottie: 0, ruby: 0 });
              setDonationInCart(0);
            }}
            title="Clear cart"
          >
            🗑
          </button>
          <button className="checkout-btn" onClick={handleCheckout} disabled={checkoutLoading}>
            {checkoutLoading ? "Redirecting..." : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </section>
  );
}
