import React from 'react'

export default function Contact() {
  return (
    <>
    <section className='C-section text-center'>
    <div className="contact-heading py-5">
        <span className='Container-heading'>Contact Us</span>
        <p>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
      </div>
    </section>
    <section className='map'>
        <embed className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d588.8957452154459!2d72.55684585976292!3d23.025714700513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84faa5a36071%3A0x9af325a448f09478!2sTOPS%20Technologies%20-%20Best%20IT%20Training%20Institute%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1721837536153!5m2!1sen!2sin" type="" />
    
    </section>

    <section className='Form px-5 py-5 '>
        <form className=' px-5' action="">
            <div className="container px-5">
                <div className="grid gap-4 d-flex">
                    <div className="g-col-6 w-100">
                        <label className='d-block fs-4' htmlFor="">Name</label>
                        <input className='w-100 p-2' type="text" placeholder='Name' name="" id="" />
                    </div>
                    <div className="g-col-6 w-100">
                    <label className='d-block fs-4' htmlFor="">Email</label>
                        <input className='w-100 p-2' type="email" placeholder='Email' name="" id="" />
                    </div>
                   
                </div>
                <div className="col-12 pt-2 w-100">
                    <label className='d-block fs-4' htmlFor="">Subject</label>
                    <input className='p-2 w-100' type="text" placeholder='Subject' />
                    </div>
                    <div className="col-12 w-100">
                    <label className='d-block fs-4' htmlFor="">Message</label>
                    <textarea placeholder='Message' className='w-100' name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className='text-end'>
                    <button className="btn btn-success ">Let's Talk</button>
                    </div>
                    
            </div>
        </form>
    </section>
    </>
  )
}
