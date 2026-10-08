import { ArrowUpRight, CheckCircle, Medal, SealCheck } from '@/components/slab'

type Credential = {
  index: string
  provider: string
  title: string
  date: string
  credential?: string
  detail?: string
  skills: string[]
  verify?: string
  accent: 'linkedin' | 'hootsuite' | 'udemy' | 'prova'
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
  {
    index: '04',
    provider: 'Udemy · Trevor Ginn',
    title: 'Google Ads (AdWords) Masterclass - Pay-Per-Click PPC Adverts',
    date: 'May 8, 2024',
    credential: 'UC-6494f5ee-2228-414c-bf0a-1162f5f3ecc1',
    detail: '3.5 total hours',
    skills: ['Google Ads', 'Pay-Per-Click (PPC)', 'Advertising'],
    verify: 'https://ude.my/UC-6494f5ee-2228-414c-bf0a-1162f5f3ecc1',
    accent: 'udemy',
  },
  {
    index: '05',
    provider: 'Udemy · Trevor Ginn',
    title: 'Shopify eCommerce Store Masterclass - Start a Business!',
    date: 'May 30, 2024',
    credential: 'UC-b2604e26-bcb8-4c32-9130-d6b10a4347db',
    detail: '2 total hours',
    skills: ['Shopify', 'eCommerce', 'Online Store'],
    verify: 'https://ude.my/UC-b2604e26-bcb8-4c32-9130-d6b10a4347db',
    accent: 'udemy',
  },
  {
    index: '06',
    provider: 'Pro VA',
    title: 'Facebook Ads Management - Online Course',
    date: 'July 6, 2025',
    detail: 'Certificate of Participation',
    skills: ['Facebook Ads Structure', 'Ads Manager', 'Campaign Setup', 'Budgeting', 'Split Testing / Scaling', 'Facebook Pixel & Retargeting'],
    accent: 'prova',
  },
  {
    index: '07',
    provider: 'Pro VA',
    title: 'Social Media Management (SMM) - Online Course',
    date: 'April 17, 2022',
    detail: 'Certificate of Participation',
    skills: ['Marketing & Social Media', 'Social Media Tools / Software', 'Social Media Workflow', 'Social Media Reports', 'Social Media Account Management'],
    accent: 'prova',
  },
]

export default function CredentialsGrid() {
  return (
    <section className="pgrid credgrid" aria-labelledby="credentials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Credentials</span>
        <h1 className="pgrid__title" id="credentials-title">Certificates supporting the work.</h1>
        <p className="pgrid__lede">Selected completed training across paid media, social media, e-commerce, social listening and generative AI. Details below are taken from the certificates provided for this portfolio.</p>
      </header>

      <div className="home__glass credgrid__glass">
        <div className="credgrid__intro">
          <span className="credgrid__intro-icon"><Medal size={28} weight="duotone" aria-hidden="true" /></span>
          <div>
            <span className="credgrid__eyebrow">Selected Certificates</span>
            <h2>Continuous learning, tied to practical digital marketing work.</h2>
            <p>Credentials show the issuing platform or training provider, completion date, certificate number or ID where one is visible, and the topics covered. Public verification links are included where the supplied certificate provides one.</p>
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
                {credential.detail && <p className="credcard__detail">{credential.detail}</p>}

                {credential.credential && (
                  <div className="credcard__id">
                    <span>Certificate {credential.credential.length > 20 ? 'ID' : 'no.'}</span>
                    <code>{credential.credential}</code>
                  </div>
                )}

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
                ) : credential.credential ? (
                  <span>Certificate number shown from issued credential</span>
                ) : (
                  <span>Issued certificate supplied for this portfolio</span>
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
