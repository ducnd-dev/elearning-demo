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
  const imageUrl = logoSrc ? logoSrc : getUrlImage(setting?.logo_header || cSetting?.logo_header);
  return (
    <a className="logo-link" href="/">
      {' '}
      {imageUrl ? <img
        src={imageUrl}
        alt=""
      /> : <img
        src="https://khanhhung-api.cuongdesign.net/storage/files/MfYooXYkdxcJ4FJujwqo3t6g9b4pfO47Oodnbmd6.png"
        alt="" />
      }
    </a>
  )
}

export default Logo