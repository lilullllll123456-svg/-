import React from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { contactTopics, designerProfile } from '../data/portfolio'

function ContactPage() {
  return (
    <div>
      <Container className="pb-28 pt-20">
        <SectionHeader
          eyebrow="Contact"
          title="一起把产品界面做得更清楚、更安静，也更有记忆点。"
          description="当前为前端静态作品集，表单区域作为视觉占位，不连接后端提交。"
        />
        <section className="grid grid-cols-[0.85fr_1.15fr] gap-8">
          <div className="glass-panel rounded-lg p-8">
            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-lg bg-white/[0.04] p-5">
                <Mail className="mt-1 text-cyan-100" size={22} />
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="mt-1 text-lg font-semibold text-white">{designerProfile?.email ?? 'hello@portfolio.local'}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg bg-white/[0.04] p-5">
                <MapPin className="mt-1 text-cyan-100" size={22} />
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="mt-1 text-lg font-semibold text-white">{designerProfile?.location ?? 'Remote'}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-200/80">Topics</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {(contactTopics ?? []).map((topic) => (
                  <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200" key={topic}>
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <form className="glass-panel rounded-lg p-8" onSubmit={(event) => event?.preventDefault()}>
            <div className="grid grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm text-slate-300">姓名</span>
                <input
                  className="mt-2 h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-cyan-200/60"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">邮箱</span>
                <input
                  className="mt-2 h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-cyan-200/60"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="text-sm text-slate-300">合作方向</span>
              <input
                className="mt-2 h-12 w-full rounded-md border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-cyan-200/60"
                placeholder="Dashboard / AI product / Design system"
                type="text"
              />
            </label>
            <label className="mt-5 block">
              <span className="text-sm text-slate-300">项目说明</span>
              <textarea
                className="mt-2 min-h-[220px] w-full resize-none rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 text-white outline-none transition focus:border-cyan-200/60"
                placeholder="Describe the brief here..."
              />
            </label>
            <button
              className="mt-6 inline-flex h-12 items-center gap-3 rounded-md border border-cyan-200/30 bg-cyan-200/10 px-5 text-sm font-semibold text-cyan-50 shadow-jelly-soft transition hover:border-cyan-100/70 hover:bg-cyan-100/18"
              type="submit"
            >
              <Send size={18} />
              发送占位信息
            </button>
          </form>
        </section>
      </Container>
    </div>
  )
}

export default ContactPage
