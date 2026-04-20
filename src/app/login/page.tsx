import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In — CloudTask',
  description: 'Sign in to your CloudTask account.',
};

export default function LoginPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 48px', borderBottom: '1px solid #222' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px', color: 'inherit', textDecoration: 'none' }}>
          <span style={{ color: '#3b82f6' }}>Cloud</span>Task
        </a>
      </nav>

      <section style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px', textAlign: 'center' }}>Sign In</h1>
          <p style={{ fontSize: '14px', color: '#888', textAlign: 'center', marginBottom: '32px' }}>
            Enter your credentials to access your CloudTask workspace.
          </p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '6px', color: '#aaa' }}>Email</label>
              <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '10px 12px', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '6px', color: '#aaa' }}>Password</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 12px', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>
            <button style={{ padding: '12px', background: '#3b82f6', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600, fontSize: '14px', cursor: 'pointer' }}>Sign In</button>
          </form>
          <p style={{ fontSize: '13px', color: '#777', textAlign: 'center', marginTop: '20px' }}>
            Don't have an account? <a href="/pricing" style={{ color: '#3b82f6', textDecoration: 'none' }}>Get started</a>
          </p>
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #222', padding: '40px 48px', textAlign: 'center', color: '#555', fontSize: '13px' }}>
        © 2026 CloudTask. Built with ❤️ for fast-moving teams.
      </footer>
    </div>
  );
}
