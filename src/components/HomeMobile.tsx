import { Link } from 'react-router-dom'
import { SealCheck, FolderOpen, Stack, User, EnvelopeSimple } from '@/components/slab'
import { profile } from '@/data/profile'
import QuickMenu from './QuickMenu'

export function HomeProfile() {
  return (
    <header className="hprofile">
      <img className="hprofile__avatar" src={profile.avatarSrc} alt="" width={56} height={56} />
      <div className="hprofile__who">
        <span className="hprofile__name">
          {profile.name}
          <SealCheck size={16} weight="fill" className="hprofile__verified" aria-label={profile.verifiedLabel} />
        </span>
        <span className="hprofile__handle">{profile.handle} · {profile.role}</span>
      </div>
      <QuickMenu className="hprofile__menu" />
    </header>
  )
}

export function HomeStats() {
  return (
    <ul className="hstats" role="list">
      {profile.stats.map(({ value, label, Icon }, i) => (
        <li key={i}>
          <Icon className="hstats__icon" size={18} weight="duotone" aria-hidden="true" />
          <b className="hstats__value">{value}</b>
          <span className="hstats__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

const TILES = [
  { n: '01', label: 'Work', to: '/projects', title: 'Case studies with context', desc: 'Paid, organic and creative work.', Icon: FolderOpen },
  { n: '02', label: 'Capabilities', to: '/services', title: 'Strategy through optimization', desc: 'Social, media, creative and analytics.', Icon: Stack },
  { n: '03', label: 'About', to: '/about', title: `Hi, I’m ${profile.firstName}.`, desc: 'Multi-market digital marketing experience.', Icon: User },
  { n: '04', label: 'Contact', to: '/contact', title: 'Let’s talk about the work', desc: 'Roles and selected freelance projects.', Icon: EnvelopeSimple, accent: true },
] as const

export function HomeExplore() {
  return (
    <>
      <div className="hsec"><h2 className="hsec__title">Explore</h2></div>
      <ul className="htiles" role="list">
        {TILES.map((t) => (
          <li key={t.to}>
            <Link to={t.to} className={`htile${'accent' in t && t.accent ? ' htile--accent' : ''}`}>
              <span className="htile__media htile__glyph"><t.Icon size={52} weight="duotone" aria-hidden="true" /></span>
              <span className="htile__body">
                <span className="htile__n">{t.n} {t.label}</span>
                <span className="htile__title">{t.title}</span>
                <span className="htile__desc">{t.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
