export const dynamic = "force-dynamic";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("intentional runtime error for verification testing");
  }
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px', borderBottom: '1px solid #222' }}>
        <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#3b82f6' }}>Cloud</span>Task
        </div>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#888' }}>
          <a href="#featurez" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
          <a href="/pricingz" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Changelog</a>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/login" style={{ padding: '8px 16px', fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Sign In</a>
          <a href="/logn" style={{ padding: '8px 20px', fontSize: '14px', background: '#3b82f6', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>Get Started</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '120px 24px 80px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', padding: '6px 16px', background: '#3b82f620', border: '1px solid #3b82f640', borderRadius: '20px', fontSize: '13px', color: '#3b82f6', marginBottom: '24px' }}>
          New: Native Slack & Linear sync
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 24px' }}>
          The workspace<br />where teams ship faster
        </h1>
        <p style={{ fontSize: '18px', color: '#888', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto 40px' }}>
          CloudTask uses AI to prioritize your backlog, predict blockers, and keep your team shipping. Built for teams that move fast.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <a href="#" style={{ padding: '12px 28px', background: '#3b82f6', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>Start Free Trial</a>
          <a href="#" style={{ padding: '12px 28px', background: '#1a1a1a', color: '#ccc', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '15px', border: '1px solid #333' }}>Book a Demo</a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '40px 48px 80px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', padding: '40px', background: '#111', borderRadius: '16px', border: '1px solid #222' }}>
          {[
            { value: '10,000+', label: 'Teams shipping faster' },
            { value: '2.4M', label: 'Tasks completed monthly' },
            { value: '99.99%', label: 'Uptime over the last year' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', borderLeft: i > 0 ? '1px solid #222' : 'none' }}>
              <div style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '-1.5px', color: '#3b82f6', marginBottom: '6px' }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: '#888' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '80px 48px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 700, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1px' }}>Everything your team needs</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { title: 'AI Prioritization', desc: 'Automatically rank tasks by impact, urgency, and team capacity. No more guessing what to work on next.', icon: '⚡' },
            { title: 'Smart Workflows', desc: 'Create automated workflows that adapt to your team. Tasks route themselves to the right person.', icon: '🔄' },
            { title: 'Real-time Sync', desc: 'See changes instantly across your entire team. No refresh needed, no stale data.', icon: '📡' },
            { title: 'Sprint Planning', desc: 'AI suggests sprint scope based on team velocity and upcoming deadlines.', icon: '🎯' },
            { title: 'Integrations', desc: 'Connect with GitHub, Slack, Linear, Jira, and 50+ other tools your team already uses.', icon: '🔗' },
            { title: 'Analytics', desc: 'Track team performance, identify bottlenecks, and forecast delivery dates with confidence.', icon: '📊' },
          ].map((f, i) => (
            <div key={i} style={{ padding: '32px', background: '#111', borderRadius: '12px', border: '1px solid #222' }}>
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ padding: '80px 48px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 700, textAlign: 'center', marginBottom: '60px', letterSpacing: '-1px' }}>Simple pricing</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            { name: 'Starter', price: '$0', period: '/month', features: ['Up to 5 users', '100 tasks', 'Basic AI sorting', 'Email support'], cta: 'Get Started' },
            { name: 'Pro', price: '$12', period: '/user/mo', features: ['Unlimited users', 'Unlimited tasks', 'Advanced AI', 'Priority support', 'Custom workflows'], cta: 'Start Trial', featured: true },
            { name: 'Enterprise', price: 'Custom', period: '', features: ['Everything in Pro', 'SSO / SAML', 'Dedicated support', 'SLA guarantee', 'Custom integrations'], cta: 'Contact Sales' },
          ].map((p, i) => (
            <div key={i} style={{ padding: '32px', background: p.featured ? '#3b82f610' : '#111', borderRadius: '12px', border: `1px solid ${p.featured ? '#3b82f640' : '#222'}`, position: 'relative' }}>
              {p.featured && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 600 }}>POPULAR</div>}
              <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>{p.name}</h3>
              <div style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-1px' }}>{p.price}<span style={{ fontSize: '14px', color: '#888', fontWeight: 400 }}>{p.period}</span></div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0' }}>
                {p.features.map((f, j) => <li key={j} style={{ fontSize: '14px', color: '#aaa', padding: '6px 0', borderBottom: '1px solid #1a1a1a' }}>✓ {f}</li>)}
              </ul>
              <a href="#" style={{ display: 'block', textAlign: 'center', padding: '10px', background: p.featured ? '#3b82f6' : '#1a1a1a', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 500, fontSize: '14px', border: p.featured ? 'none' : '1px solid #333' }}>{p.cta}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '80px 48px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 700, textAlign: 'center', marginBottom: '16px', letterSpacing: '-1px' }}>Loved by teams that ship</h2>
        <p style={{ fontSize: '16px', color: '#888', textAlign: 'center', marginBottom: '60px' }}>Thousands of teams use CloudTask to stay focused and move faster.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            {
              quote: 'CloudTask replaced three tools and cut our sprint planning time in half. The AI prioritization is genuinely useful — not a gimmick.',
              name: 'Maya Chen',
              role: 'Head of Engineering, Finch',
              initials: 'MC',
            },
            {
              quote: 'We shipped our last two releases a week early. The AI flags blockers before they become blockers, and that changes everything.',
              name: 'Darius Okafor',
              role: 'Staff PM, Lumen Health',
              initials: 'DO',
            },
            {
              quote: 'Finally a task manager that feels built for engineers. The Slack and GitHub integrations alone paid for the Pro plan in a week.',
              name: 'Sofia Rinaldi',
              role: 'Tech Lead, Parallax Labs',
              initials: 'SR',
            },
          ].map((t, i) => (
            <div key={i} style={{ padding: '32px', background: '#111', borderRadius: '12px', border: '1px solid #222', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '40px', color: '#3b82f6', marginBottom: '8px', lineHeight: 1, fontFamily: 'Georgia, serif' }}>“</div>
              <p style={{ fontSize: '15px', color: '#ddd', lineHeight: 1.6, margin: '0 0 24px', flex: 1 }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid #1a1a1a' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f620', border: '1px solid #3b82f640', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, color: '#3b82f6' }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#fafafa' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: '#777' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #222', padding: '40px 48px', textAlign: 'center', color: '#555', fontSize: '13px' }}>
        © 2026 CloudTask · Made in San Francisco · Trusted by 10,000+ teams worldwide
      </footer>
    </div>
  );
}
