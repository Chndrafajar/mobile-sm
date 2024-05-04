import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function DiskonProduct() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      // Perbarui waktu setiap detik
      setDate(new Date());
    }, 1000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(interval);
  }, []); // Efek hanya dijalankan sekali saat komponen dipasang

  // Fungsi untuk menambah nol di depan angka jika kurang dari 10
  const addLeadingZero = (number) => {
    return number < 10 ? '0' + number : number;
  };

  // Ambil jam, menit, dan detik dari objek Date
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());
  const seconds = addLeadingZero(date.getSeconds());

  return (
    <section className="diskon-product">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="items">
                <div className="desc">
                  <h5>Up To 75% OFF!</h5>
                  <h2>Unbeatable Discounts</h2>
                  <a>
                    Shop Now <FaArrowRight />{' '}
                  </a>
                  <div className="date">
                    <div className="date-item">{hours}</div>
                    <div className="date-item">{minutes}</div>
                    <div className="date-item">{seconds}</div>
                  </div>
                </div>
                <img src="/images/product/Iphone 11 pro max.png" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card" style={{ background: '#722df3' }}>
              <div className="items">
                <div className="desc">
                  <h5>Up To 75% OFF!</h5>
                  <h2>Unbeatable Discounts</h2>
                  <a>
                    Shop Now <FaArrowRight />{' '}
                  </a>
                  <div className="date">
                    <div className="date-item">{hours}</div>
                    <div className="date-item">{minutes}</div>
                    <div className="date-item">{seconds}</div>
                  </div>
                </div>
                <img src="/images/product/Xiaomi Amazfit Bip Smartwatch.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
