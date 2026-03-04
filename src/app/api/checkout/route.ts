import { NextRequest, NextResponse } from "next/server";

interface LineItem {
  name: string;
  price: number; // in cents
  unitQty: number;
  note?: string;
}

interface CheckoutRequest {
  lineItems: LineItem[];
}

const CLOVER_API_BASE = process.env.CLOVER_ENVIRONMENT === "production"
  ? "https://api.clover.com"
  : "https://apisandbox.dev.clover.com";

export async function POST(request: NextRequest) {
  const privateKey = process.env.CLOVER_PRIVATE_KEY;
  const merchantId = process.env.CLOVER_MERCHANT_ID;

  if (!privateKey || !merchantId) {
    return NextResponse.json(
      { error: "Payment processing is not configured yet." },
      { status: 503 }
    );
  }

  let body: CheckoutRequest;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body.lineItems || body.lineItems.length === 0) {
    return NextResponse.json({ error: "No items in cart" }, { status: 400 });
  }

  // Validate line items
  for (const item of body.lineItems) {
    if (!item.name || typeof item.price !== "number" || typeof item.unitQty !== "number") {
      return NextResponse.json({ error: "Invalid line item" }, { status: 400 });
    }
    if (item.price <= 0 || item.unitQty <= 0) {
      return NextResponse.json({ error: "Invalid line item values" }, { status: 400 });
    }
  }

  const origin = request.headers.get("origin") || request.nextUrl.origin;

  try {
    const response = await fetch(
      `${CLOVER_API_BASE}/invoicingcheckoutservice/v1/checkouts`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${privateKey}`,
          "X-Clover-Merchant-Id": merchantId,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: {},
          shoppingCart: {
            lineItems: body.lineItems.map((item) => ({
              name: item.name,
              price: item.price,
              unitQty: item.unitQty,
              note: item.note || "Wooffstock 2026",
            })),
          },
          redirectUrls: {
            success: `${origin}/checkout/success`,
            failure: `${origin}/checkout/failure`,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Clover API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Payment service error. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();

    return NextResponse.json({ checkoutUrl: data.href });
  } catch (error) {
    console.error("Clover checkout error:", error);
    return NextResponse.json(
      { error: "Unable to connect to payment service." },
      { status: 502 }
    );
  }
}
