import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

const BASE = import.meta.env.BASE_URL

export const profile: Profile = {
  name: 'Jose Paolo Olan',
  firstName: 'Pao',
  handle: '@paodigital',
  role: 'Digital Marketing & Growth Marketing Specialist',
  avatarSrc: `${BASE}avatar.svg`,
  verifiedLabel: 'Professional digital marketing portfolio',
  email: 'olan.jp@gmail.com',
  location: 'Batangas, Philippines',
  stats: [
    { value: '6+ yrs', label: 'digital + creative work', Icon: Briefcase },
    { value: '≈15', label: 'centres supported', Icon: SealCheck },
    { value: 'UTC+8', label: 'Philippines', Icon: Clock },
  ],
  displayName: { line1: 'Strategy. Creative.', line2: 'Performance.' },
  hero: {
    body: 'I build data-informed social, paid media, content and creative systems that connect audience insight to measurable marketing objectives.',
    portraitSrc: `${BASE}avatar.svg`,
    portraitAlt: 'Jose Paolo Olan portfolio mark',
  },
  socials: [
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/paodigital/', iconPath: `${BASE}icons/linkedin.svg` },
    { label: 'WhatsApp', href: 'https://wa.me/639565802806', iconPath: `${BASE}icons/whatsapp.svg` },
    { label: 'Creative portfolio archive', href: 'https://olanjp.wixsite.com/paodigital', iconPath: `${BASE}icons/portfolio.svg` },
  ],
}
