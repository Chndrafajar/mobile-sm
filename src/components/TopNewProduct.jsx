import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { TiHeartFullOutline } from 'react-icons/ti';
import { Product } from '../data';
import { NavLink } from 'react-router-dom';

export default function TopNewProduct() {
  return (
    <>
      <section className="topnew-product">
        <div className="container">
          <div className="row text-center">
            <h4>Top New Product</h4>
          </div>
          <div className="row mt-3 top-new-browser">
            <div className="col-xl-6" key={Product?.productItem[3].id}>
              <div className="card">
                <div className="img-items">
                  <img src={Product?.productItem[3]?.imgThumbnail} alt="" />
                </div>
                <div className="icons">
                  <div className="items">
                    <TiHeartFullOutline />
                  </div>
                  <div className="items" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                    <FaCartShopping />
                  </div>
                  <NavLink to={`/product/${Product?.productItem[3]?.id}`} className="items link">
                    <FaEye />
                  </NavLink>
                </div>
                <div className="desc">
                  <h5 className="title">{Product?.productItem[3]?.name}</h5>

                  <span className="price">Rp {Product?.productItem[3]?.price.toLocaleString()} IDR</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="grid-top-product">
                {Product?.productItem?.slice(0, 2).map((p) => (
                  <div className="grid-items" key={p.id}>
                    <div className="card">
                      <div className="img-items">
                        <img src={p.imgThumbnail} alt="" />
                      </div>
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
              <div className="grid-top-product">
                {Product?.productItem?.slice(5, 7).map((p) => (
                  <div className="grid-items" key={p.id}>
                    <div className="card">
                      <div className="img-items">
                        <img src={p.imgThumbnail} alt="" />
                      </div>
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
          <div className="row mt-4">
            {Product.productItem?.slice(4, 8).map((p) => (
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
      </section>
    </>
  );
}
