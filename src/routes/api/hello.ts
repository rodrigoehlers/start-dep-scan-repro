import { createFileRoute } from '@tanstack/react-router'
import { greeting } from 'node-only'

export const Route = createFileRoute('/api/hello')({
  server: { handlers: { GET: () => new Response(greeting()) } },
})
