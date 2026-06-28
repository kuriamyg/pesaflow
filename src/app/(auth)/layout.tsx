import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PesaFlow — Sign In',
  description: 'Track every shilling. Save with purpose. Grow with intention.',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left — Branding Panel */}
      <div
        className="hidden lg:flex flex-col justify-between p-12"
        style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #16a34a10 100%)' }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}
          >
            <span className="text-white font-black text-lg">K</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight text-white">
              Pesa<span style={{ color: '#4ade80' }}>Flow</span>
            </h1>
          </div>
        </div>

        {/* Center quote */}
        <div>
          <blockquote className="text-3xl font-bold text-white leading-tight mb-4">
            "Every shilling has a{' '}
            <span style={{ color: '#f59e0b' }}>purpose.</span>
            <br />
            Make yours count."
          </blockquote>
          <p className="text-sm font-semibold tracking-widest"
            style={{ color: '#64748b' }}>
            TRACK · SAVE · GROW
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          {[
            { value: 'KES', label: 'Native Currency' },
            { value: 'AI', label: 'Powered Coach' },
            { value: '100%', label: 'Your Data' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-black"
                style={{ color: '#4ade80' }}>{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Auth Form */}
      <div className="flex items-center justify-center p-6 lg:p-12"
        style={{ background: 'var(--background)' }}>
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}
            >
              <span className="text-white font-black text-lg">K</span>
            </div>
            <h1 className="text-xl font-black tracking-tight"
              style={{ color: 'var(--foreground)' }}>
              Pesa<span style={{ color: '#16a34a' }}>Flow</span>
            </h1>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}