import React from 'react'
import { motion } from 'framer-motion'
import { Layers3, MonitorCog, PenTool, Waves } from 'lucide-react'
import Container from '../components/Container'
import PrimaryButton from '../components/PrimaryButton'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { assetPath, capabilities, designerProfile, processSteps, projects } from '../data/portfolio'

function HomePage() {
  const featuredProject = projects?.[0]

  return (
    <div>
      <Container className="pb-24 pt-20">
        <section className="grid min-h-[680px] grid-cols-[1.05fr_0.95fr] items-center gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.42em] text-cyan-200/80">
              {designerProfile?.role ?? 'UI Designer'} Portfolio
            </p>
            <h1 className="mt-8 max-w-5xl text-7xl font-semibold leading-[1.02] text-white text-balance">
              {designerProfile?.headline ?? 'Digital product design with quiet depth.'}
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
              {designerProfile?.intro ?? 'Portfolio introduction placeholder.'}
            </p>
            <div className="mt-10 flex items-center gap-4">
              <PrimaryButton to="/work">查看作品集</PrimaryButton>
              <PrimaryButton to="/contact">预约合作</PrimaryButton>
            </div>
          </motion.div>
          <motion.div
            className="relative h-[620px]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 rounded-lg border border-cyan-200/20 bg-cyan-100/[0.04] shadow-jelly-soft" />
            <img
              alt="Deep sea jellyfish inspired UI placeholder"
              className="absolute inset-8 h-[calc(100%-4rem)] w-[calc(100%-4rem)] rounded-lg object-cover"
              src={assetPath('assets/placeholder-image.svg')}
            />
            <div className="absolute bottom-12 left-12 right-12 rounded-lg border border-white/10 bg-abyss-950/78 p-6 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-teal-200/80">Current Focus</p>
              <p className="mt-3 text-2xl font-semibold text-white">AI workflow, SaaS dashboard, design system</p>
            </div>
          </motion.div>
        </section>
      </Container>

      <Container className="py-20">
        <SectionHeader
          eyebrow="Selected Work"
          title="高密度产品界面，也可以保持清澈、克制和带有光感。"
          description="作品以占位内容展示结构，后续可以直接替换为真实项目图片、视频和案例文字。"
        />
        {featuredProject ? <ProjectCard featured project={featuredProject} /> : null}
      </Container>

      <Container className="py-20">
        <SectionHeader
          eyebrow="Capabilities"
          title="从产品结构到视觉系统的完整设计交付。"
          description="面向真实开发协作的组件化思维，兼顾界面质感、交互效率和可实现性。"
        />
        <div className="grid grid-cols-4 gap-5">
          {(capabilities ?? []).map((capability, index) => {
            const icons = [PenTool, Layers3, Waves, MonitorCog]
            const Icon = icons?.[index] ?? PenTool

            return (
              <motion.article
                className="glass-panel rounded-lg p-6"
                key={capability?.title ?? index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-md bg-cyan-200/10 text-cyan-100">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{capability?.title ?? 'Capability'}</h3>
                <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-300">
                  {capability?.description ?? 'Capability description.'}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(capability?.tools ?? []).map((tool) => (
                    <span className="rounded-md bg-white/[0.05] px-2.5 py-1 text-xs text-cyan-50" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>

      <Container className="pb-28 pt-20">
        <section className="glass-panel grid grid-cols-[0.85fr_1.15fr] gap-10 rounded-lg p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Process</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white">稳定推进，从模糊问题到可交付界面。</h2>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {(processSteps ?? []).map((step, index) => (
              <motion.div
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
                key={step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <span className="text-sm text-cyan-200">0{index + 1}</span>
                <p className="mt-8 text-base font-semibold text-white">{step ?? 'Step'}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  )
}

export default HomePage
