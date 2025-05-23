import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import News from './pages/News'
import ForgotPassword from './pages/ForgotPassword'

function App() {
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/> }>
            <Route path='/' element={<Home/>} />
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/news' element={<News/>}></Route>
            <Route path='/forgot-password' element={<ForgotPassword/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
