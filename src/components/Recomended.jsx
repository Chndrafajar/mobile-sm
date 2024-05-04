import React from 'react';
import { CatRecom, Product } from '../data';
import { FaStar } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

export default function Recomended() {
  return (
    <section className="recomended">
      <div className="container">
        <div className="row mb-3">
          <h4>Recommended for You</h4>
        </div>
        <div className="row mb-4">
          <div className="category-reomended">
            {CatRecom.map((c) => (
              <div className="category-item" key={c.id}>
                <a href="">{c.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="row mt">
          {Product.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.id}>
              <div className="card">
                <div className="items-card">
                  <div className="img-items">
                    <img src={p.imgThumbnail} alt="" />
                  </div>
                  <div className="desc">
                    <h5>{p.name}</h5>
                    <span className="price">Rp 8,000,000 IDR</span>
                    <div className="icons-start">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className="icons-cart">
                    <FaCartShopping />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
