import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer pt-5 bg-dark text-light">
        <div className="container">
            <div className="row">
                <div className="col-4 text-start">
                    <h3 className='text-success'>Zay Shop</h3>
                    <hr />
                    <div>
                    <i className="fa-solid fa-location-dot me-2"></i>
                    <span>123 Consectetur at ligula 10660</span>
                    </div>
                    <div className='my-3'>
                    <i className="fa-solid fa-envelope me-2"></i>
                    <a href='' className='text-light text-decoration-none'>info@zayshop.com</a>
                    </div>
                    <div>
                    <i className="fa-solid fa-phone me-2"></i>
                    <a href='' className='text-light text-decoration-none'>010-2233-4040</a>
                    </div>
                </div>
                <div className="col-4 text-start">
                    <h3>Products</h3>
                    <hr />
                   <ul className='p-0'>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Luxury</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Sports Wear</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Men's Shoes</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Women's Shoes</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Popular Dress</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Gym Accesories</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Sports Shoes</a></li>
                   </ul>
                </div>
                <div className="col-4">
                    <h3>Further info</h3>
                    <hr />
                    <ul className='p-0'>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Home</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">About Us</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Shop Locations</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">FAQs</a></li>
                    <li className='list-group-item mt-2'><a className='text-light text-decoration-none' href="">Contact</a></li>
                   </ul>
                </div>
            </div>
            <hr />
            <div className="row py-4">
                <div className="col-6 d-flex">
                    <div className="icons border rounded-circle px-2 me-2 py-2">
                    <a href='' className='text-light'> <i className="fa-brands fa-facebook fs-5"></i></a>
                    </div>
                    <div className="icons border rounded-circle px-2 me-2 py-2">
                    <a href='' className='text-light'><i className="fa-brands fa-instagram fs-5"></i></a>
                    </div>
                    <div className="icons border rounded-circle px-2 me-2 py-2">
                    <a href='' className='text-light'><i className="fa-brands fa-x-twitter fs-5"></i></a>
                    </div>
                    <div className="icons border rounded-circle px-2 me-2 py-2">
                    <a href='' className='text-light'><i className="fa-brands fa-linkedin fs-5"></i></a>
                    </div>
                </div>
                <div className="col-6 text-end">
                    <input className='bg-dark' type="email" />
                    <button className="bg-success text-light rounded-end">Subscribe</button>
                </div>
            </div>
        </div>
    </div>
    <div className="Foot bg-dark-subtle py-3">
                <div className="container">
                <span>Copyright © 2021 Company Name | Designed by TemplateMo</span>
                </div>
            </div>
    </>
  )
}

export default Footer