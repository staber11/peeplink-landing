import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "PeepLink Beta",
  description:
    "Install the PeepLink beta through Apple TestFlight and start testing core discovery features.",
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
          letterSpacing: 0,
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
    "mailto:support@peeplinkapp.com?subject=PeepLink%20Beta%20Help";

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

          <h1 style={h1Style}>PeepLink Beta</h1>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "760px",
              fontSize: "19px",
              color: "#dbeafe",
            }}
          >
            PeepLink is an adult-only, real-world discovery app for finding,
            following, and supporting service professionals and venues. If you
            were invited to test PeepLink, use this page from your iPhone to get
            started through Apple TestFlight.
          </p>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "760px",
              color: "#dbeafe",
            }}
          >
            PeepLink uses venue-based discovery. It does not silently track users
            in the background, and professional check-ins are explicit actions
            tied to venues.
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
              If you received a private TestFlight invitation, open that original
              invite from your iPhone. The direct beta invite button will work
              once the public TestFlight link is configured.
            </div>
          ) : null}

          <div style={buttonRowStyle}>
            {isPlaceholderLink ? null : (
              <a href={testFlightUrl} style={primaryButtonStyle}>
                Open PeepLink TestFlight Invite
              </a>
            )}
            <a
              href="https://apps.apple.com/app/testflight/id899247664"
              style={secondaryButtonStyle}
            >
              Install TestFlight
            </a>
            <Link href="/beta-guide" style={secondaryButtonStyle}>
              Read the Beta Tester Guide
            </Link>
            <a href={feedbackEmail} style={secondaryButtonStyle}>
              Email Support
            </a>
          </div>
        </div>

        <section style={gridStyle}>
          <StepCard number="1" title="Open the invitation from your iPhone">
            <p style={paragraphStyle}>
              Open the TestFlight invitation you received from your iPhone. If
              someone invited you to claim a professional profile, keep using
              that original invite link so PeepLink can connect the claim after
              you sign in.
            </p>
          </StepCard>

          <StepCard number="2" title="Install Apple TestFlight if prompted">
            <p style={paragraphStyle}>
              TestFlight is Apple&apos;s app for installing beta apps. If your
              iPhone asks you to install it, use the App Store link and keep
              TestFlight on your device while you are testing PeepLink.
            </p>
            <a
              href="https://apps.apple.com/app/testflight/id899247664"
              style={linkStyle}
            >
              Install TestFlight from the App Store →
            </a>
          </StepCard>

          <StepCard number="3" title="Accept the PeepLink beta invite">
            <p style={paragraphStyle}>
              In TestFlight, accept the PeepLink beta invite. If the beta is
              full or the invite does not open correctly, email support and
              include the email address or phone number that received the invite.
            </p>
            {isPlaceholderLink ? null : (
              <a href={testFlightUrl} style={linkStyle}>
                Open the PeepLink TestFlight invite →
              </a>
            )}
          </StepCard>

          <StepCard number="4" title="Install PeepLink">
            <p style={paragraphStyle}>
              After accepting the invite, tap Install in TestFlight. If PeepLink
              does not appear on your Home Screen, open the TestFlight app and
              look for PeepLink there.
            </p>
          </StepCard>

          <StepCard number="5" title="Create or sign in to your account">
            <p style={paragraphStyle}>
              Open PeepLink, accept the Terms & Safety Agreement, confirm you
              are 18 or older, and create or sign in to your account.
            </p>
          </StepCard>

          <StepCard number="6" title="Complete your profile">
            <p style={paragraphStyle}>
              Add the basic profile details you are comfortable testing with,
              choose the account type that fits you, and create or claim a
              professional profile only if that applies to you.
            </p>
          </StepCard>

          <StepCard number="7" title="Start testing core features">
            <p style={paragraphStyle}>
              Try Search, Following, Invite, Map, Account, Venues, Categories,
              and Professional Profile features. The most helpful feedback says
              what you tried, what happened, and what you expected.
            </p>
          </StepCard>
        </section>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <h2 style={h2Style}>Helpful beta notes</h2>
          <p style={paragraphStyle}>
            PeepLink is still in beta, so rough edges are expected. Core testing
            is focused on account setup, discovery, following, invites, venues,
            categories, map behavior, and professional profile workflows.
          </p>
          <ul style={listStyle}>
            <li>PeepLink is adult-only. Please do not share the beta with anyone under 18.</li>
            <li>Venue and map features are based on venues, not silent background tracking.</li>
            <li>Professional check-ins are explicit and can be changed or ended in the app.</li>
            <li>Stripe, tipping, and payment features are part of the beta direction but are not required for testing the core app.</li>
          </ul>

          <div style={buttonRowStyle}>
            <Link href="/beta-guide" style={primaryButtonStyle}>
              Open the Beta Tester Guide
            </Link>
            <a href={feedbackEmail} style={secondaryButtonStyle}>
              support@peeplinkapp.com
            </a>
            <Link href="/privacy" style={secondaryButtonStyle}>
              Privacy Policy
            </Link>
          </div>
        </section>

        <section style={gridStyle}>
          <div style={cardStyle}>
            <h2 style={h2Style}>How to send feedback or get help</h2>
            <p style={paragraphStyle}>
              You can send feedback directly from TestFlight, especially for
              screenshots, crashes, and device-specific issues. You can also
              email support for invite trouble, account setup questions, or
              anything that blocks testing.
            </p>
            <div style={{ display: "grid", gap: "10px", marginTop: "16px" }}>
              <a href={feedbackEmail} style={primaryButtonStyle}>
                Email support@peeplinkapp.com
              </a>
              <Link href="/support" style={secondaryButtonStyle}>
                Open Support Page
              </Link>
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
          <h2 style={h2Style}>More beta resources</h2>
          <ul style={listStyle}>
            <li>
              Read the Beta Tester Guide for a practical walkthrough of what to
              test in each app area.
            </li>
            <li>
              Review the Privacy Policy for how PeepLink handles account,
              venue, check-in, map, invite, and payment-related data.
            </li>
            <li>
              Contact support if you need help with an invite, TestFlight,
              account access, or beta feedback.
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
            <Link href="/beta-guide" style={linkStyle}>
              Beta Tester Guide
            </Link>
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
