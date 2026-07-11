import React from 'react'
import Container from './Container'
import { designerProfile } from '../data/portfolio'

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex items-center justify-between gap-8 text-sm text-slate-400">
        <p>{designerProfile?.name ?? 'Designer'} Portfolio 2026</p>
        <p>{designerProfile?.availability ?? 'Available for selected projects'}</p>
      </Container>
    </footer>
  )
}

export default Footer
