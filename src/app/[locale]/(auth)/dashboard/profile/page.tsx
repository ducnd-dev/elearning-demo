import React from 'react';

const ProfilePage = () => {
  return (
    <div className="container [&_p]:my-6">
      <h1 className="mx-auto my-5 text-center text-3xl font-semibold uppercase text-[#a32dff]">Profile</h1>
      <div className="p-5 shadow-lg">
        <span className="text-lg font-semibold">Thông tin cơ bản</span>
        <div className="grid grid-cols-12">
          <div className="col-span-full lg:col-span-3">
            <img src="https://khanhhung.academy/learn/assets/images/avatar.png" alt="avatar" className="rounded-full" />
          </div>
          <div className="col-span-full lg:col-span-9">
            <div className="flex items-center gap-3">
              <img src="https://khanhhung.academy/learn/assets/images/icon_fb.svg" alt="icon-study" className="size-12" />
              <div>
                <span className="text-yellow-300">chưa liên kết</span>
                <div>
                  <button className="rounded-md border border-purple-500 px-5 py-2">Liên kết ngay</button>
                </div>
              </div>
            </div>
            <div className="mt-5 py-4">
              <div>
                <label htmlFor="email" className="text-xs ">Họ</label>
                <input type="text" placeholder="Mật khẩu mới" className="w-full rounded-md border px-5 py-3" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs ">Tên</label>
                <input type="text" placeholder="Mật khẩu mới" className="w-full rounded-md border px-5 py-3" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs ">Giới tính</label>
                <input type="text" placeholder="Mật khẩu mới" className="w-full rounded-md border px-5 py-3" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs ">Đang sống tại</label>
                <input type="text" placeholder="Mật khẩu mới" className="w-full rounded-md border px-5 py-3" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs ">Email</label>
                <input type="text" placeholder="Mật khẩu mới" className="w-full rounded-md border px-5 py-3" disabled />
              </div>
              <div>
                <label htmlFor="email" className="text-xs ">Số điện thoại</label>
                <input type="text" placeholder="Mật khẩu mới" className="w-full rounded-md border px-5 py-3" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs ">Lĩnh vực chuyên môn</label>
                <input type="text" placeholder="Mật khẩu mới" className="w-full rounded-md border px-5 py-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
