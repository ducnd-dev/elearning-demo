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
    <h1 className="t-title-seven mx-auto my-5 text-center uppercase">Dashboard</h1>
    <div className="dab-course">
      <ul className="dab-course-list grid grid-cols-2 gap-4">
        <li className="dab-course-item col-span-full lg:col-span-1 !w-full">
          <div className="dab-course-block">
            <div className="sta-icon">
              <img src="https://khanhhung.academy/learn/assets/images/icon-study.svg" alt="" />
            </div>
            <div className="dab-course-tt">
              <h4 className="t-four">Tiến độ học:</h4>
              <p className="data-num">
                <span className="data-curr">0</span>
                <span>/</span>
                <span>206</span>
              </p>
            </div>
          </div>
        </li>
        <li className="dab-course-item col-span-full lg:col-span-1 !w-full">
          <div className="dab-course-block">
            <div className="sta-icon"><img src="https://khanhhung.academy/learn/assets/images/icon-time-study.svg" alt="" /></div>
            <div className="dab-course-tt">
              <h4 className="t-four">Tổng thời gian học</h4>
              <p className="data-num"><span className="data-curr">0 phút</span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div className="prf-group mt-5 p-5">
      <div className="prf-group-hd">
        <h2 className="t-third">Đừng quên tham gia nhóm để nhận được quyền lợi</h2>
        <a className="cnc-item --face" href="https://www.facebook.com/groups/337354765813432" target="_blank" rel="noreferrer">
          <span className="ic">
            <img src="https://khanhhung.academy/learn/assets/images/ic-face.svg" alt="" />
          </span>
          <span className="txt">
            Nhóm đồng nghiệp
            {' '}
            <br />
            {' '}
            của Hùng
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="prf-benefit-block flex flex-col items-center rounded-lg bg-purple-600 text-white">
          <div className="mt-6 text-center">
            <span className="font-semibold uppercase">Quyền lợi từ</span>
            <img src="https://khanhhung.academy/learn/assets/images/logo-KhA.svg" alt="" className="img-logo" />
          </div>
          <div className="benefit-img">
            <span className="img-inner">
              <img src="https://khanhhung.academy/learn/assets/images/img-bnf-0.jpg" alt="" />
            </span>
          </div>
        </div>
        <div className="prf-benefit-block flex flex-col flex-wrap items-center gap-5 rounded-lg bg-purple-600 text-white">
          <div className="mt-6 text-center">
            <span className="font-semibold uppercase">Quyền lợi từ</span>
            <img src="https://khanhhung.academy/learn/assets/images/logo-Mona.svg" alt="" className="img-logo" />
          </div>
          <div className="benefit-img">
            <span className="img-inner">
              <img src="https://khanhhung.academy/learn/assets/images/img-bnf-1.jpg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="prf-group p-5">
      <div className="t-third">Sticker của cộng đồng Đồng nghiệp</div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-full lg:col-span-2">
          <div className="my-4 text-2xl">
            Để có thể sử dụng sticker của Hùng, bạn chỉ cần copy đoạn code này vào website của
            <br />
            {' '}
            bạn để sử dụng:
          </div>
          <div className="flex items-center gap-3">
            <img src="https://khanhhung.academy/learn/assets/images/ticker-kh.svg" alt="sticker-1" className="img-logo h-auto w-72 object-contain" />
            <div className="cp-code">
              <p className="code">
                &lt;a&nbsp;
                <br />
                href="https://khanhhung.academy/"&gt;
                <br />
                &lt;img width="300"
                <br />
                height="300"
                <br />
                alt="Sicker KHA"
                <br />
                title="Sicker KHA"
                <br />
                src="https://khanhhung.academy/learn/assets/images/ticker-kh.svg"&gt;
                <br />
                &lt;/a&gt;
              </p>
              <div className="copy-sp">
                <img src="https://khanhhung.academy/learn/assets/images/ic_copy.svg" className="plc-logo" alt="" />
                <span className="text">Copy mẫu</span>
              </div>
            </div>
          </div>
        </div>
        <div className="prf-instr-right col">
          <div className="prf-instr-video">
            <span className="prf-instr-thumbn">
              <img src="https://khanhhung.academy/learn/assets/images/img-instr.jpg" className="plc-logo" alt="" />
            </span>
            <button className="btn-ctrl-play">
              <img src="https://khanhhung.academy/learn/assets/images/ic-play-arrow.svg" alt="" className="icon-play" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="prf-group mb-5 p-5">
      <div className="t-third">Trung tâm Ticket</div>
      <table className="mx-12 mt-4 w-full">
        <thead>
          <tr>
            <th className="text-left text-2xl font-semibold">Mã phiếu</th>
            <th className="text-left text-2xl font-semibold">Ngày gửi</th>
            <th className="text-left text-2xl font-semibold">Lời yêu cầu</th>
            <th className="text-left text-2xl font-semibold">Trạng thái</th>
          </tr>
        </thead>
      </table>
      <div className="tk-center-empty prf-group-empty">
        <img src="https://khanhhung.academy/learn/assets/images/img-no-message.jpg" alt="" className="img-aff-empty" />
        <h3 className="txt">Bạn chưa có ticket nào</h3>
      </div>
    </div>

  </div>
);

export default Dashboard;
