"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzvokel";

const labelStyle: CSSProperties = {
  display: "grid",
  gap: "8px",
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "14px",
  fontWeight: 800,
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 15px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  background: "white",
  color: "#0f172a",
  fontSize: "16px",
  boxSizing: "border-box",
};

const paragraphStyle: CSSProperties = {
  color: "rgba(255, 255, 255, 0.82)",
  fontSize: "16px",
  lineHeight: 1.75,
  margin: "0 0 14px",
};

type Status = "idle" | "sending" | "success" | "error";

export default function SupportForm() {
  const [requestType, setRequestType] = useState("beta_feedback");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [device, setDevice] = useState("");
  const [iosVersion, setIosVersion] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const subjectByType: Record<string, string> = {
      beta_feedback: "PeepLink beta feedback",
      support_request: "PeepLink support request",
      safety_report: "PeepLink safety report",
      profile_or_venue_correction: "PeepLink profile or venue correction",
      account_help: "PeepLink account help",
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          requestType,
          name,
          email,
          accountEmail,
          device,
          iosVersion,
          message,
          source: "support-page",
          _subject: subjectByType[requestType] || "PeepLink support request",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(
          data?.errors?.[0]?.message ||
            "The support form could not be sent. Please email support@peeplinkapp.com instead."
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        "Thanks. Your message was sent to PeepLink support. If this is urgent or safety-related, you may also email support@peeplinkapp.com directly."
      );
      setRequestType("beta_feedback");
      setName("");
      setEmail("");
      setAccountEmail("");
      setDevice("");
      setIosVersion("");
      setMessage("");
    } catch {
      setStatus("error");
      setStatusMessage(
        "Network error. Please email support@peeplinkapp.com instead."
      );
    }
  }

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.14)",
        borderRadius: "22px",
        padding: "22px",
      }}
    >
      <h2 style={{ fontSize: "26px", margin: "0 0 10px" }}>
        Send a message
      </h2>
      <p style={paragraphStyle}>
        Use this form for beta feedback, bug reports, account support, and
        safety follow-up. For urgent safety issues, also use the in-app Report
        or Block controls when available.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "14px" }}>
        <label style={labelStyle}>
          Request type
          <select
            name="requestType"
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
            style={inputStyle}
          >
            <option value="beta_feedback">Beta feedback or bug</option>
            <option value="support_request">General support request</option>
            <option value="safety_report">Safety report follow-up</option>
            <option value="profile_or_venue_correction">
              Profile or venue correction
            </option>
            <option value="account_help">Account or login help</option>
          </select>
        </label>

        <div
          style={{
            display: "grid",
            gap: "14px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <label style={labelStyle}>
            Name
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
            Email
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={inputStyle}
            />
          </label>
        </div>

        <label style={labelStyle}>
          Account email or Apple relay email, if different
          <input
            name="accountEmail"
            type="text"
            value={accountEmail}
            onChange={(e) => setAccountEmail(e.target.value)}
            placeholder="Optional"
            style={inputStyle}
          />
        </label>

        <div
          style={{
            display: "grid",
            gap: "14px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <label style={labelStyle}>
            Device
            <input
              name="device"
              type="text"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
              placeholder="Example: iPhone 17 Pro"
              style={inputStyle}
            />
          </label>

          <label style={labelStyle}>
            iOS version
            <input
              name="iosVersion"
              type="text"
              value={iosVersion}
              onChange={(e) => setIosVersion(e.target.value)}
              placeholder="Example: iOS 18.6"
              style={inputStyle}
            />
          </label>
        </div>

        <label style={labelStyle}>
          Message
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what happened, what you expected, and any steps to reproduce it."
            required
            rows={7}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </label>

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
            fontWeight: 900,
            cursor: status === "sending" ? "default" : "pointer",
            opacity: status === "sending" ? 0.75 : 1,
            boxShadow: "0 10px 26px rgba(34,211,238,0.28)",
          }}
        >
          {status === "sending" ? "Sending..." : "Send to Support"}
        </button>

        {statusMessage ? (
          <div
            style={{
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
              color: status === "success" ? "#dcfce7" : "#fecaca",
              fontWeight: 800,
              lineHeight: 1.5,
            }}
          >
            {statusMessage}
          </div>
        ) : null}
      </form>
    </div>
  );
}
