import React from 'react'
import Container from '../components/Container'
import PrimaryButton from '../components/PrimaryButton'

function NotFoundPage() {
  return (
    <Container className="grid min-h-[640px] place-items-center py-24">
      <section className="glass-panel max-w-3xl rounded-lg p-10 text-center">
        <p className="text-sm uppercase tracking-[0.38em] text-cyan-200/80">404</p>
        <h1 className="mt-5 text-5xl font-semibold text-white">这个页面暂时潜入深海。</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          当前路由没有匹配内容，但应用仍然稳定渲染。你可以返回首页继续浏览作品集。
        </p>
        <div className="mt-8">
          <PrimaryButton to="/">返回首页</PrimaryButton>
        </div>
      </section>
    </Container>
  )
}

export default NotFoundPage
