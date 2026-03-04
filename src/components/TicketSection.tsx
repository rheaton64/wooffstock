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
  const [quantities, setQuantities] = useState<Record<string, number>>({
    robbie: 0,
    dottie: 0,
    ruby: 0,
  });
  const [donationAmount, setDonationAmount] = useState("");

  const updateQty = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const totalTickets = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = tiers.reduce((sum, t) => sum + (quantities[t.id] || 0) * t.price, 0);

  const handleCheckout = () => {
    if (totalTickets === 0) return;

    let summary = "Your Order:\n";
    for (const t of tiers) {
      const qty = quantities[t.id];
      if (qty > 0) summary += `${qty}× ${t.name} ($${qty * t.price})\n`;
    }
    summary += `\nTotal: $${totalPrice}\n\nPayment processing will be connected via Clover. Thank you for supporting animal rescues! 🐾`;
    alert(summary);
  };

  const handleDonation = () => {
    const amount = parseFloat(donationAmount);
    if (!amount || amount <= 0) {
      alert("Please enter a donation amount.");
      return;
    }
    alert(
      `Thank you for your generous donation of $${amount}! 🐾\n\nDonation processing will be connected via Clover. Your support means the world to our furry friends!`
    );
  };

  return (
    <section className="tickets" id="tickets">
      <FadeIn><div className="section-label">Tickets</div></FadeIn>
      <FadeIn><div className="section-title">Reserve Your Spot</div></FadeIn>
      <FadeIn>
        <div className="section-subtitle">Choose your tier and join us for an unforgettable evening.</div>
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
                  <button className="qty-btn" onClick={() => updateQty(tier.id, -1)}>
                    −
                  </button>
                  <span className="qty-display">{quantities[tier.id]}</span>
                  <button className="qty-btn" onClick={() => updateQty(tier.id, 1)}>
                    +
                  </button>
                </div>
                <button className="ticket-btn" onClick={() => updateQty(tier.id, 1)}>
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
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className={`cart-summary${totalTickets > 0 ? " visible" : ""}`}>
        <div className="cart-info">
          <div className="cart-label">Your Order</div>
          <div className="cart-total">${totalPrice}</div>
          <div className="cart-items-text">
            {totalTickets} ticket{totalTickets !== 1 ? "s" : ""}
          </div>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}
