'use client';
import { useUser } from '@/stores/auth-store';
import { Avatar, Dropdown, type MenuProps } from 'antd';
import Link from 'next/link';
import React from 'react'
import BtnLearnNow from './BtnLearnNow';
import BtnUpgrade from './BtnUpgrade';
import { getCookie } from 'cookies-next';

// type Props = {
//   user: Model.User | null,
// }
const UserProfile = () => {
  const { user, logout } = useUser();
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
    },
    {
      key: '3',
      label: (
        <span onClick={() => {
          logout();
        }}>
          Đăng xuất
        </span>
      ),
    },
  ];
  const isProUser = getCookie('plan');
  return (
    <div className="header-bot-right loading-ani append-btn-learning-js show-loading-js">
      <div className="header-bot-inner">
        {user ? (
          <div className='flex items-center gap-3'>
            {!isProUser ? <BtnUpgrade /> : <BtnLearnNow />}
            <Dropdown menu={{ items }} className='hidden md:!flex items-center'>
              <span className="txt fw-600 text-black cursor-pointer" style={{ fontSize: 14 }}>
                <Avatar src="https://imgs.search.brave.com/u8TbnSbeBGhCk0eBdOWDB_fEj7jfB_IZfT9s9zY-320/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXI1LnBuZw"
                  style={{ marginRight: 8, width: 32 }}
                />
                <span>{user?.first_name} {user?.last_name}</span>
              </span>
            </Dropdown>
          </div>
        ) : (
          <>
            <div className="header-bot-item" data-attribute="login">
              <a className="btn-header btn-highlight-login" href="#">
                <span className="txt fw-600">Đăng nhập</span>
              </a>
            </div>
            <div className="header-bot-item" data-attribute="register">
              <a className="btn-header btn-highlight-login bg-lms" href="#">
                <span className="txt fw-600">Đăng ký và học thử ngay</span>
              </a>
            </div>
          </>
        )}
      </div>

    </div>
  )
}

export default UserProfile