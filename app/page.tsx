"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [referredBy, setReferredBy] = useState("");
  const [userType, setUserType] = useState<"customer" | "service-pro">("customer");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setShowCelebration(true);
      const timer = setTimeout(() => setShowCelebration(false), 2600);
      return () => clearTimeout(timer);
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("https://formspree.io/f/mvzvokel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          referredBy,
          userType,
          _subject: "New PeepLink beta signup",
          source: "beta-landing",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the beta list. Watch for an email soon with early access details.");
        setName("");
        setEmail("");
        setReferredBy("");
        setUserType("customer");
      } else {
        setStatus("error");
        setMessage(data?.errors?.[0]?.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #38BDF8 0%, #1D4ED8 50%, #0F172A 100%)",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        position: "relative",
        overflow: "hidden",
      }}
    >
      {showCelebration && (
        <div
          style={{
            pointerEvents: "none",
            position: "fixed",
            inset: 0,
            zIndex: 50,
          }}
        >
          {Array.from({ length: 24 }).map((_, i) => {
            const left = 8 + ((i * 37) % 84);
            const top = 10 + ((i * 19) % 42);
            const size = 8 + ((i * 7) % 12);
            const delay = (i % 8) * 0.08;
            const colors = ["#22D3EE", "#BBF7D0", "#FDE68A", "#FFFFFF"];
            return (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  borderRadius: "999px",
                  background: colors[i % colors.length],
                  boxShadow: `0 0 18px ${colors[i % colors.length]}`,
                  animation: `popBurst 1.1s ease-out ${delay}s forwards`,
                  opacity: 0,
                }}
              />
            );
          })}

          <style>{`
            @keyframes popBurst {
              0% {
                transform: translateY(0) scale(0.4);
                opacity: 0;
              }
              20% {
                opacity: 1;
              }
              100% {
                transform: translateY(-110px) scale(1.15);
                opacity: 0;
              }
            }
          `}</style>
        </div>
      )}

      <section
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          padding: "72px 24px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "8px 14px",
            borderRadius: "999px",
            background: "rgba(34, 197, 94, 0.14)",
            color: "#dcfce7",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.02em",
            marginBottom: "20px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 28px rgba(0,0,0,0.16)",
          }}
        >
          Early Access Beta
        </div>

        <img
          src="/images/icon.png"
          alt="PeepLink icon"
          style={{
            width: "116px",
            height: "116px",
            borderRadius: "28px",
            marginBottom: "18px",
            boxShadow: "0 18px 50px rgba(15, 23, 42, 0.35)",
          }}
        />

        <h1
          style={{
            fontSize: "clamp(46px, 8vw, 76px)",
            lineHeight: 1.02,
            margin: "0 0 14px",
            fontWeight: 900,
            letterSpacing: "-0.04em",
          }}
        >
          Find Your People
        </h1>

        <p
          style={{
            fontSize: "clamp(20px, 3vw, 28px)",
            color: "#e2e8f0",
            margin: "0 0 14px",
            fontWeight: 600,
          }}
        >
          Discover and follow the people who make your scene
        </p>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto 32px",
            fontSize: "18px",
            lineHeight: 1.65,
            color: "#dbeafe",
          }}
        >
          PeepLink helps people discover local bartenders, creators, and
          service pros, follow their favorites, and see where they are right
          now.
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "740px",
            margin: "0 auto",
            display: "grid",
            gap: "14px",
            background: "rgba(15, 23, 42, 0.44)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            borderRadius: "22px",
            padding: "22px",
            boxShadow: "0 18px 48px rgba(0,0,0,0.24)",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "14px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "15px 16px",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                background: "white",
                color: "#0f172a",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "15px 16px",
                borderRadius: "12px",
                border: "1px solid #cbd5e1",
                background: "white",
                color: "#0f172a",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <input
            type="text"
            name="referredBy"
            placeholder="Referred By"
            value={referredBy}
            onChange={(e) => setReferredBy(e.target.value)}
            style={{
              width: "100%",
              padding: "15px 16px",
              borderRadius: "12px",
              border: "1px solid #cbd5e1",
              background: "white",
              color: "#0f172a",
              fontSize: "16px",
              boxSizing: "border-box",
            }}
          />

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px",
              padding: "4px 0 2px",
            }}
          >
            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                borderRadius: "999px",
                background:
                  userType === "customer"
                    ? "rgba(255,255,255,0.16)"
                    : "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#e2e8f0",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              <input
                type="radio"
                name="userType"
                checked={userType === "customer"}
                onChange={() => setUserType("customer")}
              />
              I’m a customer
            </label>

            <label
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                borderRadius: "999px",
                background:
                  userType === "service-pro"
                    ? "rgba(187,247,208,0.18)"
                    : "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
                color: "#e2e8f0",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              <input
                type="radio"
                name="userType"
                checked={userType === "service-pro"}
                onChange={() => setUserType("service-pro")}
              />
              I’m a service pro
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              background: "#22D3EE",
              color: "#082f49",
              padding: "15px 20px",
              borderRadius: "12px",
              border: "none",
              fontSize: "17px",
              fontWeight: 800,
              cursor: status === "sending" ? "default" : "pointer",
              opacity: status === "sending" ? 0.75 : 1,
              boxShadow: "0 10px 26px rgba(34,211,238,0.28)",
            }}
          >
            {status === "sending" ? "Submitting..." : "Join the Beta"}
          </button>

          <p
            style={{
              margin: 0,
              fontSize: "14px",
              color: "#dbeafe",
            }}
          >
            No spam. Just early access updates.
          </p>

          {message ? (
            <div
              style={{
                marginTop: "4px",
                padding: "14px 16px",
                borderRadius: "16px",
                background:
                  status === "success"
                    ? "rgba(187,247,208,0.16)"
                    : "rgba(254,202,202,0.14)",
                border:
                  status === "success"
                    ? "1px solid rgba(187,247,208,0.28)"
                    : "1px solid rgba(254,202,202,0.24)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "18px",
                  color: status === "success" ? "#dcfce7" : "#fecaca",
                  fontWeight: 800,
                }}
              >
                {status === "success" ? "🎉 You're in!" : "Something went wrong"}
              </p>
              <p
                style={{
                  margin: "6px 0 0",
                  fontSize: "15px",
                  color: "#e2e8f0",
                  lineHeight: 1.5,
                }}
              >
                {message}
              </p>
            </div>
          ) : null}

          <div
            style={{
              marginTop: "6px",
              display: "grid",
              gap: "10px",
              justifyItems: "center",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "15px",
                color: "#e2e8f0",
              }}
            >
              Are you a bartender or service professional?
            </p>

            <a
              href="/pros"
              style={{
                display: "inline-block",
                padding: "12px 20px",
                borderRadius: "999px",
                background: "#bbf7d0",
                color: "#082f49",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: "15px",
                boxShadow: "0 10px 24px rgba(187,247,208,0.24)",
                border: "1px solid rgba(255,255,255,0.16)",
              }}
            >
              For Service Pros →
             
            </a>
          </div>
          <div style={{ marginTop: "14px", textAlign: "center" }}>
  <a
    href="/privacy"
    style={{
      color: "rgba(255, 255, 255, 0.82)",
      fontSize: "14px",
      fontWeight: 700,
      textDecoration: "none",
    }}
  >
    Privacy Policy
  </a>
</div>
        </form>
 
        <div style={{ marginTop: "28px" }}>
          <img
            src="/images/qr.png"
            alt="QR code for PeepLink beta"
            style={{
              width: "200px",
              maxWidth: "100%",
              borderRadius: "22px",
              boxShadow: "0 18px 42px rgba(15,23,42,0.28)",
            }}
          />
        </div>
      </section>

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "24px 24px 56px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            margin: "0 0 28px",
            fontWeight: 800,
          }}
        >
          See How It Works
        </h2>

        <div
          style={{
            display: "flex",
            gap: "22px",
            overflowX: "auto",
            paddingBottom: "10px",
            justifyContent: "flex-start",
          }}
        >
          {["/images/s1.png", "/images/s3.png", "/images/s5.png"].map(
            (src, i) => (
              <img
                key={src}
                src={src}
                alt={`PeepLink screenshot ${i + 1}`}
                style={{
                  height: "540px",
                  borderRadius: "26px",
                  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.28)",
                }}
              />
            )
          )}
        </div>
      </section>

      <section
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "6px 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: "18px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {[
            {
              title: "Discover",
              text: "Find the bartenders, entertainers, and service pros you actually want to follow.",
            },
            {
              title: "See Where They Are",
              text: "Know where your favorites are working right now and decide where to go next.",
            },
            {
              title: "Support Directly",
              text: "Make it easy to tip, follow, and stay loyal to the people behind the experience.",
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
                  fontSize: "21px",
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
