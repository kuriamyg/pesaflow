'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RegisterPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="text-center space-y-4">
        <div className="text-5xl">📬</div>
        <h2 className="text-2xl font-black" style={{ color: 'var(--foreground)' }}>
          Check your email
        </h2>
        <p className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
          We sent a confirmation link to{' '}
          <span className="font-semibold" style={{ color: '#16a34a' }}>{email}</span>.
          Click it to activate your account.
        </p>
        <Link href="/login">
          <Button variant="outline" className="w-full mt-4">
            Back to Sign In
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-black tracking-tight"
          style={{ color: 'var(--foreground)' }}>
          Create account
        </h2>
        <p className="mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
          Start tracking every shilling today
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Mwangi Moses"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Min. 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
            minLength={8}
          />
        </div>

        {error && (
          <div className="text-sm p-3 rounded-lg"
            style={{
              background: '#fef2f2',
              color: '#ef4444',
              border: '1px solid #fecaca'
            }}>
            {error}
          </div>
        )}

        <Button
          onClick={handleRegister}
          disabled={loading || !email || !password || !fullName}
          className="w-full font-semibold"
          style={{
            background: 'linear-gradient(135deg, #16a34a, #059669)',
            color: 'white',
            height: '48px',
            fontSize: '15px',
          }}
        >
          {loading ? 'Creating account...' : 'Create Free Account'}
        </Button>

        <p className="text-center text-sm" style={{ color: 'var(--muted-foreground)' }}>
          Already have an account?{' '}
          <Link href="/login"
            className="font-semibold hover:underline"
            style={{ color: '#16a34a' }}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}