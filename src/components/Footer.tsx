import { useSetting } from "@/stores/common-store";

export const Footer = () => {
  const { setting } = useSetting();
  return (<>
    <footer className="footer" style={{ backgroundImage: 'url(https://khanhhung.academy/template/assets/images/footer/footer-bg.jpg)' }}>


      <div className="ft-bottom">
        <div className="ft-if">
          <div className="container">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3">
                <a href="https://mona.media" className="mona-logo" data-wpel-link="internal">
                  <img src="http://mona.media/wp-content/uploads/2023/03/media-logo.png" alt="" />
                </a>
              </div>
              <div className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3">
                <div className="hd-menu-info">
                  <div className="ft-label">Liên hệ</div>
                  <div className="hd-menu-info-f d-flex f-start f-nowrap">
                    <div className="icon">
                      <img src="https://mona.media/template/assets/images/footer-icon-mail.svg" alt="" />
                    </div>
                    <div className="d-flex a-start">
                      <span className="label">
                        Email: <span className="fw-600 hl-purple">
                          <a href={`mailto:${setting?.email}`} className="link-h">{setting?.email}</a>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="hd-menu-info-f d-flex f-start f-nowrap">
                    <div className="icon">
                      <img src="https://mona.media/template/assets/images/footer-icon-marker.svg" alt="" />
                    </div>
                    <div className="d-flex a-start">
                      <span className="label">Địa chỉ: <span className="fw-600 hl-purple"> {setting?.address} </span> </span>
                    </div>
                  </div>
                  <div className="hd-menu-info-f d-flex f-start f-nowrap">
                    <div className="icon">
                      <img src="https://mona.media/template/assets/images/footer-icon-mail.svg" alt="" />
                    </div>
                    <div className="d-flex a-start">
                      <span className="label">Phone: <span className="fw-600 hl-purple"> {setting?.phone} </span> </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3">
                <div className="ft-if-gr ft-label">
                  <span className="icon">
                    <img src="https://khanhhung.academy/template/assets/images/ft-if-icon.svg" alt="" />
                  </span>
                  <span className="text">
                    Mã số thuế
                  </span>
                </div>
                <div className="ft-if-box">
                  <div className="ft-if-text">
                    <p className="text">Công ty TNHH MONA MEDIA</p>
                  </div>
                </div>
                <div className="ft-if-gr ft-label">
                  <span className="icon">
                    <img src="https://khanhhung.academy/template/assets/images/ft-icon-card.svg" alt="" />
                  </span>
                  <span className="text">
                    Số tài khoản: <span className="ft-if-tbank">{setting?.bank_account}</span>
                  </span>
                </div>
                <div className="ft-if-box">
                  <div className="ft-if-bank">
                    <span className="text">Ngân hàng: {setting?.bank_name}</span>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3">
                <div className="ft-license-col col d-flex f-end">
                  <div className="ft-license-wrap">
                    <div className="label">
                      <a href="https://khanhhung.academy/chinh-sach-bao-mat/">Chính sách bảo mật</a>
                    </div>
                    <ul className="social-list d-flex">
                      <li className="social-item ">
                        <a href={setting?.link_facebook} rel="nofollow external noopener noreferrer" target="1" data-wpel-link="external">
                          <img src="http://mona.media/wp-content/uploads/2023/02/ic-fb.svg" alt="" />
                        </a>
                      </li>
                      <li className="social-item ">
                        <a href={setting?.link_youtube} rel="nofollow external noopener noreferrer" target="1" data-wpel-link="external">
                          <img src="http://mona.media/wp-content/uploads/2023/02/ic-youtube.svg" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ft-license-wrap">
                    <div className="label">
                      <a href="https://khanhhung.academy/huong-dan-dat-hang-tren-website-khanh-hung-academy/">Hướng dẫn đặt hàng</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="menu-bar-fixed max-w-full overflow-x-auto">
      <div className="header-bot-center append-menu-js">

        <ul className="menu-list">
          <li className="menu-item">
            <div className="menu-link scroll-quyen_loi">
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/header/menu-icon-03.svg" alt="" />
              </span>
              <span className="menu-txt">Quyền lợi</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-link scroll-chuong_trinh_hoc">
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/header/menu-icon-02.svg" alt="" />
              </span>
              <span className="menu-txt">Chương trình học</span>
            </div>
          </li>
          <li className="menu-item">
            <div className="menu-link scroll-la_ai">
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg" alt="" />
              </span>
              <span className="menu-txt">Khánh Hùng là ai ?</span>
            </div>
          </li>
          <li className="menu-item">
            <a className="menu-link" target="_blank" rel="noreferrer" href={setting?.link_group_facebook || '#'}>
              <span className="menu-icon"><img src="https://khanhhung.academy/template/assets/images/header/hung-colleague-up.svg" alt="" /></span>
              <span className="menu-txt">Hùng's Colleague Club</span>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="/blogs">
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/header/icon-blog.svg" alt="" />
              </span>
              <span className="menu-txt">Blog</span>
            </a>
          </li>
          {/* <li className="menu-item">
            <a className="menu-link" href="https://khanhhung.academy/ban-tin/">
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/header/menu-icon-07.svg" alt="" />
              </span>
              <span className="menu-txt">Hoạt động</span>
            </a>
          </li> */}
          <li className="menu-item">
            <a className="menu-link" target="_blank" rel="noreferrer" href={setting?.link_facebook}>
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg" alt="" />
              </span>
              <span className="menu-txt">Kết bạn với Hùng</span>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" target="_blank" rel="noreferrer" href={setting?.link_fanpage}>
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg" alt="" />
              </span>
              <span className="menu-txt">Fanpage</span>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" target="_blank" rel="noreferrer" href={setting?.link_youtube}>
              <span className="menu-icon"><img src="https://khanhhung.academy/template/assets/images/header/icon-ytb.svg" alt="" /></span>
              <span className="menu-txt">Youtube</span>
            </a>
          </li>
        </ul></div>
    </div>
  </>)
};

export default Footer;
