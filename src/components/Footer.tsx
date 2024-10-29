import { useSetting } from "@/stores/common-store";

export const Footer = () => {
  const { setting } = useSetting();
  return (<>
    <footer className="footer" style={{ backgroundImage: 'url(https://khanhhung.academy/template/assets/images/footer/footer-bg.jpg)' }}>
      <div className="container">
        <div className="footer-ctn footer-row">
          <div className="footer-col footer-card">
            <div className="card-info">
              <div className="card-info-header">
                <div className="cover">
                  {' '}
                  <img src="https://khanhhung.academy/template/assets/images/footer/card-info-cover.jpg" alt="" loading="lazy" />
                </div>
                <div className="avt">
                  {' '}
                  <img src={setting?.logo_footer} alt="" loading="lazy" />
                </div>
              </div>
              <div className="card-info-body">
                <div className="name">Vy Nguyễn Khánh Hùng</div>
                <div className="title">
                  CEO, Founder
                  <img src="https://khanhhung.academy/template/assets/images/footer/card-info-logo.svg" alt="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-col footer-content">
            <div className="footer-content-block">
              <p className="desc">
                Hùng là CEO, Founder của
                <span className="footer-logo-small"><img src="https://khanhhung.academy/template/assets/images/footer/footer-logo-small-the-mona.svg" alt="" loading="lazy" /></span>
                bao gồm 3 thương hiệu:
                <br />
                <span className="footer-logo-small"><img src="https://khanhhung.academy/template/assets/images/footer/footer-logo-small-media.svg" alt="" loading="lazy" /></span>
                ,
                {' '}
                <span className="footer-logo-small"><img src="https://khanhhung.academy/template/assets/images/footer/footer-logo-small-software.svg" alt="" loading="lazy" /></span>
                và
                {' '}
                <span className="footer-logo-small"><img src="https://khanhhung.academy/template/assets/images/footer/footer-logo-small-host.svg" alt="" loading="lazy" /></span>
              </p>
            </div>
            <div className="footer-content-block">
              <p className="desc">
                Hùng đã thành lập
                <span className="footer-logo-small">
                  {' '}
                  <img src="https://khanhhung.academy/template/assets/images/footer/footer-logo-small-the-mona.svg" alt="" loading="lazy" />
                </span>
              </p>
              <p className="desc">
                với tiền thân là nhóm Freelancer gồm Hùng và 3 anh em khác từ năm 2016 và cho đến hiện nay
                <span className="footer-logo-small">
                  {' '}
                  <img src="https://khanhhung.academy/template/assets/images/footer/footer-logo-small-the-mona.svg" alt="" loading="lazy" />
                </span>
                <span className="fw-600">đã có hơn 200 nhân sự. </span>
              </p>
            </div>
            <div className="footer-content-block">
              <p className="desc">
                Trong suốt quá trình đó thì Hùng đã làm việc với rất nhiều khách hàng khác nhau, đặc biệt
                trong mảng giáo dục Hùng
                <span className="fw-600">
                  đã và đang đồng hành không gián đoạn với hơn 300 tổ chức giáo
                  dục, hơn 80 giảng viên giúp
                  {' '}
                </span>
                họ tạo ra hệ thống giảng dạy tự động và hoạt động hiệu quả với nó.
              </p>
            </div>
            <div className="footer-content-block">
              <div className="desc-viewmore">
                <p className="desc">
                  Bên cạnh đó,
                  <span className="fw-600">
                    Hùng cũng làm việc với hơn 2000+ đối tác E-commerce ở các
                    thị trường khác nhau.
                    <span className="footer-view-more txt-edutech footer-view-more-js">
                      Xem
                      thêm
                    </span>
                  </span>
                </p>
              </div>
              <div className="desc-hidden desc-hidden-js">
                <div className="footer-content-block">
                  <p className="desc">
                    Hùng đã tìm ra cách bán khoá học tốt nhất là bán theo mô hình e-commerce, nghĩa là bạn tạo
                    ra và bán khoá học như một sản phẩm điện tử, bán tự động, dạy tự động, tạo thu nhập thụ động đúng nghĩa
                    cho bạn.
                  </p>
                </div>
                <div className="footer-content-block">
                  <p className="desc fw-600">Toàn bộ kiến thức, kinh nghiệm, số liệu Hùng đều chia sẻ miễn phí tại: </p>
                  <p className="desc fw-600">
                    {' '}
                    <a className="desc-link txt-upper" href="https://khanhhung.academy">
                      KHOÁ
                      HỌC BÁN KHOÁ HỌC
                    </a>
                    <span className="footer-kha-small">
                      <img src="https://khanhhung.academy/template/assets/images/footer/kha-small.svg" alt="" loading="lazy" />
                      <img className="thunder thunder-1" src="https://khanhhung.academy/template/assets/images/button/btn-upgrade-thunder.gif" alt="" loading="lazy" />
                      <img className="thunder thunder-2" src="https://khanhhung.academy/template/assets/images/button/btn-upgrade-thunder.gif" alt="" loading="lazy" />
                    </span>
                  </p>
                </div>
                <div className="footer-content-block">
                  <p className="desc-viewless">
                    <span className="desc fw-600">
                      Bạn không cần tốn bất kỳ chi phí nào, chỉ cần đăng ký
                      và học miễn phí ngay.
                      <span className="footer-view-less txt-nhtq footer-view-less-js">Thu gọn</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-col footer-follow">
            <div className="card-follow">
              <div className="card-follow-label fw-600">Theo dõi Hùng tại:</div>
              <div className="card-follow-list">
                <a className="card-follow-item" href={setting?.link_group_facebook} target="_blank" rel="noreferrer">
                  <span className="icon">
                    <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-fb.svg" alt="" loading="lazy" />
                  </span>
                  <span className="txt">@vy.nguyenkhanhhung</span>
                </a>
                <a className="card-follow-item" href="https://www.linkedin.com/in/vy-nguyen-khanh-hung-0287722a6/" target="_blank" rel="noreferrer">
                  <span className="icon">
                    <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-linkedin.svg" alt="" loading="lazy" />
                  </span>
                  <span className="txt">@KHA.Team</span>
                </a>
                <a className="card-follow-item" href="https://www.youtube.com/@khanhhungacademy" target="_blank" rel="noreferrer">
                  <span className="icon">
                    <img src="https://khanhhung.academy/template/assets/images/footer/card-follow-icon-ytb.svg" alt="" loading="lazy" />
                  </span>
                  <span className="txt">@KhanhHungAcademy</span>
                </a>
              </div>
            </div>
            <div className="footer-dmca">
              <a href="https://www.dmca.com/Protection/Status.aspx?ID=75cdf341-9b39-4dd1-8203-879110316ee9&amp;refurl=https://khanhhung.academy/" title="DMCA.com Protection Status" className="dmca-badge">
                <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=75cdf341-9b39-4dd1-8203-879110316ee9" alt="DMCA.com Protection Status" />
              </a>
              {/* <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script> */}
            </div>
          </div>
        </div>
      </div>
  
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
            <a className="menu-link" href="/#quyen_loi">
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/header/menu-icon-03.svg" alt="" />
              </span>
              <span className="menu-txt">Quyền lợi</span>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="/#chuong_trinh_hoc">
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/header/menu-icon-02.svg" alt="" />
              </span>
              <span className="menu-txt">Chương trình học</span>
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-link" href="/#la_ai">
              <span className="menu-icon">
                <img src="https://khanhhung.academy/template/assets/images/header/menu-icon-01.svg" alt="" />
              </span>
              <span className="menu-txt">Khánh Hùng là ai ?</span>
            </a>
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
