import './components/css/bootstrap-datepicker.min.css'
import './components/css/bootstrap.min.css'
import './components/css/main.css'
import React from 'react'
import { Routes, Route,  } from "react-router-dom";

import Home from './components/home/Home'
import Corporate from './components/corporate/Corporate.js'
import Addon from './components/addon/Addon'
import Offer from './components/offer/Offer'
import Makepayment from './components/makepayment/Makepayment'
export default function App() {
  return (
    <div>

<Routes>

       <Route path="/" element={ <Home/>} />
        <Route path="/Offer" element={ <Offer />} />
        <Route path="/Corporate" element={ <Corporate />} />
        <Route path="/Addon" element={ <Addon />} />
        <Route path="/Makepayment" element={ <Makepayment />} />
      </Routes>


    </div>
  )
}
