import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Download PeepLink Beta",
  description:
    "Download the PeepLink beta through Apple's TestFlight beta program.",
};

// TODO: Replace with Apple's public PeepLink TestFlight URL after approval.
const PUBLIC_TESTFLIGHT_URL = "";
const hasPublicTestFlightUrl = PUBLIC_TESTFLIGHT_URL.length > 0;
const installPeepLinkHref = hasPublicTestFlightUrl
  ? PUBLIC_TESTFLIGHT_URL
  : "#public-testflight-link";

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, #22d3ee 0%, #2563eb 36%, #0f172a 100%)",
  color: "white",
  padding: "32px 18px 56px",
  boxSizing: "border-box",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

const shellStyle: CSSProperties = {
  width: "100%",
  maxWidth: "1080px",
  margin: "0 auto",
};

const cardStyle: CSSProperties = {
  background: "rgba(15, 23, 42, 0.54)",
  border: "1px solid rgba(255, 255, 255, 0.14)",
  borderRadius: "22px",
  padding: "24px",
  boxShadow: "0 18px 46px rgba(15, 23, 42, 0.22)",
  backdropFilter: "blur(12px)",
};

const heroStyle: CSSProperties = {
  ...cardStyle,
  background: "rgba(15, 23, 42, 0.84)",
  borderRadius: "30px",
  padding: "34px",
  boxShadow: "0 24px 80px rgba(15, 23, 42, 0.36)",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
  marginTop: "22px",
};

const buttonRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
  marginTop: "24px",
};

const pillStyle: CSSProperties = {
  display: "inline-block",
  padding: "7px 12px",
  borderRadius: "999px",
  background: "rgba(34, 211, 238, 0.16)",
  border: "1px solid rgba(103, 232, 249, 0.32)",
  color: "#a5f3fc",
  fontSize: "13px",
  fontWeight: 800,
  letterSpacing: 0,
  textTransform: "uppercase",
};

const h1Style: CSSProperties = {
  fontSize: "clamp(38px, 8vw, 72px)",
  lineHeight: 1,
  letterSpacing: 0,
  margin: "20px 0 14px",
};

const h2Style: CSSProperties = {
  fontSize: "clamp(26px, 4vw, 38px)",
  lineHeight: 1.1,
  margin: "0 0 12px",
};

const h3Style: CSSProperties = {
  fontSize: "22px",
  lineHeight: 1.18,
  margin: "0 0 10px",
};

const paragraphStyle: CSSProperties = {
  color: "rgba(255, 255, 255, 0.82)",
  fontSize: "16px",
  lineHeight: 1.72,
  margin: "0 0 14px",
};

const listStyle: CSSProperties = {
  color: "rgba(255, 255, 255, 0.82)",
  fontSize: "16px",
  lineHeight: 1.72,
  paddingLeft: "22px",
  margin: "10px 0 0",
};

const linkStyle: CSSProperties = {
  color: "#67e8f9",
  fontWeight: 800,
  textDecoration: "none",
};

const primaryButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "58px",
  padding: "16px 24px",
  borderRadius: "999px",
  background: "#bbf7d0",
  color: "#052e16",
  fontSize: "18px",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 18px 44px rgba(187, 247, 208, 0.32)",
};

const secondaryButtonStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "48px",
  padding: "13px 20px",
  borderRadius: "999px",
  background: "rgba(255, 255, 255, 0.12)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  color: "#e0f2fe",
  fontWeight: 900,
  textDecoration: "none",
};

const steps = [
  {
    title: "Install TestFlight",
    text: "TestFlight is Apple's official beta testing app. Install it once, then use it to install PeepLink.",
  },
  {
    title: "Open the PeepLink beta link",
    text: "Use the PeepLink beta button on this page after the public TestFlight link is available.",
  },
  {
    title: "Install PeepLink",
    text: "Accept the beta in TestFlight, then tap Install to download PeepLink to your iPhone.",
  },
  {
    title: "Create your account",
    text: "Launch PeepLink, confirm the adult-only requirements, and create or sign in to your account.",
  },
  {
    title: "Start testing",
    text: "Try Search, Map, Following, Venues, Categories, Professional Profiles, and explicit venue check-ins.",
  },
];

function TestFlightBadge() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30px",
        height: "30px",
        borderRadius: "10px",
        background: "rgba(34, 211, 238, 0.24)",
        color: "#a5f3fc",
        fontSize: "12px",
        fontWeight: 900,
        marginRight: "10px",
      }}
    >
      TF
    </span>
  );
}

export default function DownloadPage() {
  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        <section style={heroStyle}>
          <Link href="/" style={linkStyle}>
            Back to Home
          </Link>

          <div style={{ marginTop: "28px" }}>
            <span style={pillStyle}>PeepLink Beta Download</span>
          </div>

          <h1 style={h1Style}>Download PeepLink Beta</h1>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "780px",
              fontSize: "19px",
              color: "#dbeafe",
            }}
          >
            Join PeepLink through Apple's TestFlight beta program. This page is
            the permanent PeepLink beta download page for QR codes, social media
            links, beta emails, and direct onboarding.
          </p>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "780px",
              color: "#dbeafe",
            }}
          >
            Scanning a PeepLink QR code brings you here first so you can get the
            right install steps, download TestFlight if needed, and then install
            PeepLink.
          </p>

          <div style={buttonRowStyle}>
            <a
              href="https://apps.apple.com/app/testflight/id899247664"
              style={secondaryButtonStyle}
            >
              <TestFlightBadge />
              Get TestFlight
            </a>
            <a href={installPeepLinkHref} style={primaryButtonStyle}>
              Install PeepLink Beta
            </a>
          </div>

          <p style={{ ...paragraphStyle, marginTop: "14px" }}>
            <strong style={{ color: "#f8fafc" }}>
              Apple's official beta testing app:
            </strong>{" "}
            TestFlight is required for installing the PeepLink beta on iPhone.
          </p>
        </section>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <span style={pillStyle}>Install Steps</span>
          <h2 style={{ ...h2Style, marginTop: "16px" }}>
            Get Started in a Few Minutes
          </h2>
          <ol style={listStyle}>
            {steps.map((step) => (
              <li key={step.title}>
                <strong style={{ color: "#f8fafc" }}>{step.title}:</strong>{" "}
                {step.text}
              </li>
            ))}
          </ol>
        </section>

        <section id="public-testflight-link" style={gridStyle}>
          <div style={cardStyle}>
            <h2 style={h2Style}>Public TestFlight Link</h2>
            <p style={paragraphStyle}>
              This page is the permanent PeepLink beta download page. The
              TestFlight button will be updated when the public TestFlight link
              is available.
            </p>
            <p style={paragraphStyle}>
              Until then, use the PeepLink invitation link you received directly
              from the beta team.
            </p>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>Marketing and QR Codes</h2>
            <p style={paragraphStyle}>
              QR codes and marketing links should point to this PeepLink
              download page, not directly to Apple TestFlight. That keeps the
              install instructions stable even if the TestFlight link changes.
            </p>
          </div>
        </section>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <h2 style={h2Style}>After You Install</h2>
          <p style={paragraphStyle}>
            PeepLink is an adult-only, real-world discovery app for finding,
            following, and supporting service professionals and venues. PeepLink
            uses venue-based discovery and does not silently track users in the
            background. Professional check-ins are explicit and tied to venues.
          </p>
          <div style={buttonRowStyle}>
            <Link href="/beta" style={secondaryButtonStyle}>
              Beta Overview
            </Link>
            <Link href="/beta-guide" style={primaryButtonStyle}>
              Beta Tester Guide
            </Link>
            <Link href="/support" style={secondaryButtonStyle}>
              Support
            </Link>
            <Link href="/privacy" style={secondaryButtonStyle}>
              Privacy
            </Link>
          </div>
        </section>

        <section style={gridStyle}>
          <div>
            <img
              src="/images/app-store/search-venues.png"
              alt="PeepLink Search tab showing venue results"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.3)",
              }}
            />
            <h3 style={{ ...h3Style, marginTop: "14px" }}>Search</h3>
            <p style={paragraphStyle}>
              Find people, professionals, venues, and categories.
            </p>
          </div>

          <div>
            <img
              src="/images/app-store/map-venue-discovery.png"
              alt="PeepLink Map tab showing venue discovery"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.3)",
              }}
            />
            <h3 style={{ ...h3Style, marginTop: "14px" }}>Map</h3>
            <p style={paragraphStyle}>
              Explore venue-based discovery and explicit professional check-ins.
            </p>
          </div>

          <div>
            <img
              src="/images/app-store/check-in-status.png"
              alt="PeepLink Check In screen showing current status"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.3)",
              }}
            />
            <h3 style={{ ...h3Style, marginTop: "14px" }}>Check-In</h3>
            <p style={paragraphStyle}>
              Test professional check-ins that are explicit and venue-based.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
