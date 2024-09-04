import React from 'react'
import img01 from './assets/img/shop_01.jpg'
import img02 from './assets/img/shop_02.jpg'
import img03 from './assets/img/shop_03.jpg'
import img04 from './assets/img/shop_04.jpg'
import img05 from './assets/img/shop_05.jpg'
import img06 from './assets/img/shop_06.jpg'
import img07 from './assets/img/shop_07.jpg'
import img08 from './assets/img/shop_08.jpg'
import img09 from './assets/img/shop_09.jpg'
function Shop() {

  return (
    <>
    <section className='py-5'>
        <div className="container">
        <div className="grid d-flex">
            <div className="g-col-4 w-25">
               <div className="Heading">
                <h2 className='fw-light'>Categories</h2>
               </div>
               
              <div className="Accord">
              <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Gender
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <p>Men</p>
        <p>Women</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Sale
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <p>Sport</p>
        <p>Luxury</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Product
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <p>Bag</p>
        <p>Sweater</p>
        <p>Sunglasses</p>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>


            <div className="g-col-8 w-75 px-3">
              <div className="grid d-flex">
                <div className="g-col-4 w-100">
                    <a className='fs-4 text-black text-decoration-none' href="">All</a>
                    <a className='mx-3 fs-4 text-black text-decoration-none' href="">Mens</a>
                    <a className='fs-4 text-black text-decoration-none' href="">Womens</a>
                </div>
                <div className="g-col-4 text-end w-100">
               <select className='w-100' name="" id="">
                <option selected value="">Featured</option>
                <option value="">Two</option>
                <option value="">Three</option>
               </select>
                </div>
              </div>
              <div className="Cards py-3">
                <div className="row g-4 ">
                   <div className="col-4">
                   <div className="card" >
  <img src={img01} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                   <div className="col-4">
                   <div className="card" >
  <img src={img02} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                   <div className="col-4">
                   <div className="card" >
  <img src={img03} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                   <div className="col-4">
                   <div className="card" >
  <img src={img04} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                   <div className="col-4">
                   <div className="card" >
  <img src={img05} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                   <div className="col-4">
                   <div className="card" >
  <img src={img06} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                   <div className="col-4">
                   <div className="card" >
  <img src={img07} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                   <div className="col-4">
                   <div className="card" >
  <img src={img08} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                   <div className="col-4">
                   <div className="card" >
  <img src={img09} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Oupidatta non</h5>
    <p className="card-text">M/L/X/XL</p>
    <a href="#" className="btn btn-warning">Add to cart</a>
  </div>
</div>
                   </div>
                </div>
              </div>
              <div className="Pages text-end">
              <div className="btn-group" role="group" aria-label="Basic outlined example">
  <button type="button" className="btn btn-outline-primary">1</button>
  <button type="button" className="btn btn-outline-primary">2</button>
  <button type="button" className="btn btn-outline-primary">3</button>
</div>
            </div>
            </div>
         </div>
        </div>
    </section>
    </>
  )
}

export default Shop