import type { CSSProperties } from 'react'
import {
  MagnetStraight,
  Timer,
  Trophy,
  CheckCircle,
  FunnelSimple,
  Gear,
  AddressBook,
  Globe,
  AppWindow,
} from '@/components/slab'
import type { Icon } from '@/components/slab'

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Discover',
    body: 'Clarify the objective, audience, channel context and available evidence.',
    Icon: MagnetStraight,
    chips: ['Objective', 'Audience', 'Offer', 'Evidence'],
  },
  {
    index: '02',
    label: 'Execute',
    body: 'Translate strategy into platform-ready content, creative and campaigns.',
    Icon: Timer,
    chips: ['Content', 'Creative', 'Campaigns'],
  },
  {
    index: '03',
    label: 'Optimize',
    body: 'Use performance signals to guide the next creative, audience or channel decision.',
    Icon: Trophy,
    chips: ['Measure', 'Learn', 'Refine'],
  },
]

type Service = {
  index: string
  title: string
  description: string
  chip: string
  Icon: Icon
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Social Strategy',
    description: 'Channel planning, organic growth, calendars and stakeholder coordination.',
    chip: 'Organic',
    Icon: FunnelSimple,
    bullets: ['Platform planning', 'Publishing workflows', 'Audience-first execution'],
  },
  {
    index: '02',
    title: 'Meta Media Buying',
    description: 'Campaign setup, targeting, creative testing and optimization.',
    chip: 'Paid Media',
    Icon: Gear,
    bullets: ['Campaign structure', 'Audience testing', 'Performance optimization'],
  },
  {
    index: '03',
    title: 'Content & Copy',
    description: 'Platform-native messaging built around objective, audience and format.',
    chip: 'Content',
    Icon: AddressBook,
    bullets: ['Content planning', 'Copywriting', 'Social execution'],
  },
  {
    index: '04',
    title: 'Analytics',
    description: 'Performance review using GA4 and platform insights to inform decisions.',
    chip: 'Measurement',
    Icon: Globe,
    bullets: ['GA4', 'Meta insights', 'Performance reporting'],
  },
  {
    index: '05',
    title: 'Creative',
    description: 'Branded social assets, promotional creative and advertising visuals.',
    chip: 'Design',
    Icon: AppWindow,
    bullets: ['Graphic design', 'Ad creative', 'Creative strategy'],
  },
]

const TOOL_LABELS = ['Meta Ads Manager', 'Meta Business Suite', 'Google Analytics 4', 'Google Ads', 'Adobe Creative Suite', 'TikTok', 'Shopify', 'GoHighLevel']

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Capabilities</span>
        <h1 className="pgrid__title" id="services-title">Strategy through execution and optimization.</h1>
        <p className="pgrid__lede">A social-first digital marketing skill set connecting paid media, content, creative and analytics to the business objective.</p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">Discover. Execute.<br /><span>Measure and refine.</span></h2>
            <p className="sgrid__method-sub">Keep the creative, channel and measurement decisions connected from the start.</p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true"><StageIcon size={22} weight="duotone" /></span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} focus`}>
                    {s.chips.map((chip) => <li key={chip} className="sgrid__stage-chip">{chip}</li>)}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Core capabilities.</h2>
            <p className="sgrid__offers-sub">Built around the work I actually do.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((service) => {
              const ServiceIcon = service.Icon
              return (
                <li key={service.title} className="bento__card sgrid__service">
                  <span className="bento__head">
                    <span className="sgrid__service-top">
                      <span className="bento__icon"><ServiceIcon size={18} weight="duotone" /></span>
                      <span className="sgrid__service-index" aria-hidden="true">{service.index} / 05</span>
                    </span>
                    <span className="bento__title">{service.title}</span>
                    <span className="bento__desc">{service.description}</span>
                  </span>
                  <span className="sgrid__chip" aria-hidden="true">{service.chip}</span>
                  <ul className="sgrid__bullets" role="list">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="sgrid__bullet"><CheckCircle size={15} weight="duotone" aria-hidden="true" /><span>{bullet}</span></li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Tool stack</span>
              <h2 className="sgrid__flow-title">The platforms behind the work.</h2>
              <p className="sgrid__flow-sub">Tools are grouped by how they support planning, execution, measurement and optimization.</p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Marketing tools">
              {TOOL_LABELS.map((label) => <li key={label} className="sgrid__flow-tool"><CheckCircle size={14} weight="duotone" aria-hidden="true" /><span>{label}</span></li>)}
            </ul>
          </header>
        </div>
      </div>
    </section>
  )
}
