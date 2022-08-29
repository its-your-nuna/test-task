
import React, { useRef, useState } from "react"
import { Navigate } from 'react-router'; 
import axios from "axios";
import Alert1 from "./Alert1";

export const Auth = ({setEmail})=> {
  const [showAlert,setShowAlert]=useState(false)
  const[variant,setVariant]=useState('')
  let [authMode, setAuthMode] = useState("signin")
  const [isSuccess,setIsSuccess]=useState(false)
  const passwordRef = useRef(null)
  const fullNameRef = useRef(null)
  const emailRef = useRef(null)
  
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  
  const signUp = ()=>{
    console.log('login')
    axios.post('https://reqres.in/api/login',{
    email: emailRef.current.value,
    password: passwordRef.current.value
  })
  .then(function (response) {
    setEmail(emailRef.current.value)
    setShowAlert(true)
    setVariant('success')
    console.log(response.data);
    setTimeout(()=>
      {
        setIsSuccess(true)
        setShowAlert(false)
      },2000
    )
  })
  .catch(function (error) {
    setShowAlert(true)
    setVariant('danger')
    console.log(error);
  })
  }
  const register=()=>{

    console.log('register')
    axios.post('https://reqres.in/api/register',{
    email: emailRef.current.value,
    password: passwordRef.current.value
  })
  .then(function (response) {
    if(fullNameRef&&emailRef&&passwordRef){
      setShowAlert(true)

      setVariant('success')
      setTimeout(()=>
        {
          console.log('timer')
          setAuthMode('signin')
          setShowAlert(false)
        },2000
      )
    }
    else{
      setShowAlert(true)
      setVariant('danger')
    }
   
  })
  .catch(function (error) {
    setShowAlert(true)
    setVariant('danger')
    console.log(error);
    
 }
 ) 
  }
  
  if(isSuccess===true){
    return (
      <Navigate to="/home"/>
    )
  }
  if (authMode === "signin") {
    return (
      <>
      <Alert1 variant={variant}
         setShowAlert={setShowAlert} showAlert={showAlert}/>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Login</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                ref={emailRef}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                ref={passwordRef}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"

              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" onClick={()=>signUp()} className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
      </>
    )
  }

  return (
    <>
    <Alert1 variant={variant}
         setShowAlert={setShowAlert} showAlert={showAlert}/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
            ref={fullNameRef}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              ref={emailRef}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              ref={passwordRef}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" onClick={()=>register()} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}