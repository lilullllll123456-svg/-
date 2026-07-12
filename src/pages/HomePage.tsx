import React from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  x?: number
  y?: number
}

type MagnetProps = {
  children: React.ReactNode
  className?: string
  padding?: number
  strength?: number
}

type ProjectCardData = {
  number: string
  category: string
  name: string
  images: string[]
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Price', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const portraitImage = `${import.meta.env?.BASE_URL ?? '/'}assets/lucy-portrait.png`

const marqueeImages = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
]

const aboutDecorations = [
  {
    alt: 'Moon 3D object',
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: 'left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]',
    delay: 0.1,
    x: -80,
  },
  {
    alt: 'Abstract 3D object',
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: 'bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]',
    delay: 0.25,
    x: -80,
  },
  {
    alt: 'Lego 3D object',
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: 'right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]',
    delay: 0.15,
    x: 80,
  },
  {
    alt: 'Grouped 3D objects',
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: 'bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]',
    delay: 0.3,
    x: 80,
  },
]

const services = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
]

const projectCards: ProjectCardData[] = [
  {
    number: '01',
    category: 'Client',
    name: 'Nextlevel Studio',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    ],
  },
  {
    number: '02',
    category: 'Personal',
    name: 'Aura Brand Identity',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    ],
  },
  {
    number: '03',
    category: 'Client',
    name: 'Solaris Digital',
    images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    ],
  },
]

function FadeIn({ children, className = '', delay = 0, duration = 0.7, x = 0, y = 30 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ContactButton() {
  return (
    <a
      className="inline-flex rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white outline outline-2 -outline-offset-[3px] outline-white transition duration-200 hover:scale-[1.03] sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base"
      href="mailto:hello@lucy.dev"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
      }}
    >
      Contact Me
    </a>
  )
}

function LiveProjectButton() {
  return (
    <a
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition duration-200 hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
      href="#contact"
    >
      Live Project
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  )
}

function Magnet({ children, className = '', padding = 150, strength = 3 }: MagnetProps) {
  const elementRef = React.useRef<HTMLDivElement | null>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0, active: false })

  const handlePointerMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = elementRef?.current?.getBoundingClientRect()

    if (!rect) {
      return
    }

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const isInside =
      event.clientX >= rect.left - padding &&
      event.clientX <= rect.right + padding &&
      event.clientY >= rect.top - padding &&
      event.clientY <= rect.bottom + padding

    if (!isInside) {
      setPosition({ x: 0, y: 0, active: false })
      return
    }

    setPosition({
      x: (event.clientX - centerX) / strength,
      y: (event.clientY - centerY) / strength,
      active: true,
    })
  }

  const handlePointerLeave = () => {
    setPosition({ x: 0, y: 0, active: false })
  }

  return (
    <div
      className={className}
      onMouseLeave={handlePointerLeave}
      onMouseMove={handlePointerMove}
      ref={elementRef}
      style={{
        transform: `translate3d(${position?.x ?? 0}px, ${position?.y ?? 0}px, 0)`,
        transition: position?.active ? 'transform 0.3s ease-out' : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

function AnimatedCharacter({
  char,
  index,
  total,
  progress,
}: {
  char: string
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = total > 0 ? index / total : 0
  const end = total > 0 ? (index + 1) / total : 1
  const opacity = useTransform(progress, [start, end], [0.2, 1])

  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span className="absolute inset-0" style={{ opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  )
}

function AnimatedText({ text }: { text: string }) {
  const paragraphRef = React.useRef<HTMLParagraphElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  })
  const characters = text?.split('') ?? []

  return (
    <p
      className="max-w-[560px] text-center text-[clamp(1rem,2vw,1.35rem)] font-medium leading-relaxed text-[#D7E2EA]"
      ref={paragraphRef}
    >
      {(characters ?? []).map((char, index) => (
        <AnimatedCharacter
          char={char}
          index={index}
          key={`${char}-${index}`}
          progress={scrollYProgress}
          total={characters?.length ?? 0}
        />
      ))}
    </p>
  )
}

function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip bg-[#0C0C0C]">
      <FadeIn delay={0} y={-20}>
        <nav className="relative z-20 flex justify-between px-6 pt-6 text-sm font-medium uppercase tracking-wider text-[#D7E2EA] md:px-10 md:pt-8 md:text-lg lg:text-[1.4rem]">
          {(navLinks ?? []).map((link) => (
            <a
              className="transition duration-200 hover:opacity-70"
              href={link?.href ?? '#'}
              key={link?.label ?? link?.href}
            >
              {link?.label ?? 'Link'}
            </a>
          ))}
        </nav>
      </FadeIn>

      <FadeIn className="relative z-0 mt-6 overflow-hidden sm:mt-4 md:-mt-5" delay={0.15} y={40}>
        <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
          Hi, i&apos;m LUCY
        </h1>
      </FadeIn>

      <Magnet
        className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
        padding={150}
        strength={3}
      >
        <FadeIn delay={0.6} y={30}>
          <img
            alt="Lucy 3D creator portrait"
            className="block w-full select-none object-contain"
            draggable="false"
            loading="eager"
            src={portraitImage}
          />
        </FadeIn>
      </Magnet>

      <div className="relative z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p className="max-w-[160px] text-[clamp(0.75rem,1.4vw,1.5rem)] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}

function MarqueeSection() {
  const sectionRef = React.useRef<HTMLElement | null>(null)
  const [offset, setOffset] = React.useState(0)
  const firstRow = marqueeImages?.slice(0, 11) ?? []
  const secondRow = marqueeImages?.slice(11) ?? []
  const repeatedFirstRow = [...firstRow, ...firstRow, ...firstRow]
  const repeatedSecondRow = [...secondRow, ...secondRow, ...secondRow]

  React.useEffect(() => {
    const updateOffset = () => {
      const rect = sectionRef?.current?.getBoundingClientRect()
      const scrollY = window?.scrollY ?? 0
      const innerHeight = window?.innerHeight ?? 0

      if (!rect) {
        return
      }

      const sectionTop = scrollY + rect.top
      setOffset((scrollY - sectionTop + innerHeight) * 0.3)
    }

    updateOffset()
    window.addEventListener('scroll', updateOffset, { passive: true })
    window.addEventListener('resize', updateOffset)

    return () => {
      window.removeEventListener('scroll', updateOffset)
      window.removeEventListener('resize', updateOffset)
    }
  }, [])

  return (
    <section className="overflow-hidden bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40" ref={sectionRef}>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}>
          {(repeatedFirstRow ?? []).map((image, index) => (
            <img
              alt={`3D project preview ${index + 1}`}
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
              key={`${image}-${index}`}
              loading="lazy"
              src={image}
            />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-1 * (offset - 200)}px)`, willChange: 'transform' }}
        >
          {(repeatedSecondRow ?? []).map((image, index) => (
            <img
              alt={`3D project preview ${index + 12}`}
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
              key={`${image}-${index}`}
              loading="lazy"
              src={image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const aboutText =
    "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0C0C0C] px-5 py-20 sm:px-8 md:px-10"
      id="about"
    >
      {(aboutDecorations ?? []).map((decoration) => (
        <FadeIn
          className={`pointer-events-none absolute ${decoration?.className ?? ''}`}
          delay={decoration?.delay ?? 0}
          duration={0.9}
          key={decoration?.src ?? decoration?.alt}
          x={decoration?.x ?? 0}
          y={0}
        >
          <img
            alt={decoration?.alt ?? '3D decoration'}
            className="block w-full select-none object-contain"
            draggable="false"
            loading="lazy"
            src={decoration?.src ?? ''}
          />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight">
            About me
          </h2>
        </FadeIn>
        <AnimatedText text={aboutText} />
        <FadeIn className="pt-6 sm:pt-8" delay={0.2} y={20}>
          <div id="contact">
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32" id="services">
      <FadeIn y={40}>
        <h2 className="mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {(services ?? []).map((service, index) => (
          <FadeIn delay={index * 0.1} key={service?.number ?? index} y={35}>
            <article className="grid gap-6 border-t border-[rgba(12,12,12,0.15)] py-8 last:border-b sm:grid-cols-[0.34fr_0.66fr] sm:gap-10 sm:py-10 md:py-12">
              <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#0C0C0C]">
                {service?.number ?? '00'}
              </span>
              <div className="flex flex-col justify-center">
                <h3 className="text-[clamp(1rem,2.2vw,2.1rem)] font-medium uppercase leading-tight">
                  {service?.name ?? 'Service'}
                </h3>
                <p className="mt-4 max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] font-light leading-relaxed opacity-60">
                  {service?.description ?? 'Service description.'}
                </p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index, totalCards }: { project: ProjectCardData; index: number; totalCards: number }) {
  const cardRef = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])
  const images = project?.images ?? []

  return (
    <div className="relative h-[85vh]" ref={cardRef}>
      <motion.article
        className="sticky rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={{ scale, top: `${96 + index * 28}px` }}
      >
        <div className="grid items-center gap-6 md:grid-cols-[0.24fr_0.2fr_1fr_auto]">
          <span className="text-[clamp(3rem,10vw,140px)] font-black leading-none text-[#D7E2EA]">
            {project?.number ?? '00'}
          </span>
          <span className="text-sm font-light uppercase tracking-widest text-[#D7E2EA]/70 md:text-base">
            {project?.category ?? 'Category'}
          </span>
          <h3 className="text-[clamp(2rem,5vw,80px)] font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
            {project?.name ?? 'Project'}
          </h3>
          <LiveProjectButton />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.4fr_0.6fr]">
          <div className="grid gap-4">
            <img
              alt={`${project?.name ?? 'Project'} preview one`}
              className="h-[clamp(130px,16vw,230px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
              src={images?.[0] ?? ''}
            />
            <img
              alt={`${project?.name ?? 'Project'} preview two`}
              className="h-[clamp(160px,22vw,340px)] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              loading="lazy"
              src={images?.[1] ?? ''}
            />
          </div>
          <img
            alt={`${project?.name ?? 'Project'} main preview`}
            className="h-full min-h-[360px] w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            loading="lazy"
            src={images?.[2] ?? ''}
          />
        </div>
      </motion.article>
    </div>
  )
}

function ProjectsSection() {
  return (
    <section
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
      id="projects"
    >
      <FadeIn y={40}>
        <h2 className="hero-heading mb-16 text-center text-[clamp(3rem,12vw,160px)] font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28">
          Project
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-[1700px]">
        {(projectCards ?? []).map((project, index) => (
          <ProjectCard
            index={index}
            key={project?.name ?? index}
            project={project}
            totalCards={projectCards?.length ?? 0}
          />
        ))}
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-['Kanit',sans-serif] text-[#D7E2EA]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  )
}

export default HomePage
