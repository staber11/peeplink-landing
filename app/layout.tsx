export const metadata = {
  title: "PeepLink",
  description: "Find Your People. Tip Your Pros.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}