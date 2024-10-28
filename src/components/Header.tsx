import { DemoBanner } from './DemoBanner';
import Link from 'next/link';
import { useSetting } from '@/stores/common-store';
import DrawerHeader from './DrawerHeader';
import Menu from './Menu';
import UserProfile from './UserProfile';
import Logo from './Logo';

export const Header = () => {
  const { setting } = useSetting();
  return (
    <div className="header">
      <div className="header-desk">
        <DemoBanner />
        <div className="header-bot-flex">
          <div className="header-bot">
            <div className="container-second">
              <div className="header-bot-wrap">
                <div className="flex items-center header-bot-left">
                  <div className="logo flex items-center gap-2">
                    <DrawerHeader setting={setting}/>
                    <Logo logoSrc={setting?.logo_header} />
                  </div>
                </div>
                <div className="header-bot-center header-menu append-menu-js">
                  <Menu setting={setting} />
                </div>
                <UserProfile />
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
