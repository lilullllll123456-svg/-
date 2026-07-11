import React from 'react'
import { motion } from 'framer-motion'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <motion.div
      className="mb-10 max-w-4xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-200/80">{eyebrow ?? 'Section'}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-white xl:text-5xl">{title ?? 'Untitled'}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-slate-300">{description}</p> : null}
    </motion.div>
  )
}

export default SectionHeader
