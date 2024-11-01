'use client';
import { Statistic } from 'antd';
import React from 'react'

const CountDown = () => {
  const { Countdown } = Statistic;
  const [count, setCount] = React.useState(Date.now() + 1000 * 60);
  const [countM, setCountM] = React.useState(Date.now() + 1000 * 60 * 5);
  const [mCount, setMCount] = React.useState(4);

  return (
    <div className="pay-cw">
      <div className="pay-cw-item">
        <p className="number">
          <Countdown value={countM} format="mm" valueStyle={{ color: '#fff' }} />
        </p>
        <p className="des">Phút</p>
      </div>
      <div className="pay-cw-item">
        <p className="number">
          <Countdown 
            value={count}
            format="ss" 
            valueStyle={{ color: 'red' }}
            onFinish={() => {
              if (mCount >= 0) {
                setCount(count + 1000 * 60);
                setMCount(mCount - 1);
                setCountM(countM);
              }
            }}
          />
        </p>
        <p className="des">Giây</p>
      </div>
    </div>
  )
}

export default CountDown