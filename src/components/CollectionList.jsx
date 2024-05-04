import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { CatRecom } from '../data';

export default function CollectionList() {
  return (
    <section className="collection">
      <div className="container">
        <div className="row">
          <h4>Collection List</h4>
        </div>
        <div className="row">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            slidesPerGroupSkip={1}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              568: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                spaceBetween: 20,
                slidesPerView: 6,
              },
            }}
          >
            {CatRecom?.map((c) => (
              <SwiperSlide>
                <div className="card-item" key={c.id}>
                  <div className="img-items">
                    <img src={c.img} alt="" />
                  </div>
                  <div className="desc">
                    <h5>{c.name}</h5>
                    <span>{c.item} Items</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
