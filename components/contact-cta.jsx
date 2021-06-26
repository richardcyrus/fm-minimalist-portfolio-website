import Link from 'next/link'

const ContactCta = () => {
  return (
    <div className="contact-cta">
      <h2 className="contact-cta__headline">
        Interested in doing a project together?
      </h2>
      <hr className="contact-cta__rule" />
      <Link href="/contact">
        <a className="button contact-cta__button">Contact Me</a>
      </Link>
    </div>
  )
}

export default ContactCta
