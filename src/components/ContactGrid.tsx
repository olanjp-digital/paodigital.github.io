import { ArrowUpRight, EnvelopeSimple } from '@/components/slab'
import { profile } from '@/data/profile'

const CONTACTS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/paodigital', href: 'https://www.linkedin.com/in/paodigital/' },
  { label: 'WhatsApp', value: '+63 956 580 2806', href: 'https://wa.me/639565802806' },
  { label: 'Creative archive', value: 'olanjp.wixsite.com/paodigital', href: 'https://olanjp.wixsite.com/paodigital' },
] as const

export default function ContactGrid() {
  return (
    <section className="pao-page pao-contact" aria-labelledby="contact-title">
      <header className="pao-page__head">
        <span className="pao-eyebrow">Contact</span>
        <h1 id="contact-title">Let’s talk about the work.</h1>
        <p>I’m open to digital marketing opportunities, growth-focused teams and selected freelance projects. Email is the best starting point; LinkedIn and WhatsApp are available for direct contact.</p>
      </header>

      <div className="pao-contact-grid">
        <article className="pao-contact-intro">
          <EnvelopeSimple size={30} weight="duotone" aria-hidden="true" />
          <h2>Digital strategy, social, paid media, content and creative.</h2>
          <p>Based in Batangas, Philippines (UTC+8), with experience supporting work across US, UK and Asia markets.</p>
          <a className="pao-primary" href={`mailto:${profile.email}`}>Email Pao <ArrowUpRight size={16} weight="bold" /></a>
        </article>

        <div className="pao-contact-list">
          {CONTACTS.map((item) => (
            <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <ArrowUpRight size={17} weight="bold" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
