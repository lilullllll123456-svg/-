export type Project = {
  id: number
  title: string
  category: string
  year: string
  summary: string
  image: string
  tags: string[]
  metrics: string[]
}

export type Capability = {
  title: string
  description: string
  tools: string[]
}

export type TimelineItem = {
  period: string
  title: string
  description: string
}

export const designerProfile = {
  name: 'Luna Shen',
  role: 'UI / UX Designer',
  headline: '为复杂产品设计清晰、克制、带有深海光感的数字体验。',
  intro:
    '专注 B 端系统、数据可视化、AI 产品与品牌化界面设计，擅长将信息密度、交互效率与视觉氛围统一在同一个产品语言中。',
  email: 'hello@portfolio.local',
  location: 'Shanghai / Remote',
  availability: 'Available for selected product design projects'
}

export const navItems = [
  { label: '首页', path: '/' },
  { label: '作品', path: '/work' },
  { label: '关于', path: '/about' },
  { label: '联系', path: '/contact' }
]

export const projects: Project[] = [
  {
    id: 1,
    title: 'Abyss OS 数据驾驶舱',
    category: 'Dashboard',
    year: '2026',
    summary:
      '面向运营团队的实时数据产品，强调跨指标扫描、异常识别与多角色协同。',
    image: '/assets/placeholder-image.svg',
    tags: ['Design System', 'Data Viz', 'SaaS'],
    metrics: ['42 screens', '8 modules', '1700px canvas']
  },
  {
    id: 2,
    title: 'JellyFlow AI 创作工作台',
    category: 'AI Product',
    year: '2025',
    summary:
      '为 AI 内容生产链路设计的多面板工作台，整合输入、生成、审阅与发布状态。',
    image: '/assets/placeholder-image.svg',
    tags: ['AI UX', 'Workflow', 'Prototype'],
    metrics: ['12 flows', '5 states', 'Motion guide']
  },
  {
    id: 3,
    title: 'Blue Halo 品牌设计系统',
    category: 'Design System',
    year: '2025',
    summary:
      '从色彩、组件、动效到图表规范的产品级视觉系统，支持多业务线快速落地。',
    image: '/assets/placeholder-image.svg',
    tags: ['Tokens', 'Components', 'Guidelines'],
    metrics: ['96 components', '24 tokens', '3 themes']
  },
  {
    id: 4,
    title: 'Pelagic Mobile Banking',
    category: 'Mobile UX',
    year: '2024',
    summary:
      '高安全金融场景的移动体验重构，提升关键任务路径的可理解性和完成效率。',
    image: '/assets/placeholder-image.svg',
    tags: ['Mobile', 'Fintech', 'UX Audit'],
    metrics: ['28 screens', '4 journeys', 'A11y pass']
  }
]

export const capabilities: Capability[] = [
  {
    title: '产品信息架构',
    description: '梳理复杂业务对象、权限状态和任务流，让高密度页面保持清楚可扫。',
    tools: ['User Flow', 'Wireframe', 'IA Map']
  },
  {
    title: '界面视觉系统',
    description: '建立颜色、组件、图表和布局规则，使产品在规模化扩展时仍然统一。',
    tools: ['Figma', 'Tokens', 'Components']
  },
  {
    title: '交互动效原型',
    description: '用柔和、必要的动效表达状态变化，减少等待感并增强空间感。',
    tools: ['Framer', 'Principle', 'Prototype']
  },
  {
    title: '前端协作交付',
    description: '输出可复用规范、标注与交互细节，降低设计到实现之间的损耗。',
    tools: ['Specs', 'QA', 'Handoff']
  }
]

export const timeline: TimelineItem[] = [
  {
    period: '2026',
    title: '独立 UI / UX Designer',
    description: '为 AI、SaaS 与数据产品提供从体验策略到高保真界面的完整设计。'
  },
  {
    period: '2023 - 2025',
    title: 'Senior Product Designer',
    description: '负责企业级产品体验升级、设计系统搭建与跨团队设计评审。'
  },
  {
    period: '2020 - 2023',
    title: 'Interaction Designer',
    description: '参与移动端、管理后台和增长工具的流程设计、原型验证与落地跟进。'
  }
]

export const processSteps = [
  'Discovery',
  'Structure',
  'Visual System',
  'Prototype',
  'Handoff'
]

export const contactTopics = [
  '产品 UI 设计',
  '设计系统搭建',
  '交互原型验证',
  '作品集视觉升级'
]
