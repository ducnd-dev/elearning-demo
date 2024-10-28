import React from 'react'
import '@/styles/study.css';

const BtnUpgrade = () => {
  return (
    <div className="pro-wars-bot relative flex items-center">
      <a className="button-upp px-4 text-white rounded-md relative" href="/learn/upgrade">
        <span className="br"></span><span className="br"></span>
        <span className="star-dc bg-cover " style={{ backgroundImage: 'url("https://khanhhung.academy/learn/assets/images/button-upp-star.png")' }}></span>
        <div className="button-upp-inner">
          <span className="ic ic-thunder">
            <img src="https://khanhhung.academy/learn/assets/images/premium-1.svg" alt="" /></span>
          <span className="txt ml-1">NÂNG CẤP PRO</span>
        </div>
      </a>
    </div>
  )
}

export default BtnUpgrade