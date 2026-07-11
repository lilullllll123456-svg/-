import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { assetPath, type Project } from '../data/portfolio'

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      className={`glass-panel group overflow-hidden rounded-lg ${featured ? 'grid grid-cols-[1.2fr_0.8fr]' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative min-h-[280px] overflow-hidden bg-abyss-900">
        <img
          alt={`${project?.title ?? 'Project'} media placeholder`}
          className="h-full min-h-[280px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
          src={project?.image ?? assetPath('assets/placeholder-image.svg')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-abyss-950/80 via-transparent to-cyan-200/5" />
      </div>
      <div className="flex min-h-[280px] flex-col justify-between p-7">
        <div>
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/75">
              {project?.category ?? 'Case'} / {project?.year ?? '2026'}
            </p>
            <ArrowUpRight className="text-cyan-100/70 transition group-hover:text-cyan-100" size={22} />
          </div>
          <h3 className="mt-5 text-2xl font-semibold leading-snug text-white">{project?.title ?? 'Untitled'}</h3>
          <p className="mt-4 text-base leading-7 text-slate-300">{project?.summary ?? 'Project summary placeholder.'}</p>
        </div>
        <div>
          <div className="mt-8 flex flex-wrap gap-2">
            {(project?.tags ?? []).map((tag) => (
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {(project?.metrics ?? []).map((metric) => (
              <span className="rounded-md bg-cyan-200/[0.06] px-3 py-2 text-xs text-cyan-50" key={metric}>
                {metric}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
