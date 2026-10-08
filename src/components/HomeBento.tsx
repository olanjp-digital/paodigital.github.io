import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Medal,
  Stack,
  Quotes,
  FunnelSimple,
  Gear,
  AddressBook,
  Globe,
  AppWindow,
  SealCheck,
} from '@/components/slab'
import { profile } from '@/data/profile'

const WORK = [
  ['Meta Media Buyer', 'Performance'],
  ['INTO University Partnerships', 'Organic social'],
  ['Surge Fitness Lifestyle', 'Paid + organic'],
  ['Freelance Client Work', 'Creative systems'],
] as const

const TOOLS = [
  ['Meta Ads Manager', 'Paid social'],
  ['GA4', 'Analytics'],
  ['Meta Business Suite', 'Organic insights'],
  ['Google Ads', 'Paid search'],
  ['Adobe Creative Suite', 'Creative'],
  ['TikTok', 'Social'],
] as const

const OFFERS = [
  { Icon: FunnelSimple, title: 'Social Strategy', note: 'Organic planning + management' },
  { Icon: Gear, title: 'Meta Media Buying', note: 'Campaigns + optimization' },
  { Icon: AddressBook, title: 'Content & Copy', note: 'Platform-native execution' },
  { Icon: Globe, title: 'Analytics', note: 'GA4 + platform insights' },
  { Icon: AppWindow, title: 'Creative', note: 'Design + ad assets' },
] as const

const RECOMMENDATIONS = [
  { name: "Marc D'Costa", role: 'Managed Pao directly · INTO', work: '“Work ethic, enthusiasm and Social Media expertise are exemplary.”' },
  { name: 'James Nguyen', role: 'Managed Pao directly · INTO', work: '“A capable and dependable digital marketer.”' },
  { name: 'Rilla Roessel', role: 'Senior colleague · INTO', work: '“Strong understanding of social media… dedication and care.”' },
  { name: 'Previous freelance client', role: 'Private client message', work: '“He set up the whole campaign for me and it smashed it!”' },
] as const

const PHOTOS = [profile.avatarSrc, profile.avatarSrc, profile.avatarSrc]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon"><Icon size={20} weight="fill" aria-hidden="true" /></span>
        <h3 className="bento__title">{title}</h3>
      </span>
      <p className="bento__desc">{desc}</p>
      <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      <Link to="/projects" className="bento__card bento__card--projects">
        <CardHead Icon={FolderOpen} title="Selected Work" desc="Four focused case studies with role, context and evidence." />
        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...WORK, ...WORK].map(([title, label], i) => (
              <span className="bento__shot" key={i}>
                <span className="pao-mini-browser"><small>{String((i % WORK.length) + 1).padStart(2, '0')} · {label}</small><strong>{title}</strong></span>
              </span>
            ))}
          </div>
        </div>
      </Link>

      <Link to="/about" className="bento__card bento__card--about">
        <CardHead Icon={User} title="About" desc="Digital marketing, growth, social, paid media and creative." />
        <div className="bento__media bento__fan" aria-hidden="true">
          {PHOTOS.map((src, i) => (
            <span key={i} className="bento__photo" style={{ ['--i' as string]: i }}><img src={src} alt="" loading="lazy" decoding="async" /></span>
          ))}
        </div>
      </Link>

      <Link to="/projects" className="bento__card bento__card--ai">
        <CardHead Icon={FunnelSimple} title="Performance" desc="Paid media, analytics and optimization." />
        <div className="bento__media bento__chips" aria-hidden="true">
          {[TOOLS.slice(0, 3), TOOLS.slice(3)].map((row, r) => (
            <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
              <div className="bento__chip-track">
                {[...row, ...row].map(([tool], i) => <span key={`${tool}-${i}`} className="bento__chip">{tool}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Link>

      <Link to="/credentials" className="bento__card bento__card--creds">
        <CardHead Icon={Medal} title="Credentials" desc="LinkedIn Learning and Hootsuite Academy certificates." />
        <div className="bento__media bento__badge" aria-hidden="true">
          <span className="bento__badge-ring"><img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="" width={72} height={72} /></span>
          <span className="bento__badge-tag"><SealCheck size={14} weight="fill" />3 certificates</span>
        </div>
      </Link>

      <Link to="/services" className="bento__card bento__card--services">
        <CardHead Icon={Stack} title="Capabilities" desc="Strategy through execution and measurement." />
        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li key={title} className="bento__offer" style={{ ['--i' as string]: i }}>
              <span className="bento__offer-tile"><Icon size={15} weight="duotone" aria-hidden="true" /></span>
              <span className="bento__offer-text"><span className="bento__offer-title">{title}</span><span className="bento__offer-note">{note}</span></span>
              <span className="bento__offer-num" aria-hidden="true">0{i + 1}</span>
            </li>
          ))}
        </ul>
      </Link>

      <Link to="/recommendations" className="bento__card bento__card--quotes">
        <CardHead Icon={Quotes} title="Recommendations" desc="LinkedIn recommendations and client feedback from people I’ve worked with." />
        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...RECOMMENDATIONS, ...RECOMMENDATIONS].map((item, i) => (
              <span key={i} className="bento__review">
                <span className="bento__review-top"><Quotes size={14} weight="fill" /><b>{item.name}</b></span>
                <span className="bento__review-role">{item.role}</span>
                <span className="bento__review-work">{item.work}</span>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </nav>
  )
}
