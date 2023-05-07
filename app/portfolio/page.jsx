import Link from 'next/link'

import ContactCta from '@/components/contact-cta'

export default function PortfolioPage() {
  return (
    <>
      <main id="main-content" tabIndex="-1" className="wrapper portfolio-index">
        <div className="portfolio__item portfolio__item-image--left">
          <div className="portfolio__item-image">
            <picture>
              <source
                srcSet="/images/portfolio/desktop/image-portfolio-manage.jpg, /images/portfolio/desktop/image-portfolio-manage@2x.jpg 2x"
                media="(min-width: 1200px)"
              />
              <source
                srcSet="/images/portfolio/tablet/image-portfolio-manage.jpg, /images/portfolio/tablet/image-portfolio-manage@2x.jpg 2x"
                media="(min-width: 768px)"
              />
              <source srcSet="/images/portfolio/mobile/image-portfolio-manage.jpg, /images/portfolio/mobile/image-portfolio-manage@2x.jpg 2x" />
              {/* eslint-disable-next-line */}
              <img
                src="/images/portfolio/mobile/image-portfolio-manage.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="portfolio__item-summary">
            <h2 className="portfolio__item-name">Manage</h2>
            <p className="portfolio__item-description">
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              testimonial slider.
            </p>
            <Link href="/portfolio/manage" className="button" prefetch={false}>
              View Project
            </Link>
          </div>
        </div>
        <div className="portfolio__item portfolio__item-image--right">
          <div className="portfolio__item-image">
            <picture>
              <source
                srcSet="/images/portfolio/desktop/image-portfolio-bookmark.jpg, /images/portfolio/desktop/image-portfolio-bookmark@2x.jpg 2x"
                media="(min-width: 1200px)"
              />
              <source
                srcSet="/images/portfolio/tablet/image-portfolio-bookmark.jpg, /images/portfolio/tablet/image-portfolio-bookmark@2x.jpg 2x"
                media="(min-width: 768px)"
              />
              <source srcSet="/images/portfolio/mobile/image-portfolio-bookmark.jpg, /images/portfolio/mobile/image-portfolio-bookmark@2x.jpg 2x" />
              {/* eslint-disable-next-line */}
              <img
                src="/images/portfolio/mobile/image-portfolio-bookmark.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="portfolio__item-summary">
            <h2 className="portfolio__item-name">Bookmark</h2>
            <p className="portfolio__item-description">
              This project required me to build a fully responsive landing page
              to the designs provided. I used HTML5, along with CSS Grid and
              JavaScript for the areas that required interactivity, such as the
              features section.
            </p>
            <Link href="/portfolio/bookmark" className="button" prefetch={false}>
              View Project
            </Link>
          </div>
        </div>
        <div className="portfolio__item portfolio__item-image--left">
          <div className="portfolio__item-image">
            <picture>
              <source
                srcSet="/images/portfolio/desktop/image-portfolio-insure.jpg, /images/portfolio/desktop/image-portfolio-insure@2x.jpg 2x"
                media="(min-width: 1200px)"
              />
              <source
                srcSet="/images/portfolio/tablet/image-portfolio-insure.jpg, /images/portfolio/tablet/image-portfolio-insure@2x.jpg 2x"
                media="(min-width: 768px)"
              />
              <source srcSet="/images/portfolio/mobile/image-portfolio-insure.jpg, /images/portfolio/mobile/image-portfolio-insure@2x.jpg 2x" />
              {/* eslint-disable-next-line */}
              <img
                src="/images/portfolio/mobile/image-portfolio-insure.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="portfolio__item-summary">
            <h2 className="portfolio__item-name">Insure</h2>
            <p className="portfolio__item-description">
              This was a small project which mostly consisted of HTML and CSS. I
              built a fully-responsive landing page. The only JavaScript this
              project required was to enable the toggling of the mobile
              navigation.
            </p>
            <Link href="/portfolio/insure" className="button" prefetch={false}>
              View Project
            </Link>
          </div>
        </div>
        <div className="portfolio__item portfolio__item-image--right">
          <div className="portfolio__item-image">
            <picture>
              <source
                srcSet="/images/portfolio/desktop/image-portfolio-fylo.jpg, /images/portfolio/desktop/image-portfolio-fylo@2x.jpg 2x"
                media="(min-width: 1200px)"
              />
              <source
                srcSet="/images/portfolio/tablet/image-portfolio-fylo.jpg, /images/portfolio/tablet/image-portfolio-fylo@2x.jpg 2x"
                media="(min-width: 768px)"
              />
              <source srcSet="/images/portfolio/mobile/image-portfolio-fylo.jpg, /images/portfolio/mobile/image-portfolio-fylo@2x.jpg 2x" />
              {/* eslint-disable-next-line */}
              <img
                src="/images/portfolio/mobile/image-portfolio-fylo.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="portfolio__item-summary">
            <h2 className="portfolio__item-name">Fylo</h2>
            <p className="portfolio__item-description">
              This project was built in pure HTML and CSS. I had mobile and
              desktop designs to work to and built it so that it was
              fully-responsive. I took a mobile-first approach and used modern
              CSS like Flexbox and Grid for layout purposes.
            </p>
            <Link href="/portfolio/fylo" className="button" prefetch={false}>
              View Project
            </Link>
          </div>
        </div>
        <ContactCta />
      </main>
    </>
  )
}
