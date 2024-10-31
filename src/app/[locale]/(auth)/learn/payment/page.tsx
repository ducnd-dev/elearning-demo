'use server';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';
import '@/styles/payment.css';

import { unstable_setRequestLocale } from 'next-intl/server';
import request from '@/libs/request';
import BtnCheckOrder from './components/BtnCheckOrder';
import CountDown from './components/CountDown';
import { revalidatePath } from 'next/cache';

const fetchData = async () => {
  try {
    const data = await request<API.GetSettingResponse>('/v1/setting/1');
    return data.data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    return null; // Ensure a value is always returned
  }
};

export default async function LearnPaymentPage(props: { params: { locale: string }, searchParams: { order_code: string } }) {
  unstable_setRequestLocale(props.params.locale);
  revalidatePath('/[locale]/(auth)/learn/payment');
  const data = await fetchData();
  const order_code = props.searchParams.order_code;
  const price =  data?.sale_price ? data?.sale_price : data?.price;
  return (
    <section className='sec-prmk mt-0'>
      <div className='prmk'>
        <div className="upp-confetti-top is-inview"><canvas className="index-module_canvas__H2w7d" width="1920" height="959" style={{ width: '1920px', height: '959px' }}></canvas></div>
        <div className="container">
          <div className="prmk-wrapper">
            <div className="gif-box aos-init aos-animate" data-aos="true">
              <div className="gif-box-inner"><div className="gif-box-top">
                <img src="https://khanhhung.academy/learn/assets/images/gif-box-3.png" alt="" />
              </div>
                <div className="gif-box-pad"><img src="https://khanhhung.academy/learn/assets/images/padlock.png" alt="" /></div>
                <div className="gif-box-hq"><span></span><span></span><span></span></div>
                <div className="gif-box-bot one"><img src="https://khanhhung.academy/learn/assets/images/gif-box-1.png" alt="" />
                </div>
                <div className="gif-box-bot two"><img src="https://khanhhung.academy/learn/assets/images/gif-box-2.png" alt="" /></div>
              </div>
            </div>
            <div className="prmk-ud">
              <div className="prmk-ud-cgr">
                <img src="https://khanhhung.academy/learn/assets/images/logo-seven.png" alt="" />
                <p className="txt">CHÚC MỪNG BẠN</p>
              </div>
              <div className="upp-ud-box">
                <p className="title">Giao dịch của bạn đã được khoá lại&nbsp;<br />để mua với mức giá ưu đãi chỉ</p>
                <p className="t-yls --none-shadown mb-80" data-txt="21.000.000đ">
                  <span className="t-yls-top">
                    <span className="word">
                      {price ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }).format(Math.round(price)) : '0'}
                    </span>
                    <span className="white-space">
                    </span>
                  </span>
                </p>
              </div>
            </div>
            <div className="prmk-txt-one --t-center">
              <p className="title">CHỈ CÒN <span className="number-ani">1</span> BƯỚC CUỐI CÙNG</p>
              <p className="des">Bạn sẽ trở thành một đồng nghiệp của Hùng - một giảng viên e-learning<br /> sở hữu một nguồn thu nhập thụ động đúng nghĩa như những <span className="fw-6">CHUYÊN GIA</span></p>
            </div>
            <div className="prmk-progress">
              <div className="prmk-progress-inner">
                <div className="prmk-progress-line">
                  <div className="prmk-progress-bubble" style={{ backgroundImage: 'url("/learn/assets/images/prmk-progress-bubble.png")' }}></div>
                </div>
              </div>
              <div className="prmk-progress-gif"><img src="https://khanhhung.academy/learn/assets/images/box-gif.png" alt="" /></div>
            </div>
            <div className="re-arr">
              <img src="https://khanhhung.academy/learn/assets/images/ar-yl.svg" alt="" />
              <img src="https://khanhhung.academy/learn/assets/images/ar-yl.svg" alt="" />
              <img src="https://khanhhung.academy/learn/assets/images/ar-yl.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="pay-system">
        <div className="container">
          <div className="pay-system-wrapper">
            <div className="pay-system-side row">
              <div className="pay-system-left col col-6">
                <div className="pay-system-heading">
                  <h3 className="t-title-second">Hệ thống chuyển khoản tự báo có</h3>
                  <p className="des">
                    <img src="https://khanhhung.academy/learn/assets/images/ic-bongden.svg" alt="" />
                    <span className="txt">
                      Mở app ngân hàng bất kỳ để
                      <span className="c-pri fw-6 mx-1">quét mã QR</span>
                      hoặc
                      <span className="c-pri fw-6 mx-1">chuyển khoản</span>
                      theo chính xác nội dung bên dưới
                    </span>
                  </p>
                </div>
                <div className="pay-system-table">
                  <table>
                    <tbody>
                      <tr>
                        <td>Ngân hàng:</td>
                        <td>
                          {data?.bank_name}
                        </td>
                      </tr>
                      <tr>
                        <td>Số tài khoản:</td>
                        <td>
                          <div className="tooltip-ctn undefined">
                            {data?.bank_account}
                            <img src="https://khanhhung.academy/learn/assets/images/ic-copy-pri.svg" alt="" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Tên tài khoản:</td>
                        <td>
                          {data?.bank_account_name}
                        </td>
                      </tr>
                      <tr>
                        <td>Số tiền:</td>
                        <td><div className="tooltip-ctn undefined">{price ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }).format(Math.round(price)) : '0'} <img src="https://khanhhung.academy/learn/assets/images/ic-copy-pri.svg" alt="" /></div></td>
                      </tr>
                      <tr>
                        <td>Nội dung giao dịch:</td>
                        <td><div className="tooltip-ctn undefined">{order_code} <img src="https://khanhhung.academy/learn/assets/images/ic-copy-pri.svg" alt="" /></div></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="pay-system-war">
                  *Đây là tính năng chuyển khoản tự động báo có của website
                  <span className="hl mx-1">HOÀN TOÀN TỰ ĐỘNG</span>
                  <br /> Bạn hãy chuyển
                  <span className="hl mx-1">ĐÚNG SỐ TIỀN</span>
                  và <span className="hl mx-1">ĐÚNG NỘI DUNG CHUYỂN KHOẢN</span><br />
                  <span className="hl mx-1">Sau khi chuyển tiền xong hệ thống sẽ tự động chuyển hướng</span>
                </div>
                <BtnCheckOrder order_code={order_code} />
              </div>
              <div className="pay-system-right col col-6">
                <div className="pay-system-qr">
                  <div className="pay-system-qr-content">
                    <p className="txt --t-center c-five fw-6">HOẶC Scan Mã QR này<br />để chuyển khoản chính xác</p>
                    <p className="txt --t-center">Trong 5 phút, bạn sẽ là<br />
                      <span className="fw-6">học viên thứ 364</span>
                    </p>
                    <CountDown />
                  </div>
                  <div className="pay-system-qr-code">
                    <img
                      src={`https://qr.sepay.vn/img?bank=${data?.bank_name}&acc=${data?.bank_account}&template=compact&amount=${price}&des=${order_code}`}
                      className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}