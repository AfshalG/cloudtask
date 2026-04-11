import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "CloudTask — AI-Powered Task Management",
    template: "%s · CloudTask",
  },
  description: "CloudTask uses AI to prioritize your backlog, predict blockers, and keep your team shipping. Trusted by 10,000+ teams worldwide.",
  keywords: ["task management", "AI prioritization", "team collaboration", "sprint planning", "project management"],
  authors: [{ name: "CloudTask" }],
  openGraph: {
    title: "CloudTask — AI-Powered Task Management",
    description: "The workspace where teams ship faster. AI prioritization, smart workflows, and real-time sync.",
    type: "website",
    siteName: "CloudTask",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudTask — AI-Powered Task Management",
    description: "The workspace where teams ship faster.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
