import React from 'react'
type Props = {
  logoSrc: string,
}
const Logo = ({ logoSrc }: Props) => {
  console.log('logoSrc', logoSrc);
  
  return (
    <a className="logo-link" href="/">
      {' '}
      <img src={logoSrc} alt="" />
    </a>
  )
}

export default Logo