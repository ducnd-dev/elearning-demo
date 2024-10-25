// import { Swiper, SwiperSlide } from 'swiper/react';

export const DemoBanner = () => {
  // const exampleData = [
  //   { link: '/', title: 'Livestream Q&amp;A hỏi đáp, tám chuyện vui vẻ  Cùng anh chị Đồng nghiệp 20:00-23:00 05/07/2024' },
  //   { link: '/', title: '27/05/2024 – 22:00 Meeting cùng ae đồng nghiệp! Hỏi nhanh – Đáp nhanh!' },
  //   { link: '/', title: '17/05/2024 – 16:00 Livestream Giao lưu Hỏi nhanh – đáp gọn Hùng &amp; Ae Đồng nghiệp tại HCC – Hùng Colleague Club' },
  //   { link: '/', title: '06/05/2024 – 9:00 AM Livestream FAQs Hùng và ae đồng nghiệp tại HCC – Hùng Colleague Club' },
  //   { link: '/', title: '22/04/2024 – 9:00 AM Livestream FAQs đầu tiên ở Đồng nghiệp của Hùng – Hùng Colleague Club' },
  //   { link: 'https://khanhhung.academy/learn/study/report-sang-ngay-4th-m-c-10-giao-d-ch-50tr-doanh-s/', title: 'Report dữ liệu sáng ngày mở bán thứ 4 (7/4) – Cán mốc 10 giao dịch' },
  // ];

  return (
    <div className="header-top">
      <div className="container-second">
        <div className="header-top-inner">
          <div className="haeder-top-news">
            {/* <Swiper
              spaceBetween={50}
              slidesPerView={3}
            >
              {exampleData.map((data, index) => (
                <SwiperSlide key={index}>
                  <a href={data.link ? data.link : ''} className="header-top-text">{data.title ? data.title : ''}</a>
                </SwiperSlide>
              ))}
            </Swiper> */}
            <div className="header-top-text">
              <a href="/">Livestream Q&amp;A hỏi đáp, tám chuyện vui vẻ  Cùng anh chị Đồng nghiệp 20:00-23:00 05/07/2024</a>
            </div>
          </div>
          <div className="header-top-contact">
            <div className="header-top-contact-wrap append-hotline-js loading-ani show-loading-js">
              <div className="btn-hotline btn-hotline-js btn-hotline-default-js">
                <span className="icon">
                  <img src="https://khanhhung.academy/template/assets/images/header/icon-hostline.png" alt="" />
                </span>
                <span className="fw-600 text-wrap">
                  <span className="txt">Hotline kỹ thuật</span>
                  <span className="info">
                    <img src="https://khanhhung.academy/template/assets/images/header/icon-info.png" alt="" />
                  </span>
                </span>
                <div className="btn-hotline-info">
                  <div className="wrap">
                    Hotline sẽ được cung cấp riêng cho các đồng nghiệp và
                    <span className="txt-hl">
                      {' '}
                      miễn
                      phí, hỗ trợ 24/7
                    </span>
                  </div>
                </div>
              </div>
              <div className="hotline-render hotline-render-js header-loading-ani"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
