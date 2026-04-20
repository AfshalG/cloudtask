import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — CloudTask',
  description: 'Get in touch with the CloudTask team.',
};

export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px', borderBottom: '1px solid #222' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px', color: 'inherit', textDecoration: 'none' }}>
          <span style={{ color: '#3b82f6' }}>Cloud</span>Task
        </a>
        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: '#888' }}>
          <a href="/#features" style={{ color: 'inherit', textDecoration: 'none' }}>Features</a>
          <a href="/pricing" style={{ color: 'inherit', textDecoration: 'none' }}>Pricing</a>
          <a href="/docs" style={{ color: 'inherit', textDecoration: 'none' }}>Docs</a>
          <a href="/changelog" style={{ color: 'inherit', textDecoration: 'none' }}>Changelog</a>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/login" style={{ padding: '8px 16px', fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Sign In</a>
          <a href="/pricing" style={{ padding: '8px 20px', fontSize: '14px', background: '#3b82f6', color: '#fff', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>Get Started</a>
        </div>
      </nav>

      <section style={{ textAlign: 'center', padding: '100px 24px 80px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-2px', margin: '0 0 24px' }}>
          Get in Touch
        </h1>
        <p style={{ fontSize: '18px', color: '#888', lineHeight: 1.6, maxWidth: '560px', margin: '0 auto 40px' }}>
          Have questions about CloudTask? Our team is here to help. Reach out and we'll get back to you as soon as possible.
        </p>
      </section>

      <section style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px 80px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: '#aaa' }}>Name</label>
            <input type="text" placeholder="Your name" style={{ width: '100%', padding: '12px', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: '#aaa' }}>Email</label>
            <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '12px', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: '#aaa' }}>Message</label>
            <textarea placeholder="Tell us how we can help..." style={{ width: '100%', padding: '12px', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', fontSize: '14px', minHeight: '120px', boxSizing: 'border-box', fontFamily: 'inherit' }} />
          </div>
          <button style={{ padding: '12px', background: '#3b82f6', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Send Message</button>
        </form>
      </section>

      <footer style={{ borderTop: '1px solid #222', padding: '40px 48px', textAlign: 'center', color: '#555', fontSize: '13px' }}>
        © 2026 CloudTask. Built with ❤️ for fast-moving teams.
      </footer>
    </div>
  );
}
