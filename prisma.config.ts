
import path from 'path'
import { defineConfig } from 'prisma/config'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

export default defineConfig({
  schema: path.join('prisma', 'schema.prisma'),
  datasource: {
    url: process.env.DIRECT_URL!,
  },
  migrate: {
    async adapter() {
      const { PrismaPg } = await import('@prisma/adapter-pg')
      const { default: pg } = await import('pg')
      const pool = new pg.Pool({
        connectionString: process.env.DIRECT_URL,
      })
      return new PrismaPg(pool)
    },
  },
})