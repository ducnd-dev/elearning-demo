import React from 'react';

const ForgetPasswordPage = () => {
  return (
    <div className="container [&_p]:my-6">
      <h1 className="mx-auto my-5 text-center text-3xl font-semibold uppercase text-[#a32dff]">Bổ sung mật khẩu</h1>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-4 hidden text-lg font-semibold md:block">Bổ sung mật khẩu</div>
        <form className="col-span-8 w-full">
          <div>
            <label htmlFor="email" className="text-xs ">Mật khẩu mới</label>
            <input type="password" placeholder="Mật khẩu mới" className="w-full rounded-md border px-5 py-3" />
          </div>
          <div className="mt-3 ">
            <label htmlFor="email" className="text-xs">Xác nhận mật khẩu</label>

            <input type="password" placeholder="Xác nhận mật khẩu" className="w-full rounded-md border px-5 py-3" />
          </div>
          <div></div>
          <div className="mt-4 text-right">
            <button type="submit" className="rounded-md bg-purple-400  px-4 py-2 uppercase text-white ">đổi mật khẩu</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
