// Team collaboration page — WIP
// This has an intentional TypeScript error to test CI failure detection

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  status: 'online' | 'offline' | 'away';
}

const members: TeamMember[] = [
  { name: 'Sarah Chen', role: 'Engineering Lead', avatar: '/avatars/sarah.jpg', status: 'online' },
  { name: 'Mike Johnson', role: 'Senior Developer', avatar: '/avatars/mike.jpg', status: 'away' },
  { name: 'Alex Rivera', role: 'Designer', avatar: '/avatars/alex.jpg', status: 'online' },
];

export default function TeamPage() {
  // TypeScript error: calling a method that doesn't exist on the type
  const activeCount: number = members.filter(m => m.status === 'online').length;
  const totalTasks: string = activeCount.toFixed(0);
  // Error: assigning number to a variable typed as string[], then using .map
  const taskList: string[] = 42 as unknown as string[];

  return (
    <div style={{ padding: '48px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 700 }}>Team</h1>
      <p style={{ color: '#888' }}>{activeCount} members online, {totalTasks} active tasks</p>
      <div style={{ display: 'grid', gap: '16px', marginTop: '32px' }}>
        {members.map((member, i) => (
          <div key={i} style={{ padding: '20px', background: '#111', borderRadius: '12px', border: '1px solid #222', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
              {member.name[0]}
            </div>
            <div>
              <div style={{ fontWeight: 600 }}>{member.name}</div>
              <div style={{ fontSize: '13px', color: '#888' }}>{member.role}</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: member.status === 'online' ? '#22c55e' : member.status === 'away' ? '#eab308' : '#666' }} />
              <span style={{ fontSize: '12px', color: '#666', textTransform: 'capitalize' }}>{member.status}</span>
            </div>
          </div>
        ))}
      </div>
      {/* This will cause a runtime issue but NOT a build error. Let's add a real TS error */}
      {taskList.map((t: string) => <div key={t}>{t}</div>)}
    </div>
  );
}
