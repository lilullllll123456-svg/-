import React from 'react'
import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { capabilities, designerProfile, timeline } from '../data/portfolio'

function AboutPage() {
  return (
    <div>
      <Container className="pb-20 pt-20">
        <SectionHeader
          eyebrow="About"
          title={`${designerProfile?.name ?? 'Designer'}，专注让复杂产品拥有清晰的使用秩序。`}
          description={designerProfile?.intro ?? 'Designer introduction placeholder.'}
        />
        <section className="grid grid-cols-[0.9fr_1.1fr] gap-8">
          <div className="glass-panel rounded-lg p-8">
            <img
              alt="Designer portrait placeholder"
              className="h-[460px] w-full rounded-lg object-cover"
              src="/assets/placeholder-image.svg"
            />
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-md bg-white/[0.04] p-4">
                <p className="text-slate-400">Location</p>
                <p className="mt-2 text-white">{designerProfile?.location ?? 'Remote'}</p>
              </div>
              <div className="rounded-md bg-white/[0.04] p-4">
                <p className="text-slate-400">Email</p>
                <p className="mt-2 text-white">{designerProfile?.email ?? 'hello@portfolio.local'}</p>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            {(timeline ?? []).map((item, index) => (
              <motion.article
                className="glass-panel rounded-lg p-7"
                key={`${item?.period ?? 'period'}-${index}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200/75">{item?.period ?? 'Now'}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item?.title ?? 'Experience'}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{item?.description ?? 'Experience description.'}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </Container>

      <Container className="pb-28">
        <section className="glass-panel rounded-lg p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Toolbox</p>
          <div className="mt-8 grid grid-cols-4 gap-4">
            {(capabilities ?? []).map((capability) => (
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5" key={capability?.title}>
                <h3 className="text-lg font-semibold text-white">{capability?.title ?? 'Capability'}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(capability?.tools ?? []).map((tool) => (
                    <span className="rounded-md bg-cyan-200/[0.07] px-3 py-1 text-xs text-cyan-50" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </div>
  )
}

export default AboutPage
