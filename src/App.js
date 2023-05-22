import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import { useState } from 'react'

import './App.css'
// import logo from './assets/hero.png'

// import Navbar from 'react-bootstrap/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Payment  from './pages/Payment'
import Profile from './pages/Profile'
import Transaction from './pages/Transaction'
import FormAddTrip from './pages/FormAddTrip'
import Navigation from './components/Navbar/Navbar'
import IncomeTrip from './pages/IncomeTrip'
import WaitingPayment from './pages/WaitingPayment'
import PrivateRouteAdmin from './pages/PrivateRouteAdmin'
import PrivateRouteUser from './pages/PrivateRouteUser'

function App() {
  // window.scrollTo(0,0)
  // const { id } = useParams()
  // console.log(id)

  // const isLogin = true

  // const [isLogin, setIsLogin] = useState(false)

  // const [isAdmin, setIsAdmin] = useState(true)

  // const handleLogin = (data) => {
  //   setIsLogin(data)
  // }

  // const handleAdmin = (data) => {
  //   setIsAdmin(data)
  // }
  const [payment, setPayment] = useState()

  const handlePayment = (e) => {
    setPayment(e)
  }
  
  console.log(payment)

  return (
    <>
      <Router>
        <div className='home-pages'>
          <Navigation />
          <div className=''>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/detail/:id' element={<Detail handlePayment={handlePayment} />} />

                <Route exact path='/transaction' element={<Transaction />} />
                <Route exact path='/income-trip' element={<IncomeTrip />} />
                <Route exact path='/add-trip' element={<FormAddTrip />} />
                <Route exact path='/waiting-payment' element={<WaitingPayment />} />
                <Route exact path='/payment' element={<Payment  payment={payment}/>} />
                <Route exact path='/profile' element={<Profile />} />

              {/* <Route exact path='/' element={<PrivateRoute />}> */}
              {/* </Route> */}

            </Routes>
          </div>
        </div>
        <div className="footer my-2">
          <p className='footer-item'>Copyright @2020 Dewe Tour - Mochammad Taufiq Hidayat - NIS.All Rights reserved</p>  
        </div>
      </Router>
    </>    
  );
}

export default App;
