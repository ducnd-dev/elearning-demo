'use client';
import request from '@/libs/request';
import { Button, Form, Input, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

const ForgotPassword = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const onFinish = async (values: any) => {
    setLoading(true);
    const { contact_info } = values;

    try {
      await request('/v1/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contact_info }),
      });
      router.push('/verify/forgot-password/thank-you');
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className='max-w-md w-full mx-auto mt-20 text-center border border-gray-200 border-solid p-10 rounded-2xl'>
      <h1 className='font-bold'> Quên mật khẩu </h1>
      <Spin spinning={loading}>
        <Form
          layout='vertical'
          name='forgot-password'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className='!mt-10'
        >
          <Form.Item label="Email"
            name={'contact_info'}
            rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
          >
            <Input placeholder='Email' className='w-96' />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit'>Gửi</Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
};

export default ForgotPassword;
