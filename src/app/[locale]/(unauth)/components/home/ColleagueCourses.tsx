import React from 'react';

export const ColleagueCourses = () => {
  return (
    <div className="mb-10 mb-12 mt-20 w-full">
      <div className="my-10">
        <div className="mx-auto flex size-fit items-center justify-between rounded-md bg-pink-200 p-3">
          <span className="mr-2 text-4xl font-bold text-[#f41e92]">Xem các Đồng Nghiệp đã ra khoá</span>
          <img src="https://khanhhung.academy/template/assets/images/home/question.png" alt="" className="size-5" />
        </div>
        <p className="mx-auto text-center text-4xl font-bold text-white">của Hùng thành công như thế nào</p>
        {[...Array(2)].map((_, index) => (
          <div className="my-10 rounded-xl bg-[#1a1a1a] p-8 text-white" key={index}>
            <div className="flex">
              <div className="w-1/2">
                <div className="mr-24">
                  <div className="text-4xl font-bold">Từ Điển Tình Cảm Academy - Đạt 410.000.000Đ doanh số trong ngày đầu mở bán</div>
                  <div>
                    <div className="my-6 flex items-center">
                      <div className="">
                        <img src="https://khanhhung.academy/template/assets/images/home/profile-ads-tuvantinhcam.png" className="mr-2 size-16 rounded-full" alt="" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">Từ Điển Tình cảm Academy</p>
                        <div className="mt-3 flex justify-between">
                          <div className="flex rounded-md border p-1" style={{ background: 'radial-gradient(50% 50% at 50% 50%, #2072c9 0, #103863 100%)', border: '.1rem solid #c09148' }}>
                            <img src="https://khanhhung.academy/template/assets/images/tag/tag-pro.svg" className="mr-2 size-5" alt="" />
                            PRO
                          </div>
                          <div className="ml-3 flex rounded-md border p-1" style={{ background: 'linear-gradient(270deg, #f41e92 -10.64%, #710ebe 100%)', border: '.1rem solid #f41e92' }}>
                            <img src="https://khanhhung.academy/template/assets/images/tag/tag-cm-gift.svg" className="mr-2 size-5" alt="" />
                            Đã đăng ký E-Learning Bundle
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div>
                        <p className="py-2 text-lg">
                          <span className="underline">
                            Nhiều năm kinh nghiệm trong lĩnh vực đào tạo, tư vấn về tình yêu, hôn nhân và khoa học Thiền.
                          </span>
                        </p>
                        <p className="py-2 text-lg">
                          <span className="underline">
                            Tác giả sách "Giải Mã Hôn Nhân Hạnh Phúc" và sách "Hẹn Hò - Inside Out".
                          </span>
                        </p>
                        <p className="py-2 text-lg">
                          <span className="underline">
                            Hơn 60 ngàn học viên trong và ngoài nước. Chủ sở hữu kênh youtube 400k sub, Fanpage 900k followers, group cộng đồng: 200k thành viên.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 text-xl font-medium">TỪ ĐIỂN TÌNH CẢM, KHÓA HỌC GIẢI QUYẾT MỌI VẤN ĐỀ TRONG CUỘC SỐNG TÌNH CẢM</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-b py-2">
                      <div className="text-lg font-medium">Ngày ra mắt:</div>
                      <div className="text-4xl font-bold text-[#eebe47]">
                        24/8/2024
                      </div>
                    </div>
                    <div className="border-b py-2">
                      <div className="text-lg font-medium">Số lượt bán:</div>
                      <div className="text-4xl font-bold text-[#eebe47]">331</div>
                    </div>
                    <div className="py-2">
                      <div className="text-lg font-medium">Doanh số ngày đầu tiên:</div>
                      <div className="text-4xl font-bold text-[#eebe47]">~ 410.000.000đ</div>
                    </div>
                    <div className="py-2">
                      <div className="text-lg font-medium">Doanh số hiện tại:</div>
                      <div className="text-4xl font-bold text-[#eebe47]">1.746.430.000đ</div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="mt-4 flex text-base">
                      Xem khoá học của TỪ ĐIỂN TÌNH CẢM tại đây:
                      <img src="https://khanhhung.academy/template/assets/images/home/address.png" className="mx-1 mt-1 size-4" alt="" />
                    </span>
                    <a href="https://tudientinhcam.com/learn/auth/?ref=TDTC-019" className="mb-1 text-lg font-bold text-[#edae41] underline" target="_blank" rel="nofollow external noopener noreferrer" data-wpel-link="external">TỪ ĐIỂN TÌNH CẢM Academy</a>
                  </div>
                </div>
              </div>
              <div className="relative w-1/2 pt-16">
                <div className="relative">
                  <div className="absolute top-0 w-1/2">
                    <div className="absolute -right-40 -top-16 w-60 rounded-xl bg-[#f41e92] px-6 py-3 text-center text-2xl font-semibold">
                      130.000.000Đ sau
                      <br />
                      {' '}
                      2h PRE SALE
                    </div>
                    <img src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-header-01.jpg" className="rounded-lg" alt="" loading="lazy" />
                  </div>
                  <div className="absolute right-0 top-24 w-2/3">
                    <div className="absolute -left-48 top-48 w-72 rounded-xl bg-[#2686ec] px-6 py-3 text-center text-2xl font-semibold">
                      410.000.000Đ tròn
                      <br />
                      {' '}
                      1 ngày mở bán
                    </div>
                    <img src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-header-02.jpg" className="rounded-lg" alt="" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto my-4 max-w-max text-center text-2xl font-semibold text-[#f5851e]">
              Xem cách Hùng đã mentor cho Từ Điển Tình Cảm Academy như thế nào
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 773 12" fill="none">
                <path d="M2 9.99829C160.301 6.80866 535.722 0.786215 771 2.21344" stroke="#F5851E" stroke-width="3" stroke-linecap="round"></path>
              </svg>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-lg" data-src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-1.jpg" data-sub-html="Anh em lập trình ở Mona thức xuyên đêm code cho kịp ngày launching" data-lg-id="bb60ece8-f7f0-44e6-b1b2-c697e6f41e7f">
                <div className="h-96 rounded-t-xl">
                  <img src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-1.jpg" alt="" className="h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-b-xl bg-[#3a3a3a] p-4 font-semibold text-white">Anh em lập trình ở MONA thức xuyên đêm code cho kịp ngày launching</div>
              </div>
              <div className="rounded-lg" data-src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-2.jpg" data-sub-html="Anh em lập trình ở Mona thức xuyên đêm code cho kịp ngày launching" data-lg-id="bb60ece8-f7f0-44e6-b1b2-c697e6f41e7f">
                <div className="h-96 rounded-t-xl">
                  <img src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-2.jpg" alt="" className="h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-b-xl bg-[#3a3a3a] p-4 font-semibold text-white">Hướng dẫn đội ngũ Từ Điển Tình Cảm mua và setup thiết bị quay</div>
              </div>
              <div className="rounded-lg" data-src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-3.jpg" data-sub-html="Anh em lập trình ở Mona thức xuyên đêm code cho kịp ngày launching" data-lg-id="bb60ece8-f7f0-44e6-b1b2-c697e6f41e7f">
                <div className="h-96 rounded-t-xl">
                  <img src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-3.jpg" alt="" className="h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-b-xl bg-[#3a3a3a] p-4 font-semibold text-white">Hướng dẫn setup đèn đớm cho góc quay đẹp nhất</div>
              </div>
              <div className="rounded-lg" data-src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-4.jpg" data-sub-html="Anh em lập trình ở Mona thức xuyên đêm code cho kịp ngày launching" data-lg-id="bb60ece8-f7f0-44e6-b1b2-c697e6f41e7f">
                <div className="h-96 rounded-t-xl">
                  <img src="https://khanhhung.academy/template/assets/images/home/colleague-success-tu-van-tinh-cam-4.jpg" alt="" className="h-full object-cover" loading="lazy" />
                </div>
                <div className="rounded-b-xl bg-[#3a3a3a] p-4 font-semibold text-white">Cùng nhau lên kế hoạch PRE SALE sao cho hiệu quả nhất</div>
              </div>
            </div>
            <div className="mx-auto my-8 flex max-w-max items-center justify-center rounded-lg px-8" style={{ background: 'linear-gradient(80deg, #a32dff -.15%, #f41e92 87.57%)' }}>
              <span className="my-1 size-12">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 52" fill="none">
                  <path d="M26.5 49.8672C39.6815 49.8672 50.3672 39.1815 50.3672 26C50.3672 12.8185 39.6815 2.13281 26.5 2.13281C13.3185 2.13281 2.63281 12.8185 2.63281 26C2.63281 39.1815 13.3185 49.8672 26.5 49.8672Z" fill="#E0CD27"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7344 2.23779C40.8679 3.36453 50.3672 13.5722 50.3672 26.0001C50.3672 38.428 40.8679 48.6356 28.7344 49.7623C16.6008 48.6356 7.10156 38.428 7.10156 26.0001C7.10156 13.5722 16.6008 3.36453 28.7344 2.23779Z" fill="#FEEA3B"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1856 26.8162L22.0758 36.6919C21.7682 36.893 21.4016 36.9082 21.0784 36.7334C20.7553 36.5585 20.5674 36.2433 20.5674 35.8759V16.1243C20.5674 15.7569 20.7552 15.4417 21.0784 15.2668C21.4016 15.0919 21.7683 15.1072 22.0758 15.3083L37.1856 25.184C37.4695 25.3696 37.6272 25.661 37.6272 26.0002C37.6272 26.3392 37.4695 26.6307 37.1856 26.8162Z" fill="#1A1A1A"></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1856 26.8161L22.6115 36.3416C22.537 36.2031 22.4971 36.0449 22.4971 35.8756V16.1242C22.4971 15.9549 22.537 15.7967 22.6115 15.6582L37.1856 25.1838C37.4695 25.3693 37.6272 25.6608 37.6272 25.9999C37.6272 26.339 37.4695 26.6305 37.1856 26.8161Z" fill="#616161"></path>
                </svg>
              </span>
              <span className="py-2 text-center">
                <div className="text-xl font-bold">Click để xem chi tiết nhật ký</div>
                <div className="text-lg">Hành trình đến với thành công của Đồng Nghiệp</div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
