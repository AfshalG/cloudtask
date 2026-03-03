import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CloudTask — AI-Powered Task Management",
  description: "Manage your team's tasks with AI-powered prioritization and smart workflows.",
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
