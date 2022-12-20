import React from 'react'
import Booking from '../booking/Booking'
import Faq from '../faq/Faq'
import Footer from '../footer/Footer'


import Header from './Header'
import Sidebar from './Sidebar'
import Slider from './Slider'



function Home() {
  return (
	<>

  <Sidebar/>
	<div className="outer-wraper">
  <Header/>
		<div className="inner-main">
         <Slider/>
		
		<Booking/>
		<Faq/>
		</div>
    <Footer/>
	</div>
	</>
  )
}

export default Home
