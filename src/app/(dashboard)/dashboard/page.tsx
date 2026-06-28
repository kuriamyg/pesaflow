export default function DashboardPage() {
  return (
    <main className="min-h-screen flex items-center justify-center"
      style={{ background: 'var(--background)' }}>
      <div className="text-center space-y-3">
        <div className="text-5xl">🚧</div>
        <h1 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>
          Dashboard coming soon
        </h1>
        <p style={{ color: 'var(--muted-foreground)' }}>
          Auth is working. Building the UI next.
        </p>
      </div>
    </main>
  )
}