import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { assetPath, projects } from '../data/portfolio'

function WorkPage() {
  const categories = Array.from(new Set((projects ?? []).map((project) => project?.category ?? 'Case')))

  return (
    <div>
      <Container className="pb-12 pt-20">
        <SectionHeader
          eyebrow="Portfolio"
          title="覆盖数据产品、AI 工作台、设计系统与移动体验。"
          description="所有卡片均预留真实项目替换位，包含图片、标签、指标和案例摘要。"
        />
        <div className="mb-10 flex gap-3">
          {(categories ?? []).map((category) => (
            <span className="rounded-md border border-cyan-200/20 bg-cyan-200/[0.06] px-4 py-2 text-sm text-cyan-50" key={category}>
              {category}
            </span>
          ))}
        </div>
      </Container>
      <Container className="pb-28">
        <div className="grid grid-cols-2 gap-6">
          {(projects ?? []).map((project) => (
            <ProjectCard key={project?.id ?? project?.title} project={project} />
          ))}
        </div>
        <motion.section
          className="glass-panel mt-8 grid grid-cols-[1fr_0.8fr] gap-8 rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Motion Preview</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">视频内容占位</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              后续可以替换为真实案例演示视频、交互动效录屏或设计走查影片。当前使用真实存在的 poster 资源，避免静态路径 404。
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10">
            <img
              alt="Video poster placeholder"
              className="h-full min-h-[260px] w-full object-cover"
              src={assetPath('assets/placeholder-video-poster.svg')}
            />
          </div>
        </motion.section>
      </Container>
    </div>
  )
}

export default WorkPage
