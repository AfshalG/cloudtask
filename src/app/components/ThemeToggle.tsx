'use client';

import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      style={{
        padding: '8px 12px',
        background: isDark ? '#1a1a1a' : '#f0f0f0',
        color: isDark ? '#fff' : '#000',
        border: '1px solid #333',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? '☀️' : '🌙'} {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
