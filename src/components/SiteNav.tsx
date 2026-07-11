import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { designerProfile, navItems } from '../data/portfolio'
import Container from './Container'

function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-abyss-950/72 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <NavLink className="flex items-center gap-3" to="/">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-cyan-200/30 bg-cyan-200/10 text-cyan-100">
            <Sparkles size={20} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">{designerProfile?.name ?? 'Designer'}</span>
            <span className="block text-xs uppercase tracking-[0.28em] text-cyan-200/70">
              {designerProfile?.role ?? 'UI Designer'}
            </span>
          </span>
        </NavLink>
        <nav className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] p-1">
          {(navItems ?? []).map((item) => (
            <NavLink
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm transition ${
                  isActive ? 'bg-cyan-100/14 text-cyan-50' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
                }`
              }
              key={item?.path ?? item?.label}
              to={item?.path ?? '/'}
            >
              {item?.label ?? 'Nav'}
            </NavLink>
          ))}
        </nav>
      </Container>
    </header>
  )
}

export default SiteNav
