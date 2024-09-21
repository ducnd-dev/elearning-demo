export const ColleagueClubMask = () => {
  const datas = [
    {
      id: 1,
      name: 'Trí Quốc Võ (Bảo hiểm Manulife)',
      title: 'Trưởng nhóm kinh doanh cao cấp Manulife, Chuyên gia đào tạo Zalo Marketing',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed-customized.php?v=MTI0MDU=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-1.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 992w,',
    },
    {
      id: 2,
      name: 'Anh Thanh',
      title: 'Founder Học viện Fulfill, Nguyên Giảng viên thỉnh giảng Digital Marketing Đại học Hoa Sen (2020-2023), cựu trưởng phòng marketing Hyundai An Phú, Vua Bia',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed.php?v=MTI1NDA=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-a-thanh-mkt.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 992w,',
    },
    {
      id: 3,
      name: 'Dương Trọng Nghĩa',
      title: '10 năm kinh nghiệm xây dựng hệ thống elearning với doanh số 2 triệu $',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed-customized.php?v=MTI0MjM=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-4.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 992w,',
    },
    {
      id: 4,
      name: 'Anh Huân',
      title: 'Sở hữu 4 nút vàng, 30 nút bạc Youtube. Người đứng sau sự thành công của các kênh youtube triệu subs tại VN',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed.php?v=MTI1Mzc=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-a-huan.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 992w,',
    },
    {
      id: 5,
      name: 'Anh Thảo & chị Hân',
      title: 'Kinh nghiệm 12+ năm luyện thi IELTS, đơn vị được đài HTV9 mời đào tạo IELTS cấp tốc',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed.php?v=MTI1Mzg=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-a-thao-ielts.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 992w,',
    },
    {
      id: 6,
      name: 'Andy Phạm',
      title: 'Founder DCA Center, quản lý điều hành các nhà hàng top đầu tại HN & HCM',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed-customized.php?v=MTI0MjE=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-5-up.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 992w,',
    },
    {
      id: 7,
      name: 'Anh Phương Kool DJ',
      title: 'Producer, Founder học viện âm nhạc EDM với hơn 17 năm kinh nghiệm',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed.php?v=MTI1Mzk=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-a-phuong-dj.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 992w,',
    },
    {
      id: 8,
      name: 'Mr. Tuấn Anh',
      title: 'Giảng viên khóa học Facebook Ads',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed-customized.php?v=MTI0MDY=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-3.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 992w,',
    },
    {
      id: 9,
      name: 'Anh Khoa',
      title: 'Chủ sở hữu chuỗi FnB lâu đời tại TPHCM, Founder Craft Việt - thương hiệu bia thủ công cao cấp',
      tag: 'ĐỒNG NGHIỆP PRO',
      video: 'https://video.monamedia.net/streamer/embed.php?v=MTI5NzM=&amp;autoplay=false',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-a-khoa.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 992w,',
    },
  ];

  const datas2 = [
    {
      id: 10,
      name: 'Anh Tuệ',
      title: 'Kỳ thủ cờ vây 5 đẳng với 3 lần vô địch toàn quốc, HLV cờ vây cho các tài năng trẻ U11 U16',
      tag: 'ĐỒNG NGHIỆP PRO',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-tue.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-tue.jpg 992w,',
    },
    {
      id: 11,
      name: 'Anh Bảo',
      title: 'Giảng viên ĐH KHTN TPHCM, CĐKT Cao Thắng, Founder Học viện khoa học máy tính Kmin',
      tag: 'ĐỒNG NGHIỆP PRO',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-a-bao.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-a-bao-up.jpg 992w,',
    },
    {
      id: 12,
      name: 'Vu Trung Anh Rim',
      title: 'Founder & CEO at BEYOURs',
      tag: 'ĐỒNG NGHIỆP PRO',
      avatar: 'https://khanhhung.academy/template/assets/images/home/avt-colleague-6.jpg',
      srcSet: 'https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 576w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 991w, https://khanhhung.academy/template/assets/hq-images/home/colleague-club-066.jpg 992w,',
    },
  ];
  return (
    <section className="sec-com colleague-club">
      <div className="colleague-club-mask"> </div>
      <div className="container">
        <div className="title">Đồng Nghiệp nói gì về khoá học của Hùng</div>
        <div className="list d-flex f-ctn">
          {datas.map((item, index) => (
            <div className="item col col-4" key={index}>
              <div className="wrap">
                <div className="info">
                  <div className="info-avt">
                    {' '}
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="info-txt">
                    <div className="info-name">{item.name}</div>
                    <div className="info-title">{item.title}</div>
                    <div className="tag-list">
                      {' '}
                      <span className="tag-list">
                        {' '}
                        <span className="tag-item tag-pro">
                          {' '}
                          <img className="icon" src="https://khanhhung.academy/template/assets/images/tag/tag-pro.svg" alt="" />
                          {item.tag}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  {/* <iframe className="inner" width="100%" height="100%" src={item.video} style={{ border: 0 }} sandbox="allow-scripts allow-same-origin allow-popups" title={`Colleague Club Video ${index}`}> </iframe> */}
                  <img className="inner opti-image" srcSet={item.srcSet} src={item.avatar} alt="" />
                </div>
              </div>
            </div>
          ))}
          {datas2.map((item, index) => (
            <div className="item img col col-4" key={index + 10}>
              <div className="wrap">
                <div className="info">
                  <div className="info-avt">
                    {' '}
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="info-txt">
                    <div className="info-name">{item.name}</div>
                    <div className="info-title">{item.title}</div>
                    <div className="tag-list">
                      {' '}
                      <span className="tag-list">
                        {' '}
                        <span className="tag-item tag-pro">
                          {' '}
                          <img className="icon" src="https://khanhhung.academy/template/assets/images/tag/tag-pro.svg" alt="" />
                          {item.tag}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <img className="inner opti-image" srcSet={item.srcSet} src={item.avatar} alt="" />
                </div>
              </div>
            </div>
          ))}
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
    </section>
  );
};
