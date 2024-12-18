'use server';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';

import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import getUrlImage from '@/libs/common';
import request from '@/libs/request';

import { FormLogin } from '../../../(unauth)/components/login/FormLogin';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

// list khóa học
const fetchData = async () => {
  try {
    const data = await request<API.GetCategory>('/v1/categories');
    return data;
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    return null; // Ensure a value is always returned
  }
};
export default async function LearnAuthPage(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('About');
  const datas = await fetchData();
  const getTotalTime = (course: Model.Course) => {
    let total = 0;
    course.course_materials.forEach((material) => {
      if (material.time.includes(':')) {
        const [hours, minutes, seconds] = material.time.split(':').map(Number);
        total += (hours ?? 0) * 3600 + (minutes ?? 0) * 60 + (seconds ?? 0);
      }
    });

    // Convert total seconds back to h:M:s format
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    return `${hours}:${minutes}:${seconds}`;
  };

  const getTotalTimeAll = (data: any[]) => {
    let total = 0;
    data.forEach((cate) => {
      cate?.courses?.forEach((course: Model.Course) => {
        course?.course_materials?.forEach((material) => {
          if (material.time.includes(':')) {
            const [hours, minutes, seconds] = material.time.split(':').map(Number);
            total += (hours ?? 0) * 3600 + (minutes ?? 0) * 60 + (seconds ?? 0);
          }
        });
      });
    });
    const hours = Math.floor(total / 3600);
    return hours;
  };

  return (
    <section className="sec-regi">
      <div className="regi">
        <div className="container">
          <div className="flex">
            <div className="w-full lg:w-1/2">
              <div className="regi-left-inner pro-toggle">
                <h1 className="t-title-second c-second">KHÓA HỌC KINH DOANH KHÓA HỌC</h1>
                <div className="toggle-xtb study-xtb">
                    <label className="txt text-3xl font-semibold" htmlFor="toggle-xtb">
                      Toàn bộ {datas?.data?.reduce((total: number, cate: any) => total + cate.courses.reduce((courseTotal: number, course: any) => courseTotal + course.course_materials.length, 0), 0)}
                      {' '} video của khóa học - Hơn { getTotalTimeAll(datas?.data ?? []) } giờ
                    </label>
                </div>
                <div className="study-note-txt">*Khóa học sẽ luôn luôn cập nhật thêm video mới kể cả sau khi ra mắt (tại vì nội dung nhiều quá Hùng quay không kịp)</div>
                {datas?.data?.map((cate: any) => (
                  <ul className="pro-box-list" key={cate.id}>
                    <h1 className="pro-box-title">{cate.name}</h1>
                    {cate?.courses?.map((data: Model.Course, index: number) => (
                      <li className="pro-box-item" key={data.id}>
                        <div className="pro-box-head proBoxParrent">
                          <div className="content">
                            <h2 className="font-bold">
                              Phần
                              {' '}
                              {' '}
                              { index + 1 }
                              :
                              {' '}
                              {data.title}
                            </h2>
                            <div className="pro-box-note">
                              <div className="pro-box-note-item">
                                <img src="https://khanhhung.academy/learn/assets/images/pro-box-note-1.svg" alt="" />
                                <div className="content">
                                  <span className="title">Số lượng: </span>
                                  <span className="des">
                                    {data?.course_materials?.length}
                                    {' '}
                                    video
                                  </span>
                                </div>
                              </div>
                              <div className="pro-box-note-item">
                                <img src="https://khanhhung.academy/learn/assets/images/pro-box-note-2.svg" alt="" />
                                <div className="content">
                                  <span className="title">Thời lượng: </span>
                                  <span className="des">{getTotalTime(data)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="line"></div>
                        </div>
                        <div className="pro-box-body">
                          <div className="pro-box-body-inner">
                            <div className="pro-list row">
                              {data?.course_materials?.map((video, index) => (
                                <Link href={`/learn/auth/${cate.id}/${video.id}`} key={index} className="block w-full" passHref>
                                  <div className="pro-item w-full">
                                    <div className="pro-wr flex rounded-md p-4">
                                      <div className="pro-img mr-4">
                                        <div className="pro-stt">
                                          {index + 1}
                                        </div>
                                        <div className="inner w-64">
                                          <img src={getUrlImage(video.img)} loading="lazy" alt={video.title} />
                                        </div>
                                      </div>
                                      <div className="pro-content">
                                        <h5 className="pro-name" title={video.title}>
                                          <Link href={`/learn/auth/${cate.id}/${video.id}`} passHref>
                                            {video.title}
                                          </Link>
                                        </h5>
                                        <div className="pro-fl">
                                          <div className="pro-tag">
                                            {video.is_featured
                                              ? (
                                                  <div className="pro-tag-item --featured w-max">
                                                    <span className="mirrors"></span>
                                                    <div>
                                                      <img src="https://khanhhung.academy/learn/assets/images/ic-tag-important.svg" alt="" />
                                                    </div>
                                                    <div className="txt w-max"> Nổi bật</div>
                                                  </div>
                                                )
                                              : ''}
                                            {video.is_important
                                              ? (
                                                  <div className="pro-tag-item --featured w-max">
                                                    <span className="mirrors"></span>
                                                    <div>
                                                      <img src="https://khanhhung.academy/learn/assets/images/ic-tag-important.svg" alt="" />
                                                    </div>
                                                    <div className="txt w-max"> Quan trọng</div>
                                                  </div>
                                                )
                                              : ''}
                                            {video.is_free
                                              ? (
                                                  <div className="pro-tag-item --free w-max">
                                                    <span className="mirrors"></span>
                                                    <div>
                                                      <img src="https://khanhhung.academy/learn/assets/images/ic-tag-free.svg" alt="" />
                                                    </div>
                                                    <span className="txt w-max">FREE</span>
                                                  </div>
                                                )
                                              : (
                                                  <div className="pro-tag">
                                                    <div className="pro-tag-item --pro">
                                                      <span className="mirrors"></span>
                                                      <div>
                                                        <img src="https://khanhhung.academy/learn/assets/images/ic-tag-pro.svg" alt="" />
                                                      </div>
                                                      <span className="txt">PRO</span>
                                                    </div>
                                                  </div>
                                                )}
                                          </div>
                                          <div className="pro-time">
                                            <img src="https://khanhhung.academy/learn/assets/images/ic-clock.svg" alt="" />
                                            <span className="txt">{video.time}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ))}

              </div>
            </div>
            <div className="hidden lg:block w-1/2">
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
