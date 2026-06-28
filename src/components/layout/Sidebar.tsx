'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  ArrowLeftRight,
  PiggyBank,
  Target,
  Bot,
  Settings,
  LogOut,
  TrendingUp,
} from 'lucide-react'

const navItems = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Transactions',
    href: '/transactions',
    icon: ArrowLeftRight,
  },
  {
    label: 'Budgets',
    href: '/budgets',
    icon: Target,
  },
  {
    label: 'Savings',
    href: '/savings',
    icon: PiggyBank,
  },
  {
    label: 'AI Coach',
    href: '/ai-coach',
    icon: Bot,
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  async function handleSignOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <aside
      className="fixed left-0 top-0 h-full w-64 flex flex-col z-40 border-r"
      style={{
        background: 'var(--sidebar)',
        borderColor: 'var(--sidebar-border)',
      }}
    >
      {/* Logo */}
      <div className="p-6 border-b" style={{ borderColor: 'var(--sidebar-border)' }}>
        <Link href="/dashboard" className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}
          >
            <span className="text-white font-black text-base">K</span>
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tight leading-none"
              style={{ color: 'var(--sidebar-foreground)' }}>
              Pesa<span style={{ color: 'var(--sidebar-primary)' }}>Flow</span>
            </h1>
            <p className="text-xs mt-0.5" style={{ color: 'var(--muted-foreground)' }}>
              Track · Save · Grow
            </p>
          </div>
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href ||
            pathname.startsWith(item.href + '/')
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
              style={{
                background: isActive ? 'var(--sidebar-accent)' : 'transparent',
                color: isActive
                  ? 'var(--sidebar-accent-foreground)'
                  : 'var(--muted-foreground)',
              }}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
              {item.label}
              {item.label === 'AI Coach' && (
                <span
                  className="ml-auto text-xs font-bold px-1.5 py-0.5 rounded-full"
                  style={{ background: '#f59e0b20', color: '#f59e0b' }}
                >
                  AI
                </span>
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom — Upgrade + Sign out */}
      <div className="p-4 border-t space-y-2"
        style={{ borderColor: 'var(--sidebar-border)' }}>

        {/* Trading shortcut — for you specifically */}
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold"
          style={{ background: '#f59e0b15', color: '#f59e0b' }}
        >
          <TrendingUp size={14} />
          XAU/USD Today
          <span className="ml-auto font-mono text-xs">—</span>
        </div>

        {/* Sign out */}
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 hover:opacity-80"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  )
}