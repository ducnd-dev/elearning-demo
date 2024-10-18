'use client';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import request from '@/libs/request';

export const FormLogin = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const changeTab = (tab: string) => {
    const tabActive = document.querySelector('.mega-item-js.active');
    const width = (tabActive?.clientWidth ?? 0) + 10;
    document.querySelector(tab === 'register' ? '#tab-form-register' : '#tab-form-login')?.classList.add('active');
    document.querySelector(tab === 'login' ? '#tab-form-register' : '#tab-form-login')?.classList.remove('active');
    document.querySelector(tab === 'register' ? '#register' : '#login')?.classList.add('open');
    document.querySelector(tab === 'login' ? '#register' : '#login')?.classList.remove('open');
    if (tab === 'login') {
      document.querySelector('.tab-content-js')?.classList.add('tab-border-1');
      document.querySelector('.mega-bg-js')?.setAttribute('style', `--widthMegaMenuTab: ${width}px; --transformMegaMenuTab: ${width}px`);
    } else {
      document.querySelector('.tab-content-js')?.classList.remove('tab-border-1');
      document.querySelector('.mega-bg-js')?.setAttribute('style', `--widthMegaMenuTab: ${width}px; --transformMegaMenuTab: 0px`);
    }
  };
  const login = async () => {
    try {
      const res = await request<API.Login>('/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      setCookie('token', res.data.access_token);
      // redirect to dashboard
      router.push('/dashboard');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching data:', error.message);
      } else {
        console.error('Error fetching data:', error);
      }
    }
  };
  const register = async () => {
    try {
      const res = await request('/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      console.log(res);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error fetching data:', error.message);
      } else {
        console.error('Error fetching data:', error);
      }
    }
  };
  return (
    <div className="banner-right-wrap append-form-js">
      <div className="banner-form-layout block-form-js">
        <div className="banner-right-head txt-center fw-600">
          <div className="sec-com-tt-sub txt-center">
            <span className="txt-upper">
              KHÓA HỌC KINH DOANH KHÓA HỌC
            </span>
            {' '}
            hoàn toàn miễn phí
          </div>
          <p className="banner-right-sub txt-under">Bán hàng tự động - dạy học tự động - thu nhập thụ động</p>
        </div>
        <div className="banner-right-content">
          <div className="banner-form-sign">
            <div className="banner-form-head">
              <div className="banner-form-image">
                <div className="img">
                  {' '}
                  <img src="https://khanhhung.academy//template/assets/images/home/banner-form-image.png" alt="" />
                </div>
              </div>
              <p className="banner-form-txt fw-600">
                Không nhập form rườm rà, không nhập thẻ,
                <br />
                không giới hạn thời gian - Đăng nhập là học ngay!
              </p>
            </div>
            <div id="sec-form" className="banner-form-body form-sign">
              <div className="banner-form-list">
                <div className="banner-form-item">
                  <div className="banner-form-item-inner">
                    <div className="icon">
                      {' '}
                      <img src="https://khanhhung.academy//template/assets/images/home/form-icon-01.svg" alt="" />
                    </div>
                    <div className="txt fw-600 txt-upper txt-black">
                      Không cần
                      <br />
                      {' '}
                      NHẬP THẺ
                    </div>
                  </div>
                </div>
                <div className="banner-form-item">
                  <div className="banner-form-item-inner">
                    <div className="icon">
                      {' '}
                      <img src="https://khanhhung.academy//template/assets/images/home/form-icon-02.svg" alt="" />
                    </div>
                    <div className="txt fw-600 txt-upper txt-black">Không giới hạn thời gian</div>
                  </div>
                </div>
                <div className="banner-form-item">
                  <div className="banner-form-item-inner">
                    <div className="icon">
                      {' '}
                      <img src="https://khanhhung.academy//template/assets/images/home/form-icon-03.svg" alt="" />
                    </div>
                    <div className="txt fw-600 txt-upper txt-black">KHÔNG SPAM Dưới mọi hình thức</div>
                  </div>
                </div>
              </div>
              <div className="regi-gg regi-gg-js">
                <Link style={{ display: 'inline-flex' }} href="/sign-in" className="btn-gg">
                  <img className="btn-gg-icon" src="https://khanhhung.academy//template/assets/images/home/icon-gg.png" alt="" />
                  <span className="txt">Đăng nhập với Google</span>
                </Link>
              </div>
              <div className="banner-form-wrap-noti banner-form-wrap-noti-js">
                <div className="noti-login-overlay noti-login-overlay-js"></div>
                <div className="banner-form-wrap tabJS txt-black">
                  <div className="banner-tab-scroll">
                    <div className="mega-bg mega-bg-js">
                      <div className="triangle">
                        <div className="before"></div>
                      </div>
                      <div className="triangle">
                        <div className="before"></div>
                      </div>
                    </div>
                    <div className="tab-form">
                      <div
                        className="tab-form-item tabBtn mega-item-js active"
                        data-attribute="register-form"
                        id="tab-form-register"
                        onClick={() => changeTab('register')}
                      >
                        <span className="txt fw-600">
                          Đăng ký ngay
                        </span>
                      </div>
                      <div
                        className="tab-form-item tabBtn mega-item-js"
                        data-attribute="login-form"
                        id="tab-form-login"
                        onClick={() => changeTab('login')}
                      >
                        <span className="txt fw-600"> Đăng nhập</span>
                      </div>
                    </div>
                  </div>
                  <div className="tab-content tab-content-js">
                    <div className="tab-body">
                      <div className="tabPanel open" id="register">
                        <div className="tab-content-des fw-600">
                          <div className="txt">
                            Chào mừng bạn đã quay lại với Hùng.
                            {' '}
                          </div>
                          <span className="txt-media txt-under fw-600">Đăng nhập để bắt đầu học ngay! </span>
                        </div>
                        <form className="group-form login-form-js">
                          <div className="group-validate">
                            <div className="group">
                              <input
                                type="text"
                                id="email"
                                name="email"
                                value={form.email}
                                placeholder="Email của bạn"
                                autoComplete="email"
                                className="ipt-focus-js"
                                onChange={
                                  (e: any) => setForm({ ...form, email: e.target.value })
                                }
                              />
                              <label className="place" htmlFor="email">Email</label>
                            </div>
                            <p className="invalid invalid-email" style={{ display: 'none' }}></p>
                          </div>
                          <div className="group-validate style-pri show-pass-parent-js verify-email-js">
                            <div className="group">
                              <input
                                className="ipt-password-js"
                                type="password"
                                value={form.password}
                                name="password"
                                placeholder="Mật khẩu"
                                autoComplete="current-password"

                                onChange={
                                  (e: any) => setForm({ ...form, password: e.target.value })
                                }
                              />
                              <label className="place" htmlFor="password">Mật khẩu</label>
                              <i className="icon-eye fas fa-eye-slash show-pass-js"> </i>
                            </div>
                            <p className="invalid invalid-password" style={{ display: 'none' }}></p>

                          </div>
                          <div className="style-pri group">
                            <div className="group-wrap">
                              <div className="group-left">
                                <input id="remember_me_1712811608" type="checkbox" name="remember_me" />
                                <label htmlFor="remember_me_1712811608">Ghi nhớ đăng nhập</label>
                              </div>
                              <div className="group-right txt-edutech fw-700 btn-modal open-popup-js" data-popup="forgot-pass">
                                <label htmlFor="forgot-password">Quên mật khẩu ?</label>
                              </div>
                            </div>
                          </div>
                          <div className="is-loading-group submit-btn-js">
                            <button
                              type="button"
                              className="btn btn-second brd-8 style-three"
                              onClick={login}
                            >
                              <div className="icon">
                                {' '}
                                <img src="https://khanhhung.academy//template/assets/images/home/icon-btn.png" alt="" />
                              </div>
                              <div className="box">
                                <span className="txt-btn fw-800 txt-upper">đăng nhập học ngay</span>
                                <span className="txt-btn fw-400">Hoàn toàn miễn phí và hiệu quả cao </span>
                              </div>
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="tabPanel" id="login">
                        <div className="tab-content-des fw-600">
                          <div className="txt">Không có thêm bước nào cả </div>
                          <span className="txt-media txt-under fw-600"> Đăng ký là xem được ngay!</span>
                        </div>
                        <form className="group-form register-form-js">
                          <div className="group-validate">
                            <div className="group">
                              <input
                                type="text"
                                id="register-email"
                                name="email"
                                placeholder="Email của bạn"
                                className="ipt-focus-js"
                                value={form.email}
                                onChange={
                                  (e: any) => setForm({ ...form, email: e.target.value })
                                }
                              />
                              <label className="place" htmlFor="register-email">Email</label>
                            </div>
                            <p className="invalid invalid-email" style={{ display: 'none' }}></p>
                          </div>
                          <div className="group-validate-wrap show-pass-parent-js verify-email-js">
                            <div className="group-validate">
                              <div className="group">
                                <input
                                  className="ipt-password-js"
                                  value={form.password}
                                  type="password"
                                  name="password"
                                  placeholder="Mật khẩu"
                                  onChange={
                                    (e: any) => setForm({ ...form, password: e.target.value })
                                  }
                                />
                                <label className="place" htmlFor="password">Mật khẩu</label>
                                <i className="icon-eye fas fa-eye-slash show-pass-js"> </i>
                              </div>
                              <p className="invalid invalid-password" style={{ display: 'none' }}></p>
                            </div>
                            <div className="group-validate">
                              <div className="group">
                                <input
                                  className="ipt-password-js"
                                  value={form.confirmPassword}
                                  type="password"
                                  name="password_confirm"
                                  id="password_confirm"
                                  placeholder="Xác nhận mật khẩu"
                                  onChange={
                                    (e: any) => setForm({ ...form, confirmPassword: e.target.value })
                                  }
                                />
                                <label className="place" htmlFor="password_confirm">Xác nhận mật khẩu</label>
                                <i className="icon-eye fas fa-eye-slash show-pass-js"> </i>
                              </div>
                              <p className="invalid invalid-password-confirm" style={{ display: 'none' }}></p>
                            </div>
                          </div>
                          <div className="is-loading-group submit-btn-js">
                            <button className="btn btn-second brd-8 style-three" onClick={register}>
                              <div className="icon">
                                {' '}
                                <img src="https://khanhhung.academy//template/assets/images/home/icon-btn.png" alt="" />
                              </div>
                              <div className="box">
                                <span className="txt-btn fw-800 txt-upper">Đăng ký học thử ngay</span>
                                <span className="txt-btn fw-400">Hoàn toàn MIỄN PHÍ | Hiệu quả cao</span>
                              </div>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-form-bot txt-black">
                <div className="banner-form-bot-sub txt-center add-active-js start-date-js active">
                  Bạn đã đến đây sớm hơn rất nhiều giảng viên khác.
                  <span className="txt-launching-change-js">
                    <span>
                      Khóa học của Hùng đã launching được
                      <span className="txt-nhtq fw-600">5 tháng 19 ngày </span>
                    </span>
                  </span>
                  chứng tỏ chúng ta có duyên
                </div>
                <p className="banner-form-bot-desc txt-center">
                  Khoá học kinh doanh thực tiễn nhất, khi mà mội kiến thức đều
                  <br />
                  được áp dụng trên chính khoá học - và bạn sẽ được nhìn thấy DATA đầy đủ!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
