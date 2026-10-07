import { useMemo } from 'react'

const TOOLS = [
  'Meta Ads Manager',
  'Meta Business Suite',
  'Google Analytics 4',
  'Google Ads',
  'Facebook',
  'Instagram',
  'TikTok',
  'Adobe Creative Suite',
  'Asana',
  'Shopify',
  'GoHighLevel',
]

export default function ToolsMarquee() {
  const doubled = useMemo(() => [...TOOLS, ...TOOLS], [])
  return (
    <section className="pao-tools" aria-label="Tools I work with">
      <div className="pao-tools__track" aria-hidden="true">
        {doubled.map((tool, i) => (
          <span className="pao-tools__item" key={`${tool}-${i}`}>
            <span className="pao-tools__dot" />
            {tool}
          </span>
        ))}
      </div>
      <ul className="sr-only">{TOOLS.map((tool) => <li key={tool}>{tool}</li>)}</ul>
    </section>
  )
}
