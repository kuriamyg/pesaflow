export type UserProfile = {
  id: string
  email: string
  fullName: string | null
  avatarUrl: string | null
  currency: string
  monthlyIncome: number
  savingsGoalPct: number
  onboarded: boolean
  createdAt: Date
  updatedAt: Date
}

export type TransactionType = 'INCOME' | 'EXPENSE'

export type TransactionSource =
  | 'MANUAL'
  | 'MPESA'
  | 'AIRTEL_MONEY'
  | 'TKASH'
  | 'EQUITEL'
  | 'BANK'
  | 'VOICE'

export type Category =
  | 'RENT'
  | 'ELECTRICITY'
  | 'WATER'
  | 'WIFI_DATA'
  | 'GROCERIES'
  | 'FOOD_DINING'
  | 'TRANSPORT'
  | 'ACADEMIC'
  | 'TECH_BUSINESS'
  | 'CHURCH_GIVING'
  | 'HEALTH'
  | 'PERSONAL_MISC'
  | 'ENTERTAINMENT'
  | 'CLOTHING'
  | 'AIRTIME'
  | 'SALARY'
  | 'FREELANCE'
  | 'BUSINESS'
  | 'FAMILY_SUPPORT'
  | 'TRADING_PROFIT'
  | 'OTHER'

export type PotStatus = 'ACTIVE' | 'COMPLETED' | 'PAUSED'
export type DebtStatus = 'ACTIVE' | 'PAID' | 'OVERDUE'

export type SavingsPot = {
  id: string
  userId: string
  name: string
  targetAmount: number
  currentAmount: number
  deadline: Date | null
  emoji: string | null
  color: string | null
  status: PotStatus
  createdAt: Date
  updatedAt: Date
}

export type Transaction = {
  id: string
  userId: string
  amount: number
  type: TransactionType
  category: Category
  source: TransactionSource
  description: string | null
  note: string | null
  reference: string | null
  recipient: string | null
  date: Date
  createdAt: Date
  updatedAt: Date
}

export type Budget = {
  id: string
  userId: string
  category: Category
  limitAmount: number
  month: number
  year: number
  createdAt: Date
  updatedAt: Date
}

export type ApiResponse<T> = {
  data: T | null
  error: string | null
  success: boolean
}

export type CategoryMeta = {
  label: string
  emoji: string
  type: 'INCOME' | 'EXPENSE'
  color: string
}

export const CATEGORY_META: Record<Category, CategoryMeta> = {
  RENT:           { label: 'Rent',            emoji: '🏠', type: 'EXPENSE', color: '#ef4444' },
  ELECTRICITY:    { label: 'Electricity',     emoji: '💡', type: 'EXPENSE', color: '#f59e0b' },
  WATER:          { label: 'Water',           emoji: '💧', type: 'EXPENSE', color: '#3b82f6' },
  WIFI_DATA:      { label: 'WiFi & Data',     emoji: '📶', type: 'EXPENSE', color: '#8b5cf6' },
  GROCERIES:      { label: 'Groceries',       emoji: '🛒', type: 'EXPENSE', color: '#16a34a' },
  FOOD_DINING:    { label: 'Food & Dining',   emoji: '🍽️', type: 'EXPENSE', color: '#f97316' },
  TRANSPORT:      { label: 'Transport',       emoji: '🚌', type: 'EXPENSE', color: '#06b6d4' },
  ACADEMIC:       { label: 'Academic',        emoji: '📚', type: 'EXPENSE', color: '#6366f1' },
  TECH_BUSINESS:  { label: 'Tech & Business', emoji: '💻', type: 'EXPENSE', color: '#0ea5e9' },
  CHURCH_GIVING:  { label: 'Church & Giving', emoji: '🙏', type: 'EXPENSE', color: '#d97706' },
  HEALTH:         { label: 'Health',          emoji: '🏥', type: 'EXPENSE', color: '#ec4899' },
  PERSONAL_MISC:  { label: 'Personal & Misc', emoji: '🎯', type: 'EXPENSE', color: '#94a3b8' },
  ENTERTAINMENT:  { label: 'Entertainment',   emoji: '🎮', type: 'EXPENSE', color: '#a855f7' },
  CLOTHING:       { label: 'Clothing',        emoji: '👕', type: 'EXPENSE', color: '#14b8a6' },
  AIRTIME:        { label: 'Airtime',         emoji: '📱', type: 'EXPENSE', color: '#84cc16' },
  SALARY:         { label: 'Salary',          emoji: '💰', type: 'INCOME',  color: '#16a34a' },
  FREELANCE:      { label: 'Freelance',       emoji: '🧑‍💻', type: 'INCOME', color: '#059669' },
  BUSINESS:       { label: 'Business',        emoji: '🏢', type: 'INCOME',  color: '#0d9488' },
  FAMILY_SUPPORT: { label: 'Family Support',  emoji: '👨‍👩‍👧', type: 'INCOME', color: '#7c3aed' },
  TRADING_PROFIT: { label: 'Trading Profit',  emoji: '📈', type: 'INCOME',  color: '#f59e0b' },
  OTHER:          { label: 'Other',           emoji: '📦', type: 'EXPENSE', color: '#64748b' },
}