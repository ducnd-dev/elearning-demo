import Link from 'next/link';
import React from 'react';

export const TopSession = () => {
  return (
    <div className="grid gap-10 lg:grid-cols-10">
      <div className="col-span-6">
        <span className="z-10flex relative h-16 min-h-[2.4rem] w-[234px] items-center justify-center overflow-hidden  rounded-lg border-none bg-[#f41e92] px-4 py-2 text-xl font-semibold text-white">
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
          <div className="grid grid-cols-1  lg:grid-cols-12">
            <div className="relative col-span-4 flex items-end bg-white">
              <img src="https://khanhhung.academy/template/assets/images/home/decor.png" alt="Khanh Hung" className="absolute bottom-0 left-0 object-contain" width={156} height={220} />
              <img src="https://khanhhung.academy/template/assets/images/home/member.png" alt="Khanh Hung" className="absolute bottom-0 left-0 object-contain" width={156} height={220} />
            </div>
            <div className="col-span-8 bg-white">
              <p className="my-4">
                Hùng không phải là giảng viên, Hùng sẽ không bao giờ là
                giảng viên.
              </p>
              <p className="font-semibold text-[#f41e92]">
                Hùng là người đứng
                sau sự thành công của những giảng viên.
              </p>
              <p>
                <span className="font-semibold underline">Hùng sẽ hướng dẫn cho bạn bán khóa học của bạn như </span>
                bán một sản phẩm điện tử, với tư duy sản phẩm, tư duy bán hàng, marketing logic và các công cụ thông minh để các bạn thực hiện được điều đó
              </p>
              <p className="my-4">

                Những gì Hùng làm với
                {' '}
                <img src="https://khanhhung.academy/template/assets/images/home/academy.svg" alt="Khanh Hung" className="inline" width={75} height={19} />
                <br />

                <span className="font-semibold underline">để có được những con số bên dưới, Hùng toàn bộ đều truyền cho các bạn hết trong khoá học.</span>
              </p>
              <p className="mt-4">
                <span className="font-semibold">Từ Khánh Hùng - </span>
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
        <p className="text-lg font-semibold text-white">
          <span className="">KHÓA HỌC KINH DOANH KHÓA HỌC</span>
          {' '}
          <br />
          hoàn toàn miễn phí

        </p>
        <p className="text-white underline">
          Bán hàng tự động - dạy học tự động - thu nhập thụ động
        </p>
        <div className="mt-4 overflow-hidden rounded-t-lg bg-white ">
          <div className="flex items-start gap-3 bg-[#12b76a] p-[10px] text-left text-white">
            <img src="https://khanhhung.academy//template/assets/images/home/banner-form-image.png" alt="Khanh Hung" className="size-6" />
            Không nhập form rườm rà, không nhập thẻ,
            <br />
            không giới hạn thời gian - Đăng nhập là học ngay!
          </div>
          <div className="p-4">
            <div className="grid grid-cols-3">
              <div className="text-center ">
                <img src="https://khanhhung.academy//template/assets/images/home/form-icon-01.svg" alt="Khanh Hung" width={20} height={20} className="mx-auto" />
                Không cần
                <br />
                NHẬP THẺ
              </div>
              <div className="text-center ">
                <img src="https://khanhhung.academy//template/assets/images/home/form-icon-01.svg" alt="Khanh Hung" width={20} height={20} className="mx-auto" />
                Không cần
                <br />
                NHẬP THẺ
              </div>
              <div className="text-center ">
                <img src="https://khanhhung.academy//template/assets/images/home/form-icon-01.svg" alt="Khanh Hung" width={20} height={20} className="mx-auto" />
                Không cần
                <br />
                NHẬP THẺ
              </div>
            </div>
            <div className="my-4">
              <Link href="/sign-in" className="block">
                <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-100 p-2 text-center font-semibold">
                  <img src="https://khanhhung.academy//template/assets/images/home/icon-gg.png" alt="" className="size-5" />
                  Đăng nhập với Google
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
