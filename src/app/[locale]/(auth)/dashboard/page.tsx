import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Dashboard',
  });

  return {
    title: t('meta_title'),
  };
}

const Dashboard = () => (
  <div className="container [&_p]:my-6">
    <h1 className="mx-auto my-5 text-center text-3xl font-semibold uppercase text-[#a32dff]">Dashboard</h1>
    <div className="grid grid-cols-2 gap-5">
      <div className="flex gap-3 rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg,#7c0fd1 -14.06%,#f64ba8 117.19%)' }}>
        <div className="flex size-10 items-center justify-center rounded-full bg-white">
          <img src="https://khanhhung.academy/learn/assets/images/icon-study.svg" alt="icon-study" />
        </div>
        <div>
          <h2 className="font-semibold">Tiến độ học:</h2>
          <div>
            <span className="text-lg font-semibold">0</span>
            /205
          </div>
        </div>
      </div>
      <div className="flex gap-3 rounded-xl p-6 text-white" style={{ background: 'linear-gradient(180deg,#7c0fd1 -14.06%,#f64ba8 117.19%)' }}>
        <div className="flex size-10 items-center justify-center rounded-full bg-white">
          <img src="https://khanhhung.academy/learn/assets/images/icon-study.svg" alt="icon-study" />
        </div>
        <div>
          <h2 className="font-semibold">Tổng thời gian học</h2>
          <div>
            <span className="text-lg font-semibold">191 phút</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-5 p-5 shadow-lg">
      <div className="my-4 font-semibold">Đừng quên tham gia nhóm để nhận được quyền lợi</div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="flex flex-col items-center rounded-lg bg-purple-600 text-white">
          <div className="text-center">
            <span className="mt-3 font-semibold">Quyền lợi từ</span>
            <img src="https://khanhhung.academy/learn/assets/images/logo-KhA.svg" alt="" className="img-logo" />
          </div>
          <div className="benefit-img">
            <span className="img-inner">
              <img src="https://khanhhung.academy/learn/assets/images/img-bnf-0.jpg" alt="" />
            </span>
          </div>
        </div>
        <div className="flex flex-col flex-wrap items-center gap-5 rounded-lg bg-purple-600 text-white">
          <div className="text-center">
            <span className="mt-3 font-semibold">Quyền lợi từ</span>
            <img src="https://khanhhung.academy/learn/assets/images/logo-KhA.svg" alt="" className="img-logo" />
          </div>
          <div className="benefit-img">
            <span className="img-inner">
              <img src="https://khanhhung.academy/learn/assets/images/img-bnf-0.jpg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-5 shadow-lg">
      <div className="font-semibold">Sticker của cộng đồng Đồng nghiệp</div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-full lg:col-span-2">
          <div className="my-4 text-xs">Để có thể sử dụng sticker của Hùng, bạn chỉ cần copy đoạn code này vào website của bạn để sử dụng:</div>
          <div className="flex items-center gap-3">
            <img src="https://khanhhung.academy/learn/assets/images/ticker-kh.svg" alt="sticker-1" className="object-contain" width={148} height={188} />
            <code className="rounded-md bg-gray-300 p-5">&lt;img src="https://khanhhung.academy/learn/assets/images/ticker-kh.svg" alt="sticker-1" /&gt;</code>
          </div>
        </div>
        <div className="col-span-1">
          <video src="https://khanhhung.academy/learn/assets/images/sticker-1.mp4" controls>
            <track kind="captions" srcLang="en" src="path/to/captions.vtt" label="English" default />
          </video>
        </div>
      </div>
    </div>
    <div className="p-5 shadow-lg">
      <div className="font-semibold">Trung tâm sticker</div>
      <table className="mt-4 min-h-52 w-full">
        <thead>
          <tr>
            <th>Mã phiếu</th>
            <th>Ngày gửi</th>
            <th>Lời yêu cầu</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
      </table>
    </div>

  </div>
);

export default Dashboard;
