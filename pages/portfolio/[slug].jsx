import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header'
import Footer from '../../components/footer'
import ContactCta from '../../components/contact-cta'

import { projects } from '../../data/projects'

// Pre-render the project detail pages during build
export const getStaticPaths = async () => {
  const paths = Object.keys(projects).map((projectSlug) => ({
    params: { slug: projectSlug },
  }))

  return { paths, fallback: false }
}

// Get the data for the project detail pages during build
export const getStaticProps = async ({ params }) => {
  const project = projects[params.slug]
  return { props: { project: project } }
}

const Project = ({ project }) => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Minimalist Portfolio</title>
      </Head>
      <Header />
      <main
        id="main-content"
        tabIndex="-1"
        className="wrapper portfolio-detail"
      >
        <div className="project__hero">
          <picture>
            <source
              srcSet={`/images/detail/desktop/image-${project.slug}-hero.jpg, /images/detail/desktop/image-${project.slug}-hero@2x.jpg 2x`}
              media="(min-width: 1200px)"
            />
            <source
              srcSet={`/images/detail/tablet/image-${project.slug}-hero.jpg, /images/detail/tablet/image-${project.slug}-hero@2x.jpg 2x`}
              media="(min-width: 768px)"
            />
            <source
              srcSet={`/images/detail/mobile/image-${project.slug}-hero.jpg, /images/detail/mobile/image-${project.slug}-hero@2x.jpg 2x`}
            />
            {/* eslint-disable-next-line */}
            <img
              src={`/images/detail/mobile/image-${project.slug}-hero.jpg`}
              alt=""
            />
          </picture>
        </div>
        <div className="project__details">
          <div className="project__intro">
            <h2 className="project__intro-headline">{project.name}</h2>
            <p className="project__intro-description">{project.excerpt}</p>
            <div className="project__tags">
              <p>{project.roles.join(' / ')}</p>
              <p>{project.languages.join(' / ')}</p>
            </div>
            <a href={project.websiteUrl} className="button">
              Visit Website
            </a>
          </div>
          <div className="project__background">
            <h3 className="project__background-headline">Project Background</h3>
            <p
              className="project__background-description"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
            <h3 className="project__background-previews-headline">
              Static Previews
            </h3>
            <picture className="project__preview-one">
              <source
                srcSet={`/images/detail/desktop/image-${project.slug}-preview-1.jpg, /images/detail/desktop/image-${project.slug}-preview-1@2x.jpg 2x`}
                media="(min-width: 1200px)"
              />
              <source
                srcSet={`/images/detail/tablet/image-${project.slug}-preview-1.jpg, /images/detail/tablet/image-${project.slug}-preview-1@2x.jpg 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`/images/detail/mobile/image-${project.slug}-preview-1.jpg, /images/detail/mobile/image-${project.slug}-preview-1@2x.jpg 2x`}
              />
              {/* eslint-disable-next-line */}
              <img
                src={`/images/detail/mobile/image-${project.slug}-preview-1.jpg`}
                alt=""
              />
            </picture>
            <picture className="project__preview-two">
              <source
                srcSet={`/images/detail/desktop/image-${project.slug}-preview-2.jpg, /images/detail/desktop/image-${project.slug}-preview-2@2x.jpg 2x`}
                media="(min-width: 1200px)"
              />
              <source
                srcSet={`/images/detail/tablet/image-${project.slug}-preview-2.jpg, /images/detail/tablet/image-${project.slug}-preview-2@2x.jpg 2x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`/images/detail/mobile/image-${project.slug}-preview-2.jpg, /images/detail/mobile/image-${project.slug}-preview-2@2x.jpg 2x`}
              />
              {/* eslint-disable-next-line */}
              <img
                src={`/images/detail/mobile/image-${project.slug}-preview-2.jpg`}
                alt=""
              />
            </picture>
          </div>
        </div>
        <div className="portfolio__pagination">
          <Link
            href="/portfolio/[slug]"
            as={`/portfolio/${project.previousProject.toLowerCase()}`}
          >
            <a className="portfolio__pagination--previous">
              <p className="portfolio__pagination--title">
                {project.previousProject}
              </p>
              <p className="portfolio__pagination--directional">
                Previous Project
              </p>
            </a>
          </Link>
          <Link
            href="/portfolio/[slug]"
            as={`/portfolio/${project.nextProject.toLowerCase()}`}
          >
            <a className="portfolio__pagination--next">
              <p className="portfolio__pagination--title">
                {project.nextProject}
              </p>
              <p className="portfolio__pagination--directional">Next Project</p>
            </a>
          </Link>
        </div>
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}

export default Project
