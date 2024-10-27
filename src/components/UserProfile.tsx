'use client';
import { useAuthStore } from '@/providers/auth-store-provider';
import { useLogout } from '@/stores/auth-store';
import { SmileOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Space, type MenuProps } from 'antd';
import Link from 'next/link';
import React from 'react'
import BtnLearnNow from './BtnLearnNow';
import BtnUpgrade from './BtnUpgrade';

// type Props = {
//   user: Model.User | null,
// }
const UserProfile = () => {
  const { user, isProUser } = useAuthStore();
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="/dashboard/profile">
          Profile
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="/dashboard/forgot-password">
          Đổi mật khẩu
        </Link>
      ),
      icon: <SmileOutlined />,
    },
    {
      key: '3',
      label: (
        <span onClick={useLogout}>
          Đăng xuất
        </span>
      ),
    },
  ];
  return (
    <div className="header-bot-right loading-ani append-btn-learning-js show-loading-js">
      <div className="header-bot-inner">
        {user ? (
          <div className='flex items-center gap-3'>
            {!isProUser ? <BtnUpgrade /> : <BtnLearnNow />}
            <Dropdown menu={{ items }}>
              <Space>
                <span className="txt fw-600 text-black" style={{ fontSize: 14 }}>
                  <Avatar src="https://imgs.search.brave.com/u8TbnSbeBGhCk0eBdOWDB_fEj7jfB_IZfT9s9zY-320/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXI1LnBuZw"
                    style={{ marginRight: 8, width: 32 }}
                  />
                  {user?.first_name} {user?.last_name}
                </span>
              </Space>
            </Dropdown>
          </div>
        ) : (
          <>
            <div className="header-bot-item" data-attribute="login">
              <Link className="btn-header btn-header-js" href="/#sec-form">
                <span className="txt fw-600">Đăng nhập</span>
              </Link>
            </div>
            <div className="header-bot-item" data-attribute="register">
              <Link className="btn-header btn-header-js bg-lms" href="/#sec-form">
                <span className="txt fw-600">Đăng ký và học thử ngay</span>
              </Link>
            </div>
          </>
        )}
      </div>

    </div>
  )
}

export default UserProfile