import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/header'
import Footer from '../components/footer'

export default function Home () {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Minimalist Portfolio</title>
      </Head>
      <Header />
      <main id='main-content' tabIndex='-1' className='wrapper'>
        <section className='contact-description'>
          <h2 className='contact-description__headline'>Get in Touch</h2>
          <div className='contact-description__inner'>
            <p>
              I’d love to hear about what you’re working on and how I could
              help. I’m currently looking for a new role and am open to a wide
              range of opportunities. My preference would be to find a position
              in a company in London. But I’m also happy to hear about
              opportunites that don’t fit that description. I’m a hard-working
              and positive person who will always approach each task with a
              sense of purpose and attention to detail. Please do feel free to
              check out my online profiles below and get in touch using the
              form.
            </p>
            <div className='professional-icons'>
              <ul role='list'>
                <li>
                  <a href='https://github.com' title='GitHub'>
                    <Image
                      src='/images/icons/github.svg'
                      alt=''
                      width={25}
                      height={24}
                    />
                  </a>
                </li>
                <li>
                  <a href='https://twitter.com' title='Twitter'>
                    <Image
                      src='/images/icons/twitter.svg'
                      alt=''
                      width={24}
                      height={20}
                    />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com' title='LinkedIn'>
                    <Image
                      src='/images/icons/linkedin.svg'
                      alt=''
                      width={24}
                      height={24}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className='contact-form'>
          <h2 className='contact-form__headline'>Contact Me</h2>
          <div className='contact__form'>
            <form>
              <div className='form__control'>
                <label htmlFor='fullname'>Name</label>
                <input
                  className='form__input'
                  type='text'
                  name='fullname'
                  placeholder='Jane Appleseed'
                  id='fullname'
                  autoComplete='name'
                  aria-required='true'
                  required
                />
              </div>
              <div className='form__control'>
                <label htmlFor='email'>Email Address</label>
                <input
                  className='form__input'
                  type='email'
                  name='email'
                  placeholder='email@example.com'
                  id='email'
                  autoComplete='email'
                  aria-required='true'
                  required
                />
              </div>
              <div className='form__control'>
                <label htmlFor='message'>Message</label>
                <textarea
                  className='form__input'
                  name='message'
                  id='message'
                  cols='20'
                  rows='3'
                  placeholder='How can I help?'
                  aria-required='true'
                  required
                />
              </div>
              <button type='submit' className='button button-primary'>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
