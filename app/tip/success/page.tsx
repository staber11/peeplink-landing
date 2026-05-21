export default function TipSuccessPage() {
  return (
    <main style={styles.main}>
      <section style={styles.card}>
        <div style={styles.badge}>PeepLink</div>
        <h1 style={styles.title}>Tip sent</h1>
        <p style={styles.text}>
          Your tip was processed successfully. You can return to PeepLink now.
        </p>

        <a href="wheresmy://auth" style={styles.primaryButton}>
          Return to PeepLink
        </a>

        <a href="/" style={styles.secondaryLink}>
          Open PeepLink website
        </a>

        <p style={styles.note}>
          If the app does not open, open PeepLink from your home screen.
        </p>
      </section>
    </main>
  )
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    padding: 24,
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    background: "linear-gradient(180deg, #e9f8ff, #ffffff)",
  },
  card: {
    maxWidth: 520,
    width: "100%",
    borderRadius: 28,
    padding: 32,
    background: "white",
    boxShadow: "0 20px 60px rgba(15, 23, 42, 0.12)",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 999,
    background: "#e0f2fe",
    color: "#0369a1",
    fontWeight: 700,
    marginBottom: 16,
  },
  title: {
    fontSize: 36,
    margin: "8px 0 12px",
  },
  text: {
    color: "#6b7280",
    fontSize: 18,
    lineHeight: 1.5,
  },
  primaryButton: {
    display: "inline-block",
    marginTop: 22,
    padding: "14px 22px",
    borderRadius: 999,
    background: "#0A84FF",
    color: "white",
    textDecoration: "none",
    fontWeight: 800,
  },
  secondaryLink: {
    display: "block",
    marginTop: 16,
    color: "#0A84FF",
    textDecoration: "none",
    fontWeight: 700,
  },
  note: {
    marginTop: 18,
    color: "#9ca3af",
    fontSize: 14,
  },
}
