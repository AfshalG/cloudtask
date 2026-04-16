'use client';

import type { Metadata } from 'next';
import { useState } from 'react';

type Preference = {
  id: string;
  label: string;
  enabled: boolean;
};

const defaultPreferences: Preference[] = [
  { id: 'email', label: 'Email notifications', enabled: true },
  { id: 'digest', label: 'Weekly digest', enabled: false },
  { id: 'marketing', label: 'Product updates', enabled: true },
];

export default function SettingsPage() {
  const [preferences, setPreferences] = useState(defaultPreferences);
  const activeCount = preferences.filter((p) => p.enabled).length;

  const handleReset = () => {
    setPreferences(defaultPreferences);
  };

  const handleToggle = (id: string) => {
    setPreferences(prefs =>
      prefs.map(p => (p.id === id ? { ...p, enabled: !p.enabled } : p))
    );
  };

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
            onClick={() => handleToggle(p.id)}
            style={{
              padding: '16px 20px',
              background: '#111',
              borderRadius: '10px',
              marginBottom: '12px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#1a1a1a'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#111'}
          >
            <span>{p.label}</span>
            <span style={{ float: 'right', color: p.enabled ? '#3b82f6' : '#555' }}>
              {p.enabled ? 'On' : 'Off'}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={handleReset}
        style={{
          marginTop: '32px',
          padding: '12px 24px',
          background: '#444',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Reset to defaults
      </button>
    </div>
  );
}
