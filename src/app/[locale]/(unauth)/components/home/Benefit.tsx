export const Benefit = () => {
  const benefits = [
    {
      id: 1,
      name: 'FREE MENTOR',
      desc: 'Hùng sẽ Mentor bạn cách để xây dựng và bán được khoá học của mình thành công nhất dựa vào tất cả kinh nghiệm bán khoá học của Hùng',
      price: 'MIỄN PHÍ',
      priceThrough: '45.000.000đ',
      img: 'https://khanhhung.academy/template/assets/hq-images/home/benefit-item-01.jpg',
    },
    {
      id: 2,
      name: 'FREE SETUP',
      desc: 'Với những thiết bị với giá cả hợp lý và tiết kiệm nhất, Hùng và anh em sẽ tới trực tiếp hỗ trợ bạn, MIỄN PHÍ HOÀN TOÀN cho những đồng nghiệp tới sớm',
      price: 'MIỄN PHÍ',
      priceThrough: '25.000.000đ',
      img: 'https://khanhhung.academy/template/assets/hq-images/home/benefit-item-02.jpg',
    },
    {
      id: 3,
      name: 'Cơ hội tham gia nhóm Hùng\'s Colleague Club',
      desc: 'Đồng nghiệp của Hùng, chia sẻ tinh thần chia sẻ lợi ích, kiếm tiền cùng nhau. Và Hùng sẽ livestream định kỳ trên group để giải đáp cho từng case riêng của bạn',
      price: 'Hùng\'s Colleague Club',
      img: 'https://khanhhung.academy/template/assets/hq-images/home/benefit-item-03.jpg',
    },
  ];
  return (
    <section className="sec-com benefit-a titleJS" id="quyen_loi">
      <div className="benefit-a-mask"> </div>
      <div className="container">
        <div className="top-head">
          <div className="txt-img">
            <img src="https://khanhhung.academy/template/assets/images/home/txt-benefit.png" alt="" />
            <div className="arrow-benefit--left"><img src="https://khanhhung.academy/template/assets/images/home/decor-04.png" alt="" /></div>
            <div className="arrow-benefit--right"><img src="https://khanhhung.academy/template/assets/images/home/decor-05.png" alt="" /></div>
          </div>
          <div className="khanh-hung">
            <div className="txt">Từ</div>
            <div className="khanh-hung-img"><img src="https://khanhhung.academy/template/assets/images/home/academy.svg" alt="" /></div>
          </div>
          <div className="desc txt-center">Hùng luôn có ưu đãi cho những anh em đồng nghiệp đến sớm</div>
        </div>
        <div className="benefit-a-wrapper">
          <div className="list d-flex f-ctn">
            {benefits.map((benefit: any) => (
              <div className="item col col-4" key={`benefit-${benefit.id}`}>
                <div className="wrap txt-center">
                  <div className="head">
                    {' '}
                    <img className="img opti-image" src={benefit.img} alt="" />
                  </div>
                  <div className="body">
                    <div className="name">{benefit.name}</div>
                    <div className="desc">{benefit.desc}</div>
                    <div className="price">
                      <div className="price-border">
                        <span className="icon">
                          {' '}
                          <img className="icon" src="https://khanhhung.academy/template/assets/images/home/icon-coin-white.svg" alt="" />
                        </span>
                        <span className="txt">{benefit.price}</span>
                        {benefit.priceThrough && <span className="price-through">{benefit.priceThrough}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="than-videos">
          <div className="bg">
            {' '}
            <img className="opti-image" data-src="https://khanhhung.academy/template/assets/hq-images/home/than-video-bg.png" src="https://khanhhung.academy/template/assets/hq-images/home/than-video-bg.png" alt="" />
          </div>
          <div className="img">
            {' '}
            <img className="opti-image" data-src="https://khanhhung.academy/template/assets/hq-images/home/than-video.png" src="https://khanhhung.academy/template/assets/hq-images/home/than-video.png" alt="" />
          </div>
          <div className="content txt-center">
            <div className="title">
              <p className="sub">Được quyền truy cập </p>
              TOÀN BỘ
              <br />
              HƠN 400+ VIDEOS
            </div>
            <div className="desc">
              Toàn bộ nội dung khoá học luôn được update liên tục những kiến thức đã được Hùng áp dụng
              để bán cho chính mình và các đồng nghiệp khác
            </div>
          </div>
        </div>
      </div>

      <div className="personalized-arrow">
        <div className="arrow-wrap add-active-js">
          <div className="arrow-item">
            {' '}
            <img src="https://khanhhung.academy/template/assets/images/home/arrow-item-01-pri.png" alt="" />
          </div>
          <div className="arrow-item">
            {' '}
            <img src="https://khanhhung.academy/template/assets/images/home/arrow-item-02-pri.png" alt="" />
          </div>
        </div>
      </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </section>
  );
};
