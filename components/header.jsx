import Link from 'next/link'
import Image from 'next/image'

export default function Header () {
  return (
    <header className='site-head' role='banner'>
      <Link href='#main-content'>
        <a className='skip-link'>Skip to content</a>
      </Link>
      <div className='wrapper'>
        <div className='site-head__inner'>
          <Link href='/'>
            <a aria-label='Alex Spencer home' className='site-head__brand'>
              <Image
                src='/images/logo.svg'
                alt='Alex Spencer logo'
                width={61}
                height={32}
              />
            </a>
          </Link>
          <div className='burger-menu' data-element='burger-root'>
            <button
              className='burger-menu__trigger'
              data-element='burger-menu-trigger'
              type='button'
              aria-label='Toggle menu'
            >
              {/* eslint-disable-next-line */}
              <span className='burger-menu__bar'></span>
            </button>
            <div
              className='burger-menu__panel'
              data-element='burger-menu-panel'
            >
              <nav className='navigation' aria-label='primary'>
                <ul role='list'>
                  <li>
                    <Link href='/'>
                      <a className='active'>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/portfolio'>
                      <a>Portfolio</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/contact'>
                      <a>Contact Me</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
