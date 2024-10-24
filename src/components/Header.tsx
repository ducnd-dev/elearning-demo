import { Avatar } from 'antd';

import { DemoBanner } from './DemoBanner';
import Link from 'next/link';
import { useSetting } from '@/stores/common-store';
import DrawerHeader from './DrawerHeader';
import { useUser } from '@/stores/auth-store';
export const Header = () => {
  const { setting } = useSetting();
  const {user} = useUser();
  const menus = [
    { label: 'Quyền lợi', href: '/#quyen_loi', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-03.svg' },
    { label: 'Chương trình học', href: '/#chuong_trinh_hoc', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-02.svg' },
    { label: 'Khánh Hùng là ai ?', href: '/#about-kh', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg' },
    { label: 'Colleague Club', href: setting?.link_group_facebook || '#', icon: 'https://khanhhung.academy/template/assets/images/header/hung-colleague-up.svg' },
    { label: 'Blog', href: '/blogs', icon: 'https://khanhhung.academy/template/assets/images/header/icon-blog.svg' },
    // { label: 'Hoạt động', href: 'https://khanhhung.academy/ban-tin/', icon: 'https://khanhhung.academy/template/assets/images/header/menu-icon-07.svg' },
  ];
  
  return (
    <div className="header">
      <div className="header-desk">
        <DemoBanner />
        <div className="header-bot-flex">
          <div className="header-bot">
            <div className="container-second">
              <div className="header-bot-wrap">
                <div className="header-bot-left append-burger-js">
                  <div className="logo  flex items-center gap-2">
                    <DrawerHeader />
                  <a className="logo-link" href="/">
                      {' '}
                      <img src={setting?.logo_header} alt="" />
                    </a>
                  </div>
                </div>
                <div className="header-bot-center header-menu append-menu-js">
                  <ul className="menu-list">
                    {menus.map((menu, index) => (
                      <li key={index} className="menu-item">
                        <Link className="menu-link btn-scroll" href={menu.href}>
                          <span className="menu-icon">
                            <img src={menu.icon} alt="" />
                          </span>
                          <span className="menu-txt">{menu.label}</span>
                        </Link>
                      </li>
                    ))}
                    <li className="menu-item dropdown">
                      <p className="menu-link">
                        <span className="menu-icon">
                          <img src="https://khanhhung.academy/template/assets/images/header/icon-fb.svg" alt="" />
                        </span>
                        <span className="menu-txt">Kết nối </span>
                      </p>
                      <ul className="sub-menu">
                        <li className="sub-menu-item">
                          <a className="sub-menu-link" target="_blank" rel="noreferrer" href={setting?.link_facebook}>
                            <span className="sub-menu-icon">
                              <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg" alt="" />
                            </span>
                            <span className="sub-menu-txt">Kết bạn</span>
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a className="sub-menu-link" target="_blank" rel="noreferrer" href={setting?.link_fanpage}>
                            <span className="sub-menu-icon">
                              <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg" alt="" />
                            </span>
                            <span className="sub-menu-txt">Fanpage</span>
                          </a>
                        </li>
                        <li className="sub-menu-item">
                          <a className="sub-menu-link" target="_blank" rel="noreferrer" href={setting?.link_youtube}>
                            <span className="sub-menu-icon"><img src="https://khanhhung.academy/template/assets/images/header/icon-ytb.svg" alt="" /></span>
                            <span className="sub-menu-txt">Youtube</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="header-bot-right loading-ani append-btn-learning-js show-loading-js">
                  <div className="header-bot-inner">
                    {user ? (
                      <Link href="/dashboard/profile" as={`/dashboard/profile`}>
                        <span className="txt fw-600" style={{ fontSize: 14 }}>
                          <Avatar src="https://imgs.search.brave.com/u8TbnSbeBGhCk0eBdOWDB_fEj7jfB_IZfT9s9zY-320/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dzNzY2hvb2xzLmNv/bS93M2ltYWdlcy9h/dmF0YXI1LnBuZw"
                            style={{ marginRight: 8, width: 32 }}
                          />
                          {user?.first_name} {user?.last_name}
                        </span>
                      </Link>
                    ) : (
                      <>
                        <div className="header-bot-item" data-attribute="login">
                          <a className="btn-header btn-header-js" href="/#sec-form">
                            <span className="txt fw-600">Đăng nhập</span>
                          </a>
                        </div>
                        <div className="header-bot-item" data-attribute="register">
                          <a className="btn-header btn-header-js bg-lms" href="/#sec-form">
                            <span className="txt fw-600">Đăng ký và học thử ngay</span>
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="header-bot-item-pri header-bot-item" data-attribute="register">
                    <a className="btn-header btn-header-js style-pri" href="/#sec-form">
                      {' '}
                      <span className="txt fw-600">
                        Học ngay
                      </span>
                      <span className="txt txt-upper">hoàn toàn miễn phí</span>
                    </a>
                  </div>
                  <div className="header-top-item download-app">
                    <a className="btn-app btn-app-device" href="https://play.google.com/store/apps/details?id=com.academy.khanhhung" target="_blank" rel="noreferrer">
                      <span className="icon">
                        <img src="https://khanhhung.academy/template/assets/images/header/icon-down-app.svg" alt="" />
                      </span>
                      <span className="txt fw-600">Tải App</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="header-mb menu-mb-js">
        <div className="header-mb-inner append-header-sp-js">
          <div className="header-mb-logo" style={{ display: 'none' }}>
            {' '}
            <a className="logo" href="https://khanhhung.academy">
              {' '}
              <img src="https://khanhhung.academy/template/assets/images/header/logo.png" alt="" />
            </a>
          </div>
          <div className="header-mb-btn">
            {' '}
            <Link className="btn-second style-pri" href="https://khanhhung.academy/learn/auth">
              {' '}
              <span className="txt-wrap">
                {' '}
                <span className="icon">
                  {' '}
                  <img src="https://khanhhung.academy/template/assets/images/header/flash.svg" alt="" />
                </span>
                <span className="txt fw-600">Học ngay </span>
              </span>
            </Link>
          </div>
          <div className="header-mb-wrap">
            <div className="menu-mb-list">
              <div className="menu-mb-item">
                <div className="menu-mb-tt">
                  Quyền lợi cho riêng bạn
                </div>
                <ul className="menu-list">
                  <li className="menu-item disabled-for-free-js">
                    <a className="menu-link" href="https://khanhhung.academy/learn/mona-elearning-bundle/">
                      <span className="icon">
                        <img src="https://khanhhung.academy/template/assets/images/header/bundle-menu.svg" alt="" />
                      </span>
                      <span className="txt fw-600">Giá siêu ưu đãi Website elearning bundle </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/free-mentor/">
                      <span className="icon">
                        <img src="https://khanhhung.academy/template/assets/images/header/ic-chanel-calendar.svg" alt="" />
                      </span>
                      <span className="txt fw-600">Đặt hẹn Free mentor </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/free-setup/">
                      <span className="icon">
                        <img src="https://khanhhung.academy/template/assets/images/header/ic-chanel-setup.svg" alt="" />
                      </span>
                      <span className="txt fw-600">Đăng ký Free setup </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-mb-item">
                <div className="menu-mb-tt">
                  Profile
                </div>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/dashboard/">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/icon-mb-01.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Dashboard
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/change-password/">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/icon-mb-02.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Đổi mật khẩu
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/profile/">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/icon-mb-03.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Profile C1
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/your-ticket/">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/icon-mb-04.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Ticket của bạn
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-mb-item">
                <div className="menu-mb-tt">
                  Làm ăn cùng Hùng
                </div>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/affiliate/dashboard/">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/icon-mb-07.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Dashboard Affiliate
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/affiliate/policy/">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/icon-mb-08.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Chính sách Affiliate
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/learn/ambassador-offer/">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/coupon-code.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Ambassador's offer
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="menu-mb-item">
                <div className="menu-mb-tt">Về khóa học</div>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a className="menu-link btn-scroll" href="https://khanhhung.academy/#quyen_loi">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/quyen-loi.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Quyền lợi
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link btn-scroll" href="https://khanhhung.academy/#chuong_trinh_hoc">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/chuong-trinh-hoc.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Chương trình học
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link btn-scroll" href="https://khanhhung.academy/#about-kh">
                      <span className="icon">
                        {' '}
                        <img src="https://khanhhung.academy/template/assets/images/header/kh-la-ai.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        Khánh Hùng là ai
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="https://khanhhung.academy/#faqs">
                      <span className="icon">
                        <img src="https://khanhhung.academy/template/assets/images/header/faq.svg" alt="" />
                      </span>
                      <span className="txt fw-600">
                        FAQs
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-mb-logout">
            <div className="header-mb-level-item">
              <a href="https://khanhhung.academy/kha-logout" className="header-mb-level-tt">
                <span className="icon"><img src="https://khanhhung.academy/template/assets/images/header/window.svg" alt="" /></span>
                <span className="txt"> Đăng xuất</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
