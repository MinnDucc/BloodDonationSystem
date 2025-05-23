import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/DefautPage/DefaultDetails/Home'
import Signin from './pages/LoginPage/Signin'
import Signup from './pages/SignupPage/Signup'
import Contact from './pages/DefautPage/DefaultDetails/Contact'
import News from './pages/DefautPage/DefaultDetails/Contact'
import ForgotPassword from './pages/ForgotPasswordPage/ForgotPassword'
import UserLayout from './layouts/UserLayout'
import RoutePrivate from './route/RoutePrivate'

function App() {
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/forgot-password' element={<ForgotPassword />}>
          </Route>
        </Route>


        <Route path='/user/*' element={<RoutePrivate>
          <UserLayout />
        </RoutePrivate>}>
          <Route path='home' element={<Home />} />
          <Route path='contact' element={<Home />}></Route>
          <Route path='historis' element={<Contact />}></Route>
          <Route path='news' element={<News />}></Route>
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
