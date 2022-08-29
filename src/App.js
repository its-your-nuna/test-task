
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Auth} from "./components/Auth"
import { useRef,useState } from "react"
import Alert1 from "./components/Alert1"
import { Home } from "./components/Home"
import NavScrollExample from "./components/Navbar"
import { User } from "./components/User"


function App() {
  const [email,setEmail] = useState(null)
  const [currentUser,setCurrentUser]=useState('')
  const [autharizedUser,setAutharizedUser] = useState('')
  return (
    <BrowserRouter>
    <NavScrollExample setEmail={setEmail}/>
      <Routes>
      <Route path="/" element={null}/>
      <Route path="/home" element={<Home email={email} setCurrentUser={setCurrentUser} 
      setAutharizedUser={setAutharizedUser}/>}/>
      <Route path="/auth" element={<Auth setEmail={setEmail}/>} />
      <Route path="/user" element={<User currentUser={currentUser} autharizedUser={autharizedUser}/>} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App