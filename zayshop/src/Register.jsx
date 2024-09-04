import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {

    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Users, setUsers] = useState("")

    const navigate = useNavigate()

   useEffect(()=>{
    fetch('http://localhost:8000/user')
    .then((res)=>{return res.json()})
    .then((data)=>{
      setUsers(data)
    })
   },[])

    const HandleSubmit = (e)=>{
        e.preventDefault()
        
         const UserCheck = Users.find((user)=> user.email == email);

         if(fname == "" || lname == "" || email == "" || password == "") {
             alert("INPUTS EMPTY")
         }       
         else if (UserCheck) {
               alert("EMAIL ALREADY EXISTS")
         } else{
          fetch('http://localhost:8000/user', {
            method: "post",
            headers: { "content-type": "application" },
            body: JSON.stringify({fname, lname, email, password})
          }).then((res)=>{
            if (res) {
              alert("Registration Succesfull")
              navigate("/login")
            }
          })
        }
          
              
            
          
        
       
      
    }
  return (
    <>
    <section className="vh-100 gradient-custom">
  <div className="container  h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}} >
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form onSubmit={HandleSubmit}>

              <div className="row">
                <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline">
                    <input required type="text" onChange={(e)=>{
        setFname(e.target.value)}} value={fname} id="firstName" className="form-control form-control-lg" />
                    <label className="form-label" for="firstName">First Name</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4">

                  <div data-mdb-input-init className="form-outline">
                    <input required type="text" onChange={(e)=>{
        setLname(e.target.value)}} value={lname} id="lastName" className="form-control form-control-lg" />
                    <label className="form-label" for="lastName">Last Name</label>
                  </div>

                </div>
              </div>

              
               
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div data-mdb-input-init className="form-outline">
                    <input required type="email" onChange={(e)=>{
        setEmail(e.target.value)}} value={email} id="emailAddress" className="form-control form-control-lg" />
                    <label className="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
                <div className="col-md-6 mb-4 pb-2">

                  <div data-mdb-input-init className="form-outline">
                    <input required type="password" onChange={(e)=>{
        setPassword(e.target.value)}} value={password} id="password" className="form-control form-control-lg" />
                    <label className="form-label" for="password">Password</label>
                  </div>

                </div>
              </div>

             

              <div className=" pt-2">
                <input data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
            <div className="back pt-4">
                <span>Go back to </span><Link to="/login">Login page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Register