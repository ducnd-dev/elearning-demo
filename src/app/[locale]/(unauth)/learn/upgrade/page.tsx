'use server';
import '@/styles/course.css';
import '@/styles/home.css';
import '@/styles/root.css';
import '@/styles/payment.css';

import { unstable_setRequestLocale } from 'next-intl/server';

import BtnCreateOrder from './components/BtnCreateOrder';

export default async function LearnPaymentPage(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  return (
    <section className="sec-upp">
      <div className="upp-confetti-top is-inview">
        <canvas className="h-auto w-full" width="1339" height="925" style={{ width: '1339px', height: '925px' }}></canvas>
      </div>
      <div className="upp">
        <div className="upp-header">
          <div className="upp-header-bg">
            <img src="https://khanhhung.academy/learn/assets/images/up-bg-top.png" alt="" />
          </div>
          <div className="upp-header-left"><img src="https://api.khanhhung.academy/media/wysiwyg/Upgrade/bg-left.png" alt="" /></div>
          <div className="upp-header-right"><img src="https://api.khanhhung.academy/media/wysiwyg/Upgrade/bg-right.png" alt="" /></div>
          <div className="container">
            <div className="upp-top --t-center">
              <div className="upp-top-content">
                <canvas
                  id="deepspace"
                  className="canvas-star"
                  style={{ width: '100%', position: 'absolute', inset: '0px', height: '100%' }}
                  width="1920"
                  height="925"
                >
                </canvas>
                <div className="upp-top-name">
                  Chào, phamhyta
                  <br />
                  Hãy trở thành
                  <br />
                  {' '}
                  Đồng nghiệp thứ
                  <div className="cup scr-item active aos-init aos-animate mx-4" data-aos="true">
                    <div className="cup-row">
                      <div className="cup-col">
                        <div className="cup-list" style={{ '--tf': '-520px', '--index': 0 } as React.CSSProperties}>
                          <div className="cup-item">0</div>
                          <div className="cup-item">1</div>
                          <div className="cup-item">2</div>
                          <div className="cup-item">3</div>
                          <div className="cup-item">4</div>
                          <div className="cup-item">5</div>
                          <div className="cup-item">6</div>
                          <div className="cup-item">7</div>
                          <div className="cup-item">8</div>
                          <div className="cup-item">9</div>
                          <div className="cup-item">0</div>
                          <div className="cup-item">1</div>
                          <div className="cup-item">2</div>
                          <div className="cup-item">3</div>
                          <div className="cup-item">4</div>
                          <div className="cup-item">5</div>
                        </div>
                      </div>
                      <div className="cup-col">
                        <div className="cup-list" style={{ '--tf': '-240px', '--index': 1 } as React.CSSProperties}>
                          <div className="cup-item">0</div>
                          <div className="cup-item">1</div>
                          <div className="cup-item">2</div>
                          <div className="cup-item">3</div>
                          <div className="cup-item">4</div>
                          <div className="cup-item">5</div>
                          <div className="cup-item">6</div>
                          <div className="cup-item">7</div>
                          <div className="cup-item">8</div>
                          <div className="cup-item">9</div>
                          <div className="cup-item">0</div>
                          <div className="cup-item">1</div>
                          <div className="cup-item">2</div>
                          <div className="cup-item">3</div>
                          <div className="cup-item">4</div>
                          <div className="cup-item">5</div>
                        </div>
                      </div>
                      <div className="cup-col">
                        <div className="cup-list" style={{ '--tf': '-560px', '--index': 2 } as React.CSSProperties}>
                          <div className="cup-item">0</div>
                          <div className="cup-item">1</div>
                          <div className="cup-item">2</div>
                          <div className="cup-item">3</div>
                          <div className="cup-item">4</div>
                          <div className="cup-item">5</div>
                          <div className="cup-item">6</div>
                          <div className="cup-item">7</div>
                          <div className="cup-item">8</div>
                          <div className="cup-item">9</div>
                          <div className="cup-item">0</div>
                          <div className="cup-item">1</div>
                          <div className="cup-item">2</div>
                          <div className="cup-item">3</div>
                          <div className="cup-item">4</div>
                          <div className="cup-item">5</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {' '}
                  của Hùng
                </div>
                <p className="upp-top-des">
                  Đồng nghiệp đã hiểu được
                  <span className="mx-2 font-semibold underline underline-offset-4">“ĐỘ NGON”</span>
                  <br />
                  &nbsp;của E-Learning
                </p>
              </div>
              <div className="upp-ud upp-ud-top">
                <div className="upp-ud-img aos-init aos-animate" data-aos="zoom-in"><div className="inner"></div></div>
                <div className="upp-ud-box">
                  <p className="title">
                    Cơ hội làm ăn,&nbsp;
                    <br />
                    tạo ra một nguồn thu nhập thụ động thật sự &nbsp;
                    <br />
                  </p>
                  <p className="t-yls --none-shadown" data-txt="CHỈ DÀNH RIÊNG CHO BẠN">
                    <span className="t-yls-top">
                      <span className="word" style={{ '--word-index': 0 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 0 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 1 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 2 } as React.CSSProperties}>Ỉ</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 1 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 3 } as React.CSSProperties}>D</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 4 } as React.CSSProperties}>À</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 5 } as React.CSSProperties}>N</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 6 } as React.CSSProperties}>H</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 2 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 7 } as React.CSSProperties}>R</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 8 } as React.CSSProperties}>I</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 9 } as React.CSSProperties}>Ê</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 10 } as React.CSSProperties}>N</span>
                        <span className="char" style={{ '--char-index': 4, '--ls-index': 11 } as React.CSSProperties}>G</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 3 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 12 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 13 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 14 } as React.CSSProperties}>O</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 4 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 15 } as React.CSSProperties}>B</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 16 } as React.CSSProperties}>Ạ</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 17 } as React.CSSProperties}>N</span>
                      </span>
                      <span className="white-space"> </span>
                    </span>
                    <span className="t-yls-mid">
                      <span className="word" style={{ '--word-index': 0 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 0 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 1 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 2 } as React.CSSProperties}>Ỉ</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 1 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 3 } as React.CSSProperties}>D</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 4 } as React.CSSProperties}>À</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 5 } as React.CSSProperties}>N</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 6 } as React.CSSProperties}>H</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 2 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 7 } as React.CSSProperties}>R</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 8 } as React.CSSProperties}>I</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 9 } as React.CSSProperties}>Ê</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 10 } as React.CSSProperties}>N</span>
                        <span className="char" style={{ '--char-index': 4, '--ls-index': 11 } as React.CSSProperties}>G</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 3 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 12 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 13 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 14 } as React.CSSProperties}>O</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 4 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 15 } as React.CSSProperties}>B</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 16 } as React.CSSProperties}>Ạ</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 17 } as React.CSSProperties}>N</span>
                      </span>
                      <span className="white-space"> </span>
                    </span>
                    <span className="t-yls-bot">
                      <span className="word" style={{ '--word-index': 0 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 0 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 1 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 2 } as React.CSSProperties}>Ỉ</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 1 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 3 } as React.CSSProperties}>D</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 4 } as React.CSSProperties}>À</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 5 } as React.CSSProperties}>N</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 6 } as React.CSSProperties}>H</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 2 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 7 } as React.CSSProperties}>R</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 8 } as React.CSSProperties}>I</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 9 } as React.CSSProperties}>Ê</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 10 } as React.CSSProperties}>N</span>
                        <span className="char" style={{ '--char-index': 4, '--ls-index': 11 } as React.CSSProperties}>G</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 3 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 12 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 13 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 14 } as React.CSSProperties}>O</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 4 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 15 } as React.CSSProperties}>B</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 16 } as React.CSSProperties}>Ạ</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 17 } as React.CSSProperties}>N</span>
                      </span>
                      <span className="white-space"> </span>
                    </span>
                  </p>
                  <p className="t-yls --none-shadown" data-txt="MỘT CHUYÊN GIA THẬT SỰ">
                    <span className="t-yls-top">
                      <span className="word" style={{ '--word-index': 0 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 0 } as React.CSSProperties}>M</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 1 } as React.CSSProperties}>Ộ</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 2 } as React.CSSProperties}>T</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 1 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 3 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 4 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 5 } as React.CSSProperties}>U</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 6 } as React.CSSProperties}>Y</span>
                        <span className="char" style={{ '--char-index': 4, '--ls-index': 7 } as React.CSSProperties}>Ê</span>
                        <span className="char" style={{ '--char-index': 5, '--ls-index': 8 } as React.CSSProperties}>N</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 2 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 9 } as React.CSSProperties}>G</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 10 } as React.CSSProperties}>I</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 11 } as React.CSSProperties}>A</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 3 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 12 } as React.CSSProperties}>T</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 13 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 14 } as React.CSSProperties}>Ậ</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 15 } as React.CSSProperties}>T</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 4 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 16 } as React.CSSProperties}>S</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 17 } as React.CSSProperties}>Ự</span>
                      </span>
                      <span className="white-space"> </span>
                    </span>
                    <span className="t-yls-mid">
                      <span className="word" style={{ '--word-index': 0 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 0 } as React.CSSProperties}>M</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 1 } as React.CSSProperties}>Ộ</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 2 } as React.CSSProperties}>T</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 1 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 3 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 4 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 5 } as React.CSSProperties}>U</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 6 } as React.CSSProperties}>Y</span>
                        <span className="char" style={{ '--char-index': 4, '--ls-index': 7 } as React.CSSProperties}>Ê</span>
                        <span className="char" style={{ '--char-index': 5, '--ls-index': 8 } as React.CSSProperties}>N</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 2 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 9 } as React.CSSProperties}>G</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 10 } as React.CSSProperties}>I</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 11 } as React.CSSProperties}>A</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 3 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 12 } as React.CSSProperties}>T</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 13 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 14 } as React.CSSProperties}>Ậ</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 15 } as React.CSSProperties}>T</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 4 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 16 } as React.CSSProperties}>S</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 17 } as React.CSSProperties}>Ự</span>
                      </span>
                      <span className="white-space"> </span>
                    </span>
                    <span className="t-yls-bot">
                      <span className="word" style={{ '--word-index': 0 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 0 } as React.CSSProperties}>M</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 1 } as React.CSSProperties}>Ộ</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 2 } as React.CSSProperties}>T</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 1 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 3 } as React.CSSProperties}>C</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 4 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 5 } as React.CSSProperties}>U</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 6 } as React.CSSProperties}>Y</span>
                        <span className="char" style={{ '--char-index': 4, '--ls-index': 7 } as React.CSSProperties}>Ê</span>
                        <span className="char" style={{ '--char-index': 5, '--ls-index': 8 } as React.CSSProperties}>N</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 2 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 9 } as React.CSSProperties}>G</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 10 } as React.CSSProperties}>I</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 11 } as React.CSSProperties}>A</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 3 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 12 } as React.CSSProperties}>T</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 13 } as React.CSSProperties}>H</span>
                        <span className="char" style={{ '--char-index': 2, '--ls-index': 14 } as React.CSSProperties}>Ậ</span>
                        <span className="char" style={{ '--char-index': 3, '--ls-index': 15 } as React.CSSProperties}>T</span>
                      </span>
                      <span className="white-space"> </span>
                      <span className="word" style={{ '--word-index': 4 } as React.CSSProperties}>
                        <span className="char" style={{ '--char-index': 0, '--ls-index': 16 } as React.CSSProperties}>S</span>
                        <span className="char" style={{ '--char-index': 1, '--ls-index': 17 } as React.CSSProperties}>Ự</span>
                      </span>
                      <span className="white-space"> </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="upp-bot">
                <div className="upp-bot-title">
                  <span className="ic"><img src="https://khanhhung.academy/learn/assets/images/ic-thunder.png" alt="" /></span>
                  <p>Bạn có thể bắt đầu ngay hôm nay</p>
                </div>
                <div className="up-bot-txt text-center">
                  <span className="text-cus">NHƯNG elearning là một hành trình</span>
                  <div className="text-line">
                    <div className="line"><img src="https://khanhhung.academy/learn/assets/images//red-circle.png" alt="" /></div>
                    <div className="txt">KHỔ TRƯỚC - SƯỚNG SAU</div>
                  </div>
                  Quá trình tạo ra nó cũng
                  <br />
                  <span className="font-semibold">cần nhiều KIẾN THỨC, QUYẾT TÂM và “NGƯỜI PHỤ”</span>
                </div>
                <BtnCreateOrder />
              </div>
              <div className="personalized-arrow">
                <div className="arrow-wrap add-active-js active">
                  <div className="arrow-item"><img src="https://khanhhung.academy/template/assets/images/home/arrow-item-01-pri.png" alt="" /></div>
                  <div className="arrow-item"><img src="https://khanhhung.academy/template/assets/images/home/arrow-item-02-pri.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-top"><img src="https://khanhhung.academy/learn/assets/images/bg-top.png" alt="" /></div>
        </div>
      </div>
    </section>
  );
}
