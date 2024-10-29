'use client'

import request from '@/libs/request';
import { SmileOutlined } from '@ant-design/icons';
import { Form, Input, notification, Spin } from 'antd';
import React from 'react';

const ForgetPasswordPage = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: 'Cập nhật password',
      description:
        'Cập nhật thông tin password thành công!',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  }
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await request<API.GetUser>('/v1/users/change-password', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      openNotification();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <Spin spinning={loading}>
      <div className="container [&_p]:my-6">
        {contextHolder}
        <h1 className="t-title-seven mx-auto my-5 text-center uppercase">Bổ sung mật khẩu</h1>
        <div className="prf-group grid grid-cols-12 gap-10">
          <div className="col-span-full md:col-span-4 text-4xl font-semibold md:block">Bổ sung mật khẩu</div>
          <Form
            layout="vertical"
            onFinish={onFinish}
            className='col-span-full md:col-span-8'
          >
            <div className="md:mt-3 grid md:gap-4 text-[14px]">
              <Form.Item
                label="Mật khẩu mới"
                name="password"
              >
                <Input type="password" placeholder="Mật khẩu mới" className="w-full rounded-md border border-solid border-gray-300 p-5" size="large" />
              </Form.Item>
              <Form.Item
                label="Xác nhận mật khẩu"
                name="password_confirmation"
              >
                <Input type="password" placeholder="Xác nhận mật khẩu" className="w-full rounded-md border border-solid border-gray-300 p-5" size="large" />
              </Form.Item>
            </div>
            <div className="md:mt-4 text-right">
              <button className="rounded-lg bg-purple-800 px-12 py-6 text-2xl uppercase text-white">Đổi mật khẩu</button>
            </div>
          </Form>
        </div>
      </div>
    </Spin>
  );
};

export default ForgetPasswordPage;
