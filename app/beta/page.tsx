import Link from "next/link";
import type { CSSProperties } from "react";

export const metadata = {
  title: "PeepLink Beta",
  description:
    "Install the PeepLink beta through Apple TestFlight and start testing core discovery features.",
};

// TODO: Replace with Apple's public PeepLink TestFlight URL after approval.
const PUBLIC_TESTFLIGHT_URL = "";
const hasPublicTestFlightUrl = PUBLIC_TESTFLIGHT_URL.length > 0;
const installPeepLinkHref = hasPublicTestFlightUrl
  ? PUBLIC_TESTFLIGHT_URL
  : "/download#public-testflight-link";

const feedbackEmail =
  "mailto:support@peeplinkapp.com?subject=PeepLink%20Beta%20Help";

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
  maxWidth: "1120px",
  margin: "0 auto",
};

const heroStyle: CSSProperties = {
  background: "rgba(15, 23, 42, 0.84)",
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

const screenshotGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
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

const quickSteps = [
  {
    number: "1",
    title: "Install Apple's TestFlight app",
    text: "TestFlight is Apple's tool for installing beta apps. If it is already on your iPhone, you can skip straight to your invitation.",
  },
  {
    number: "2",
    title: "Accept your PeepLink beta invitation",
    text: "Open the invitation email or link from your iPhone, accept the PeepLink beta, and install the app from TestFlight.",
  },
  {
    number: "3",
    title: "Create your account and start exploring",
    text: "Open PeepLink, confirm the adult-only requirements, create or sign in to your account, and try the core beta features.",
  },
];

const testFlightSteps = [
  "Download TestFlight from Apple if your iPhone prompts you.",
  "Open the PeepLink invitation email or invite link from your iPhone.",
  "Tap Accept in TestFlight to join the PeepLink beta.",
  "Tap Install to download PeepLink.",
  "Launch PeepLink from your Home Screen or from TestFlight.",
  "Create your account, sign in, and complete your profile.",
];

const testingFocus = [
  "Account creation",
  "Sign in",
  "Search",
  "Following",
  "Professional profiles",
  "Venue discovery",
  "Check-ins",
  "Categories",
  "Map functionality",
  "Performance",
  "Crashes",
  "Usability",
];

const screenshots = [
  {
    title: "Search",
    src: "/images/app-store/search-venues.png",
    alt: "PeepLink Search tab showing venue results",
    text: "Look for people, professionals, venues, and categories.",
  },
  {
    title: "Map",
    src: "/images/app-store/map-venue-discovery.png",
    alt: "PeepLink Map tab showing venue discovery",
    text: "Review venue-based discovery and map pins.",
  },
  {
    title: "Profile",
    src: "/images/app-store/account-profile-management.png",
    alt: "PeepLink Account tab showing profile management",
    text: "Complete account and profile details.",
  },
  {
    title: "Following",
    src: "/images/app-store/following-professional.png",
    alt: "PeepLink Following tab showing a followed professional",
    text: "Follow people, professionals, and venues.",
  },
  {
    title: "Check-In",
    src: "/images/app-store/check-in-status.png",
    alt: "PeepLink Check In screen showing current status",
    text: "Test explicit professional check-ins at venues.",
  },
  {
    title: "Professional Profiles",
    src: "/images/app-store/invite-check-in.png",
    alt: "PeepLink Invite tab showing invite and check-in options",
    text: "Create, invite, claim, and review professional profiles.",
  },
];

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
      <h3 style={h3Style}>{title}</h3>
      {children}
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span style={pillStyle}>{eyebrow}</span>
      <h2 style={{ ...h2Style, marginTop: "16px" }}>{title}</h2>
      {children}
    </div>
  );
}

export default function BetaAccessPage() {
  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        <div style={heroStyle}>
          <Link href="/" style={linkStyle}>
            Back to Home
          </Link>

          <div style={{ marginTop: "28px" }}>
            <span style={pillStyle}>PeepLink Beta</span>
          </div>

          <h1 style={h1Style}>Get Started in 3 Minutes</h1>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "780px",
              fontSize: "19px",
              color: "#dbeafe",
            }}
          >
            PeepLink is an adult-only, real-world discovery app for finding,
            following, and supporting service professionals and venues. Invited
            testers can install the beta through Apple's TestFlight app.
          </p>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "780px",
              color: "#dbeafe",
            }}
          >
            PeepLink uses venue-based discovery. It does not silently track users
            in the background, and professional check-ins are explicit actions
            tied to venues.
          </p>

          <p
            style={{
              ...paragraphStyle,
              maxWidth: "780px",
              color: "#dbeafe",
            }}
          >
            QR codes, social links, and beta emails should point to the permanent
            PeepLink download page so testers always get the right install
            steps.
          </p>

          <div style={buttonRowStyle}>
            <Link href="/download" style={primaryButtonStyle}>
              Download PeepLink Beta
            </Link>
            <Link href="/beta-guide" style={secondaryButtonStyle}>
              Read the Beta Tester Guide
            </Link>
            <a href={feedbackEmail} style={secondaryButtonStyle}>
              Email Support
            </a>
          </div>
        </div>

        <section style={gridStyle}>
          {quickSteps.map((step) => (
            <StepCard key={step.number} number={step.number} title={step.title}>
              <p style={paragraphStyle}>{step.text}</p>
            </StepCard>
          ))}
        </section>

        <section
          id="installing-through-testflight"
          style={{ ...cardStyle, marginTop: "22px" }}
        >
          <SectionIntro
            eyebrow="TestFlight"
            title="Installing Through TestFlight"
          >
            <p style={paragraphStyle}>
              TestFlight is Apple's beta app installer. If you have never used
              it before, follow these steps from your iPhone.
            </p>
          </SectionIntro>

          <ol style={listStyle}>
            {testFlightSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <div style={buttonRowStyle}>
            <a
              href="https://apps.apple.com/app/testflight/id899247664"
              style={secondaryButtonStyle}
            >
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
              Get TestFlight
            </a>
            <a href={installPeepLinkHref} style={primaryButtonStyle}>
              Install PeepLink Beta
            </a>
          </div>
          <p style={{ ...paragraphStyle, marginTop: "14px" }}>
            TestFlight is Apple&apos;s official beta testing app. The PeepLink
            install button will point to the public TestFlight link after that
            link is available.
          </p>
        </section>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <SectionIntro
            eyebrow="Tester Focus"
            title="Help Us Improve PeepLink"
          >
            <p style={paragraphStyle}>
              The best beta feedback is simple and specific: what you tried,
              what happened, what you expected, and whether you can make it
              happen again.
            </p>
          </SectionIntro>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "10px",
              marginTop: "18px",
            }}
          >
            {testingFocus.map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: "14px",
                  padding: "12px 14px",
                  background: "rgba(255, 255, 255, 0.09)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  color: "#e0f2fe",
                  fontWeight: 800,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <SectionIntro eyebrow="App Preview" title="What You Will Be Testing">
            <p style={paragraphStyle}>
              These current beta screenshots show the main surfaces where
              feedback is most useful.
            </p>
          </SectionIntro>

          <div style={screenshotGridStyle}>
            {screenshots.map((screenshot) => (
              <div key={screenshot.src}>
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "20px",
                    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.3)",
                  }}
                />
                <h3 style={{ ...h3Style, marginTop: "14px" }}>
                  {screenshot.title}
                </h3>
                <p style={paragraphStyle}>{screenshot.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={gridStyle}>
          <div style={cardStyle}>
            <SectionIntro eyebrow="Beta Notes" title="Current Beta Notes">
              <p style={paragraphStyle}>
                PeepLink is active beta software. The experience should keep
                getting better as more testers join and more real venues,
                profiles, and follows are added.
              </p>
            </SectionIntro>
            <ul style={listStyle}>
              <li>Beta user population is still growing.</li>
              <li>Some venue information may be incomplete.</li>
              <li>Features may evolve during testing.</li>
              <li>Bugs may still exist.</li>
              <li>Your feedback is valuable and helps shape the app.</li>
              <li>
                Stripe, tipping, and payment features are part of the beta
                direction but are not required for testing the core app.
              </li>
            </ul>
          </div>

          <div style={cardStyle}>
            <SectionIntro eyebrow="Bugs" title="Reporting Bugs">
              <p style={paragraphStyle}>
                TestFlight can send device details and screenshots with your
                report, which makes crash and bug reports easier to understand.
              </p>
            </SectionIntro>
            <ol style={listStyle}>
              <li>Open TestFlight.</li>
              <li>Select PeepLink.</li>
              <li>Tap Send Beta Feedback.</li>
            </ol>
            <p style={{ ...paragraphStyle, marginTop: "16px" }}>
              You can also email{" "}
              <a href={feedbackEmail} style={linkStyle}>
                support@peeplinkapp.com
              </a>{" "}
              for invite help, account trouble, privacy questions, or testing
              blockers.
            </p>
          </div>
        </section>

        <section style={{ ...cardStyle, marginTop: "22px" }}>
          <SectionIntro
            eyebrow="Invited Professionals"
            title="If You Were Invited to Claim a Profile"
          >
            <p style={paragraphStyle}>
              Keep the invite link you received. Professional invite links carry
              a secure claim token so PeepLink knows which reserved professional
              profile belongs to you after you install the app and sign in.
            </p>
            <p style={paragraphStyle}>
              A plain beta TestFlight link lets you install PeepLink. It does
              not prove ownership of a reserved professional profile by itself.
            </p>
          </SectionIntro>

          <div style={buttonRowStyle}>
            <Link href="/beta-guide" style={primaryButtonStyle}>
              Open the Beta Tester Guide
            </Link>
            <Link href="/privacy" style={secondaryButtonStyle}>
              Privacy Policy
            </Link>
            <Link href="/support" style={secondaryButtonStyle}>
              Support
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
