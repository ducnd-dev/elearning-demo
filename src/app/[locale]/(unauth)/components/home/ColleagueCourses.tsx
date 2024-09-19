import React from 'react';

export const ColleagueCourses = () => {
  return (
    <div className="w-full">
      <div className="my-4 ">
        <div className="mx-auto flex size-fit items-center justify-between rounded-md bg-pink-200 p-3">
          <span className="mr-2 text-[#f41e92]">Xem các Đồng Nghiệp đã ra khoá</span>
          <img src="https://khanhhung.academy/template/assets/images/home/question.png" alt="" className="size-5" />
        </div>
        <p className="mx-auto text-center font-semibold text-white">của Hùng thành công như thế nào</p>
      </div>
      <div className="rounded-lg bg-[#1a1a1a] p-4 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <p>Từ Điển Tình Cảm Academy - Đạt 410.000.000Đ doanh số trong ngày đầu mở bán</p>
            <div className="flex">
              <div className="flex items-center gap-3">
                <img src="https://khanhhung.academy/template/assets/images/home/profile-ads-tuvantinhcam.png" className="circle size-10" alt="" />
                <div>
                  <div>Từ điển tình cảm Academy</div>
                  <div className="flex gap-1 p-1">
                    <img src="https://khanhhung.academy/template/assets/images/tag/tag-pro.svg" alt="" className="h-5" />
                    <span className="flex rounded " style={{ background: 'linear-gradient(270deg,#f41e92 -10.64%,#710ebe 100%)' }}>
                      <img src="https://khanhhung.academy/template/assets/images/tag/tag-cm-gift.svg" alt="" className="h-5" />
                      Đã đăng ký E-Learning Bundle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
