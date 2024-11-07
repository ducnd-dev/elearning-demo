'use server';
import request from '@/libs/request';
import { useSetting } from '@/stores/common-store';
import '@/styles/swiper.css';

const fetchEvents = async () => {
  try {
    const data = await request<API.Events>('/v1/events');
    return data.data || []
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    return null;
  }
}

export const DemoBanner = async () => {
  const datas = await fetchEvents();
  const { setting } = useSetting();
  
  return (
    <div className="header-top h-11">
      <div className="container-second">
        <div className="header-top-inner">
          <div className="haeder-top-news">
            <div className="swiper-slide-events swiper-wrapper">
              <p>
                {datas?.map((data, index) => (
                  <a href={data.link} key={index} target="_blank" rel="noreferrer" className="header-top-text w-full swiper-slide text-xl font-medium">
                    {data.title}
                  </a>
                ))}
              </p>
            </div>
          </div>
          <div className="header-top-contact">
            <div className="header-top-contact-wrap append-hotline-js loading-ani show-loading-js">
              <div className="btn-hotline btn-hotline-js btn-hotline-default-js">
                <span className="icon">
                  <img src="https://khanhhung.academy/template/assets/images/header/icon-hostline.png" alt="" />
                </span>
                <span className="fw-600 text-wrap">
                  <span className="txt">
                    <a href={`tel:${setting?.phone}`} target="_blank" rel="noreferrer"> Zalo hỗ trợ </a>
                  </span>
                  <span className="info">
                    <img src="https://khanhhung.academy/template/assets/images/header/icon-info.png" alt="" />
                  </span>
                </span>
                <div className="btn-hotline-info">
                  <div className="wrap">
                    Hotline sẽ được cung cấp riêng cho các đồng nghiệp và
                    <span className="txt-hl"> miễn phí, hỗ trợ 24/7</span>
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
