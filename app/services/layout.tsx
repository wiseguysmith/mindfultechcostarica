import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Digital Workers (AI Agents + automation) and Capital Rails (tokenization + deal structuring) services.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

