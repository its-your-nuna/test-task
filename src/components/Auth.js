
import React, { useRef, useState } from "react"
import { Navigate } from 'react-router'; 
import axios from "axios";
import Alert1 from "./Alert1";
import { useDispatch, useSelector } from "react-redux";

export const Auth = ({setEmail,user})=> {
  const dispatch = useDispatch()
  const [showAlert,setShowAlert]=useState(false)
  const[variant,setVariant]=useState('')
  let [authMode, setAuthMode] = useState("signin")
  const [isSuccess,setIsSuccess]=useState(false)
  const[firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const passwordRef = useRef(null)
  const emailRef = useRef(null)
  

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  
  const signUp = ()=>{
    user.map((user)=>{
      console.log('email',user.email)
      if(user.email===emailRef.current.value){
        setEmail(emailRef.current.value)
        setShowAlert(true)
        setVariant('success')
        setTimeout(()=>
        {
          setShowAlert(false)
        },2000
      )
      setIsSuccess(true)
      console.log('login')
      }else{
        setShowAlert(true)
         setVariant('danger')
         console.log(user.email,emailRef.current.value,'not login')
      }
    })
  }
  const register=()=>{
    if(firstName&&lastName&&emailRef.current.value&&passwordRef.current.value){
    dispatch({
      type:"REGISTER",
      id:passwordRef.current.value,
      avatar:'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg',
      email: emailRef.current.value,
      password: passwordRef.current.value,
      first_name: firstName,
      last_name: lastName
    })
      setShowAlert(true)
      setVariant('success')
      setTimeout(()=>
        {
          setAuthMode('signin')
          setShowAlert(false)
        },2000
      )
    }
    else{
      setShowAlert(true)
      setVariant('danger')
    }
      

    
    
  //   axios.post('https://reqres.in/api/register',{
  //   email: emailRef.current.value,
  //   password: passwordRef.current.value
  // })
  // .then(function (response) {
  //   if(emailRef&&passwordRef){
  //     setShowAlert(true)

  //     setVariant('success')
  //     setTimeout(()=>
  //       {
  //         console.log('timer')
  //         setAuthMode('signin')
  //         setShowAlert(false)
  //       },2000
  //     )
  //   }
  //   else{
  //     setShowAlert(true)
  //     setVariant('danger')
  //   }
   
//   })
//   .catch(function (error) {
//     setShowAlert(true)
//     setVariant('danger')
//     console.log(error);
    
//  }
//  ) 
  }
  console.log('u',user)
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
            <label>First Name</label>
            <input
              onChange={e=>setFirstName(e.target.value)}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              onChange={e=>setLastName(e.target.value)}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Doe"
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