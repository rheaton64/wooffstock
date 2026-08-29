"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function TicketSection() {
    const [donationAmount, setDonationAmount] = useState("");
    const [checkoutLoading, setCheckoutLoading] = useState(false);

    const handleDonate = async () => {
        const amount = parseFloat(donationAmount);
        if (!amount || amount <= 0) {
            alert("Please enter a donation amount.");
            return;
        }

        setCheckoutLoading(true);
        try {
            const res = await fetch("/api/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    lineItems: [
                        {
                            name: "Donation to Wooffstock",
                            price: Math.round(amount * 100),
                            unitQty: 1,
                        },
                    ],
                }),
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

    return (
        <section className="tickets" id="tickets">
            <FadeIn>
                <div className="section-label">Support the Rescues</div>
            </FadeIn>
            <FadeIn>
                <div className="section-title">Make a Donation</div>
            </FadeIn>
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
                            <h3>Pete the Cat — Lend a Helping Paw!</h3>
                            <p>
                                Make a donation to support our furry friends in
                                need.
                            </p>
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
                                    onChange={(e) =>
                                        setDonationAmount(e.target.value)
                                    }
                                />
                            </div>
                            <button
                                className="donation-btn"
                                onClick={handleDonate}
                                disabled={checkoutLoading}
                            >
                                {checkoutLoading ? "Redirecting..." : "Donate"}
                            </button>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
