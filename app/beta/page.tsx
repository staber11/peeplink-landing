import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "PeepLink Beta Access",
  description: "Install PeepLink through TestFlight and learn how to send beta feedback.",
};

const testFlightUrl =
  process.env.NEXT_PUBLIC_TESTFLIGHT_URL ||
  "https://testflight.apple.com/join/REPLACE_ME";

const isPlaceholderLink = testFlightUrl.includes("REPLACE_ME");

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
  maxWidth: "1040px",
  margin: "0 auto",
};

const heroStyle: CSSProperties = {
  background: "rgba(15, 23, 42, 0.82)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "30px",
  padding: "34px",
  boxShadow: "0 24px 80px rgba(15, 23, 42, 0.36)",
  backdropFilter: "blur(16px)",
};

const cardStyle: CSSProperties = {
  background: "rgba(15, 23, 42, 0.54)",
  border: "1px solid rgba(255, 255, 255, 0.14)",
  borderRadius: "22px",
  padding: "24px",
  boxShadow: "0 18px 46px rgba(15, 23, 42, 0.22)",
  backdropFilter: "blur(12px)",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "18px",
  marginTop: "22px",
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
  letterSpacing: "0.04em",
  textTransform: "uppercase",
};

const h1Style: CSSProperties = {
  fontSize: "clamp(38px, 8vw, 72px)",
  lineHeight: 1,
  letterSpacing: "-0.055em",
  margin: "20px 0 14px",
};

const h2Style: CSSProperties = {
  fontSize: "24px",
  margin: "0 0 12px",
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
  marginTop: "10px",
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
  minHeight: "48px",
  padding: "13px 20px",
  borderRadius: "999px",
  background: "#22d3ee",
  color: "#082f49",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 14px 34px rgba(34, 211, 238, 0.28)",
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

function StepCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={cardStyle}>
      <p
        style={{
          margin: "0 0 12px",
          color: "#a5f3fc",
          fontWeight: 900,
          fontSize: "14px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Step {number}
      </p>
      <h2 style={h2Style}>{title}</h2>
      {children}
    </div>
  );
}

export default function BetaAccessPage() {
  const feedbackEmail =
    "mailto:support@peeplinkapp.com?subject=PeepLink%20Beta%20Feedback";

  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        <div style={heroStyle}>
          <Link href="/" style={linkStyle}>
            ← Back to Home
          </Link>

          <div style={{ marginTop: "28px" }}>
            <span style={pillStyle}>PeepLink Beta</span>
          </div>

          <h1 style={h1Style}>Your PeepLink beta starts here.</h1>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "760px",
              fontSize: "19px",
              color: "#dbeafe",
            }}
          >
            Use this page after your beta invitation is approved. It walks you
            through installing TestFlight, joining the PeepLink beta, signing in,
            and sending feedback.
          </p>

          {isPlaceholderLink ? (
            <div
              style={{
                marginTop: "18px",
                padding: "16px 18px",
                borderRadius: "18px",
                background: "rgba(251, 191, 36, 0.14)",
                border: "1px solid rgba(251, 191, 36, 0.32)",
                color: "#fef3c7",
                fontWeight: 800,
                lineHeight: 1.55,
              }}
            >
              Setup note: replace NEXT_PUBLIC_TESTFLIGHT_URL with your approved
              TestFlight public invitation link before emailing this page.
            </div>
          ) : null}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            <a href={testFlightUrl} style={primaryButtonStyle}>
              Open PeepLink TestFlight Invite
            </a>
            <a
              href="https://apps.apple.com/app/testflight/id899247664"
              style={secondaryButtonStyle}
            >
              Install TestFlight
            </a>
            <a href={feedbackEmail} style={secondaryButtonStyle}>
              Send Beta Feedback
            </a>
          </div>
        </div>

        <section style={gridStyle}>
          <StepCard number="1" title="Install TestFlight">
            <p style={paragraphStyle}>
              TestFlight is Apple&apos;s app for installing beta apps. Open the App
              Store link, install TestFlight, and keep it on your iPhone while
              you are testing PeepLink.
            </p>
            <a
              href="https://apps.apple.com/app/testflight/id899247664"
              style={linkStyle}
            >
              Install TestFlight from the App Store →
            </a>
          </StepCard>

          <StepCard number="2" title="Join the PeepLink beta">
            <p style={paragraphStyle}>
              Tap the PeepLink TestFlight invite button. If TestFlight asks you
              to accept the beta, accept it, then install PeepLink.
            </p>
            <a href={testFlightUrl} style={linkStyle}>
              Open the PeepLink TestFlight invite →
            </a>
          </StepCard>

          <StepCard number="3" title="Create or sign in to your account">
            <p style={paragraphStyle}>
              Open PeepLink, accept the Terms & Safety Agreement, confirm you
              are 18 or older, and sign in. If you received an invite link from
              another user, use that original invite link so PeepLink can connect
              the invite correctly.
            </p>
          </StepCard>
        </section>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <h2 style={h2Style}>What to test</h2>
          <p style={paragraphStyle}>
            PeepLink is still in beta, so rough edges are expected. The best
            feedback is specific: what you tried, what happened, and what you
            expected instead.
          </p>
          <ul style={listStyle}>
            <li>Create or sign in to your app account.</li>
            <li>Complete your account profile and account type.</li>
            <li>Search for people, professionals, venues, and categories.</li>
            <li>Follow users, professionals, and venues.</li>
            <li>Send a general user invite or professional invite.</li>
            <li>If you are a service professional, create or claim your profile.</li>
            <li>Try map and venue discovery where available.</li>
            <li>Use Report or Block if you see unsafe or objectionable content.</li>
          </ul>
        </section>

        <section style={gridStyle}>
          <div style={cardStyle}>
            <h2 style={h2Style}>How to send feedback</h2>
            <p style={paragraphStyle}>
              You can send feedback directly from TestFlight, especially for
              screenshots, crashes, and device-specific issues. You can also use
              the support page or email support.
            </p>
            <div style={{ display: "grid", gap: "10px", marginTop: "16px" }}>
              <Link href="/support" style={primaryButtonStyle}>
                Open Support Page
              </Link>
              <a href={feedbackEmail} style={secondaryButtonStyle}>
                Email Beta Feedback
              </a>
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={h2Style}>If you were invited to claim a profile</h2>
            <p style={paragraphStyle}>
              Keep the invite link you received. Professional invite links carry
              a secure claim token so PeepLink knows which reserved professional
              profile belongs to you after you install the app and sign in.
            </p>
            <p style={paragraphStyle}>
              A plain beta TestFlight link lets you install PeepLink. It does
              not prove ownership of a reserved professional profile by itself.
            </p>
          </div>
        </section>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <h2 style={h2Style}>Helpful notes</h2>
          <ul style={listStyle}>
            <li>
              If TestFlight says the beta is full, email support and we will
              check availability.
            </li>
            <li>
              If the app does not appear after joining the beta, open the
              TestFlight app directly and look for PeepLink.
            </li>
            <li>
              PeepLink is adult-only. Please do not share the beta with anyone
              under 18.
            </li>
            <li>
              For privacy questions, review the Privacy Policy or email support.
            </li>
          </ul>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <Link href="/privacy" style={linkStyle}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={linkStyle}>
              Terms of Use
            </Link>
            <Link href="/support" style={linkStyle}>
              Support
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
