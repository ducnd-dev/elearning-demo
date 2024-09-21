import React from 'react';

const ForgetPasswordPage = () => {
  return (
    <div className="container [&_p]:my-6">
      <h1 className="t-title-seven mx-auto my-5 text-center uppercase">Bổ sung mật khẩu</h1>
      <div className="prf-group grid grid-cols-12 gap-10">
        <div className="col-span-4 text-4xl font-semibold md:block">Bổ sung mật khẩu</div>
        <form className="col-span-8">
          <div>
            <label htmlFor="email" className="text-2xl">Mật khẩu mới</label>
            <input type="password" placeholder="Mật khẩu mới" className="w-full rounded-md border border-solid border-gray-300 p-5" />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="text-2xl">Xác nhận mật khẩu</label>
            <input type="password" placeholder="Xác nhận mật khẩu" className="w-full rounded-md border border-solid border-gray-300 p-5" />
          </div>
          <div></div>
          <div className="mt-4 text-right">
            <button type="submit" className="rounded-lg bg-purple-800 px-12 py-6 text-2xl uppercase text-white">đổi mật khẩu</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
