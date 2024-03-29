import Image from 'next/image'

import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      <main id="main-content" tabIndex="-1" className="wrapper">
        <section className="contact-description">
          <h2 className="contact-description__headline">Get in Touch</h2>
          <div className="contact-description__inner">
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunities that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <div className="professional-icons">
              <ul>
                <li>
                  <a href="https://github.com" title="GitHub">
                    <Image
                      src="/images/icons/github.svg"
                      alt="Link to GitHub.com"
                      width={25}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" title="Twitter">
                    <Image
                      src="/images/icons/twitter.svg"
                      alt="Link to twitter.com"
                      width={24}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" title="LinkedIn">
                    <Image
                      src="/images/icons/linkedin.svg"
                      alt="Link to linkedin.com"
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="contact-form">
          <h2 className="contact-form__headline">Contact Me</h2>
          <div className="contact__form">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  )
}
