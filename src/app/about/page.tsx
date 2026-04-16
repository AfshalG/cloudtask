import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — CloudTask',
  description: 'Learn about the team building CloudTask and our mission.',
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px', borderBottom: '1px solid #222' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px', color: 'inherit', textDecoration: 'none' }}>
          <span style={{ color: '#3b82f6' }}>Cloud</span>Task
        </a>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#888' }}>
          <a href="/#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
          <a href="/pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
          <a href="/about" style={{ color: '#fafafa', textDecoration: 'none' }}>About</a>
        </div>
      </nav>

      <section style={{ textAlign: 'center', padding: '100px 24px 60px', maxWidth: '780px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 20px' }}>
          Built by people<br />who ship
        </h1>
        <p style={{ fontSize: '18px', color: '#888', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto' }}>
          CloudTask started as a side project to fix task tools that get in your way. Today it powers fast-moving teams
          around the world.
        </p>
      </section>

      <footer style={{ borderTop: '1px solid #222', padding: '40px 48px', textAlign: 'center', color: '#555', fontSize: '13px' }}>
        © 2026 CloudTask. Built with care for fast-moving teams.
      </footer>
    </div>
  );
}
