
import Link from "next/link";

import type { CSSProperties } from "react";

export const metadata = {

  title: "Terms of Use | PeepLink",

  description: "PeepLink Terms of Use",

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

export default function TermsPage() {

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

            PeepLink Terms

          </p>

          <h1 style={h1Style}>Terms of Use</h1>

          <p style={paragraphStyle}>

            <strong>Effective Date:</strong> May 2026

          </p>

          <p style={paragraphStyle}>

            These Terms of Use govern your access to and use of PeepLink,

            including the PeepLink website, beta signup experience, mobile app,

            invite flows, profile features, venue features, check-ins, tipping

            features, and related services.

          </p>

          <p style={paragraphStyle}>

            By using PeepLink, you agree to these Terms. If you do not agree,

            do not use PeepLink.

          </p>

          <section style={sectionStyle}>

            <h2 style={h2Style}>1. Adult-Only Service</h2>

            <p style={paragraphStyle}>

              PeepLink is intended only for adults who are at least 18 years

              old. By using PeepLink, you confirm that you are at least 18 and

              that you are legally allowed to use the service.

            </p>

            <p style={paragraphStyle}>

              We may require age-related information, identity-related

              information, email verification, phone verification, or other

              safety checks before allowing access to certain features.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>2. Beta Service</h2>

            <p style={paragraphStyle}>

              PeepLink is currently an early access beta service. Features may

              change, break, move, disappear, or be limited while we test and

              improve the product.

            </p>

            <p style={paragraphStyle}>

              We may add, remove, suspend, or modify features at any time,

              including profile features, invite features, venue features,

              payment features, map features, and administrative tools.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>3. Accounts</h2>

            <p style={paragraphStyle}>

              You are responsible for the information you provide, the activity

              that happens under your account, and keeping your login

              credentials secure.

            </p>

            <p style={paragraphStyle}>

              You agree not to create an account using false, misleading,

              unauthorized, or impersonated information. You also agree not to

              use another person&apos;s account without permission.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>4. Professional Profiles</h2>

            <p style={paragraphStyle}>

              PeepLink allows users to discover, follow, invite, claim, and

              support real-world service professionals and local venues.

              Professional profiles may be self-created, claimed by the

              professional, or created as an unclaimed invite profile for someone

              else to claim later.

            </p>

            <p style={paragraphStyle}>

              If you claim or manage a professional profile, you are responsible

              for keeping that profile accurate and for ensuring you have the

              right to provide the information shown on the profile.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>5. Invites and Claims</h2>

            <p style={paragraphStyle}>

              PeepLink may allow users to invite professionals or general users.

              Professional invites may create an unclaimed professional profile

              that can later be claimed through a secure claim process. General

              user invites are app referrals and do not create a professional

              profile.

            </p>

            <p style={paragraphStyle}>

              Invite links, claim tokens, QR codes, email invites, SMS invites,

              and copy-link invites may be limited, revoked, expired, or

              moderated if needed for safety, abuse prevention, or product

              operations.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>6. Venues, Check-Ins, and Location Features</h2>

            <p style={paragraphStyle}>

              PeepLink may include venues, maps, provider-backed venue search,

              profile venue selections, and professional check-ins. Check-ins

              are intended to be venue-based and user-controlled, not silent

              background tracking.

            </p>

            <p style={paragraphStyle}>

              Venue information, map results, and check-ins may be incomplete,

              delayed, inaccurate, or unavailable. You should not rely on

              PeepLink for emergency services, personal safety decisions,

              employment verification, or exact real-time location tracking.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>7. Payments and Tips</h2>

            <p style={paragraphStyle}>

              PeepLink may support tips or payments through Stripe, including

              Apple Pay when available through Stripe on supported devices,

              regions, and configurations.

            </p>

            <p style={paragraphStyle}>

              Payment processing is handled by third-party payment providers.

              PeepLink does not store full credit card numbers. Fees, taxes,

              refunds, chargebacks, payout timing, connected account

              requirements, and payment availability may be controlled by Stripe

              or other payment providers.

            </p>

            <p style={paragraphStyle}>

              Tips and payments are intended for real-world services or

              person-to-person support where allowed. You are responsible for

              complying with all laws, platform rules, tax obligations, and

              payment provider requirements that apply to you.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>8. User Content</h2>

            <p style={paragraphStyle}>

              You may be able to submit profile details, names, categories,

              venues, invite details, images, messages, notes, recommendations,

              or other content. You are responsible for your content and for

              making sure you have the rights needed to submit it.

            </p>

            <p style={paragraphStyle}>

              By submitting content to PeepLink, you give us permission to host,

              store, display, process, moderate, and use that content as needed

              to operate, improve, and provide the service.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>9. Acceptable Use</h2>

            <p style={paragraphStyle}>You agree not to:</p>

            <ul style={listStyle}>

              <li>use PeepLink if you are under 18</li>

              <li>impersonate another person or misrepresent your identity</li>

              <li>submit false, deceptive, illegal, abusive, or harmful content</li>

              <li>harass, threaten, stalk, exploit, or endanger others</li>

              <li>scrape, copy, or harvest data from PeepLink without permission</li>

              <li>attempt to bypass security, moderation, or access controls</li>

              <li>use PeepLink for illegal payments, illegal services, or prohibited activity</li>

              <li>interfere with the operation, reliability, or safety of the service</li>

            </ul>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>10. Moderation and Enforcement</h2>

            <p style={paragraphStyle}>

              We may review, remove, restrict, suspend, or delete accounts,

              profiles, categories, venues, invites, check-ins, payment access,

              or content if we believe it violates these Terms, creates risk,

              harms users, violates law, or interferes with the service.

            </p>

            <p style={paragraphStyle}>

              We may also take action during beta testing to remove test data,

              correct operational issues, prevent abuse, or protect users.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>11. Third-Party Services</h2>

            <p style={paragraphStyle}>

              PeepLink may rely on third-party services such as Supabase,

              Stripe, Resend, Apple services, MapKit, TestFlight, App Store

              infrastructure, SMS providers, hosting providers, analytics

              providers, or other tools needed to operate the service.

            </p>

            <p style={paragraphStyle}>

              Third-party services may have their own terms, privacy policies,

              rules, fees, limits, and availability requirements.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>12. Privacy</h2>

            <p style={paragraphStyle}>

              Our Privacy Policy explains how we collect, use, and share

              information. You can review it here:

            </p>

            <p style={paragraphStyle}>

              <Link href="/privacy" style={linkStyle}>

                Privacy Policy

              </Link>

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>13. No Professional, Employment, or Safety Guarantee</h2>

            <p style={paragraphStyle}>

              PeepLink helps users discover and follow people, professionals,

              venues, and related activity. PeepLink does not guarantee the

              quality, safety, availability, legality, employment status,

              credentials, licenses, insurance, conduct, location, or services

              of any user, professional, venue, or third party.

            </p>

            <p style={paragraphStyle}>

              You are responsible for your own interactions, decisions,

              meetings, transactions, and safety precautions.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>14. Disclaimers</h2>

            <p style={paragraphStyle}>

              PeepLink is provided on an &quot;as is&quot; and &quot;as

              available&quot; basis. We do not guarantee that the service will

              be uninterrupted, secure, accurate, error-free, or available at all

              times.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>15. Limitation of Liability</h2>

            <p style={paragraphStyle}>

              To the fullest extent allowed by law, PeepLink and its operators

              will not be liable for indirect, incidental, special,

              consequential, exemplary, or punitive damages, or for lost profits,

              lost revenue, lost data, lost goodwill, service interruption,

              payment disputes, user conduct, venue issues, or third-party

              actions.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>16. Termination</h2>

            <p style={paragraphStyle}>

              You may stop using PeepLink at any time. We may suspend, restrict,

              or terminate access to PeepLink at any time if we believe it is

              necessary to protect users, comply with law, enforce these Terms,

              prevent abuse, or operate the beta service.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>17. Changes to These Terms</h2>

            <p style={paragraphStyle}>

              We may update these Terms as PeepLink changes. Updates will be

              posted on this page with a revised effective date. Continued use

              of PeepLink after updates means you accept the updated Terms.

            </p>

          </section>

          <section style={sectionStyle}>

            <h2 style={h2Style}>18. Contact</h2>

            <p style={paragraphStyle}>

              For questions about these Terms, contact:

            </p>

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

