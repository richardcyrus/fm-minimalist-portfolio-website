import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavLink from './NavLink'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-head">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="wrapper">
        <div className="site-head__inner">
          <Link href="/">
            <a aria-label="Alex Spencer home" className="site-head__brand">
              <Image
                src="/images/logo.svg"
                alt="Alex Spencer logo"
                width={61}
                height={32}
              />
            </a>
          </Link>
          <div
            className="burger-menu"
            data-element="burger-root"
            data-status={isOpen === false ? 'closed' : 'open'}
          >
            <button
              className="burger-menu__trigger"
              data-element="burger-menu-trigger"
              type="button"
              aria-label="Toggle menu"
              aria-controls="navigation"
              aria-expanded={isOpen.toString()}
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              {/* eslint-disable-next-line */}
              <span className="burger-menu__bar"></span>
            </button>
            <div
              className="burger-menu__panel"
              data-element="burger-menu-panel"
            >
              <nav id="navigation" className="navigation" aria-label="primary">
                <ul>
                  <li>
                    <NavLink exact href="/">
                      <a>Home</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/portfolio">
                      <a>Portfolio</a>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink exact href="/contact">
                      <a>Contact Me</a>
                    </NavLink>
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
