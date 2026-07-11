import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

type PrimaryButtonProps = {
  to: string
  children: React.ReactNode
}

function PrimaryButton({ to, children }: PrimaryButtonProps) {
  return (
    <Link
      className="inline-flex h-12 items-center gap-3 rounded-md border border-cyan-200/30 bg-cyan-200/10 px-5 text-sm font-semibold text-cyan-50 shadow-jelly-soft transition hover:border-cyan-100/70 hover:bg-cyan-100/18"
      to={to ?? '/'}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={18} />
    </Link>
  )
}

export default PrimaryButton
