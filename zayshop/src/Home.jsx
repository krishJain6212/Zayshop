import React from 'react'
import catimg01 from './assets/img/catimg01.jpg'
export default function Home() {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel carousel-dark carousel-color slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">

    <div className="carousel-item active">

      <div className="container px-5 d-flex">

       <div className="left-container ps-5 col-6">
       <h2 className='text-success banner-head'>Zay eCommerce</h2>
           <h4>Tiny and Perfect eCommerce Template</h4>
          <p className='banner-para'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
       </div>
       <div className="right col-6 bg-dark">
       </div>
      </div>

    </div>
    <div className="carousel-item">
    <div className="container px-5 d-flex">

<div className="left-container ps-5 col-6">
<h2 className='text-black fw-1 banner-head'>Proident occaecat</h2>
    <h4>Tiny and Perfect eCommerce Template</h4>
   <p className='banner-para'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
</div>
<div className="right-2 col-6 bg-dark">
</div>
</div>
    </div>
    <div className="carousel-item">
    <div className="container px-5 d-flex">

<div className="left-container ps-5 col-6">
<h2 className='text-success banner-head'>Zay eCommerce</h2>
    <h4>Tiny and Perfect eCommerce Template</h4>
   <p className='banner-para'>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8.</p>
</div>
<div className="right-3 col-6 bg-dark">
</div>
</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

       {/* categories section starts */}
       <section className='text-center py-5'>
       <div className="cat-heading">
        <span className='Container-heading'>Categories of The Month</span>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="items-section">
        <div className="container py-5 ">
           <div className="row">
            <div className="col-4">
              <div className="container">
                <div className="img1 border border-primary rounded-circle bg-success  m-auto">
                 
                </div>
                <div className="item-name py-2">
                 <span className='fs-3 fw-medium'>Watches</span>
                </div>
                <button className='btn btn-success '>Go Shop</button>
              
              </div>
            </div>
            <div className="col-4">
              <div className="container">
                <div className="img2 border border-primary rounded-circle bg-success  m-auto">
                 
                </div>
                <div className="item-name py-2">
                <span className='fs-3 fw-medium'>Accessories</span>
                </div>
                <button className='btn btn-success '>Go Shop</button>
              </div>
            </div>
            <div className="col-4">
              <div className="container">
                <div className="img3 border border-primary rounded-circle bg-success  m-auto">
                 
                </div>
                <div className="item-name py-2">
                <span className='fs-3 fw-medium'>Shoes</span>
                </div>
                <button className='btn btn-success '>Go Shop</button>
              </div>
            </div>
           </div>
        </div>
      </div>
       </section>
      
       {/* categories section ends  */}

       {/* Featured product section start */}
       <section className=' f-section text-center py-5'>
       <div className="cat-heading">
        <span className='Container-heading'>Featured product</span>
        <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      </div>
      <div className="items-section">
        <div className="container py-5 ">
           <div className="grid d-flex gap-3">

            <div className="g-col-4 bg-light">
              <div className="container">
                <div className="fimg1  bg-success  m-auto">
                 
                </div>
                <div className="ratings py-2 fs-4 d-flex">
                  <div className="l-rating col-6">
                    <ul className='d-flex text-start p-0'>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item'><i className="fa-regular fa-star"></i></li>
                      <li className='list-group-item'><i className="fa-regular fa-star"></i></li>
                    </ul>
                  </div>
                  <div className="r-rating col-6 text-end">
                    <span className='text-secondary'>$240.00</span>
                  </div>
                </div>
                <div className="item-name text-start py-2">
                 <span className='fs-3  fw-medium'>Gym Weight</span>
                </div>
                <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.</p>
                <p className='text-start'>Reviews()</p>
              
              </div>
            </div>
            <div className="g-col-4 bg-light">
              <div className="container">
                <div className="fimg2 bg-success  m-auto">
                 
                </div>
                <div className="ratings py-2 fs-4 d-flex">
                  <div className="l-rating col-6">
                    <ul className='d-flex text-start p-0'>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item'><i className="fa-regular fa-star"></i></li>
                      <li className='list-group-item'><i className="fa-regular fa-star"></i></li>
                    </ul>
                  </div>
                  <div className="r-rating col-6 text-end">
                    <span className='text-secondary'>$240.00</span>
                  </div>
                </div>
                <div className="item-name text-start py-2">
                <span className='fs-3 fw-medium'>Cloud Nike Shoes</span>
                </div>
                <p className='text-start'>Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.</p>
                <p className='text-start'>Reviews()</p>
              </div>
            </div>
            <div className="g-col-4 bg-light">
              <div className="container">
                <div className="fimg3  bg-success  m-auto">
                 
                </div>
                <div className="ratings py-2 fs-4 d-flex">
                  <div className="l-rating col-6">
                    <ul className='d-flex text-start p-0'>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item text-warning'><i className="fa-solid fa-star"></i></li>
                      <li className='list-group-item'><i className="fa-regular fa-star"></i></li>
                      <li className='list-group-item'><i className="fa-regular fa-star"></i></li>
                    </ul>
                  </div>
                  <div className="r-rating col-6 text-end">
                    <span className='text-secondary'>$240.00</span>
                  </div>
                </div>
                <div className="item-name text-start py-2">
                <span className='fs-3 fw-medium'>Summer Addidas Shoes</span>
                </div>
                <p className='text-start'>Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.</p>
                <p className='text-start'>Reviews()</p>
              </div>
            </div>
           </div>
        </div>
      </div>
       </section>
       {/* Featured product section ends  */}

    </div>
  )
}
