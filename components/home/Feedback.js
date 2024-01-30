import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Feedback = () => {
  return (
    <>
      <div className="feedback-area">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          className="feedback-slides"
        >
          <SwiperSlide>
            <div className="row m-0">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="feedback-item">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour predefined words which don't look.
                  </p>

                  <div className="client-info">
                    <div className="client-pic">
                      <img src="/images/client/1.jpg" alt="image" />
                    </div>
                    <h3>Filip Luis</h3>
                    <span>Founder & CEO</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div
                  className="client-image"
                  style={{ backgroundImage: `url(/images/client/1.jpg)` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row m-0">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="feedback-item">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour predefined words which don't look.
                  </p>

                  <div className="client-info">
                    <div className="client-pic">
                      <img src="/images/client/2.jpg" alt="image" />
                    </div>
                    <h3>Sarah Taylor</h3>
                    <span>Designer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div
                  className="client-image"
                  style={{ backgroundImage: `url(/images/client/2.jpg)` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="row m-0">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="feedback-item">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour predefined words which don't look.
                  </p>

                  <div className="client-info">
                    <div className="client-pic">
                      <img src="/images/client/3.jpg" alt="image" />
                    </div>
                    <h3>Meg Lanning</h3>
                    <span>Support</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12 p-0">
                <div
                  className="client-image"
                  style={{ backgroundImage: `url(/images/client/3.jpg)` }}
                ></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Feedback;
