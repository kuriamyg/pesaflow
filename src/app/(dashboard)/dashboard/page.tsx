import {
  TrendingUp,
  TrendingDown,
  Wallet,
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
} from 'lucide-react'
import Link from 'next/link'

// ── Helpers ──────────────────────────────
function formatKES(amount: number) {
  return `KES ${amount.toLocaleString('en-KE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}

// ── Sub-components ────────────────────────
function SummaryCard({
  title,
  amount,
  change,
  changeLabel,
  icon: Icon,
  color,
  bgColor,
}: {
  title: string
  amount: number
  change: number
  changeLabel: string
  icon: React.ElementType
  color: string
  bgColor: string
}) {
  const isPositive = change >= 0
  return (
    <div className="pf-card flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium"
          style={{ color: 'var(--muted-foreground)' }}>{title}</span>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: bgColor }}>
          <Icon size={18} style={{ color }} />
        </div>
      </div>
      <div>
        <div className="text-2xl font-black tracking-tight"
          style={{ color: 'var(--foreground)' }}>
          {formatKES(amount)}
        </div>
        <div className="flex items-center gap-1 mt-1">
          {isPositive
            ? <ArrowUpRight size={14} style={{ color: '#16a34a' }} />
            : <ArrowDownRight size={14} style={{ color: '#ef4444' }} />
          }
          <span className="text-xs font-semibold"
            style={{ color: isPositive ? '#16a34a' : '#ef4444' }}>
            {Math.abs(change)}%
          </span>
          <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            {changeLabel}
          </span>
        </div>
      </div>
    </div>
  )
}

function RecentTransaction({
  description,
  category,
  amount,
  type,
  date,
  emoji,
}: {
  description: string
  category: string
  amount: number
  type: 'INCOME' | 'EXPENSE'
  date: string
  emoji: string
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b last:border-0"
      style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base"
          style={{ background: 'var(--muted)' }}>
          {emoji}
        </div>
        <div>
          <div className="text-sm font-semibold"
            style={{ color: 'var(--foreground)' }}>{description}</div>
          <div className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
            {category} · {date}
          </div>
        </div>
      </div>
      <div className={`text-sm font-bold`}
        style={{ color: type === 'INCOME' ? '#16a34a' : '#ef4444' }}>
        {type === 'INCOME' ? '+' : '-'}{formatKES(amount)}
      </div>
    </div>
  )
}

function SavingsPotCard({
  name,
  emoji,
  current,
  target,
  color,
}: {
  name: string
  emoji: string
  current: number
  target: number
  color: string
}) {
  const pct = Math.min((current / target) * 100, 100)
  return (
    <div className="pf-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <span className="text-sm font-semibold"
            style={{ color: 'var(--foreground)' }}>{name}</span>
        </div>
        <span className="text-xs font-bold"
          style={{ color }}>{Math.round(pct)}%</span>
      </div>
      <div className="w-full h-2 rounded-full"
        style={{ background: 'var(--muted)' }}>
        <div
          className="h-2 rounded-full transition-all duration-500"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
          {formatKES(current)}
        </span>
        <span className="text-xs" style={{ color: 'var(--muted-foreground)' }}>
          {formatKES(target)}
        </span>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────
export default function DashboardPage() {
  // Placeholder data — will come from DB in next step
  const summaryCards = [
    {
      title: 'Total Income',
      amount: 45000,
      change: 12,
      changeLabel: 'vs last month',
      icon: TrendingUp,
      color: '#16a34a',
      bgColor: '#dcfce7',
    },
    {
      title: 'Total Expenses',
      amount: 28350,
      change: -5,
      changeLabel: 'vs last month',
      icon: TrendingDown,
      color: '#ef4444',
      bgColor: '#fee2e2',
    },
    {
      title: 'Net Balance',
      amount: 16650,
      change: 8,
      changeLabel: 'vs last month',
      icon: Wallet,
      color: '#3b82f6',
      bgColor: '#dbeafe',
    },
    {
      title: 'Total Saved',
      amount: 12000,
      change: 20,
      changeLabel: 'vs last month',
      icon: PiggyBank,
      color: '#f59e0b',
      bgColor: '#fef3c7',
    },
  ]

  const recentTransactions = [
    { description: 'Naivas Supermarket', category: 'Groceries', amount: 1850, type: 'EXPENSE' as const, date: 'Today', emoji: '🛒' },
    { description: 'Freelance Payment', category: 'Freelance', amount: 15000, type: 'INCOME' as const, date: 'Today', emoji: '🧑‍💻' },
    { description: 'Matatu Fare', category: 'Transport', amount: 100, type: 'EXPENSE' as const, date: 'Yesterday', emoji: '🚌' },
    { description: 'Tithe', category: 'Church & Giving', amount: 4500, type: 'EXPENSE' as const, date: 'Sun', emoji: '🙏' },
    { description: 'Data Bundle', category: 'WiFi & Data', amount: 500, type: 'EXPENSE' as const, date: 'Sat', emoji: '📶' },
  ]

  const savingsPots = [
    { name: 'Trading Capital', emoji: '📈', current: 8000, target: 50000, color: '#f59e0b' },
    { name: 'Emergency Fund', emoji: '🏦', current: 4000, target: 20000, color: '#16a34a' },
    { name: 'New Laptop', emoji: '💻', current: 2500, target: 15000, color: '#3b82f6' },
  ]

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black tracking-tight"
            style={{ color: 'var(--foreground)' }}>
            Good morning 👋
          </h1>
          <p className="text-sm mt-1" style={{ color: 'var(--muted-foreground)' }}>
            Here's your financial overview for June 2026
          </p>
        </div>
        <Link href="/transactions">
          <button
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #16a34a, #059669)' }}
          >
            <Plus size={16} />
            Log Expense
          </button>
        </Link>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {summaryCards.map((card) => (
          <SummaryCard key={card.title} {...card} />
        ))}
      </div>

      {/* Middle row — Transactions + Savings */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">

        {/* Recent Transactions */}
        <div className="xl:col-span-2 pf-card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold"
              style={{ color: 'var(--foreground)' }}>
              Recent Transactions
            </h2>
            <Link href="/transactions"
              className="text-xs font-semibold hover:underline"
              style={{ color: '#16a34a' }}>
              View all
            </Link>
          </div>
          <div>
            {recentTransactions.map((tx, i) => (
              <RecentTransaction key={i} {...tx} />
            ))}
          </div>
        </div>

        {/* Savings Pots */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold"
              style={{ color: 'var(--foreground)' }}>
              Savings Pots
            </h2>
            <Link href="/savings"
              className="text-xs font-semibold hover:underline"
              style={{ color: '#16a34a' }}>
              View all
            </Link>
          </div>
          {savingsPots.map((pot) => (
            <SavingsPotCard key={pot.name} {...pot} />
          ))}
        </div>
      </div>

      {/* AI Insight Card */}
      <div
        className="pf-card border-l-4"
        style={{ borderLeftColor: '#f59e0b' }}
      >
        <div className="flex items-start gap-3">
          <div className="text-2xl">🤖</div>
          <div>
            <div className="text-sm font-bold mb-1"
              style={{ color: 'var(--foreground)' }}>
              AI Coach Insight
            </div>
            <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
              You've spent <strong>KES 1,850</strong> on groceries today.
              Your monthly grocery budget is <strong>KES 8,000</strong> —
              you're at <strong>23%</strong> with 3 weeks remaining.
              You're on track. Keep it up! 💪
            </p>
            <Link href="/ai-coach"
              className="text-xs font-semibold mt-2 inline-block hover:underline"
              style={{ color: '#f59e0b' }}>
              Chat with AI Coach →
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}