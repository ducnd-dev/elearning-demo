import Link from 'next/link'
import React from 'react'
type Props = {
  logoSrc?: string | null,
}
const Logo = ({ logoSrc }: Props) => {
  return (
    <Link className="logo-link" href="/">
      {' '}
      <img src={logoSrc || ''} alt="" />
    </Link>
  )
}

export default Logo