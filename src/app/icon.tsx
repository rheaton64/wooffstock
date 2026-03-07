import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

async function loadFont() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900",
    {
      headers: {
        // Old user-agent to get TTF format (Satori doesn't support woff2)
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    }
  ).then((res) => res.text());

  const match = css.match(/src: url\((.+?)\)/);
  if (!match) throw new Error("Could not load Playfair Display font");

  return fetch(match[1]).then((res) => res.arrayBuffer());
}

export default async function Icon() {
  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2C1810",
          borderRadius: "4px",
        }}
      >
        <span
          style={{
            fontFamily: "Playfair Display",
            fontWeight: 900,
            fontSize: 26,
            color: "#F2D479",
          }}
        >
          W
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: fontData,
          weight: 900,
          style: "normal" as const,
        },
      ],
    }
  );
}
