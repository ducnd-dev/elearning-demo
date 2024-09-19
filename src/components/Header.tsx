import Link from 'next/link';

import { DemoBanner } from './DemoBanner';

export const Header = () => {
  const menus = [
    { label: 'Quyền lợi', href: '/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-03.svg' },
    { label: 'Chương trình học', href: '/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-03.svg' },
    { label: 'Kết bạn với Hùng', href: '/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-02.svg' },
    { label: 'Hùng\'s Colleague Club', href: '/about/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg' },
    { label: 'Hoạt động', href: '/counter/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg' },
    { label: 'Blog', href: '/portfolio/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg' },
    { label: 'Fanpage', href: '/portfolio/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg' },
    { label: 'Youtube', href: '/portfolio/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg' },
  ];
  return (
    <div className="sticky">
      <DemoBanner />
      <div className="flex h-16 w-full items-center justify-between bg-white px-4">
        <img src="https://khanhhung.academy/learn/assets/images/logo-png.png" alt="Khanh Hung" className="h-12" />
        <ul className="hidden lg:flex">
          {menus.map(menu => (
            <li key={menu.href} className="mx-2 flex items-center gap-1 px-[10px] py-2 font-semibold">
              <img src={menu.icon} alt={menu.label} className="size-5" />
              <Link
                href={menu.href}
                className="border-none text-gray-700 hover:text-gray-900"
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-[.8rem] font-semibold">
          <button className="relative z-10 min-h-[2.4rem] overflow-hidden rounded border-none bg-white px-4 py-2 text-gray-700 transition duration-500 ease-in-out hover:bg-[#f41e92] hover:text-white">
            Đăng nhập
          </button>
          <button className="duration-400 relative z-10 min-h-[2.4rem] overflow-hidden rounded border-none bg-[#f41e92] px-4 py-2 text-white transition ease-in-out hover:text-gray-900">
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
