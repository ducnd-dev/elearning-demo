import Link from 'next/link'
import React from 'react'

const BtnLearnNow = () => {
  return (
    <Link className="mb-btn-pri" href="/learn/auth/1/1">
      <div className="inner">
        <div className="ic ic-thunder">
          <img src="https://khanhhung.academy/learn/assets/images/ic-thunder.svg" alt="" />
          <img src="https://khanhhung.academy/learn/assets/images/thunder.gif" alt="" className="gif" />
          <img src="https://khanhhung.academy/learn/assets/images/thunder.gif" alt="" className="gif --second" />
        </div>
        <span className="txt">Học ngay</span>
      </div>
    </Link>
  )
}

export default BtnLearnNow