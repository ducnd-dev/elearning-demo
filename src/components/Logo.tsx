import getUrlImage from '@/libs/common'
import { useSetting } from '@/stores/common-store'
import Link from 'next/link'
import React from 'react'
type Props = {
  logoSrc?: string | null,
}
const Logo = ({ logoSrc }: Props) => {
  const { setting } = useSetting()
  return (
    <Link className="logo-link" href="/">
      {' '}
      <img src={logoSrc || getUrlImage(setting?.logo_header)} alt="" />
    </Link>
  )
}

export default Logo