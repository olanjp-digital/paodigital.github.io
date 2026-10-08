import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, CursorClick, FunnelSimple, Globe, Stack, AppWindow } from '@/components/slab'

const BASE = import.meta.env.BASE_URL

type CaseItem = {
  id: string
  index: string
  title: string
  category: string
  desc: string
  meta: string
  embedUrl: string
  Icon: typeof FunnelSimple
  preview: 'paid' | 'markets' | 'social' | 'creative'
}

const CASES: CaseItem[] = [
  {
    id: 'meta',
    index: '01',
    title: 'Meta Media Buyer',
    category: 'Performance Marketing',
    desc: 'Campaign structure, audience strategy, creative testing and optimization.',
    meta: 'Meta Ads · Lead Generation · Optimization',
    embedUrl: `${BASE}case-studies/meta-media-buyer.html`,
    Icon: FunnelSimple,
    preview: 'paid',
  },
  {
    id: 'into',
    index: '02',
    title: 'Multi-Market Organic Social',
    category: 'INTO University Partnerships',
    desc: 'Organic social support across approximately 15 centres in US, UK and Asia markets.',
    meta: '≈15 centres · Facebook · Instagram · GA4',
    embedUrl: `${BASE}case-studies/into-university.html`,
    Icon: Globe,
    preview: 'markets',
  },
  {
    id: 'surge',
    index: '03',
    title: 'Paid + Organic Social Growth',
    category: 'Surge Fitness Lifestyle',
    desc: 'Integrated social content and paid campaign execution supporting growth activity.',
    meta: 'Social · Meta Ads · Content',
    embedUrl: `${BASE}case-studies/surge-fitness.html`,
    Icon: Stack,
    preview: 'social',
  },
  {
    id: 'freelance',
    index: '04',
    title: 'Creative Systems Across Client Work',
    category: 'Freelance',
    desc: 'Digital creative production across e-commerce and service clients.',
    meta: 'Design · Social · E-commerce · Services',
    embedUrl: 'https://olanjp.wixsite.com/paodigital/work',
    Icon: AppWindow,
    preview: 'creative',
  },
]

function CasePreview({ kind }: { kind: CaseItem['preview'] }) {
  if (kind === 'paid') {
    return (
      <div className="bento__media bento__doc" aria-hidden="true">
        <span className="bento__doc-eyebrow">Optimization loop</span>
        <span className="bento__doc-title">Campaign strategy → testing → decision</span>
        <span className="bento__doc-flow"><i>Brief</i><i>Audience</i><i>Creative</i><i className="is-on">Optimize</i></span>
        <span className="bento__doc-line" /><span className="bento__doc-line bento__doc-line--short" />
      </div>
    )
  }

  if (kind === 'markets') {
    const chips = ['≈15 centres', 'US', 'UK', 'Asia', 'Facebook', 'Instagram', 'GA4', 'Meta Suite']
    return (
      <div className="bento__media bento__chips" aria-hidden="true">
        {[chips.slice(0, 4), chips.slice(4)].map((row, r) => (
          <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
            <div className="bento__chip-track">
              {[...row, ...row].map((chip, i) => <span className="bento__chip" key={`${chip}-${i}`}>{chip}</span>)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (kind === 'social') {
    const items = ['Organic social', 'Paid campaigns', 'Content', 'Creative']
    return (
      <ul className="bento__media bento__offers" role="list" aria-hidden="true">
        {items.map((item, i) => (
          <li className="bento__offer" key={item}>
            <span className="bento__offer-tile"><Stack size={14} weight="duotone" /></span>
            <span className="bento__offer-text"><span className="bento__offer-title">{item}</span></span>
            <span className="bento__offer-num">0{i + 1}</span>
          </li>
        ))}
      </ul>
    )
  }

  const chips = ['Ad creative', 'Social graphics', 'E-commerce', 'Services', 'Brand assets', 'Promotional']
  return (
    <div className="bento__media bento__chips" aria-hidden="true">
      {[chips.slice(0, 3), chips.slice(3)].map((row, r) => (
        <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
          <div className="bento__chip-track">
            {[...row, ...row].map((chip, i) => <span className="bento__chip" key={`${chip}-${i}`}>{chip}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}

function CaseModal({ item, onClose, children }: { item: CaseItem; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div className="pmodal" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close case study">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

export default function ProjectsGrid() {
  const [open, setOpen] = useState<CaseItem | null>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((item: CaseItem, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(item)
  }, [])

  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Selected Work</span>
        <h1 className="pgrid__title" id="projects-title">Work with context, decisions and evidence.</h1>
        <p className="pgrid__lede">Four focused cases across paid media, multi-market organic social, integrated execution and client creative work. Open a card to explore it without leaving this page.</p>
      </header>

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true"><CursorClick size={14} weight="duotone" />Click a card to open it</span>
        <div className="bento bento--projects">
          {CASES.map((item) => (
            <button
              key={item.id}
              type="button"
              className="bento__card bento__card--btn bento__card--wide"
              onClick={(e) => show(item, e.currentTarget)}
              aria-haspopup="dialog"
            >
              <span className="bento__head">
                <span className="bento__label">
                  <span className="bento__icon"><item.Icon size={20} weight="duotone" aria-hidden="true" /></span>
                  <span className="bento__title">{item.title}</span>
                </span>
                <span className="pao-card-kicker">{item.index} · {item.category}</span>
                <span className="bento__desc">{item.desc}</span>
                <span className="pao-card-meta">{item.meta}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </span>
              <CasePreview kind={item.preview} />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <CaseModal item={open} onClose={close}>
          <div className="ppanel ppanel--frame">
            <div className="ppanel__bar">
              <span className="ppanel__dots" aria-hidden="true"><i /><i /><i /></span>
              <span className="ppanel__url"><span className="ppanel__url-host">{open.category}</span> / {open.title}</span>
            </div>
            <div className="ppanel__stage">
              <iframe className="ppanel__iframe" src={open.embedUrl} title={`${open.title} case study`} loading="eager" referrerPolicy="strict-origin-when-cross-origin" />
            </div>
          </div>
        </CaseModal>
      )}
    </section>
  )
}
