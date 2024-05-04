import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { FaAward, FaCreditCard } from 'react-icons/fa6';

export default function AboutFeature() {
  return (
    <>
      <div className="about-feature">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <FaAward />
              <h4>Guarantee</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facere?</p>
            </div>
            <div className="col-md-4">
              <FaShippingFast />
              <h4>Shipping</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facere?</p>
            </div>
            <div className="col-md-4">
              <FaCreditCard />
              <h4>Paymen Secured</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, facere?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
