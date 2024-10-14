'use client';

import { Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

import request from '@/libs/request';

const BtnCreateOrder = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const createOrder = async () => {
    setLoading(true);
    try {
      const data = await request<API.CreateOrderResponse>('/v1/orders', {
        method: 'POST',
        body: JSON.stringify({
          order_code: `KH${Math.floor(Math.random() * 1000000)}`,
        }),
      });
      router.push(`/learn/payment?order_code=${data?.data?.order_code}`);
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upp-fn" onClick={createOrder}>
      <div className="init_checkout btn-up">
        <div className="btn-up-br">
          <span className="br"></span>
          <span className="br"></span>
        </div>
        <div className="btn-up-inner">
          <span className="ic ic-thunder">
            <span className="ic-lock">
              <img src="https://khanhhung.academy/learn/assets/images/lock-1.png" alt="" />
              <img src="https://khanhhung.academy/learn/assets/images/lock-2.png" alt="" />
            </span>
            <img src="https://khanhhung.academy/learn/assets/images/thunder.gif" alt="" className="gif" />
            <img src="https://khanhhung.academy/learn/assets/images/thunder.gif" alt="" className="gif --second" />
          </span>
          <Spin spinning={loading}>
            <div className="content">
              <p className="txt">KHÓA GIAO DỊCH NGAY BÂY GIỜ!</p>
              <p className="des">Giá có thể được nâng bất cứ lúc nào</p>
            </div>
          </Spin>
        </div>
      </div>
    </div>
  );
};

export default BtnCreateOrder;
