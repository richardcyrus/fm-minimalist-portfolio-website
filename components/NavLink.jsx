import React, { Children } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
}

NavLink.defaultProps = {
  exact: false,
}

export default function NavLink({ children, ...props }) {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  /**
   * This a a hack, a happy accident. Since project pages are under a `/portfolio`
   * directory, when `props.href` is checked using `asPath.startsWith()` it matches
   * on the `/portfolio` portfolio index page link and correctly sets the active
   * class. However, if you define the portfolio index page link with the `exact`
   * option, then the matching no longer works. To prevent also matching Home (`/`)
   * that link definition must have `exact`.
   *
   * This is all based on how the links are defined in the <Header /> component,
   * in particular, the `href` defined for the navigation links.
   */
  const isActive = props.exact
    ? asPath === props.href
    : asPath.startsWith(props.href)

  const className = isActive
    ? `${childClassName} active`.trim()
    : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, { className: className || null })}
    </Link>
  )
}
