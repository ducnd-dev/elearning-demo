'use client';

import request from '@/libs/request';
import { Modal, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const BtnCheckOrder = (props: { order_code: string }) => {
  const [loading, setLoading] = React.useState(false);
  const [openModalPaid, setOpenModalPaid] = React.useState(false);
  const [openModalUnpaid, setOpenModalUnpaid] = React.useState(false);
  const [isPaid, setIsPaid] = React.useState(false);
  const router = useRouter();
  useEffect(() => {
    const checkOrderStatus = async () => {
      if (isPaid) return;
      try {
        const data = await checkOrder();
        if (data.data.isPaid) {
          setOpenModalPaid(data.data.isPaid);
          setIsPaid(true);
        }
      } catch (error: any) {
        console.error('Error fetching data:', error.message);
      }
    }
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        checkOrderStatus()
      }, 5000);

      return () => clearInterval(interval);
    }, 20000);

    return () => clearTimeout(timeout);
  }, []);

  const checkOrder = async () => {
    setLoading(true);
    try {
      const data = await request<API.CheckOrderStatusResponse>(`/v1/check-order-by-code/${props.order_code}`);
      if (data.data.isPaid) {
        setOpenModalPaid(data.data.isPaid);
      } else {
        setOpenModalUnpaid(true);
      }
      return Promise.resolve(data);
    } catch (error: any) {
      console.error('Error fetching data:', error.message);
      return Promise.reject(null); // Ensure a value is always returned
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="pay-system-ctr">
      <Spin spinning={loading}>
        <div className="btn --pri" onClick={() => checkOrder()}>
          <span className="txt">Kiểm tra giao dịch</span>
        </div>
      </Spin>
      <p className="des fsi">(nếu hệ thống không tự động chuyển hướng)</p>
      <Modal
        title="Thông báo"
        open={openModalPaid}
        onOk={() => router.push('/learn/auth/1/1')}
        okText="Bắt đầu học ngay"
        onCancel={() => setOpenModalPaid(false)}
        centered
      >
        <p>Thanh toán thành công</p>
      </Modal>
      <Modal title="Thông báo" open={openModalUnpaid} onOk={() => setOpenModalUnpaid(false)} onCancel={() => setOpenModalUnpaid(false)} centered>
        <p>Thanh toán chưa thành công</p>
      </Modal>
    </div>
  )
}

export default BtnCheckOrder