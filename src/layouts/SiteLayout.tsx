import React from 'react'
import DeepSeaBackground from '../components/DeepSeaBackground'
import Footer from '../components/Footer'
import SiteNav from '../components/SiteNav'

type SiteLayoutProps = {
  children: React.ReactNode
}

function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden text-slate-100">
      <DeepSeaBackground />
      <SiteNav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default SiteLayout
