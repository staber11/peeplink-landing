import Link from "next/link";
import type { CSSProperties } from "react";
import SupportForm from "./SupportForm";

export const metadata = {
  title: "Support | PeepLink",
  description: "PeepLink support, beta feedback, safety reports, and account help.",
};

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at top, #22d3ee 0%, #2563eb 35%, #0f172a 100%)",
  color: "white",
  padding: "32px 18px",
  boxSizing: "border-box",
};

const shellStyle: CSSProperties = {
  width: "100%",
  maxWidth: "980px",
  margin: "0 auto",
};

const cardStyle: CSSProperties = {
  background: "rgba(15, 23, 42, 0.82)",
  border: "1px solid rgba(255, 255, 255, 0.16)",
  borderRadius: "28px",
  padding: "32px",
  boxShadow: "0 24px 80px rgba(15, 23, 42, 0.35)",
  backdropFilter: "blur(16px)",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
  marginTop: "24px",
};

const miniCardStyle: CSSProperties = {
  background: "rgba(255, 255, 255, 0.08)",
  border: "1px solid rgba(255, 255, 255, 0.14)",
  borderRadius: "20px",
  padding: "18px",
};

const h1Style: CSSProperties = {
  fontSize: "clamp(36px, 7vw, 62px)",
  lineHeight: 1,
  letterSpacing: "-0.05em",
  margin: "22px 0 12px",
};

const h2Style: CSSProperties = {
  fontSize: "24px",
  margin: "0 0 12px",
};

const paragraphStyle: CSSProperties = {
  color: "rgba(255, 255, 255, 0.82)",
  fontSize: "16px",
  lineHeight: 1.75,
  margin: "0 0 14px",
};

const listStyle: CSSProperties = {
  color: "rgba(255, 255, 255, 0.82)",
  fontSize: "16px",
  lineHeight: 1.7,
  paddingLeft: "22px",
  margin: "10px 0 0",
};

const linkStyle: CSSProperties = {
  color: "#67e8f9",
  fontWeight: 800,
  textDecoration: "none",
};

const buttonLinkStyle: CSSProperties = {
  display: "inline-block",
  padding: "12px 16px",
  borderRadius: "999px",
  background: "#22D3EE",
  color: "#082f49",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 10px 26px rgba(34,211,238,0.22)",
};

export default function SupportPage() {
  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        <div style={cardStyle}>
          <Link href="/" style={linkStyle}>
            ← Back to Home
          </Link>

          <p
            style={{
              display: "inline-block",
              margin: "28px 0 0",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "rgba(34, 211, 238, 0.16)",
              border: "1px solid rgba(103, 232, 249, 0.32)",
              color: "#a5f3fc",
              fontSize: "13px",
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            PeepLink Support
          </p>

          <h1 style={h1Style}>PeepLink Support</h1>

          <p style={paragraphStyle}>
            For questions, account help, safety concerns, reports, or app
            support, contact us at support@peeplinkapp.com.
          </p>

          <p style={paragraphStyle}>
            Need help with PeepLink? Use this page for app support, beta
            feedback, safety concerns, account questions, and profile or venue
            corrections. You do not need to sign in to contact support.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a
              href="mailto:support@peeplinkapp.com?subject=PeepLink%20Support%20Request"
              style={buttonLinkStyle}
            >
              Email Support
            </a>
            <a
              href="mailto:support@peeplinkapp.com?subject=PeepLink%20Beta%20Feedback"
              style={{
                ...buttonLinkStyle,
                background: "#bbf7d0",
                color: "#064e3b",
              }}
            >
              Send Beta Feedback
            </a>
            <a
              href="mailto:support@peeplinkapp.com?subject=PeepLink%20Safety%20Report"
              style={{
                ...buttonLinkStyle,
                background: "#fecaca",
                color: "#7f1d1d",
              }}
            >
              Report Safety Issue
            </a>
          </div>

          <section style={gridStyle}>
            <div style={miniCardStyle}>
              <h2 style={h2Style}>What to include</h2>
              <ul style={listStyle}>
                <li>Your display name</li>
                <li>Your account email or Apple relay email, if comfortable</li>
                <li>What you were trying to do</li>
                <li>What happened instead</li>
                <li>Your device model and iOS version</li>
                <li>Screenshots or a screen recording, if helpful</li>
              </ul>
            </div>

            <div style={miniCardStyle}>
              <h2 style={h2Style}>Common topics</h2>
              <ul style={listStyle}>
                <li>Account help</li>
                <li>Invite and claim profile help</li>
                <li>Reporting or blocking users</li>
                <li>Deleting an account</li>
                <li>General support</li>
                <li>Beta bugs and feedback</li>
                <li>Profile, category, or venue corrections</li>
              </ul>
            </div>
          </section>

          <section style={{ marginTop: "28px" }}>
            <SupportForm />
          </section>

          <section style={gridStyle}>
            <div style={miniCardStyle}>
              <h2 style={h2Style}>Safety and abuse</h2>
              <p style={paragraphStyle}>
                To report objectionable content or abusive behavior, use the
                in-app Report or Block controls when possible. Those controls
                create a moderation record for developer review. You may also
                email support@peeplinkapp.com with details.
              </p>
            </div>

            <div style={miniCardStyle}>
              <h2 style={h2Style}>Account deletion</h2>
              <p style={paragraphStyle}>
                You can initiate account deletion inside the app at:
              </p>
              <p style={{ ...paragraphStyle, fontWeight: 900, color: "white" }}>
                Account → Privacy & Account → Delete Account
              </p>
              <p style={paragraphStyle}>
                This support page is not a replacement for the in-app deletion
                flow.
              </p>
            </div>

            <div style={miniCardStyle}>
              <h2 style={h2Style}>Beta testers</h2>
              <p style={paragraphStyle}>
                If you are testing PeepLink through TestFlight, you can send
                feedback through TestFlight or use the form on this page. The
                form is best for repeatable bugs, feature feedback, and account
                support questions.
              </p>
            </div>
          </section>

          <section
            style={{
              marginTop: "28px",
              paddingTop: "22px",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <Link href="https://peeplinkapp.com/privacy" style={linkStyle}>
              Privacy Policy
            </Link>
            <Link href="/terms" style={linkStyle}>
              Terms of Use
            </Link>
            <a href="mailto:support@peeplinkapp.com" style={linkStyle}>
              support@peeplinkapp.com
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
