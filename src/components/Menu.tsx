'use client';
import Link from 'next/link';
import React from 'react'

type Props = {
  setting: Model.Setting | null,
}
const Menu = ({ setting }: Props) => {
  const menus = [
    { label: 'Quyền lợi', href: '/#quyen_loi', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-03.svg' },
    { label: 'Chương trình học', href: '/#chuong_trinh_hoc', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-02.svg' },
    { label: 'Khánh Hùng là ai ?', href: '/#about-kh', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg' },
    { label: 'Colleague Club', href: setting?.link_group_facebook || '#', icon: 'https://khanhhung.academy/template/assets/images/header/hung-colleague-up.svg' },
    { label: 'Blog', href: '/blogs', icon: 'https://khanhhung.academy/template/assets/images/header/icon-blog.svg' },
    // { label: 'Hoạt động', href: 'https://khanhhung.academy/ban-tin/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-07.svg' },
  ];
  return (
    <ul className="menu-list flex flex-col gap-5">
      {menus.map((menu, index) => (
        <li key={index} className="menu-item">
          <Link className="menu-link btn-scroll flex items-center" href={menu.href}>
            <span className="menu-icon">
              <img src={menu.icon} alt="" />
            </span>
            <span className="menu-txt">{menu.label}</span>
          </Link>
        </li>
      ))}
      <li className="menu-item dropdown hidden md:block">
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
              <span className="sub-menu-txt">Kết bạn</span>
            </a>
          </li>
          <li className="sub-menu-item">
            <a className="sub-menu-link flex items-center" target="_blank" rel="noreferrer" href={setting?.link_fanpage}>
              <span className="sub-menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg" alt="" />
              </span>
              <span className="sub-menu-txt">Fanpage</span>
            </a>
          </li>
          <li className="sub-menu-item">
            <a className="sub-menu-link flex items-center" target="_blank" rel="noreferrer" href={setting?.link_youtube}>
              <span className="sub-menu-icon"><img src="https://khanhhung.academy/template/assets/images/header/icon-ytb.svg" className='size-6' alt="" /></span>
              <span className="sub-menu-txt">Youtube</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  )
}

export default Menu