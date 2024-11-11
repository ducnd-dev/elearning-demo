'use client';
import BtnLearnNow from '@/components/BtnLearnNow';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@/stores/auth-store';
export const Sidebar = ({ setOpen }: { setOpen?: (open: boolean) => void }) => {
  const path = usePathname();
  const { logout } = useUser()
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
    {
      title: 'Trang chủ',
      icon: 'https://khanhhung.academy/learn/assets/images/mb-ic-9.svg',
      link: '/',
    }
  ];
  return (
    <div className="fixed mr-8 w-[250px] px-2">
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
                {menu.link == '/' ? <a className="menu-link" href={menu.link} onClick={() => setOpen && setOpen(false)}>
                  <span className="icon relative">
                    <img src={menu.icon} alt="" />
                  </span>
                  <span className="txt">
                    <span className="txt-inner">{menu.title}</span>
                  </span>
                </a> : <Link className="menu-link" href={menu.link} onClick={() => setOpen && setOpen(false)}>
                  <span className="icon relative">
                    <img src={menu.icon} alt="" />
                  </span>
                  <span className="txt">
                    <span className="txt-inner">{menu.title}</span>
                  </span>
                </Link>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-dx active:scale-101" onClick={() => {
        logout();
      }}>
        <img src="https://khanhhung.academy/learn/assets/images/hd-logged-5.svg" alt="" />
        <span className="txt">Đăng Xuất</span>
      </div>
    </div>
  );
};
