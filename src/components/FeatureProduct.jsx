import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { TiHeartFullOutline } from 'react-icons/ti';
import { Product } from '../data';
import CartShooping from './CartShooping';
import { NavLink } from 'react-router-dom';

export default function FeatureProduct() {
  return (
    <>
      <div className="feature-product">
        <div className="container">
          <div className="row text-center">
            <h4>Feature Product</h4>
          </div>
          <div className="row mt-4">
            {Product.productItem?.slice(0, 4).map((p) => (
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
                    <span className="title">{p.name.substring(0, 15)}</span>
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
      <CartShooping />
    </>
  );
}
