'use client';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';
import '@/styles/learn.css';
import React from 'react';

import getUrlImage from '@/libs/common';
import { useAuthStore } from '@/providers/auth-store-provider';
import BtnUpgrade from '@/components/BtnUpgrade';
import { Collapse, Switch } from 'antd';

type Props = {
  data: API.CourseMaterial;
  listData: API.GetCoursesResponse;
};

const CourePlayer = (props: Props) => {
  const datas = props.listData;
  const [detail, setDetail] = React.useState<API.CourseMaterial | null>(props.listData.data.courses[0]?.course_materials[0] || null);
  const [openSeemore, setOpenSeemore] = React.useState<number[]>([]);
  const [displayPro, setDisplayPro] = React.useState(false);
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
    <div className="container mx-auto grid grid-cols-12 items-start md:gap-10 max-w-[1600px] pb-8 md:pt-2">
      <div className="relative mr-8 aspect-video col-span-full lg:col-span-8 w-full py-5">
        {!detail?.is_free && !isProUser
          ? (
            <div className='pro-wars' style={{ backgroundImage: 'url("https://api.khanhhung.academy/media/catalog/product/M/_/M_t_s_Automation_Funnel_kh_c.png")' }}>
              <div className="pro-wars-wrapper --t-center">
                <div className="pro-wars-top  text-center">
                  <p className="t-ylss text-[20px] lg:text-5xl !leading-tight" data-txt="VIDEO NÀY CHỈ DÀNH CHO CÁC ĐỒNG NGHIỆP ĐÃ TRẢ PHÍ">
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
              className="size-full mb-2"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups"
              onContextMenu={(e: any) => e.preventDefault()}
              style={{ width: '100%', height: '105%' }}
            >
            </iframe>
          )}
        <div>
          <div className="t-title-second c-second !text-black">{detail?.title}</div>
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
      <div className="col-span-full lg:col-span-4 md:px-4">
        <div className="regi-left-inner pro-toggle !pt-4">
          <div className="toggle-xtb study-xtb">
            <Switch
              checked={displayPro}
              onChange={() => setDisplayPro((prev) => !prev)}
              className="mr-4"
            />
            <span className="txt">Trải nghiệm toàn bộ 200 videos - Hơn 35 giờ</span>
          </div>
          <div className="study-note-txt">*Khóa học sẽ luôn luôn cập nhật thêm video mới kể cả sau khi ra mắt (tại vì nội dung nhiều quá Hùng quay không kịp)</div>
          <ul className="pro-box-list max-h-[30vh] md:max-h-[70vh] overflow-y-auto">
            <Collapse
              style={{ backgroundColor: 'white' }}
              defaultActiveKey={['1', '2']}
              items={datas?.data?.courses?.map((data: Model.Course) => ({
                showArrow: false,
                key: data.id,
                label: <div className="pro-box-head proBoxParrent">
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
                      </div>,
                children: <div className="pro-box-body ">
                          <div className="pro-box-body-inner">
                            <div className="pro-list row">
                              {data?.course_materials?.map((video, index) => (
                                <div
                                  className={`w-full cursor-pointer ${!displayPro && !video.is_free && !openSeemore.includes(data.id) ? 'hidden' : ''}`}
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
                             {!displayPro&& data.course_materials.some((i => !i.is_free)) &&(<div className="text-center w-full cursor-pointer" >
                                {!openSeemore.includes(data.id) ? (<span className='text-orange-300 underline text-2xl' onClick={() =>setOpenSeemore([ ...openSeemore, data.id])}>
                                  Xem toàn bộ
                                </span>) :
                                (<span className='text-purple-300 underline text-2xl' onClick={() =>setOpenSeemore(openSeemore.filter((id) => id !== data.id))}>
                                  Thu gọn
                                </span>)
                                }
                              </div>)}
                            </div>
                          </div>
                        </div>
              })
            )}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourePlayer;
