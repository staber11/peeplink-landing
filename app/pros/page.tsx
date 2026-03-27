import Link from "next/link";

export default function ProsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #38BDF8 0%, #1D4ED8 50%, #0F172A 100%)",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        padding: "72px 24px 80px",
      }}
    >
      <section
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#dcfce7",
            textDecoration: "none",
            fontWeight: 700,
            display: "inline-block",
            marginBottom: "26px",
          }}
        >
          ← Back to Home
        </Link>

        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "rgba(34, 197, 94, 0.14)",
            color: "#dcfce7",
            fontSize: "14px",
            fontWeight: 700,
            marginBottom: "18px",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          For Service Pros
        </div>

        <h1
          style={{
            fontSize: "clamp(42px, 7vw, 64px)",
            lineHeight: 1.06,
            margin: "0 0 16px",
            fontWeight: 900,
            letterSpacing: "-0.03em",
          }}
        >
          Built for bartenders, entertainers, and service pros
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#e2e8f0",
            maxWidth: "800px",
            marginBottom: "36px",
          }}
        >
          PeepLink is designed to help service professionals get discovered,
          grow followers, stay visible, and make support easier in the real world.
        </p>

        <div
          style={{
            display: "grid",
            gap: "18px",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {[
            {
              title: "Get Found",
              text: "Build a profile that helps people discover you and remember where to find you.",
            },
            {
              title: "Grow Your Following",
              text: "Make it easier for regulars, fans, and supporters to stay connected to you.",
            },
            {
              title: "Show Where You Are",
              text: "Let people know where you’re working right now and where they can find you next.",
            },
            {
              title: "Support Directly",
              text: "Make tipping and direct support easier and more visible.",
            },
            {
              title: "Future Schedule Tools",
              text: "We’re exploring ways to help pros share appearances, shifts, and where they’ll be next.",
            },
            {
              title: "Built for Real-World Pros",
              text: "PeepLink is focused on the people behind the experience, not another endless social feed.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(15, 23, 42, 0.34)",
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: "20px",
                padding: "24px",
                backdropFilter: "blur(10px)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: "20px",
                  color: "#f8fafc",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#dbeafe",
                  lineHeight: 1.6,
                  fontSize: "15px",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}