import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [User, SetUser] = useState("")

    const nav =  useNavigate()
   
    useEffect(()=>{
      fetch('http://localhost:8000/user')
      .then((res)=>{return res.json()})
      .then((data)=>{
        SetUser(data)
      })
     },[])

    const handleSubmit = (e)=>{
        e.preventDefault()

            const emailVerification  = User.find((user)=> user.email == email);
            const passwordchecker = User.find((user)=> user.password == password);
           
            if(emailVerification && passwordchecker){
             alert("Registration Successfull")
             nav("/")
            }
         else
        {
            alert("incorrect deatils")
           }
       
    

    };
  return (
    <>
    <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form onSubmit={handleSubmit}>
          {/* <!-- Email input --> */}
          <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form1Example13">Email address</label>
            <input type="email" onChange={(e)=>{
        setEmail(e.target.value)}} value={email} placeholder='Email Address' id="form1Example13" className="form-control form-control-lg" />
          </div>

          {/* <!-- Password input --> */}
          <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" for="form1Example23">Password</label>
            <input type="password" onChange={(e)=>{
        setPassword(e.target.value)}} value={password} placeholder='Password' id="form1Example23" className="form-control form-control-lg" />
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            {/* <!-- Checkbox --> */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-block">Sign in</button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a data-mdb-ripple-init className="btn d-block btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"}} href="#!"
            role="button">
            <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
          <a data-mdb-ripple-init className="btn d-block mt-3 btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} href="#!"
            role="button">
            <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>
            
        </form>
       <div className="reg pt-3">
       <span>Do not have Account</span> <Link to="/register">register here.</Link>
       </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Login