import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from '@/components/slab'

const BASE = import.meta.env.BASE_URL
const CLIENT_WORK_URL = 'https://olanjp.wixsite.com/paodigital/work'

type LinkCase = {
  kind: 'link'
  index: string
  title: string
  category: string
  summary: string
  meta: string
  href: string
}

type ModalCase = {
  kind: 'modal'
  index: string
  title: string
  category: string
  summary: string
  meta: string
}

type CaseItem = LinkCase | ModalCase

const CASES: CaseItem[] = [
  {
    kind: 'link',
    index: '01',
    title: 'Meta Media Buyer',
    category: 'Performance Marketing',
    summary: 'Freelance Meta campaign management focused on structure, audience strategy, creative testing and optimization.',
    meta: 'Meta Ads · Lead Generation · Optimization',
    href: `${BASE}case-studies/meta-media-buyer.html`,
  },
  {
    kind: 'link',
    index: '02',
    title: 'Multi-Market Organic Social',
    category: 'INTO University Partnerships',
    summary: 'Organic social support across approximately 15 centres, with Facebook and Instagram execution across US, UK and Asia markets.',
    meta: '≈15 centres · US · UK · Asia',
    href: `${BASE}case-studies/into-university.html`,
  },
  {
    kind: 'link',
    index: '03',
    title: 'Paid + Organic Social Growth',
    category: 'Surge Fitness Lifestyle',
    summary: 'Integrated social content and paid campaign execution supporting visibility, engagement and acquisition activity.',
    meta: 'Social · Meta Ads · Content',
    href: `${BASE}case-studies/surge-fitness.html`,
  },
  {
    kind: 'modal',
    index: '04',
    title: 'Creative Systems Across Client Work',
    category: 'Freelance',
    summary: 'Digital creative production across e-commerce and service clients, from branded social content to promotional and advertising assets.',
    meta: 'Design · Social · E-commerce · Services',
  },
]

export default function ProjectsGrid() {
  const [clientWorkOpen, setClientWorkOpen] = useState(false)

  useEffect(() => {
    if (!clientWorkOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setClientWorkOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [clientWorkOpen])

  return (
    <>
      <section className="pao-page" aria-labelledby="projects-title">
        <header className="pao-page__head">
          <span className="pao-eyebrow">Selected Work</span>
          <h1 id="projects-title">Work with context, decisions and evidence.</h1>
          <p>Four focused cases showing how I approach performance marketing, multi-market social, integrated execution and client creative work. Public case studies avoid confidential internal data.</p>
        </header>

        <div className="pao-projects">
          {CASES.map((item) => {
            const contents = (
              <>
                <span className="pao-case__index">{item.index}</span>
                <span className="pao-case__category">{item.category}</span>
                <strong>{item.title}</strong>
                <p>{item.summary}</p>
                <span className="pao-case__meta">{item.meta}</span>
                <span className="pao-case__arrow"><ArrowUpRight size={18} weight="bold" aria-hidden="true" /></span>
              </>
            )

            if (item.kind === 'modal') {
              return (
                <button
                  type="button"
                  className="pao-case pao-case--button"
                  key={item.index}
                  onClick={() => setClientWorkOpen(true)}
                  aria-haspopup="dialog"
                >
                  {contents}
                </button>
              )
            }

            return (
              <a className="pao-case" href={item.href} key={item.index}>
                {contents}
              </a>
            )
          })}
        </div>

        <p className="pao-footnote">Results are only shown where the available evidence and publication context make them appropriate for a public portfolio.</p>
      </section>

      {clientWorkOpen && (
        <div
          className="pao-work-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setClientWorkOpen(false)
          }}
        >
          <section
            className="pao-work-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="client-work-title"
          >
            <header className="pao-work-modal__head">
              <div>
                <span className="pao-eyebrow">Freelance · Client Work</span>
                <h2 id="client-work-title">Creative Systems Across Client Work</h2>
                <p>Selected creative work embedded directly from my Wix portfolio.</p>
              </div>
              <button
                type="button"
                className="pao-work-modal__close"
                onClick={() => setClientWorkOpen(false)}
                aria-label="Close client work"
              >
                <X size={20} weight="bold" aria-hidden="true" />
              </button>
            </header>

            <div className="pao-work-modal__viewport">
              <iframe
                src={CLIENT_WORK_URL}
                title="Jose Paolo Olan client creative work"
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
                scrolling="yes"
              />
            </div>
          </section>
        </div>
      )}
    </>
  )
}
