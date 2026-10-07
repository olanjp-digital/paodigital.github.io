import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, Stack, User, EnvelopeSimple } from '@/components/slab'

const CARDS = [
  {
    to: '/projects',
    label: 'Selected Work',
    title: 'Case studies with context.',
    body: 'Paid media, multi-market organic social, integrated social execution and freelance creative work.',
    Icon: FolderOpen,
    meta: '4 focused case studies',
  },
  {
    to: '/services',
    label: 'Capabilities',
    title: 'Strategy through optimization.',
    body: 'Social strategy, Meta media buying, content, creative, analytics and performance reporting.',
    Icon: Stack,
    meta: 'Full-funnel skill set',
  },
  {
    to: '/about',
    label: 'About',
    title: 'Multi-market digital experience.',
    body: 'Experience across education, fitness, healthcare, e-commerce and service businesses.',
    Icon: User,
    meta: 'US · UK · Asia',
  },
  {
    to: '/contact',
    label: 'Contact',
    title: 'Open to the right opportunity.',
    body: 'Digital marketing roles, growth-focused teams and selected freelance projects.',
    Icon: EnvelopeSimple,
    meta: 'Batangas · UTC+8',
  },
] as const

export default function HomeBento() {
  return (
    <nav className="pao-bento" aria-label="Explore the portfolio">
      {CARDS.map(({ to, label, title, body, Icon, meta }, i) => (
        <Link key={to} to={to} className="pao-bento__card">
          <span className="pao-bento__top">
            <span className="pao-bento__icon"><Icon size={19} weight="duotone" aria-hidden="true" /></span>
            <span className="pao-bento__index">0{i + 1}</span>
          </span>
          <span className="pao-bento__copy">
            <span className="pao-bento__label">{label}</span>
            <strong>{title}</strong>
            <span>{body}</span>
          </span>
          <span className="pao-bento__foot">{meta}<ArrowUpRight size={15} weight="bold" aria-hidden="true" /></span>
        </Link>
      ))}
    </nav>
  )
}
