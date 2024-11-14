'use client';
import { Button, Form, Input, Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function Recovery() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (values: any) => {
    setLoading(true);
    const { password } = values;
    const token = searchParams.get('token');
    if (!token) return;
    try {
      await fetch('/v1/auth/reset-password-by-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, token }),
      });
      window.location.href = '/';
    } catch (error) {
      console.error
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='max-w-md mx-auto mt-10 text-center'>
      <h1 className='font-bold'>Khôi phục mật khẩu</h1>
      <Spin spinning={loading}>
        <Form
          layout='vertical'
          name='recovery'
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item label="Mật khẩu mới"
            name={'password'}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>Xác nhận</Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  )
}

export default Recovery
