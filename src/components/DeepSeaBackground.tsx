import React from 'react'
import { motion } from 'framer-motion'

const glowOrbs = [
  'left-[8%] top-[10%] h-72 w-72 bg-cyan-300/18',
  'right-[12%] top-[16%] h-96 w-96 bg-violet-400/16',
  'left-[42%] bottom-[8%] h-80 w-80 bg-teal-300/12'
]

function DeepSeaBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-abyss-950">
      <div className="absolute inset-0 bg-deep-radial" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:80px_80px]" />
      {(glowOrbs ?? []).map((orbClass, index) => (
        <motion.div
          aria-hidden="true"
          className={`absolute rounded-full blur-3xl ${orbClass ?? ''}`}
          key={`${orbClass ?? 'orb'}-${index}`}
          animate={{ y: [0, -24, 0], opacity: [0.42, 0.72, 0.42] }}
          transition={{ duration: 8 + index * 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-cyan-200/10 bg-cyan-200/5 blur-sm"
        animate={{ scale: [1, 1.04, 1], opacity: [0.28, 0.46, 0.28] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-abyss-950 to-transparent" />
    </div>
  )
}

export default DeepSeaBackground
