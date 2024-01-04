import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
  
  const [creds, setcreds] = useState({name:"",email:"",password:""})
  const passwordcheck = useRef(null)
  const cpasswordcheck = useRef(null)
  const [passstate, setPassstate] = useState(true)
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    if (passwordcheck.current.value !== cpasswordcheck.current.value) {
      setPassstate(false)
    }
    if (passstate) {
      try {
        const response = await fetch("http://localhost:5000/api/auth/createuser",{
          method:'POST',
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({name:creds.name,email:creds.email,password:creds.password})
        })
        const json = await response.json()
        if (json.error) {
          console.log('useris not created failed to create user')
          props.alert(json.error,'danger')
      }
        if (json.authtoken) {
          console.log('created')
          props.alert('Account Created','success')
          navigate('/login')
        }

      } catch (error) {
        console.log(error)
      }

    }
  }

  const onchange = (e) => {
    setcreds({...creds,[e.target.name]:e.target.value})
  }

  return (
    <div>
       <div className='container mt-3'>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={creds.name} onChange={onchange} name="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email"  value={creds.email} onChange={onchange} aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" ref={passwordcheck} value={creds.password}onChange={onchange} name="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="cpassword" ref={cpasswordcheck} onChange={onchange} name="cpassword" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
    </div>
  )
}

export default Signup
