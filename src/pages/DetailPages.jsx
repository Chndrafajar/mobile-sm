import React from 'react';
import { Footer, Navbar } from '../components/Index';
import '../assets/productdetail.scss';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/swiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { FaCartShopping, FaEye, FaMinus, FaPlus, FaStar } from 'react-icons/fa6';

import { Product } from '../data';
import { TiHeartFullOutline } from 'react-icons/ti';
import Button from '../components/Button';
import { NavLink, useParams } from 'react-router-dom';

export default function DetailPages() {
  const { id } = useParams();
  const product = Product.productItem.find((p) => p.id === Number(id));

  return (
    <>
      <Navbar />
      <div className="product-detail" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="card">
                <img src={product?.imgThumbnail} alt="" />
              </div>
              <div className="item-slider">
                <Swiper
                  slidesPerView={1}
                  centeredSlides={false}
                  slidesPerGroupSkip={1}
                  breakpoints={{
                    0: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    450: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    568: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    992: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1200: {
                      spaceBetween: 20,
                      slidesPerView: 4,
                    },
                  }}
                  navigation={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-card">
                      <div className="slider-items">
                        <img src="/images/img-test.png" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              {/* <div className="slider-card">
                <div className="slider-items">
                  <img src="/images/img-test.png" alt="" />
                </div>
              </div> */}
            </div>
            <div className="col-lg-5">
              <div className="card">
                <h1>{product?.name}</h1>
                <div className="star-icon">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="price">Rp {product?.price.toLocaleString()} IDR</span>
                <p className="varian-color">
                  <b>Color:</b> Black
                </p>
                <div className="color-input">
                  <div className="color-radio active" style={{ background: 'blue' }}></div>
                  <div className="color-radio" style={{ background: 'red' }}></div>
                  <div className="color-radio" style={{ background: 'green' }}></div>
                  <div className="color-radio" style={{ background: 'black' }}></div>
                </div>
                <div className="quantity">
                  <div className="input-quantity">
                    <FaMinus />
                    <span>1</span>
                    <FaPlus />
                  </div>
                  <div>
                    <Button type="button" variant="cart">
                      Add to cart
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="blue">Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">
                      Product Reviews
                    </a>
                  </li>
                </ul>
                <div className="desc">
                  <p>
                    The GoPro HERO cameras are a popular series of action cameras designed for capturing high-quality video and photos in various extreme and outdoor environments. As of my last knowledge update in September 2021, here's a
                    general description of the GoPro HERO camera series:
                  </p>
                  <ol>
                    <li>
                      <b>Compact and Durable Design</b>: GoPro HERO cameras are known for their compact, rugged, and waterproof design. They are built to withstand tough conditions and are often used in activities like surfing, skiing,
                      mountain biking, and more.
                    </li>
                    <li>
                      <b>Video and Photo Quality</b>: HERO cameras are capable of capturing high-resolution video footage, typically in 4K or 1080p at various frame rates. They are also equipped with features like image stabilization to
                      ensure smooth video even in shaky conditions.
                    </li>
                    <li>
                      <b>Wide-Angle Lens</b>: Most GoPro HERO cameras come with a wide-angle lens that provides an immersive perspective, making them ideal for capturing action shots and scenic landscapes.
                    </li>
                    <li>
                      <b>Waterproof</b>: HERO cameras are usually waterproof without the need for external housing, allowing users to take them underwater at certain depths. The level of waterproofing may vary among different models.
                    </li>
                    <li>
                      <b>Voice Control</b>: Some models offer voice control features, allowing users to start and stop recording or take photos using voice commands.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <h4>Recently viewed product</h4>
          </div>
          <div className="row mt-4">
            {Product?.productItem?.map((p) => (
              <div className="col-md-6 col-6 col-lg-3" key={p.id}>
                <div className="card">
                  <img src={p.imgThumbnail} alt="" />
                  <div className="icons">
                    <div className="items">
                      <TiHeartFullOutline />
                    </div>
                    <div className="items" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                      <FaCartShopping />
                    </div>
                    <NavLink to={`/product/${p.id}`} className="items link">
                      <FaEye />
                    </NavLink>
                  </div>
                  <div className="desc">
                    <span className="title">{p.name}</span>
                    <div className="star">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="price">Rp {p.price.toLocaleString()} IDR</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
