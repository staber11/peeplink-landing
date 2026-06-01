import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "PeepLink Beta Tester Guide",
  description:
    "A simple guide for testing PeepLink account setup, discovery, follows, invites, venues, categories, professional profiles, check-ins, and map features.",
};

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
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
  letterSpacing: 0,
  textTransform: "uppercase",
};

const h1Style: CSSProperties = {
  fontSize: "clamp(36px, 8vw, 68px)",
  lineHeight: 1.04,
  letterSpacing: 0,
  margin: "20px 0 14px",
};

const h2Style: CSSProperties = {
  fontSize: "23px",
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

const sections = [
  {
    title: "What PeepLink is",
    body: "PeepLink is an adult-only, real-world discovery app for finding, following, and supporting service professionals and venues. It uses venue-based discovery, does not silently track users in the background, and treats professional check-ins as explicit actions tied to venues.",
    items: [
      "Use real test behavior when you can, but avoid posting anything private or unsafe.",
      "Core beta testing does not require payment or tipping tests.",
      "Stripe and tipping features are part of the beta direction, but they are not required for testing discovery, follows, invites, venues, categories, profiles, or maps.",
    ],
  },
  {
    title: "Create your account",
    body: "Create or sign in to a PeepLink account from the TestFlight build. Confirm the adult-only requirements and use the invite link you received if someone invited you directly.",
    items: [
      "Try both first-time account creation and returning sign-in if you can.",
      "If an invite should connect you to another user, start from the original invite link.",
      "Report any sign-in loop, missing verification step, or confusing account state.",
    ],
  },
  {
    title: "Complete your profile",
    body: "Add enough profile information to test discovery and follow flows. Use a display name that other testers can recognize.",
    items: [
      "Check that your display name appears correctly in user-facing places.",
      "Choose the account type that fits how you are testing.",
      "Look for places where private contact details appear unexpectedly.",
    ],
  },
  {
    title: "Search for people, professionals, venues, and categories",
    body: "Use Search to browse and look up people, claimed professional profiles, venues, and categories. PeepLink beta search should feel useful even before the network is large.",
    items: [
      "Try empty searches and specific names or venue terms.",
      "Search category words that describe a professional service.",
      "Check whether results feel clear, safe, and relevant.",
    ],
  },
  {
    title: "Follow people, professionals, and venues",
    body: "Follow a few users, professional profiles, and venues, then check whether those relationships show up where you expect.",
    items: [
      "Follow and unfollow from different screens.",
      "Open Following and confirm the lists update correctly.",
      "Check that followed venues and followed professionals make sense on the Map tab when data is available.",
    ],
  },
  {
    title: "Invite a user",
    body: "Use a general user invite when you want another person to join PeepLink without creating a professional profile for them.",
    items: [
      "Try copy link, QR, email, or SMS options if available in your build.",
      "After the invited user signs in, check whether the relationship between inviter and invited user is easy to find.",
      "Do not use a professional invite for someone who only needs a normal account.",
    ],
  },
  {
    title: "Invite a professional",
    body: "Use a professional invite when you are creating a reserved professional profile for someone else to claim later.",
    items: [
      "Add only the information needed to identify the invited professional.",
      "Include category or venue hints only when they are useful and accurate.",
      "Keep the invite link available because it carries the claim context.",
    ],
  },
  {
    title: "Claim an invited professional profile",
    body: "If someone invited you as a professional, start from the invite link they sent. That link helps PeepLink match your account to the reserved professional profile after you install and sign in.",
    items: [
      "Confirm the claimed profile looks like the profile you expected.",
      "Update category, venue, and profile details after claiming if needed.",
      "Email support if a claim link opens the app but does not show the expected profile.",
    ],
  },
  {
    title: "Manage venues",
    body: "Use venue tools to add, find, save, or update venues that are relevant to a professional profile or discovery flow.",
    items: [
      "Search for real venues before manually adding a duplicate.",
      "Check whether saved venues appear on the profile and in check-in flows.",
      "Report duplicate, missing, or confusing venue records.",
    ],
  },
  {
    title: "Manage categories",
    body: "Use categories to describe professional services or organize discovery. Public category visibility may depend on approval or moderation rules.",
    items: [
      "Create simple category names that other testers would understand.",
      "Try private categories if your build exposes them.",
      "Report categories that appear publicly when they should not.",
    ],
  },
  {
    title: "Create or edit a professional profile",
    body: "If you are testing as a service professional, create or edit your professional profile from Account.",
    items: [
      "Confirm the profile can save even if category or venue is optional in that moment.",
      "Add venues that represent where people can find you in the real world.",
      "Review how the profile looks to other testers.",
    ],
  },
  {
    title: "Check in at a venue as a professional",
    body: "Professional check-ins are explicit and tied to venues. Use Check In to show a live venue-based presence only when you intentionally choose to do so.",
    items: [
      "Try the Working status at a saved venue.",
      "Try ending or changing a check-in and confirm the app updates clearly.",
      "Remember that PeepLink should not silently track you in the background.",
    ],
  },
  {
    title: "Use the Map tab",
    body: "Use the Map tab to test venue-based discovery and followed professional check-ins where data is available.",
    items: [
      "Check nearby or current-area behavior before changing distance filters.",
      "Look for followed venues and active followed professional check-ins.",
      "Report pins that feel stale, too precise, missing, or unrelated to venues.",
    ],
  },
  {
    title: "Send feedback or request help",
    body: "Useful beta feedback is specific. Include what you tried, what happened, what you expected, your device model, and whether you can reproduce it.",
    items: [
      "Use TestFlight feedback for crashes, screenshots, and device-specific issues.",
      "Email support@peeplinkapp.com for invite help, account trouble, privacy questions, or testing blockers.",
      "Include the feature area in the subject when possible, such as Search, Invite, Map, Venues, Categories, or Profile.",
    ],
  },
];

function GuideSection({
  title,
  body,
  items,
}: {
  title: string;
  body: string;
  items: string[];
}) {
  return (
    <section style={cardStyle}>
      <h2 style={h2Style}>{title}</h2>
      <p style={paragraphStyle}>{body}</p>
      <ul style={listStyle}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function BetaGuidePage() {
  const supportEmail =
    "mailto:support@peeplinkapp.com?subject=PeepLink%20Beta%20Help";

  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        <div style={heroStyle}>
          <Link href="/" style={linkStyle}>
            Back to Home
          </Link>

          <div style={{ marginTop: "28px" }}>
            <span style={pillStyle}>Beta Tester Guide</span>
          </div>

          <h1 style={h1Style}>PeepLink Beta Tester Guide</h1>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "760px",
              fontSize: "19px",
              color: "#dbeafe",
            }}
          >
            Use this guide to test PeepLink in a practical way: create your
            account, complete your profile, search, follow, invite, manage
            venues and categories, try professional profile flows, and send
            clear feedback.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "24px",
            }}
          >
            <Link href="/beta" style={primaryButtonStyle}>
              Download the PeepLink Beta
            </Link>
            <a href={supportEmail} style={secondaryButtonStyle}>
              Email Beta Support
            </a>
            <Link href="/privacy" style={secondaryButtonStyle}>
              Privacy Policy
            </Link>
          </div>
        </div>

        <div style={gridStyle}>
          {sections.map((section) => (
            <GuideSection
              key={section.title}
              title={section.title}
              body={section.body}
              items={section.items}
            />
          ))}
        </div>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <h2 style={h2Style}>Need help?</h2>
          <p style={paragraphStyle}>
            Send beta questions, invite issues, account trouble, privacy
            questions, or testing blockers to{" "}
            <a href={supportEmail} style={linkStyle}>
              support@peeplinkapp.com
            </a>
            .
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            <Link href="/beta" style={linkStyle}>
              Beta Install Page
            </Link>
            <Link href="/support" style={linkStyle}>
              Support Page
            </Link>
            <Link href="/terms" style={linkStyle}>
              Terms of Use
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
