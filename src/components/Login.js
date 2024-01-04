import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [creds, setcreds] = useState({email:"",password:""})
  const [error, seterror] = useState(false)
  const [completed,setcompleted] = useState(false)
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault()
    // login the user and set the local storage data  
    try {
      const response = await fetch('http://localhost:5000/api/auth/login',
      {
        method:'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email:creds.email,password:creds.password})
      }
      )

      const json = await response.json()
      if (json.error) {seterror(true)}
      if (json.authtoken) {
        localStorage.setItem('token',json.authtoken)
        console.log(localStorage.getItem('token'))
        seterror(false)
        setcompleted(false)
        navigate('/')
    }

    } catch (error) {
      seterror(true)

    }
  }

  const valchange = (e) => {
    setcreds({...creds,[e.target.name]:e.target.value})

  }
    return (
        <div className='container mt-3'>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className={`form-control ${error && completed ? 'is-invalid' : '' }`} id="email" name="email"  value={creds.email} onChange={valchange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">{`${error? "Please Check your creds" : "We'll never share your email with anyone else."}`}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className={`form-control ${error && completed ? 'is-invalid' : '' }`} id="password"  value={creds.password} onChange={valchange} name="password" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary" >Login</button>
        </form>
      </div>
    )
  }
    

export default Login
