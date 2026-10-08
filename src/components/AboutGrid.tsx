import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

const CAPABILITIES = [
  { index: '01', title: 'Social Strategy & Management', marks: ['Meta', 'IG', 'TikTok'] },
  { index: '02', title: 'Paid Media', marks: ['Meta Ads', 'Google Ads'] },
  { index: '03', title: 'Content & Creative', marks: ['Adobe', 'Copy'] },
  { index: '04', title: 'Analytics & Reporting', marks: ['GA4', 'Meta Suite'] },
] as const

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">{`Hi, I’m ${profile.firstName}.`}</h1>
        <p className="pgrid__lede">Digital Marketing & Growth Marketing Specialist working across organic social, paid media, content, creative and performance analysis.</p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I connect audience insight, creative execution and channel performance.
            <span> The goal is work that is useful, measurable and built for the platform.</span>
          </p>

          <p className="agrid__note">
            Experience includes multi-market social support for approximately 15 centres across US, UK and Asia markets, paid and organic social work, healthcare and fitness content, and freelance creative projects across e-commerce and services.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((item) => (
              <li key={item.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {item.marks.map((mark, i) => (
                    <span key={mark} className="agrid__mark pao-text-mark" style={{ ['--i' as string]: item.marks.length - i }}>{mark}</span>
                  ))}
                </span>
                <span className="agrid__cap-title">{item.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{item.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark pao-credential-mark">Meta</span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Facebook Ads Management</span>
                <span className="agrid__cell-meta">Selected certification · Pro VA</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">UTC+8 · Philippines</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="https://www.linkedin.com/in/paodigital/" target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark pao-credential-mark">in</span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">LinkedIn</span>
                <span className="agrid__cell-meta">Professional profile and career history</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img src={profile.avatarSrc} alt="Jose Paolo Olan" loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
