'use client';
import request from '@/libs/request';
import { Button, Form, Input, Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import React from 'react'

function Recovery() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = React.useState(false);
  const onFinish = async (values: any) => {
    console.log(values);
    
    setLoading(true);
    const { password } = values;
    const token = searchParams.get('token');
    if (!token) return;
    try {
      await request('/v1/auth/reset-password-by-token', {
        method: 'POST',
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
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Nhập lại mật khẩu"
            name={'confirmPassword'}
            dependencies={['password']}
            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu!' }, ({ getFieldValue }) => ({
              validator(rule, value) {
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

export default Recovery
