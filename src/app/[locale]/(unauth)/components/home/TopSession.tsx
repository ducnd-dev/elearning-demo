import React from 'react';

export const TopSession = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-10">
      <div className="col-span-6">
        <span className="relative z-10 flex h-16 min-h-[2.4rem] w-[234px] items-center justify-center overflow-hidden rounded-lg  border-none bg-[#f41e92] px-4 py-2 text-3xl font-semibold uppercase text-white">
          220 + videos
        </span>
        <div className="mt-4 text-xl text-white">
          <span className="font-semibold">
            {' '}
            Kinh doanh Elearning
            {' '}
            <br />
            BÁN TỰ ĐỘNG, DẠY TỰ ĐỘNG
          </span>
          <br />

          Biến kiến thức của bạn thành một Business: Quy mô tinh gọn, doanh số hấp dẫn, phát triển lâu dài
          <br />
        </div>

        <div className="mt-5 rounded-lg ">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="relative col-span-4 flex items-end bg-white">
              <img src="https://khanhhung.academy/template/assets/images/home/decor.png" alt="Khanh Hung" className="absolute bottom-0 left-0 object-contain" width={256} height={220} />
              <img src="https://khanhhung.academy/template/assets/images/home/member.png" alt="Khanh Hung" className="absolute bottom-0 left-0 object-contain" width={256} height={220} />
            </div>
            <div className="col-span-8 bg-white p-6 pb-12">
              <p className="my-4 text-lg">
                Hùng không phải là giảng viên, Hùng sẽ không bao giờ là
                giảng viên.
              </p>
              <p className="text-xl font-bold uppercase text-[#f41e92]">
                Hùng là người đứng
                sau sự thành công của những giảng viên.
              </p>
              <p>
                <span className="text-lg font-semibold underline">Hùng sẽ hướng dẫn cho bạn bán khóa học của bạn như </span>
                bán một sản phẩm điện tử, với tư duy sản phẩm, tư duy bán hàng, marketing logic và các công cụ thông minh để các bạn thực hiện được điều đó
              </p>
              <p className="my-4 text-lg">

                Những gì Hùng làm với
                {' '}
                <img src="https://khanhhung.academy/template/assets/images/home/academy.svg" alt="Khanh Hung" className="inline" width={75} height={19} />
                <br />

                <span className="text-lg font-semibold underline">để có được những con số bên dưới, Hùng toàn bộ đều truyền cho các bạn hết trong khoá học.</span>
              </p>
              <p className="mt-4">
                <span className="text-lg font-semibold">Từ Khánh Hùng - </span>
                {' '}
                CEO và Founder của
              </p>
              <p>
                <img src="https://khanhhung.academy/template/assets/images/home/logo-media.png" alt="Khanh Hung" className="inline object-contain" width={168} height={19} />
                <img src="https://khanhhung.academy/template/assets/images/home/logo-software.png" alt="Khanh Hung" className="inline object-contain" />
              </p>
              <p className="mt-4">
                <img src="https://khanhhung.academy/template/assets/images/home/logo-host.png" alt="Khanh Hung" className="inline object-contain" width={168} height={19} />
              </p>
            </div>
            <div></div>
            <div className="col-span-full overflow-hidden rounded-b-lg bg-[url('https://khanhhung.academy/template/assets/images/home/web-statistics-bg.png')] bg-cover bg-center bg-no-repeat p-5">
              <div className=" text-white">
                <div className="mb-[ text-center text-[2.4rem] font-semibold uppercase">
                  Thống kê doanh số
                  <div className="text-base normal-case">
                    Hùng phải bán được khóa học bán khóa học
                    thì mới hướng dẫn bạn bán khóa học được chứ ^^
                  </div>
                </div>
                <div className="container grid grid-cols-3 gap-4">
                  <div className="item rounded-md bg-white bg-opacity-10 p-[10px]">
                    <div className="wrap text-center">
                      <div className="lb text-lg font-semibold">Tổng doanh thu </div>
                      <div className="num">
                        <div className="text-lg font-semibold">3.730.900.000</div>
                      </div>
                    </div>
                  </div>
                  <div className="item rounded-md bg-white bg-opacity-10 p-[10px]">
                    <div className="wrap text-center">
                      <div className="lb">Tổng Đồng nghiệp PRO </div>
                      <div className="num">
                        <div className="text-lg font-semibold">352</div>
                      </div>
                    </div>
                  </div>
                  <div className="item rounded-md bg-white bg-opacity-10 p-[10px]">
                    <div className="wrap text-center">
                      <div className="lb">Khoá học đã launching:</div>
                      <div className="num">
                        <div className="text-lg font-semibold">5 tháng 15 ngày </div>
                      </div>
                      <div className="note text-xs italic">(Tính từ: 04/04/2024)</div>
                    </div>
                  </div>
                </div>
                <div className="live-note mt-3">
                  <div className="live-txt text-xs italic">
                    Hùng không phải giảng viên hay người nổi tiếng những vẫn bán được nhờ
                    phương pháp đúng. Hùng sẽ chỉ cho bạn những phương pháp đó trong chính khoá học này.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full mt-5">
              <video className="w-full rounded-md" controls>
                <source src="https://video.monamedia.net/list/themona/smil:1719555654-f91e8203730bb6fd35eb509aef4dd4dbfc39a4e0-667e564669fe3-kha_tong_hop_feedback_ultimate.smil/playlist.m3u8" type="video/mp4" />
                <track kind="captions" srcLang="en" src="/path/to/captions.vtt" label="English" default />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 text-center ">
        <p className="text-2xl font-semibold text-white">
          <span className="">KHÓA HỌC KINH DOANH KHÓA HỌC</span>
          {' '}
          <br />
          hoàn toàn miễn phí

        </p>
        <p className="text-white underline">
          Bán hàng tự động - dạy học tự động - thu nhập thụ động
        </p>
        <div className="mt-4 overflow-hidden rounded-lg bg-white text-lg font-bold">
          <div className="flex items-start gap-3 bg-[#12b76a] p-[10px] text-left text-white">
            <img src="https://khanhhung.academy//template/assets/images/home/banner-form-image.png" alt="Khanh Hung" className="size-16" />
            Không nhập form rườm rà, không nhập thẻ,
            <br />
            không giới hạn thời gian - Đăng nhập là học ngay!
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3">
              <div className="text-center ">
                <img src="https://khanhhung.academy//template/assets/images/home/form-icon-01.svg" alt="Khanh Hung 1" width={20} height={20} className="mx-auto" />
                KHÔNG CẦN
                <br />
                NHẬP THẺ
              </div>
              <div className="text-center ">
                <img src="https://khanhhung.academy//template/assets/images/home/form-icon-02.svg" alt="form-icon-02" width={20} height={20} className="mx-auto"></img>
                KHÔNG GIỚI HẠN
                <br />
                THỜI GIAN
              </div>
              <div className="text-center ">
                <img src="https://khanhhung.academy//template/assets/images/home/form-icon-03.svg" alt="Khanh Hung 3" width={20} height={20} className="mx-auto" />
                KHÔNG SPAM DƯỚI
                <br />
                MỌI HÌNH THỨC
              </div>
            </div>
            <div className="my-4">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-100 p-2 text-center font-semibold">
                <img src="https://khanhhung.academy//template/assets/images/home/icon-gg.png" alt="" className="size-5" />
                Đăng nhập với Google
              </button>
            </div>
            <div className="rounded-md bg-[#f41e92] p-1">
              <div className="flex">
                <div className="w-1/2 bg-white p-4 text-center text-[#f41e92]">Đăng ký ngay</div>
                <div className="w-1/2 p-4 text-center text-white">Đăng nhập</div>
              </div>
              <div className="bg-white p-2 font-semibold">
                <div className="flex">
                  <div>
                    Không có thêm bước nào cả
                  </div>
                  <span className="mx-1 font-semibold text-[#7c0fd1] underline">
                    Đăng ký là xem được ngay!
                  </span>
                </div>
                <div className="my-4">
                  <input type="text" className="w-full rounded-lg border p-3" placeholder="Email của bạn" />
                  <div className="mt-4 flex">
                    <input type="password" className="mr-2 w-1/2 rounded-lg border p-3" placeholder="Mật khẩu của bạn" />
                    <input type="password" className="ml-2 w-1/2 rounded-lg border p-3" placeholder="Xác nhận mật khẩu" />
                  </div>
                </div>
                <div className="flex items-center justify-center rounded-lg" style={{ background: 'linear-gradient(80deg, #a32dff -.15%, #f41e92 87.57%)' }}>
                  <div className="my-2">
                    <img src="https://khanhhung.academy//template/assets/images/home/icon-btn.png" alt="" />
                  </div>
                  <div className="ml-3 text-white">
                    <div className="text-xl font-extrabold uppercase">Đăng ký học thử ngay</div>
                    <div className="text-base font-normal">Hoàn toàn MIỄN PHÍ | Hiệu quả cao</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-4 font-normal text-black">
              <div className="my-4 border-b pb-4">
                Bạn đã đến đây sớm hơn rất nhiều giảng viên khác.
                <span>
                  <span>
                    Khóa học của Hùng đã launching được
                    <span className="mx-1 font-bold text-[#e18308]">
                      5 tháng 18 ngày
                    </span>
                  </span>
                </span>
                chứng tỏ chúng ta có duyên
              </div>
              <p className="text-center">
                Khoá học kinh doanh thực tiễn nhất, khi mà mội kiến thức đều
                <br />
                được áp dụng trên chính khoá học - và bạn sẽ được nhìn thấy DATA đầy đủ!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
