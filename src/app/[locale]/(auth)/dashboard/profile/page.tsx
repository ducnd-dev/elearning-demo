// import { InboxOutlined } from '@ant-design/icons';
// import { Upload } from 'antd';
import React from 'react';

// const { Dragger } = Upload;

const ProfilePage = () => {
  return (
    <div className="container [&_p]:my-6">
      <h1 className="t-title-seven mx-auto my-5 text-center uppercase">Profile</h1>
      <div className="prf-group">
        <div className="grid grid-cols-12">
          <div className="col-span-full pt-6 lg:col-span-3">
            <span className="text-3xl font-semibold">Thông tin cơ bản</span>
            {/* <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
              </p>
            </Dragger> */}
          </div>
          <div className="col-span-full lg:col-span-9">
            <div className="prf-social-act flex items-center gap-3">
              <img src="https://khanhhung.academy/learn/assets/images/icon_fb.svg" alt="icon-study" className="size-24" />
              <div className="ml-4">
                <div className="note">
                  <img src="https://khanhhung.academy/learn/assets/images/icon_note.svg" className="w-8" alt="" />
                  <span>Chưa liên kết</span>
                </div>
                <div className="btn --third h-16">Liên kết ngay</div>
              </div>
            </div>
            <div className="mt-5 py-4">
              <form>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fristName" className="text-2xl">Họ</label>
                    <input id="fristName" name="fristName" type="text" placeholder="Nhập họ" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-2xl">Tên</label>
                    <input id="lastName" name="lastName" type="text" placeholder="Nhập tên" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="gender" className="text-2xl">Giới tính</label>
                    <input type="text" id="gender" name="gender" placeholder="Nhập giới tính" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="brithday" className="text-2xl">Ngày sinh</label>
                    <input id="brithday" name="brithday" type="text" placeholder="Nhập năm sinh" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="address" className="text-2xl">Đang sống tại</label>
                    <input id="address" name="address" type="text" placeholder="Nhập nơi đang sống" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="text-2xl">Email</label>
                    <input id="email" name="email" type="email" placeholder="Mật email" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" disabled />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-2xl">Số điện thoại</label>
                    <input id="phone" name="phone" type="text" placeholder="Nhập số điện thoại" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expertise" className="text-2xl">Lĩnh vực chuyên môn</label>
                    <input id="expertise" name="expertise" type="text" placeholder="Nhập lĩnh vực chuyên môn" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="numOfExp" className="text-2xl">Số năm kinh nghiệm</label>
                    <input id="numOfExp" name="numOfExp" type="text" placeholder="Nhập số năm kinh nghiệm" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                </div>
                <div className="mt-3">
                  <label htmlFor="description" className="text-2xl">Mô tả về nghề nghiệp của bạn</label>
                  <textarea id="description" rows={4} name="description" placeholder="Nhập mô tả về nghề nghiệp của bạn" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                </div>
                <div className="mb-2 mt-6 text-3xl font-bold">Thông tin ngân hàng</div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="accountName" className="text-2xl">Chủ tài khoản</label>
                    <input id="accountName" name="accountName" type="text" placeholder="Nhập chủ tài khoản" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="bank" className="text-2xl">Ngân hàng</label>
                    <input id="bank" name="bank" type="text" placeholder="Nhập ngân hàng" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="accountNumber" className="text-2xl">Số tài khoản</label>
                    <input id="accountNumber" name="accountNumber" type="text" placeholder="Nhập số tài khoản" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="rounded-xl bg-purple-700 px-10 py-6 text-2xl text-white">
                    Lưu lại
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="prf-group">
        <div className="grid grid-cols-12">
          <div className="col-span-full pt-6 lg:col-span-3">
            <span className="text-3xl font-semibold">Thông tin về việc dạy học</span>
          </div>
          <div className="col-span-full lg:col-span-9">
            <div className="py-4">
              <form>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="experience" className="text-2xl">Kinh nghiệm dạy học online</label>
                    <input id="experience" name="experience" type="text" placeholder="Nhập kinh nghiệm dạy học online" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="numOfExpOnline" className="text-2xl">Số năm đã từng dạy học online</label>
                    <input id="numOfExpOnline" name="numOfExpOnline" type="text" placeholder="Nhập số năm đã từng dạy học online" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                </div>
                <div className="mt-3">
                  <label htmlFor="description" className="text-2xl">Mô tả về quá trình dạy học online của bạn (nếu có)</label>
                  <textarea id="description" name="description" placeholder="Nhập mô tả về quá trình dạy học online của bạn" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="domain" className="text-2xl">Tên miền về khóa học của bạn</label>
                    <input id="domain" name="domain" type="text" placeholder="Nhập tên miền về khóa học của bạn" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="course" className="text-2xl">Tên khoá học</label>
                    <input id="course" name="course" type="text" placeholder="Nhập tên khoá học" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                </div>
                <div className="mt-3">
                  <label htmlFor="description" className="text-2xl">Mô tả về khóa học của bạn</label>
                  <textarea id="description" rows={4} name="description" placeholder="Nhập mô tả về khóa học của bạn" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                </div>
                <div className="mt-3">
                  <label htmlFor="description" className="text-2xl">Bạn biết tới Hùng thông qua</label>
                  <textarea id="description" name="description" placeholder="Nhập bạn biết tới Hùng thông qua" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="rounded-xl bg-purple-700 px-10 py-6 text-2xl text-white">
                    Lưu lại
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="prf-group mb-5">
        <div className="grid grid-cols-12">
          <div className="col-span-full pt-6 lg:col-span-3">
            <span className="text-3xl font-semibold">Tầm nhìn với khóa học e-learning</span>
          </div>
          <div className="col-span-full lg:col-span-9">
            <div className="py-4">
              <form>
                <div>
                  <label htmlFor="description" className="text-2xl">Mô tả về tình hình kinh doanh hiện tại (doanh số, số lượng học viên, mức độ hài lòng)</label>
                  <textarea id="description" rows={4} name="description" placeholder="Nhập mô tả về tình hình kinh doanh hiện tại" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="idea" className="text-2xl">Ý tưởng cho khóa học elearning của bạn</label>
                    <input id="idea" name="idea" type="text" placeholder="Nhập ý tưởng cho khóa học elearning của bạn" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                  <div>
                    <label htmlFor="vision" className="text-2xl">Tầm nhìn của bạn với khóa học e-learning</label>
                    <input id="vision" name="vision" type="text" placeholder="Nhập tầm nhìn của bạn với khóa học e-learning" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                  </div>
                </div>
                <div className="mt-3">
                  <label htmlFor="description" className="text-2xl">Mô tả về doanh số kỳ vọng</label>
                  <textarea id="description" name="description" placeholder="Nhập mô tả về doanh số kỳ vọng" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                </div>
                <div className="mt-3">
                  <label htmlFor="description" className="text-2xl">Mô tả tầm nhìn của bản với chính khóa học của bạn</label>
                  <textarea id="description" name="description" placeholder="Nhập mô tả tầm nhìn của bản với chính khóa học của bạn" className="w-full rounded-lg border border-solid border-gray-300 p-5 focus:border-purple-700" />
                </div>
                <div className="mt-4 flex justify-end">
                  <div className="rounded-xl bg-purple-700 px-10 py-6 text-2xl text-white">
                    Lưu lại
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
