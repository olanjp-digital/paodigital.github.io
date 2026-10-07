import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from '@/components/slab'

const BASE = import.meta.env.BASE_URL

type CaseItem = {
  index: string
  title: string
  category: string
  summary: string
  meta: string
  embedUrl: string
  eyebrow: string
}

const CASES: CaseItem[] = [
  {
    index: '01',
    title: 'Meta Media Buyer',
    category: 'Performance Marketing',
    summary: 'Freelance Meta campaign management focused on structure, audience strategy, creative testing and optimization.',
    meta: 'Meta Ads · Lead Generation · Optimization',
    embedUrl: `${BASE}case-studies/meta-media-buyer.html`,
    eyebrow: 'Case Study 01 · Performance Marketing',
  },
  {
    index: '02',
    title: 'Multi-Market Organic Social',
    category: 'INTO University Partnerships',
    summary: 'Organic social support across approximately 15 centres, with Facebook and Instagram execution across US, UK and Asia markets.',
    meta: '≈15 centres · US · UK · Asia',
    embedUrl: `${BASE}case-studies/into-university.html`,
    eyebrow: 'Case Study 02 · Organic Social',
  },
  {
    index: '03',
    title: 'Paid + Organic Social Growth',
    category: 'Surge Fitness Lifestyle',
    summary: 'Integrated social content and paid campaign execution supporting visibility, engagement and acquisition activity.',
    meta: 'Social · Meta Ads · Content',
    embedUrl: `${BASE}case-studies/surge-fitness.html`,
    eyebrow: 'Case Study 03 · Integrated Social',
  },
  {
    index: '04',
    title: 'Creative Systems Across Client Work',
    category: 'Freelance',
    summary: 'Digital creative production across e-commerce and service clients, from branded social content to promotional and advertising assets.',
    meta: 'Design · Social · E-commerce · Services',
    embedUrl: 'https://olanjp.wixsite.com/paodigital/work',
    eyebrow: 'Case Study 04 · Freelance Client Work',
  },
]

export default function ProjectsGrid() {
  const [activeCase, setActiveCase] = useState<CaseItem | null>(null)

  useEffect(() => {
    if (!activeCase) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveCase(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeCase])

  return (
    <>
      <section className="pao-page" aria-labelledby="projects-title">
        <header className="pao-page__head">
          <span className="pao-eyebrow">Selected Work</span>
          <h1 id="projects-title">Work with context, decisions and evidence.</h1>
          <p>Four focused cases showing how I approach performance marketing, multi-market social, integrated execution and client creative work. Public case studies avoid confidential internal data.</p>
        </header>

        <div className="pao-projects">
          {CASES.map((item) => (
            <button
              type="button"
              className="pao-case pao-case--button"
              key={item.index}
              onClick={() => setActiveCase(item)}
              aria-haspopup="dialog"
              aria-label={`Open ${item.title} case study`}
            >
              <span className="pao-case__index">{item.index}</span>
              <span className="pao-case__category">{item.category}</span>
              <strong>{item.title}</strong>
              <p>{item.summary}</p>
              <span className="pao-case__meta">{item.meta}</span>
              <span className="pao-case__arrow"><ArrowUpRight size={18} weight="bold" aria-hidden="true" /></span>
            </button>
          ))}
        </div>

        <p className="pao-footnote">Results are only shown where the available evidence and publication context make them appropriate for a public portfolio.</p>
      </section>

      {activeCase && (
        <div
          className="pao-work-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveCase(null)
          }}
        >
          <section
            className="pao-work-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-case-title"
          >
            <header className="pao-work-modal__head">
              <div>
                <span className="pao-eyebrow">{activeCase.eyebrow}</span>
                <h2 id="portfolio-case-title">{activeCase.title}</h2>
                <p>{activeCase.category}</p>
              </div>
              <button
                type="button"
                className="pao-work-modal__close"
                onClick={() => setActiveCase(null)}
                aria-label="Close case study"
              >
                <X size={20} weight="bold" aria-hidden="true" />
              </button>
            </header>

            <div className="pao-work-modal__viewport">
              <iframe
                src={activeCase.embedUrl}
                title={`${activeCase.title} case study`}
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
