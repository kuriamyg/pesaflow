'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-black tracking-tight"
          style={{ color: 'var(--foreground)' }}>
          Welcome back
        </h2>
        <p className="mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
          Sign in to your PesaFlow account
        </p>
      </div>

      <div className="space-y-4">
        {/* Email field */}
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

        {/* Password field */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        {/* Error */}
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

        {/* Submit */}
        <Button
          onClick={handleLogin}
          disabled={loading || !email || !password}
          className="w-full font-semibold"
          style={{
            background: 'linear-gradient(135deg, #16a34a, #059669)',
            color: 'white',
            height: '48px',
            fontSize: '15px',
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>

        {/* Divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t" style={{ borderColor: 'var(--border)' }} />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2"
              style={{
                background: 'var(--background)',
                color: 'var(--muted-foreground)'
              }}>
              or
            </span>
          </div>
        </div>

        {/* Register link */}
        <p className="text-center text-sm" style={{ color: 'var(--muted-foreground)' }}>
          No account yet?{' '}
          <Link href="/register"
            className="font-semibold hover:underline"
            style={{ color: '#16a34a' }}>
            Create one free
          </Link>
        </p>
      </div>
    </div>
  )
}