export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4"
      style={{ background: "var(--background)" }}>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl pf-gradient-green flex items-center justify-center">
          <span className="text-white font-black text-xl">K</span>
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tight"
            style={{ color: "var(--foreground)" }}>
            Pesa<span style={{ color: "var(--pf-green)" }}>Flow</span>
          </h1>
          <p className="text-xs font-semibold tracking-widest"
            style={{ color: "var(--muted-foreground)" }}>
            TRACK · SAVE · GROW
          </p>
        </div>
      </div>
      <p style={{ color: "var(--muted-foreground)" }} className="text-sm">
        🚧 Building something great for Kenya...
      </p>
    </main>
  )
}