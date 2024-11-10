'use client';
import getUrlImage from '@/libs/common'
import { useSetting } from '@/stores/common-store'
import { getCookie } from 'cookies-next';
import React from 'react'
type Props = {
  logoSrc?: string | null,
}
const Logo = ({ logoSrc }: Props) => {
  const { setting } = useSetting()
  const cSetting = getCookie('setting') ? JSON.parse(getCookie('setting') || '') : null
  console.log('logoSrc', logoSrc ? logoSrc : getUrlImage(setting?.logo_header || cSetting?.logo_header));
  
  return (
    <a className="logo-link" href="/">
      {' '}
      <img
        src={logoSrc ? logoSrc : getUrlImage(setting?.logo_header || cSetting?.logo_header)}
        alt=""
      />
    </a>
  )
}

export default Logo