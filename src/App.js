
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Auth } from "./components/Auth"
import { useEffect, useState } from "react"
import { Home } from "./components/Home"
import NavScrollExample from "./components/Navbar"
import { User } from "./components/User"
import { NotFoundPage } from "./components/NotFoundPage"
import { useSelector } from "react-redux";

function App() {
  // email of autharized user
  const [email, setEmail] = useState(null)
  const [currentUser, setCurrentUser] = useState('')
  // get users from reducer
  const user = useSelector(state => state.users)
  const [isAutharized, setIsAutharized] = useState(false)

  return (
    <BrowserRouter>
      <NavScrollExample isAutharized={isAutharized}  />
      <Routes>
        <Route path="/home" element={
          <Home user={user} email={email} setCurrentUser={setCurrentUser}
          />} />
        <Route path="/" element={
          <Auth user={user} setIsAutharized={setIsAutharized} setEmail={setEmail} email={email} />} />
        <Route path="/user" element={
          <User currentUser={currentUser} />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App