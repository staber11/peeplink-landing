import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Privacy Policy | PeepLink",
  description: "PeepLink Privacy Policy",
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
  maxWidth: "880px",
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

const sectionStyle: CSSProperties = {
  marginTop: "30px",
};

const h1Style: CSSProperties = {
  fontSize: "clamp(34px, 7vw, 58px)",
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
  marginTop: "10px",
};

const linkStyle: CSSProperties = {
  color: "#67e8f9",
  fontWeight: 800,
  textDecoration: "none",
};

export default function PrivacyPage() {
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
            PeepLink Privacy Policy
          </p>

          <h1 style={h1Style}>Privacy Policy</h1>

          <p style={paragraphStyle}>
            <strong>Effective Date:</strong> April 2026
          </p>

          <p style={paragraphStyle}>
            PeepLink is an adult-only app for discovering, following, and
            supporting real-world service professionals and venues.
          </p>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Information We Collect</h2>
            <p style={paragraphStyle}>
              We may collect information you provide when using PeepLink,
              including:
            </p>
            <ul style={listStyle}>
              <li>
                account information, such as email address, phone number,
                display name, first name, last name, avatar, and account type
              </li>
              <li>
                age-related information used to confirm adult eligibility
              </li>
              <li>
                professional profile information, such as category, venue
                associations, display name, profile details, payment visibility
                settings, and check-in status
              </li>
              <li>
                venue information, including venue names, addresses, and map
                coordinates
              </li>
              <li>
                follow and invite activity, including who invited whom, accepted
                invite relationships, followed users, followed professionals,
                and followed venues
              </li>
              <li>category information created or managed by users</li>
              <li>
                administrative and moderation information needed to operate the
                app safely
              </li>
              <li>
                payment-related information needed to support tipping through
                Stripe
              </li>
            </ul>
            <p style={paragraphStyle}>
              PeepLink does not store full credit card numbers. Payment
              processing is handled by Stripe.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Location and Map Information</h2>
            <p style={paragraphStyle}>
              PeepLink uses map and venue-related features to help users
              discover venues and professionals. Professional check-ins are tied
              to venues, not silent background person tracking.
            </p>
            <p style={paragraphStyle}>
              When location permissions are used, they are used to show nearby
              venues or map results. You can control location permissions
              through your device settings.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>How We Use Information</h2>
            <p style={paragraphStyle}>We use information to:</p>
            <ul style={listStyle}>
              <li>create and manage accounts</li>
              <li>
                show profiles, venues, categories, follows, and invite
                relationships
              </li>
              <li>support professional check-ins and map-based discovery</li>
              <li>process tips and payments through Stripe</li>
              <li>moderate content and enforce app rules</li>
              <li>improve app functionality and beta testing</li>
              <li>provide support and respond to user requests</li>
            </ul>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Third-Party Services</h2>
            <p style={paragraphStyle}>
              PeepLink uses third-party services to operate the app, including:
            </p>
            <ul style={listStyle}>
              <li>
                Supabase for authentication, database, storage, and backend
                services
              </li>
              <li>Resend for email delivery</li>
              <li>
                Stripe for payment processing and connected account onboarding
              </li>
              <li>
                Apple services, including MapKit, TestFlight, and App Store
                infrastructure
              </li>
              <li>
                SMS delivery providers if SMS invite or verification features
                are enabled
              </li>
            </ul>
            <p style={paragraphStyle}>
              These services may process information according to their own
              privacy policies.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Public and Private Profile Information</h2>
            <p style={paragraphStyle}>
              User-facing screens are intended to show display names rather than
              private email addresses. Email addresses and phone numbers are not
              intended to be publicly visible unless a user explicitly provides
              them as public contact information.
            </p>
            <p style={paragraphStyle}>
              Professional profiles, public venues, public categories, and
              approved public discovery information may be visible to other
              users depending on account settings and app rules.
            </p>
            <p style={paragraphStyle}>
              Private categories are visible only to the creator, assigned
              users, and administrators.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Invites and Follows</h2>
            <p style={paragraphStyle}>
              When you send or accept an invite, PeepLink may create follow
              relationships between the inviter and invited user. This helps
              users connect without needing to manually search for each other
              later.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Payments</h2>
            <p style={paragraphStyle}>
              PeepLink supports tipping through Stripe. Stripe may collect and
              process payment details, identity verification information, and
              payout information. PeepLink does not store full card numbers.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Data Retention</h2>
            <p style={paragraphStyle}>
              We retain information as needed to operate the app, provide
              support, comply with legal obligations, prevent abuse, and
              maintain records of payments, moderation, and account activity.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Account Deletion</h2>
            <p style={paragraphStyle}>
              Users may request account deletion by contacting:
            </p>
            <p style={paragraphStyle}>
              <a href="mailto:support@peeplinkapp.com" style={linkStyle}>
                support@peeplinkapp.com
              </a>
            </p>
            <p style={paragraphStyle}>
              During beta, administrators may also delete test accounts to
              support testing and troubleshooting.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Children</h2>
            <p style={paragraphStyle}>
              PeepLink is intended for adults only and is not directed to
              children or users under 18.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Changes to This Policy</h2>
            <p style={paragraphStyle}>
              We may update this Privacy Policy as PeepLink changes. Updates
              will be posted on this page with a revised effective date.
            </p>
          </section>

          <section style={sectionStyle}>
            <h2 style={h2Style}>Contact</h2>
            <p style={paragraphStyle}>For privacy questions, contact:</p>
            <p style={paragraphStyle}>
              <a href="mailto:support@peeplinkapp.com" style={linkStyle}>
                support@peeplinkapp.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
