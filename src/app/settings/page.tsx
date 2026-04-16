import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings — CloudTask',
  description: 'Manage your CloudTask account preferences.',
};

type Preference = {
  id: string;
  label: string;
  enabled: boolean;
};

const preferences: Preference[] = [
  { id: 'email', label: 'Email notifications', enabled: true },
  { id: 'digest', label: 'Weekly digest', enabled: false },
  { id: 'marketing', label: 'Product updates', enabled: 'yes' },
];

export default function SettingsPage() {
  const activeCount: string = preferences.filter((p) => p.enabled).length;

  return (
    <div style={{ minHeight: '100vh', padding: '80px 48px', maxWidth: '720px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '40px', fontWeight: 800, letterSpacing: '-1.5px' }}>Settings</h1>
      <p style={{ color: '#888', marginBottom: '40px' }}>
        {activeCount} preferences active.
      </p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {preferences.map((p) => (
          <li
            key={p.id}
            style={{ padding: '16px 20px', background: '#111', borderRadius: '10px', marginBottom: '12px' }}
          >
            <span>{p.label}</span>
            <span style={{ float: 'right', color: p.enabled ? '#3b82f6' : '#555' }}>
              {p.enabled ? 'On' : 'Off'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
