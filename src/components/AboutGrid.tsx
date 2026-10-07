import { profile } from '@/data/profile'

const EXPERIENCE = [
  ['Oct 2025 — Sep 2026', 'INTO University Partnerships (Emapta)', 'Growth Marketing — Social Media Organic', 'Supported Facebook and Instagram across US, UK and Asia markets, coordinated content workflows and used GA4 and Meta Business Suite insights to inform content decisions.'],
  ['Freelance · Part-time', 'Meta Media Buyer', 'Performance Marketing', 'Support Meta advertising campaigns through campaign setup, audience targeting, creative testing, budget monitoring and optimization.'],
  ['Mar 2025 — Oct 2025', 'East West Natural Health Care', 'Social Media Content Creator', 'Produced branded digital content and promotional creative for Facebook, Instagram and TikTok.'],
  ['2024 — 2025', 'Surge Fitness Lifestyle', 'Social Media Specialist', 'Worked across organic social, content and paid campaign creation and optimization.'],
  ['2020 — Present', 'Freelance', 'Graphic Designer', 'Create social content, ad creative, banners, logos and promotional assets for e-commerce and service clients.'],
  ['2022 — 2023', 'COD PINAS', 'Copywriter · Social Media Manager & Marketer · Graphic Designer', 'Supported social strategy, Facebook advertising and branded creative for visibility and audience growth.'],
] as const

const CERTS = [
  'Facebook Ads Management — Pro VA',
  'Social Media Management In-Depth Training — Pro VA',
  'TikTok Intensive Training',
  'Google Ads (AdWords) Masterclass — Udemy',
  'AI and Generative AI for Marketing — LinkedIn',
  'Social Listening with Hootsuite',
  'Generative AI for Digital Marketers',
  'Social Media Marketing with Hootsuite',
] as const

export default function AboutGrid() {
  return (
    <section className="pao-page" aria-labelledby="about-title">
      <header className="pao-page__head pao-about-head">
        <div>
          <span className="pao-eyebrow">About</span>
          <h1 id="about-title">Hi, I’m {profile.firstName}.</h1>
          <p>I’m a Digital Marketing & Growth Marketing Specialist combining organic social, paid media, content, creative and performance analysis across multiple industries and markets.</p>
        </div>
        <img className="pao-about-avatar" src={profile.avatarSrc} alt="" width={180} height={180} />
      </header>

      <div className="pao-section-title"><span>Experience</span><h2>Hands-on execution with multi-market scope.</h2></div>
      <div className="pao-timeline">
        {EXPERIENCE.map(([date, company, role, body]) => (
          <article key={`${date}-${company}`}>
            <span className="pao-timeline__date">{date}</span>
            <div><h3>{company}</h3><strong>{role}</strong><p>{body}</p></div>
          </article>
        ))}
      </div>

      <div className="pao-about-grid">
        <article className="pao-info-card">
          <span className="pao-eyebrow">Education</span>
          <h2>Bachelor of Secondary Education</h2>
          <p>Kolehiyo ng Lungsod ng Lipa · completed 2021</p>
        </article>
        <article className="pao-info-card">
          <span className="pao-eyebrow">Selected Credentials</span>
          <ul>{CERTS.map((c) => <li key={c}>{c}</li>)}</ul>
        </article>
      </div>
    </section>
  )
}
