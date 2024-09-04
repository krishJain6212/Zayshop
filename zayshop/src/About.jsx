import React from 'react'
import Abouthero from './assets/img/about-hero.svg'
import levis from './assets/img/brand_01.png'
import addidas from './assets/img/brand_02.png'
import nike from './assets/img/brand_03.png'
import hm from './assets/img/brand_04.png'
function About() {
  return (
    <>
    <section className='bg-success py-5'>
       <div className="container py-5">
        <div className="row">
            <div className="col-8 m-auto text-light">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-4">
                <img src={Abouthero} alt="" />
            </div>
        </div>
       </div>
    </section>

    <section className='text-center py-5'>
    <div className="cat-heading">
        <span className='Container-heading'>Our Services</span>
        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      </div>

      <div className="container">
        <div className="grid gap-3 d-flex">
            <div className=" Service-div g-col-3 p-5 w-100">
            <i className="fa-solid fa-truck d-block I-des  pb-2"></i>
            <span className='fw-bold'>Delivery Services</span>
            </div>
            <div className=" Service-div g-col-3 p-5 w-100">
            <i className="fa-solid fa-arrow-right-arrow-left d-block I-des  pb-2"></i>
            <span className='fw-bold'>Delivery Services</span>
            </div>
            <div className=" Service-div g-col-3 p-5 w-100">
            <i className="fa-solid fa-percent d-block I-des pb-2"></i>
            <span className='fw-bold'>Delivery Services</span>
            </div>
            <div className=" Service-div g-col-3 p-5 w-100">
            <i className="fa-solid fa-user d-block I-des pb-2"></i>
            <span className='fw-bold'>Delivery Services</span>
            </div>
        </div>
      </div>
    </section>

    <section className='Brands text-center py-5'>
    <div className="cat-heading">
        <span className='Container-heading'>Our Brands</span>
        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      </div>

        <div className="Brand-logos px-5 ">
          <div className="container  px-5 ">
            <ul className='d-flex B-logos align-items-center m-auto w-75'>
              <li className='list-group-item w-25'>
                <img src={levis} alt="" width={200} />
              </li>
              <li className='list-group-item w-25'>
                <img src={addidas} alt="" width={200} />
              </li>
              <li className='list-group-item w-25'>
                <img src={nike} alt="" width={200} />
              </li>
              <li className='list-group-item w-25'>
                <img src={hm} alt="" width={200} />
              </li>
            </ul>
          </div>
          </div>         
    </section>
    </>
  )
}

export default About