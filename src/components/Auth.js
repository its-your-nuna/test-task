
import React, { useRef, useState } from "react"
import { Navigate } from 'react-router'; 
import axios from "axios";
import Alert1 from "./Alert1";
import { useDispatch, useSelector } from "react-redux";
import GoogleLogin from "react-google-login";
//Auth Component with 2 returns (signin,signup)
export const Auth = ({setEmail,user,setIsAutharized})=> {
  const dispatch = useDispatch()
  const [showAlert,setShowAlert]=useState(false)
  // if googleMode is true remove password input from login
  const [googleMode,setGoogleMode]=useState(false)
  //alert style variant
  const[variant,setVariant]=useState('')
  let [authMode, setAuthMode] = useState("signin")
  //if authorization is success
  const [isSuccess,setIsSuccess]=useState(false)
  const[firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const passwordRef = useRef(null)
  const emailRef = useRef(null)
  
  //function for show the authorization 
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  //google button register
  const responseGoogle = (response) => {
    dispatch({
      type:"REGISTER",
      id:response.gv.OX,
      avatar:'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg',
      email: response.gv.Tv,
      password: response.gv.OX,
      first_name: response.gv.gZ,
      last_name: response.gv.tX
    })
    console.log(response);
    setGoogleMode(true)
    setShowAlert(true)
    setVariant('success')
    setTimeout(()=>
      {
        setAuthMode('signin')
        setShowAlert(false)
      },2000
    )
  };
  //google button login
  const loginGoogle = (response) => {
    user.map((user)=>{
      console.log('email',user.email)
      //if email from registration exists in login
      if(user.email===response.gv.Tv){
        // set current autharized user email
        setEmail(response.gv.Tv)
        // show alert if successfully login
        setShowAlert(true)
        setVariant('success')
        setIsAutharized(true)
        //after 2 second close alert
        setTimeout(()=>
        {
          setShowAlert(false)
        },2000
      )
      setIsSuccess(true)
      console.log('login')
      }else{
        //if registration failed, show warning with dangerous option
        setShowAlert(true)
         setVariant('danger')
         console.log(user.email,emailRef.current.value,'not login')
      }
    })
  };
  const signUp = ()=>{

    user.map((user)=>{
      console.log('email',user.email)
      // if email from registration exists in login input
      if(user.email===emailRef.current.value){
        // set current autharized user email
        setEmail(emailRef.current.value)
        // show alert if successfully login
        setShowAlert(true)
        setVariant('success')
        setIsAutharized(true)
        //after 2 second close alert
        setTimeout(()=>
        {
          setShowAlert(false)
        },2000
      )
      setIsSuccess(true)
      console.log('login')
      }else{
        //if do not successfully register show alert with danger variant
        setShowAlert(true)
         setVariant('danger')
         console.log(user.email,emailRef.current.value,'not login')
      }
    })
  }
  const register=()=>{
    // if inputs exist, add to user's list

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
 
  }
  //if successfully login open home page
  if(isSuccess===true){
    return (
      <Navigate to="/home"/>
    )
  }
  //sigin mode
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
                onChange={e=>setEmail(e.target.value)
                }
              />
            </div>
            {!googleMode&&<div className="form-group mt-3">
              <label>Password</label>
              <input
                ref={passwordRef}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"

              />
            </div>}
            <GoogleLogin
    clientId="108490793456-0flm4qh8ek4cb4krt7e06980o4sjvado.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={loginGoogle}
    onFailure={loginGoogle}
    cookiePolicy={"single_host_origin"}
  />
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
  // register mode
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
          <GoogleLogin
      clientId="108490793456-0flm4qh8ek4cb4krt7e06980o4sjvado.apps.googleusercontent.com"
      buttonText="Register"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    cookiePolicy={"single_host_origin"}
  />
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