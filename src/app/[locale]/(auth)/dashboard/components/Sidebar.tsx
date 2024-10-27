'use client';
import BtnLearnNow from '@/components/BtnLearnNow';
import { useAuthStore } from '@/providers/auth-store-provider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useClerk } from '@clerk/nextjs'
export const Sidebar = () => {
  const path = usePathname();
  const { signOut } = useClerk()
  const { useLogout } = useAuthStore();
  const menus = [
    {
      title: 'Dashboard',
      icon: 'https://khanhhung.academy/learn/assets/images/mb-ic-1.svg',
      link: '/dashboard',
    },
    {
      title: 'Đổi mật khẩu',
      icon: 'https://khanhhung.academy/learn/assets/images/mb-ic-2.svg',
      link: '/dashboard/forgot-password',
    },
    {
      title: 'Profile C1',
      icon: 'https://khanhhung.academy/learn/assets/images/mb-ic-3.svg',
      link: '/dashboard/profile',
    },
  ];
  return (
    <div className="fixed mr-8 w-[300px] px-8">
      <div className="mb-main-top">
       <BtnLearnNow />
      </div>
      <div className="mb-block mt-8">
        <p className="mb-title">
          <span className="txt">Profile</span>
          <span className="line"></span>
        </p>
        <div className="mb-menu">
          <ul className="menu-list">
            {menus.map((menu, index) => (
              <li key={index} className={`menu-item ${path === menu.link ? 'active' : ''}`}>
                <Link className="menu-link" href={menu.link}>
                  <span className="icon relative">
                    <img src={menu.icon} alt="" />
                  </span>
                  <span className="txt">
                    <span className="txt-inner">{menu.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-dx active:scale-101" onClick={() => {
        useLogout();
        // window.location.href = '/';
        signOut({ redirectUrl: '/' })
      }}>
        <img src="https://khanhhung.academy/learn/assets/images/hd-logged-5.svg" alt="" />
        <span className="txt">Đăng Xuất</span>
      </div>
    </div>
  );
};
