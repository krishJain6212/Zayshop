import React from 'react'
import logo from './assets/img/logo.png'
import { Link } from 'react-router-dom'
export default function() {
  return (
    <>
    <div className='Head-info'>
     <div className='Head-container align-items-center py-2 px-5 bg-dark text-light w-100 d-flex flex-nowrap'>
          <div className="left align-items-center w-50 d-flex flex-nowrap ">
            <div className="Email d-flex align-items-center">
            <i className="fa-solid fa-envelope mx-1"></i>
            <a href='' className='text-light'>info@zayshop.com</a>
            </div>
            <div className="contact mx-3 align-items-center d-flex flex-nowrap">
            <i className="fa-solid fa-phone mx-1"></i>
            <a href='' className='text-light'>010-2233-4040</a>
            </div>
          </div>
          <div className="right-containe w-50">
            <div className="Social-media d-flex justify-content-end">
                <div className="facebook mx-1">
                  <a href='' className='text-light'> <i className="fa-brands fa-facebook mx-1"></i></a>
                </div>
                <div className="insta">
                  <a href='' className='text-light'><i className="fa-brands fa-instagram mx-1"></i></a>
                </div>
                <div className="twitter">
                <a href='' className='text-light'><i className="fa-brands fa-x-twitter mx-1"></i></a>
                </div>
                <div className="linkedin">
                <a href='' className='text-light'><i className="fa-brands fa-linkedin mx-1"></i></a>
                </div>
            </div>
          </div>
        </div>
    </div>

    <div className="Navbar">
        <div className="Nav-container container d-flex ">
          <div className="Logo col-3">
            <img src={logo} alt="" width={80} />
          </div>
          <div className="Links text-center my-auto col-6">
            <Link className='Link fs-3 fw-4 ms-5 text-dark text-decoration-none' to="/">Home</Link>
            <Link className='Link fs-3 fw-4 ms-5 text-dark text-decoration-none' to="/about">About</Link>
            <Link className='Link fs-3 fw-4 ms-5 text-dark text-decoration-none' to="/shop">Shop</Link>
            <Link className='Link fs-3 fw-4 ms-5 text-dark text-decoration-none' to="/contact">Contact</Link>
          </div>
          <div className="Right-component col-3 d-flex align-items-center justify-content-end">
            <div className="search">
            <Link className='text-dark fs-5'><i className="fa-solid fa-magnifying-glass"></i></Link>
            
            </div>
            <div className="cart mx-3">
            <Link className='text-dark fs-5'> <i className="fa-solid fa-cart-shopping"></i></Link>
          
              </div>
            <div className="user">
            <Link className='text-dark fs-5' to="/login"><i className="fa-solid fa-user"></i></Link>
              
              </div>
          </div>
        </div>
    </div>
    </>
  )
}

