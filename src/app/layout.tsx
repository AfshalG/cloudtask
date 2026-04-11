import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "CloudTask — AI-Powered Task Management",
  description: "Manage your team's tasks with AI-powered prioritization and smart workflows.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif', background: '#0a0a0a', color: '#fafafa' }}>
        {children}
      </body>
    </html>
  );
}
