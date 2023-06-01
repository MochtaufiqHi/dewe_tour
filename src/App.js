import {BrowserRouter as Router, Routes, Route, useParams, redirect, Outlet, Navigate} from 'react-router-dom'
import { useState } from 'react'

import './App.css'

import Home from './pages/Home'
import Detail from './pages/Detail'
import Payment  from './pages/Payment'
import Profile from './pages/Profile'
import Transaction from './pages/Transaction'
import FormAddTrip from './pages/FormAddTrip'
import Navigation from './components/Navbar/Navbar'
import IncomeTrip from './pages/IncomeTrip'
import WaitingPayment from './pages/WaitingPayment'
// import PrivateRoute from './pages/PrivateRoute'

const login = JSON.parse(localStorage.getItem('data'))

const JamesBond077 = ({ isUser, redirectPath = '/' }) => {
  if(!isUser) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}


function App() {
  const [payment, setPayment] = useState()

  const handlePayment = (e) => {
    setPayment(e)
  }
  
  console.log(payment)
  
  const [dataUser, setDataUser] = useState({
    user: false,
    admin: false,
  })

  return (
    <>
      <Router>
        <div className='home-pages'>
          <Navigation />
          <div className=''>
            <Routes>

              <Route exact path='/' element={<Home/>} />
              <Route exact path='/detail/:id' element={<Detail handlePayment={handlePayment} />} />
               
                <Route element={<JamesBond077 isUser={login?.isLogin}/>}>
                  <Route exact path='/waiting-payment' element={<WaitingPayment />} />
                  <Route exact path='/payment' element={<Payment  payment={payment}/>} />
                  <Route exact path='/profile' element={<Profile />} />
                </Route>

                <Route element={<JamesBond077 isUser={login?.isAdmin}/>}>
                  <Route exact path='/transaction' element={<Transaction />} />
                  <Route exact path='/income-trip' element={<IncomeTrip />} />
                  <Route exact path='/add-trip' element={<FormAddTrip />} />
                </Route>

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
