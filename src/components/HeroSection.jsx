import React from 'react';
import Button from './Button';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-3">New Technology In Mobile Smartphone</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic quo odit corporis distinctio et, eveniet placeat natus. A, sit.</p>
            <Button variant="black" style={{ width: '150px' }}>
              Buy Now
            </Button>
          </div>
          <div className="col-md-6">
            <img src="/images/iphone-hero.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
