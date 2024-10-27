'use client';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';
import '@/styles/learn.css';
import React from 'react';

import getUrlImage from '@/libs/common';
import { useAuthStore } from '@/providers/auth-store-provider';
import BtnUpgrade from '@/components/BtnUpgrade';

type Props = {
  data: API.CourseMaterial;
  listData: API.GetCoursesResponse;
};

const CourePlayer = (props: Props) => {
  const datas = props.listData;
  console.log('CourePlayer', props);

  // const detail = props.data;

  const [detail, setDetail] = React.useState<API.CourseMaterial | null>(props.listData.data.courses[0]?.course_materials[0] || null);
  const getTotalTime = (course: Model.Course) => {
    let total = 0;
    course.course_materials.forEach((material) => {
      const [hours, minutes, seconds] = material.time.split(':').map(Number);
      total += (hours ?? 0) * 3600 + (minutes ?? 0) * 60 + (seconds ?? 0);
    });

    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;

    return `${hours}:${minutes}:${seconds}`;
  };

  const { isProUser } = useAuthStore();

  return (
    <div className="mx-auto grid grid-cols-12 items-start gap-10 max-w-[1600px] py-8">
      <div className="relative mr-8 aspect-video lg:h-[60vh] col-span-full lg:col-span-8 rounded-xl w-full py-5">
        {!detail?.is_free && !isProUser
          ? (
            <div className='pro-wars' style={{ backgroundImage: 'url("https://api.khanhhung.academy/media/catalog/product/M/_/M_t_s_Automation_Funnel_kh_c.png")' }}>
              <div className="pro-wars-wrapper --t-center">
                <div className="pro-wars-top  text-center">
                  <p className="t-ylss text-5xl" data-txt="VIDEO NÀY CHỈ DÀNH CHO CÁC ĐỒNG NGHIỆP ĐÃ TRẢ PHÍ">
                    <span className="txt"> VIDEO NÀY CHỈ DÀNH CHO<br />CÁC ĐỒNG NGHIỆP ĐÃ TRẢ PHÍ</span></p>
                  <p className="des">Hùng có nhiều video Free khác rất chất lượng, <br />bạn hãy xem các video FREE khác nhé!</p>
                </div>
                <BtnUpgrade />
              </div>
            </div>
          )
          : (
            <iframe
              src={`/video/${detail?.id}`}
              title={detail?.title}
              className="size-full rounded-lg"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups"
              onContextMenu={(e: any) => e.preventDefault()}
              style={{ width: '100%', height: '100%' }}
            >
            </iframe>
          )}
        <div>
          <div className="t-title-second c-second mt-8 !text-black">{detail?.title}</div>
          <div className="flex">
            <div className="pro-time">
              <img src="https://khanhhung.academy/learn/assets/images/ic-clock.svg" alt="" />
              <span className="txt">{detail?.time}</span>
            </div>
            <div className="pro-tag ml-8">
              {detail?.is_featured
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
              {detail?.is_important
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
              {detail?.is_free
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
          </div>
        </div>
      </div>
      <div className="col-span-full lg:col-span-4">
        <div className="regi-left-inner pro-toggle">
          <ul className="pro-box-list max-h-[70vh] overflow-y-auto">
            {datas?.data?.courses?.map((data: Model.Course) => (
              <li className="pro-box-item" key={data.id}>
                <div className="pro-box-head proBoxParrent">
                  <div className="content">
                    <h2 className="pro-box-title">{data.title}</h2>
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
                        <div
                          className="w-full cursor-pointer"
                          key={video.id}
                          role="button"
                          tabIndex={0}
                          onClick={() => setDetail(video)}
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setDetail(video);
                            }
                          }}
                        >
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
                                {video.title}
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
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourePlayer;
