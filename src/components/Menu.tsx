'use client';
import Link from 'next/link';
import React from 'react'

type Props = {
  setting: Model.Setting | null,
  setOpen?: (open: boolean) => void
}
const Menu = ({ setting, setOpen }: Props) => {
  const menus = [
    { label: 'Quyền lợi', id:'scroll-quyen_loi', href: '', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-03.svg' },
    { label: 'Chương trình học', id:'scroll-chuong_trinh_hoc', href: '', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-02.svg' },
    { label: 'Khánh Hùng là ai ?', id:'scroll-la_ai', href: '', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg' },
    { label: 'Colleague Club', id:'link_group_facebook',href: setting?.link_group_facebook || '#', icon: 'https://khanhhung.academy/template/assets/images/header/hung-colleague-up.svg' },
    { label: 'Blog', id:'blogs', href: '/blogs', icon: 'https://khanhhung.academy/template/assets/images/header/icon-blog.svg' },
    // { label: 'Hoạt động', href: 'https://khanhhung.academy/ban-tin/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-07.svg' },
  ];

  return (
    <ul className="menu-list flex flex-col gap-5 md:!flex-row">
      {menus.map((menu, index) => (
        <li key={index} className="menu-item">
          <Link className={`menu-link btn-scroll flex items-center border-b md:border-none pb-4 md:pb-0 border-solid md:border-0 border-gray-400 ${menu.id}`} href={menu.href} onClick={() => setOpen && setOpen(false)}>
            <span className="menu-icon">
              <img src={menu.icon} alt="" />
            </span>
            <span className="menu-txt ml-4 md:ml-0">{menu.label}</span>
          </Link>
        </li>
      ))}
      <li className="menu-item dropdown">
        <p className="menu-link flex items-center">
          <span className="menu-icon">
            <img src="https://khanhhung.academy/template/assets/images/header/icon-fb.svg" alt="" />
          </span>
          <span className="menu-txt">Kết nối </span>
        </p>
        <ul className="sub-menu">
          <li className="sub-menu-item">
            <a className="sub-menu-link flex items-center" target="_blank" rel="noreferrer" href={setting?.link_facebook}>
              <span className="sub-menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg" alt="" />
              </span>
              <span className="sub-menu-txt text-black">Kết bạn</span>
            </a>
          </li>
          <li className="sub-menu-item">
            <a className="sub-menu-link flex items-center" target="_blank" rel="noreferrer" href={setting?.link_fanpage}>
              <span className="sub-menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg" alt="" />
              </span>
              <span className="sub-menu-txt text-black">Fanpage</span>
            </a>
          </li>
          <li className="sub-menu-item">
            <a className="sub-menu-link flex items-center" target="_blank" rel="noreferrer" href={setting?.link_youtube}>
              <span className="sub-menu-icon"><img src="https://khanhhung.academy/template/assets/images/header/icon-ytb.svg" className='size-6' alt="" /></span>
              <span className="sub-menu-txt text-black">Youtube</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default Menu
