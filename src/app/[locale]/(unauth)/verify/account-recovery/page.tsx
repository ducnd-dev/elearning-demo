'use client';
import request from '@/libs/request';
import { Button, Form, Input, Spin } from 'antd';
import React, { Suspense } from 'react';

const FetchToken = () => {
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  return token ? token : null;
};

function Recovery() {
  const [loading, setLoading] = React.useState(false);
  const token = React.useMemo(() => <Suspense fallback={<div>Loading...</div>}><FetchToken /></Suspense>, []);

  const onFinish = async (values: any) => {
    
    setLoading(true);
    const { password } = values;
    if (!token) return;
    try {
      await request('/v1/auth/reset-password-by-token', {
        method: 'POST',
        body: JSON.stringify({ password, token }),
      });
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-md mx-auto mt-10 text-center  border border-gray-200 border-solid p-10 rounded-2xl'>
      <h1 className='font-bold'>Khôi phục mật khẩu</h1>
      <Spin spinning={loading}>
        <Form
          layout='vertical'
          name='recovery'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className='!mt-10'
        >
          <Form.Item label="Mật khẩu mới"
            name={'password'}
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Nhập lại mật khẩu"
            name={'confirmPassword'}
            dependencies={['password']}
            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }, ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('Mật khẩu không khớp!');
              },
            })]}
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

export default Recovery;
