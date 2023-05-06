import Head from 'next/head'
import Link from 'next/link'

import Header from '../components/header'
import Footer from '../components/footer'
import ContactCta from '../components/contact-cta'

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Minimalist Portfolio</title>
      </Head>
      <Header />
      <main id="main-content" tabIndex="-1" className="wrapper">
        <div className="home__hero">
          <picture>
            <source
              srcSet="/images/homepage/desktop/image-homepage-hero.jpg, /images/homepage/desktop/image-homepage-hero@2x.jpg 2x"
              media="(min-width: 1200px)"
            />
            <source
              srcSet="/images/homepage/tablet/image-homepage-hero.jpg, /images/homepage/tablet/image-homepage-hero@2x.jpg 2x"
              media="(min-width: 768px)"
            />
            <source srcSet="/images/homepage/mobile/image-homepage-hero.jpg, /images/homepage/mobile/image-homepage-hero@2x.jpg 2x" />
            {/* eslint-disable-next-line */}
            <img src="/images/homepage/mobile/image-homepage-hero.jpg" alt="" />
          </picture>
          <div className="home-cta">
            <p className="headline">
              Hey, I’m Alex Spencer and I love building beautiful websites
            </p>
            <a href="#about" className="button button-primary">
              About Me
            </a>
          </div>
        </div>
        <div className="home__about">
          <picture>
            <source
              srcSet="/images/homepage/desktop/image-homepage-profile.jpg, /images/homepage/desktop/image-homepage-profile@2x.jpg 2x"
              media="(min-width: 1200px)"
            />
            <source
              srcSet="/images/homepage/tablet/image-homepage-profile.jpg, /images/homepage/tablet/image-homepage-profile@2x.jpg 2x"
              media="(min-width: 768px)"
            />
            <source srcSet="/images/homepage/mobile/image-homepage-profile.jpg, /images/homepage/mobile/image-homepage-profile@2x.jpg 2x" />
            {/* eslint-disable-next-line */}
            <img
              src="/images/homepage/mobile/image-homepage-profile.jpg"
              alt=""
            />
          </picture>
          <div id="about" className="home__about-me">
            <h2 className="home__about-headline">About Me</h2>
            <p className="home__about-description">
              I’m a junior front-end developer looking for a new role in an
              exciting company. I focus on writing accessible HTML, using modern
              CSS practices and writing clean JavaScript. When writing
              JavaScript code, I mostly use React, but I can adapt to whatever
              tools are required. I’m based in London, UK, but I’m happy working
              remotely and have experience in remote teams. When I’m not coding,
              you’ll find me outdoors. I love being out in nature whether that’s
              going for a walk, run or cycling. I’d love you to check out my
              work.
            </p>
            <Link href="/portfolio" className="button">
              Go to Portfolio
            </Link>
          </div>
        </div>
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
