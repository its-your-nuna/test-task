
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Auth} from "./components/Auth"
import { useEffect,useState } from "react"
import Alert1 from "./components/Alert1"
import { Home } from "./components/Home"
import NavScrollExample from "./components/Navbar"
import { User } from "./components/User"
import { NotFoundPage } from "./components/NotFoundPage"
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [email,setEmail] = useState(null)
  const [currentUser,setCurrentUser]=useState('')
  const [autharizedUser,setAutharizedUser] = useState('')
  const user = useSelector(state=>state.users)
  console.log(user)
  return (
    <BrowserRouter>
      <NavScrollExample setEmail={setEmail}/>
      <Routes>
      <Route path="/" element={null}/>
      <Route path="/home" element={<Home user={user} email={email} setCurrentUser={setCurrentUser} 
      setAutharizedUser={setAutharizedUser}/>}/>
      <Route path="/auth" element={<Auth user={user}  setEmail={setEmail} email={email}/>} />
      <Route path="/user" element={<User currentUser={currentUser} autharizedUser={autharizedUser}/>} />
      <Route path="/404"  element={<NotFoundPage/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App