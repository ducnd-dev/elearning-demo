'use client';
import { Statistic } from 'antd';
import React from 'react'

const CountDown = () => {
  const { Countdown } = Statistic;

  return (
    <div className="pay-cw">
      <div className="pay-cw-item">
        <p className="number">
          <Countdown value={Date.now() + 1000 * 60 * 5} format="mm" valueStyle={{ color: '#fff' }}/>
        </p>
        <p className="des">Phút</p>
      </div>
      <div className="pay-cw-item">
        <p className="number">
          <Countdown 
            value={Date.now() + 1000 * 60} 
            format="ss" 
            valueStyle={{ color: 'red' }}
          />
        </p>
        <p className="des">Giây</p>
      </div>
    </div>
  )
}

export default CountDown