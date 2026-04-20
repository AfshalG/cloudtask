import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing — CloudTask',
  description: 'Simple, transparent pricing for teams of every size.',
};

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    tagline: 'For individuals getting started.',
    features: [
      'Up to 5 users',
      '100 tasks',
      'Basic AI sorting',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/user/mo',
    tagline: 'For growing teams that ship weekly.',
    features: [
      'Unlimited users',
      'Unlimited tasks',
      'Advanced AI prioritization',
      'Priority support',
      'Custom workflows',
      'GitHub & Slack integrations',
    ],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tagline: 'For organizations with scale and compliance needs.',
    features: [
      'Everything in Pro',
      'SSO / SAML',
      'Dedicated success manager',
      '99.99% SLA guarantee',
      'Custom integrations',
      'Audit logs & exports',
    ],
    cta: 'Contact Sales',
  },
];

const faqs = [
  {
    q: 'Can I change plans later?',
    a: 'Yes — upgrade, downgrade, or cancel anytime from your account settings. Changes are prorated.',
  },
  {
    q: 'Is there a free trial for Pro?',
    a: 'Every Pro plan starts with a 14-day free trial. No credit card required until you decide to continue.',
  },
  {
    q: 'Do you offer discounts for nonprofits or education?',
    a: 'We offer 50% off Pro for verified nonprofits and educational institutions. Contact sales for details.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, and invoice-based billing for Enterprise customers.',
  },
];

export default function PricingPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px', borderBottom: '1px solid #222' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px', color: 'inherit', textDecoration: 'none' }}>
          <span style={{ color: '#3b82f6' }}>Cloud</span>Task
        </a>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#888' }}>
          <a href="/#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
          <a href="/pricing" style={{ color: '#fafafa', textDecoration: 'none' }}>Pricing</a>
          <a href="/docs" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</a>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/login" style={{ padding: '8px 16px', fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Sign In</a>
          <a href="/pricing" style={{ padding: '8px 20px', fontSize: '14px', background: '#3b82f6', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>Get Started</a>
        </div>
      </nav>

      <section style={{ textAlign: 'center', padding: '100px 24px 40px', maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ display: 'inline-block', padding: '6px 16px', background: '#3b82f620', border: '1px solid #3b82f640', borderRadius: '20px', fontSize: '13px', color: '#3b82f6', marginBottom: '24px' }}>
          Pricing
        </div>
        <h1 style={{ fontSize: '52px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 20px' }}>
          Pricing that scales<br />with your team
        </h1>
        <p style={{ fontSize: '18px', color: '#888', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto' }}>
          Start free. Upgrade when you need more. No surprise fees, no long-term contracts, cancel anytime.
        </p>
      </section>

      <section style={{ padding: '40px 48px 80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {plans.map((p, i) => (
            <div key={i} style={{ padding: '36px 32px', background: p.featured ? '#3b82f610' : '#111', borderRadius: '14px', border: `1px solid ${p.featured ? '#3b82f640' : '#222'}`, position: 'relative' }}>
              {p.featured && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', padding: '4px 14px', borderRadius: '12px', fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px' }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 4px' }}>{p.name}</h3>
              <p style={{ fontSize: '13px', color: '#777', margin: '0 0 20px', minHeight: '36px' }}>{p.tagline}</p>
              <div style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '-1.5px' }}>
                {p.price}
                <span style={{ fontSize: '14px', color: '#888', fontWeight: 400 }}>{p.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '28px 0' }}>
                {p.features.map((f, j) => (
                  <li key={j} style={{ fontSize: '14px', color: '#bbb', padding: '8px 0', borderBottom: '1px solid #1a1a1a' }}>
                    <span style={{ color: '#3b82f6', marginRight: '8px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a href={p.name === 'Enterprise' ? '/contact' : '/pricing'} style={{ display: 'block', textAlign: 'center', padding: '12px', background: p.featured ? '#3b82f6' : '#1a1a1a', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '14px', border: p.featured ? 'none' : '1px solid #333' }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '40px 48px 100px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 700, textAlign: 'center', marginBottom: '48px', letterSpacing: '-1px' }}>
          Frequently asked questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ padding: '24px 28px', background: '#111', borderRadius: '12px', border: '1px solid #222' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 8px' }}>{f.q}</h3>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.6, margin: 0 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #222', padding: '40px 48px', textAlign: 'center', color: '#555', fontSize: '13px' }}>
        © 2026 CloudTask. Built with ❤️ for fast-moving teams.
      </footer>
    </div>
  );
}
