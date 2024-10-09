'use client';
import React from 'react';

import getUrlImage from '@/libs/common';

type Props = {
  data: API.CourseMaterial;
  listData: {
    data: {
      courses: Model.Course[];
    };
  };
};

const CourePlayer = (props: Props) => {
  const datas = props.listData;
  const detail = props.data;
  console.log('CourePlayer', props);

  // state detail
  // const [detail, setDetail] = React.useState<API.CourseMaterial | null>(null);
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

  return (
    <div className="mx-auto flex max-w-[1600px] py-8">
      <div className="mr-8 aspect-video h-[60vh] w-3/5">
        {/* <PlyrPlayer url="http://localhost:8000/api/v1/file/11/stream" /> */}
        <iframe
          src="http://localhost:8000/api/v1/file/11/stream"
          title={detail?.title}
          className="size-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups"
          onContextMenu={(e: any) => e.preventDefault()}
        >
        </iframe>
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
      <div className="w-2/5">
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
                        <div className="pro-item w-full" key={index}>
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
