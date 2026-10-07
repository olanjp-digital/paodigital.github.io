import { ArrowUpRight } from '@/components/slab'

const BASE = import.meta.env.BASE_URL

const CASES = [
  {
    index: '01',
    title: 'Meta Media Buyer',
    category: 'Performance Marketing',
    summary: 'Freelance Meta campaign management focused on structure, audience strategy, creative testing and optimization.',
    meta: 'Meta Ads · Lead Generation · Optimization',
    href: `${BASE}case-studies/meta-media-buyer.html`,
  },
  {
    index: '02',
    title: 'Multi-Market Organic Social',
    category: 'INTO University Partnerships',
    summary: 'Organic social support across approximately 15 centres, with Facebook and Instagram execution across US, UK and Asia markets.',
    meta: '≈15 centres · US · UK · Asia',
    href: `${BASE}case-studies/into-university.html`,
  },
  {
    index: '03',
    title: 'Paid + Organic Social Growth',
    category: 'Surge Fitness Lifestyle',
    summary: 'Integrated social content and paid campaign execution supporting visibility, engagement and acquisition activity.',
    meta: 'Social · Meta Ads · Content',
    href: `${BASE}case-studies/surge-fitness.html`,
  },
  {
    index: '04',
    title: 'Creative Systems Across Client Work',
    category: 'Freelance',
    summary: 'Digital creative production across e-commerce and service clients, from branded social content to promotional and advertising assets.',
    meta: 'Design · Social · E-commerce · Services',
    href: `${BASE}case-studies/freelance-creative.html`,
  },
] as const

export default function ProjectsGrid() {
  return (
    <section className="pao-page" aria-labelledby="projects-title">
      <header className="pao-page__head">
        <span className="pao-eyebrow">Selected Work</span>
        <h1 id="projects-title">Work with context, decisions and evidence.</h1>
        <p>Four focused cases showing how I approach performance marketing, multi-market social, integrated execution and client creative work. Public case studies avoid confidential internal data.</p>
      </header>
      <div className="pao-projects">
        {CASES.map((item) => (
          <a className="pao-case" href={item.href} key={item.index}>
            <span className="pao-case__index">{item.index}</span>
            <span className="pao-case__category">{item.category}</span>
            <strong>{item.title}</strong>
            <p>{item.summary}</p>
            <span className="pao-case__meta">{item.meta}</span>
            <span className="pao-case__arrow"><ArrowUpRight size={18} weight="bold" aria-hidden="true" /></span>
          </a>
        ))}
      </div>
      <p className="pao-footnote">Results are only shown where the available evidence and publication context make them appropriate for a public portfolio.</p>
    </section>
  )
}
