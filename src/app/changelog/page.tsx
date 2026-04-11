import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog — CloudTask',
  description: 'New features, improvements, and fixes shipped by the CloudTask team.',
};

type Entry = {
  version: string;
  date: string;
  tag: 'Feature' | 'Improvement' | 'Fix';
  title: string;
  description: string;
};

const entries: Entry[] = [
  {
    version: 'v2.4.0',
    date: 'April 10, 2026',
    tag: 'Feature',
    title: 'Native Slack & Linear sync',
    description:
      'Two-way sync with Slack threads and Linear issues. Mention a task in Slack and it lands in the right project automatically.',
  },
  {
    version: 'v2.3.2',
    date: 'April 3, 2026',
    tag: 'Improvement',
    title: 'Faster sprint planning board',
    description:
      'The planning board now loads 4× faster for teams with 500+ open tasks thanks to virtualized rendering.',
  },
  {
    version: 'v2.3.1',
    date: 'March 28, 2026',
    tag: 'Fix',
    title: 'Correct timezone handling on recurring tasks',
    description:
      'Recurring tasks scheduled across DST boundaries no longer drift by an hour. Thanks to everyone who reported this.',
  },
  {
    version: 'v2.3.0',
    date: 'March 20, 2026',
    tag: 'Feature',
    title: 'AI blocker detection',
    description:
      'CloudTask now flags tasks that are likely to be blocked before the blocker materializes, using signals from your team history.',
  },
  {
    version: 'v2.2.4',
    date: 'March 12, 2026',
    tag: 'Improvement',
    title: 'Keyboard-first command palette',
    description:
      'Open with ⌘K from anywhere. Jump to any task, project, or teammate in two keystrokes.',
  },
];

const tagStyles: Record<Entry['tag'], { bg: string; border: string; color: string }> = {
  Feature: { bg: '#3b82f620', border: '#3b82f640', color: '#3b82f6' },
  Improvement: { bg: '#10b98120', border: '#10b98140', color: '#10b981' },
  Fix: { bg: '#f59e0b20', border: '#f59e0b40', color: '#f59e0b' },
};

export default function ChangelogPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px', borderBottom: '1px solid #222' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px', color: 'inherit', textDecoration: 'none' }}>
          <span style={{ color: '#3b82f6' }}>Cloud</span>Task
        </a>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#888' }}>
          <a href="/#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
          <a href="/pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</a>
          <a href="/changelog" style={{ color: '#fafafa', textDecoration: 'none' }}>Changelog</a>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/login" style={{ padding: '8px 16px', fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Sign In</a>
          <a href="#" style={{ padding: '8px 20px', fontSize: '14px', background: '#3b82f6', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>Get Started</a>
        </div>
      </nav>

      <section style={{ textAlign: 'center', padding: '100px 24px 40px', maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', padding: '6px 16px', background: '#3b82f620', border: '1px solid #3b82f640', borderRadius: '20px', fontSize: '13px', color: '#3b82f6', marginBottom: '24px' }}>
          What&apos;s new
        </div>
        <h1 style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 20px' }}>
          Changelog
        </h1>
        <p style={{ fontSize: '18px', color: '#888', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto' }}>
          We ship often. Here&apos;s what the CloudTask team has released recently — features, improvements, and fixes.
        </p>
      </section>

      <section style={{ padding: '40px 48px 100px', maxWidth: '760px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {entries.map((e, i) => {
            const s = tagStyles[e.tag];
            return (
              <article key={i} style={{ padding: '28px 32px', background: '#111', borderRadius: '14px', border: '1px solid #222' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#fafafa' }}>{e.version}</span>
                  <span style={{ fontSize: '12px', color: '#666' }}>·</span>
                  <span style={{ fontSize: '12px', color: '#888' }}>{e.date}</span>
                  <span style={{ marginLeft: 'auto', display: 'inline-block', padding: '3px 10px', background: s.bg, border: `1px solid ${s.border}`, borderRadius: '12px', fontSize: '11px', color: s.color, fontWeight: 600, letterSpacing: '0.3px' }}>
                    {e.tag}
                  </span>
                </div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 8px', letterSpacing: '-0.3px' }}>{e.title}</h2>
                <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.6, margin: 0 }}>{e.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #222', padding: '40px 48px', textAlign: 'center', color: '#555', fontSize: '13px' }}>
        © 2026 CloudTask. Built with ❤️ for fast-moving teams.
      </footer>
    </div>
  );
}
