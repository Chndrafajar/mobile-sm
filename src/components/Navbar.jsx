import React from 'react';
import { FaCartShopping, FaFacebook, FaGoogle, FaMinus, FaPlus, FaSquareTwitter } from 'react-icons/fa6';
import { IoSearch, IoHome } from 'react-icons/io5';
import { FaInstagram } from 'react-icons/fa';
import Input from './Input';
import Button from './Button';
import { FaBars } from 'react-icons/fa6';

import { IoPerson } from 'react-icons/io5';
import ModalLogin from './auth/ModalLogin';
import ModalRegister from './auth/ModalRegister';
import ModalResetPass from './auth/ModalResetPass';
import CartShooping from './CartShooping';
import OffcanvasSearch from './OffcanvasSearch';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="top-header">
        <div className="container">
          <div className="header-sosial-icons">
            <FaFacebook />
            <FaSquareTwitter />
            <FaInstagram />
            <FaGoogle />
          </div>
          <div className="header-text">
            <a type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
              My Account
            </a>
          </div>
        </div>
      </nav>
      <nav className="navbar-item">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <img src="/images/icons/icon-msm.png" alt="" />
          </NavLink>
          <div className="navbar-link">
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>
                <select name="" style={{ border: 'none', outline: 'none', width: '105px' }}>
                  <option value="">Category</option>
                  <option value="">Iphone</option>
                  <option value="">Ipad</option>
                  <option value="">Accesories</option>
                  <option value="">Laptop</option>
                  <option value="">Smartphone</option>
                </select>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
              </li>

              <li>
                <FaCartShopping type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart" />
              </li>
              <li>
                <div className="search-input">
                  <input type="text" placeholder="search" />
                  <IoSearch />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="nav-mobile">
        <div className="container">
          <div className="nav-bar">
            <FaBars data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" />
          </div>
          <NavLink to="/" className="navbar-brand">
            <img src="/images/icons/icon-msm.png" alt="" />
          </NavLink>
          <div className="cart-search">
            <FaCartShopping type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart" />
            <IoSearch type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch" />
          </div>
        </div>
      </nav>
      <nav className="nav-mobile-bottom">
        <div className="container">
          <ul className="mobile-bottom-items">
            <li>
              <IoHome />
              <span>Home</span>
            </li>
            <li type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
              <IoSearch />
              <span>Search</span>
            </li>
            <li type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
              <FaCartShopping />
              <span>Cart</span>
            </li>
            <li type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
              <IoPerson />
              <span>Account</span>
            </li>
          </ul>
        </div>
      </nav>

      {/* offcanvas Cart */}
      <CartShooping />
      {/* offcanvas Cart */}
      {/* offcanvas search */}
      <OffcanvasSearch />
      {/* offcanvas search */}

      {/* ofcanvas bar */}
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            <img src="/images/icons/icon-msm.png" alt="" width={'150px'} />
          </h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <ul className="canvas-link">
          <li>Home</li>
          <li>Shop</li>
          <li>Categories</li>
          <li>Products</li>
        </ul>
        <div className="my-account">
          <Button variant="black">
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }} type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
              <IoPerson style={{ fontSize: '18px' }} /> Log in
            </span>
          </Button>
          <Button variant="outline-blue" style={{ marginTop: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }} type="button" data-bs-toggle="modal" data-bs-target="#registerModal">
              Register
            </span>
          </Button>
        </div>
      </div>

      {/* ofcanvas */}

      {/* modal login  */}
      <ModalLogin />
      {/* modal register  */}
      <ModalRegister />
      {/* modal reset password  */}
      <ModalResetPass />
    </>
  );
}
