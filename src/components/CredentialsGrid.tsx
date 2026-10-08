import { ArrowUpRight, CheckCircle, Medal, SealCheck } from '@/components/slab'

type Credential = {
  index: string
  provider: string
  title: string
  date: string
  credential: string
  skills: string[]
  verify?: string
  accent: 'linkedin' | 'hootsuite'
}

const CREDENTIALS: Credential[] = [
  {
    index: '01',
    provider: 'LinkedIn Learning',
    title: 'What Is Generative AI?',
    date: 'May 13, 2026',
    credential: '7afd0c8d36844d864d4ad83ba7f719df2b9e99018e8217d40e4106cbb6c61ee3',
    skills: ['Generative AI Tools', 'Artificial Intelligence (AI)', 'Generative AI'],
    verify: 'https://www.linkedin.com/learning/certificates/7afd0c8d36844d864d4ad83ba7f719df2b9e99018e8217d40e4106cbb6c61ee3',
    accent: 'linkedin',
  },
  {
    index: '02',
    provider: 'Hootsuite Academy',
    title: 'Social Listening with Hootsuite',
    date: 'October 30, 2025',
    credential: '739700131',
    skills: ['Social Listening', 'Audience Insight', 'Social Media'],
    accent: 'hootsuite',
  },
  {
    index: '03',
    provider: 'Hootsuite Academy',
    title: 'Social media marketing',
    date: 'October 22, 2025',
    credential: '647848775',
    skills: ['Social Media Marketing', 'Content', 'Channel Strategy'],
    accent: 'hootsuite',
  },
]

export default function CredentialsGrid() {
  return (
    <section className="pgrid credgrid" aria-labelledby="credentials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Credentials</span>
        <h1 className="pgrid__title" id="credentials-title">Certificates supporting the work.</h1>
        <p className="pgrid__lede">Selected completed training in generative AI, social listening and social media marketing. Details below are taken from the certificates provided for this portfolio.</p>
      </header>

      <div className="home__glass credgrid__glass">
        <div className="credgrid__intro">
          <span className="credgrid__intro-icon"><Medal size={28} weight="duotone" aria-hidden="true" /></span>
          <div>
            <span className="credgrid__eyebrow">Selected Certificates</span>
            <h2>Continuous learning, tied to practical digital marketing work.</h2>
            <p>Credentials are shown with issuer, completion date, certificate number or ID, and the skills covered. The LinkedIn Learning credential includes its public verification link.</p>
          </div>
        </div>

        <div className="credgrid__cards">
          {CREDENTIALS.map((credential) => (
            <article className="credcard" data-accent={credential.accent} key={credential.index}>
              <div className="credcard__top">
                <span className="credcard__index">{credential.index}</span>
                <span className="credcard__provider">
                  {credential.verify && <SealCheck size={14} weight="fill" aria-hidden="true" />}
                  {credential.provider}
                </span>
              </div>

              <div className="credcard__body">
                <h2>{credential.title}</h2>
                <p className="credcard__date">Completed / issued {credential.date}</p>
                <div className="credcard__id">
                  <span>Certificate {credential.credential.length > 20 ? 'ID' : 'no.'}</span>
                  <code>{credential.credential}</code>
                </div>

                <ul className="credcard__skills" role="list">
                  {credential.skills.map((skill) => (
                    <li key={skill}><CheckCircle size={13} weight="duotone" aria-hidden="true" />{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="credcard__foot">
                {credential.verify ? (
                  <a href={credential.verify} target="_blank" rel="noopener noreferrer">
                    Verify certificate <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
                  </a>
                ) : (
                  <span>Certificate number shown from issued credential</span>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="credgrid__note">These certificates support the portfolio narrative; they are not presented as substitutes for the case studies and work evidence.</p>
      </div>
    </section>
  )
}
