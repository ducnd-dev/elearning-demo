'use client';
import request from '@/libs/request';
import { useAuthStore } from '@/providers/auth-store-provider';
import { useSetUser } from '@/stores/auth-store';
import { SmileOutlined } from '@ant-design/icons';
import { Form, Input, notification, Select, Spin } from 'antd'
import { useEffect, useState } from 'react'

const ProfileForm = () => {
  const { user } = useAuthStore();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const setUserStore = useSetUser();
  const openNotification = () => {
    api.open({
      message: 'Cập nhật profile',
      description:
        'Cập nhật thông tin profile thành công!',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  }
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const res = await request<API.GetUser>('/v1/users', {
        method: 'POST',
        body: JSON.stringify(values),
      });
      openNotification();
      setUserStore(res?.data);
      localStorage.setItem('user', JSON.stringify(res?.data));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    form.setFieldsValue(user);
  }, [user]);
  return (
    <Spin spinning={loading}>
      {contextHolder}
      <div className="prf-group">
        <div className="grid grid-cols-12">
          <div className="col-span-full md:pt-6 lg:col-span-3">
            <span className="text-3xl font-semibold">Thông tin cơ bản</span>
          </div>
          <div className="col-span-full lg:col-span-9">
            <div className="md:mt-5 py-4">
              <Form
                layout="vertical"
                onFinish={onFinish}
                initialValues={user}
                form={form}
              >
                <div className="mt-3 grid md:grid-cols-2 md:gap-4 text-[14px]">
                  <Form.Item
                    label="Họ"
                    name="first_name"
                  >
                    <Input
                      placeholder="Nhập họ"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Tên"
                    name="last_name"
                  >
                    <Input
                      placeholder="Nhập tên"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                </div>
                <div className="mt-3 grid md:grid-cols-3 md:gap-4">
                  <Form.Item
                    label="Giới tính"
                    name="gender"
                  >
                    <Select
                      placeholder="Chọn giới tính"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    >
                      <Select.Option value="Female">Nữ</Select.Option>
                      <Select.Option value="Male">Nam</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Ngày sinh"
                    name="date_of_birth"
                  >
                    <Input
                      placeholder="Nhập ngày sinh"
                      type='date'
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Đang sống tại"
                    name="current_address"
                  >
                    <Input
                      placeholder="Nhập nơi đang sống"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                </div>
                <div className="mt-3 grid md:grid-cols-2 md:gap-4">
                  <Form.Item
                    label="Email"
                    name="email"
                  >
                    <Input
                      placeholder="Nhập email"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      disabled
                    />
                  </Form.Item>
                  <Form.Item
                    label="Số điện thoại"
                    name="phone_number"
                    rules={[
                      { pattern: /^0\d{9,10}$/, message: 'Số điện thoại không hợp lệ!' }
                    ]}
                  >
                    <Input
                      placeholder="Nhập số điện thoại"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                </div>
                <div className="mt-3 grid md:grid-cols-2 md:gap-4">
                  <Form.Item
                    label="Lĩnh vực chuyên môn"
                    name="specialization"
                  >
                    <Input
                      placeholder="Nhập lĩnh vực chuyên môn"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Số năm kinh nghiệm"
                    name="years_of_experience"
                  >
                    <Input
                      placeholder="Nhập số năm kinh nghiệm"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  label="Mô tả về nghề nghiệp của bạn"
                  name="career_description"
                >
                  <Input.TextArea
                    placeholder="Nhập mô tả về nghề nghiệp của bạn"
                    size="large"
                    className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </Form.Item>
                <div className="mb-2 mt-6 text-3xl font-bold">Thông tin ngân hàng</div>
                <div className="grid md:grid-cols-3 md:gap-4">
                  <Form.Item
                    label="Chủ tài khoản"
                    name="account_holder"
                  >
                    <Input
                      placeholder="Nhập chủ tài khoản"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Ngân hàng"
                    name="bank"
                  >
                    <Input
                      placeholder="Nhập ngân hàng"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Số tài khoản"
                    name="account_number"
                  >
                    <Input
                      placeholder="Nhập số tài khoản"
                      size="large"
                      className="text-[14px] rounded-[2px] border !bg-white px-3 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </Form.Item>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="rounded-xl bg-purple-700 px-10 py-6 text-2xl text-white">
                    Lưu lại
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Spin>
  )
}

export default ProfileForm