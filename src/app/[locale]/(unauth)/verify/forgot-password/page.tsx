'use client';
import request from '@/libs/request';
import { Button, Form, Input, Spin } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react'

const ForgotPassword = () => {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const onFinish = async (values: any) => {
    const { email } = values;
    console.log(email);

    try {
      await request('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      router.push('/verify/forgot-password/thank-you');
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className='max-w-md mx-auto mt-10 text-center'>
      <h1 className='font-bold'> Quên mật khẩu </h1>
      <Spin spinning={loading}>
        <Form
          layout='vertical'
          name='forgot-password'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className=''
        >
          <Form.Item label="Email"
            name={'email'}
            rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
          >
            <Input placeholder='Email' />
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
