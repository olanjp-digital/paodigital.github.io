import { useState } from 'react'
import { ArrowUpRight, Quotes, SealCheck } from '@/components/slab'

type Recommendation = {
  index: string
  name: string
  role: string
  date: string
  relationship: string
  source: 'LinkedIn Recommendation' | 'Private Client Message'
  quote: string
  tags: string[]
}

const RECOMMENDATIONS: Recommendation[] = [
  {
    index: '01',
    name: 'Rilla Roessel',
    role: 'Senior marketing leader with 20+ years in global education and edtech driving enrolment growth, brand evolution & CRM/digital strategies.',
    date: 'October 5, 2026',
    relationship: 'Rilla was senior to Jose Paolo but didn’t manage Jose Paolo directly.',
    source: 'LinkedIn Recommendation',
    quote: `I had the pleasure of working with Pau on our team. He’s an outgoing, friendly colleague with a strong understanding of social media. Supporting more than 10 brands with monthly organic content was no small task, and Pau approached the work with dedication and care.

What stood out most to me was his commitment to continuous improvement and his openness to learning. When we reviewed his process, he readily shared what he’d refined and welcomed new ideas. That kind of curiosity and openness makes a real difference on a team, and I’d gladly recommend Pau.`,
    tags: ['Social Media', 'Continuous Improvement', 'Teamwork'],
  },
  {
    index: '02',
    name: "Marc D'Costa",
    role: 'Assistant Director, Growth Marketing at INTO University Partnerships. Head of global digital team including CRM, Social Media, Performance Marketing and Data Analytics.',
    date: 'September 28, 2026',
    relationship: 'Marc managed Jose Paolo directly.',
    source: 'LinkedIn Recommendation',
    quote: `Pao has been a highly valued member of my team for the past year. INTO is a complex business, operating in the International Higher Education sector, where we manage a significant number of individual social media channels to service our University partnerships.

Pao hit the ground running and his work ethic, enthusiasm and Social Media expertise are exemplary. He has displayed skills across all aspects of Social Media from planning and execution to design and copywriting. All done at scale and to tight deadlines.

Pao is a credit to his profession and I know the experience he has gained from INTO, operating numerous social media channels on a global level will put him in good stead for the future!`,
    tags: ['Social Media', 'Scale', 'Planning + Execution', 'Copywriting'],
  },
  {
    index: '03',
    name: 'James Nguyen',
    role: 'Global Digital & Growth | INTO University Partnerships',
    date: 'September 28, 2026',
    relationship: 'James managed Jose Paolo directly.',
    source: 'LinkedIn Recommendation',
    quote: `I had the chance to work closely with Pao at INTO and would surely recommend him as a capable and dependable digital marketer.

Paolo manages content across a dozen of social media channels on different platforms, each requiring close attention to brand guidelines. He brings together strong writing, design and video editing skills with a great understanding of social media campaigns. He is quick to learn new tools and thoughtful about how to use them.

What I value most is the confidence I can place in him as Pao takes ownership of his work, handles competing priorities calmly and delivers to a high standard under pressure. I would gladly and certainly work with him again.`,
    tags: ['Ownership', 'Brand Guidelines', 'Writing + Design + Video', 'Under Pressure'],
  },
  {
    index: '04',
    name: 'Previous Freelance Client',
    role: 'Private client message · name withheld',
    date: 'Client testimonial',
    relationship: 'An anonymized excerpt from a private client message supplied for this portfolio.',
    source: 'Private Client Message',
    quote: `Pao did a great job on my recent 3 part live launch he was doing reporting he set up the whole campaign for me and it smashed it!`,
    tags: ['Campaign Setup', 'Reporting', 'Launch Support'],
  },
]

export default function TestimonialsGrid() {
  const [active, setActive] = useState(1)
  const recommendation = RECOMMENDATIONS[active]

  return (
    <section className="pgrid tgrid" aria-labelledby="recommendations-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Recommendations</span>
        <h1 className="pgrid__title" id="recommendations-title">What managers and clients say about the work.</h1>
        <p className="pgrid__lede">Three LinkedIn recommendations from INTO colleagues and managers, plus an anonymized testimonial from a previous freelance client.</p>
      </header>

      <div className="home__glass tgrid__glass">
        <article className="tgrid__featured" aria-live="polite">
          <div className="tgrid__featured-top">
            <span className="tgrid__source">
              {recommendation.source === 'LinkedIn Recommendation' && <SealCheck size={15} weight="fill" aria-hidden="true" />}
              {recommendation.source}
            </span>
            <span className="tgrid__featured-index" aria-hidden="true">{recommendation.index}</span>
          </div>

          <div className="tgrid__quote-mark" aria-hidden="true"><Quotes size={34} weight="fill" /></div>

          <blockquote className="tgrid__quote">
            {recommendation.quote.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </blockquote>

          <footer className="tgrid__featured-person">
            <span className="tgrid__initials" aria-hidden="true">
              {recommendation.name === 'Previous Freelance Client' ? 'CL' : recommendation.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
            </span>
            <span className="tgrid__featured-copy">
              <strong>{recommendation.name}</strong>
              <span>{recommendation.role}</span>
              <small>{recommendation.date} · {recommendation.relationship}</small>
            </span>
          </footer>

          <ul className="tgrid__tags" role="list">
            {recommendation.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>

          {recommendation.source === 'LinkedIn Recommendation' && (
            <a className="tgrid__linkedin" href="https://www.linkedin.com/in/paodigital/" target="_blank" rel="noopener noreferrer">
              View Pao’s LinkedIn profile <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            </a>
          )}
        </article>

        <div className="tgrid__ledger">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">Recommendations & client proof.</h2>
            <p className="tgrid__ledger-sub">Select a person to read the full recommendation.</p>
          </div>

          <div className="tgrid__clients" role="list">
            {RECOMMENDATIONS.map((item, i) => (
              <button
                key={item.index}
                type="button"
                className={`tgrid__client${i === active ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
                aria-pressed={i === active}
              >
                <span className="tgrid__client-ghost" aria-hidden="true">{item.index}</span>
                <span className="tgrid__client-mark" aria-hidden="true">
                  {item.name === 'Previous Freelance Client' ? 'CL' : item.name.split(' ').map((part) => part[0]).slice(0, 2).join('')}
                </span>
                <span className="tgrid__client-body">
                  <span className="tgrid__client-head">
                    <span className="tgrid__client-name">{item.name}</span>
                    <span className="tgrid__client-role">{item.source === 'LinkedIn Recommendation' ? 'LinkedIn' : 'Client'}</span>
                  </span>
                  <span className="tgrid__client-daily">
                    {item.quote.split('\n')[0].length > 150 ? `${item.quote.split('\n')[0].slice(0, 147)}…` : item.quote.split('\n')[0]}
                  </span>
                  <span className="tgrid__client-meta">{item.date}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
