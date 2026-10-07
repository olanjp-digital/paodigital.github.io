const CAPABILITIES = [
  {
    index: '01',
    title: 'Social Strategy & Management',
    body: 'Channel planning, content calendars, platform-specific execution, organic growth and stakeholder coordination.',
    tags: ['Strategy', 'Organic Social', 'Content Planning'],
  },
  {
    index: '02',
    title: 'Meta Media Buying',
    body: 'Campaign setup, audience targeting, budget monitoring, creative testing and performance optimization in Meta Ads Manager.',
    tags: ['Meta Ads', 'Lead Generation', 'Optimization'],
  },
  {
    index: '03',
    title: 'Content & Copy',
    body: 'Platform-native copy and content development shaped around audience, offer, campaign objective and channel behavior.',
    tags: ['Copywriting', 'Content Strategy', 'Social Content'],
  },
  {
    index: '04',
    title: 'Creative & Design',
    body: 'Branded social assets, advertising creative, promotional materials and campaign visuals across digital formats.',
    tags: ['Graphic Design', 'Creative Strategy', 'Adobe'],
  },
  {
    index: '05',
    title: 'Analytics & Reporting',
    body: 'Performance review using GA4, Meta Business Suite and campaign metrics to identify insights and guide the next decision.',
    tags: ['GA4', 'Meta Insights', 'Reporting'],
  },
] as const

const METHOD = [
  ['Discover', 'Clarify the business objective, audience, channel context and available evidence.'],
  ['Build', 'Translate strategy into content, creative and campaigns that fit the platform.'],
  ['Optimize', 'Use performance signals to refine the next creative, audience or channel decision.'],
] as const

export default function ServicesGrid() {
  return (
    <section className="pao-page" aria-labelledby="services-title">
      <header className="pao-page__head">
        <span className="pao-eyebrow">Capabilities</span>
        <h1 id="services-title">A social-first skill set built for growth.</h1>
        <p>I work across strategy, paid media, content, creative and analytics so execution stays connected to the marketing objective.</p>
      </header>

      <div className="pao-method" aria-label="Working approach">
        {METHOD.map(([title, body], i) => (
          <article key={title}>
            <span>0{i + 1}</span>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </div>

      <div className="pao-capabilities">
        {CAPABILITIES.map((item) => (
          <article className="pao-capability" key={item.index}>
            <span className="pao-capability__index">{item.index}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <div className="pao-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
