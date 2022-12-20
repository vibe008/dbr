import React from 'react'
import Booking from '../booking/Booking'
import Faq from '../faq/Faq'
import Header from '../home/Header'
import Sidebar from '../home/Sidebar'
import Slider from '../home/Slider'

function Corporate() {
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
	</div>
    </>
  )
}

export default Corporate
