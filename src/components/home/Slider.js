import React from 'react'



import img1 from '../Images/Parasailing-sn.png'
import img2 from '../Images/Parasailing-sn2.png'
import img3 from '../Images/Parasailing-sn3.png'
import img4 from '../Images/Parasailing-sn.png'
import img5 from '../Images/Parasailing-sn2.png'

import img11 from '../Images/Parasailing-sn.png'
import img21 from '../Images/Parasailing-sn2-mobile.png'
import img31 from '../Images/Parasailing-sn3-mobile.png'
import img41 from '../Images/Parasailing-sn-mobile.png'
import img51 from '../Images/Parasailing-sn2-mobile.png'

import cartlogo from '../Images/my-cart-img.png'


function Slider() {

const showCart = () =>{
	console.log("rg")
}
  return (
    <>
			<section className=''>
				<div className="banner-sliders owl-carousel owl-theme">
					<div className="item">
						<div className="banner-image">
							<img src={img1} alt="" className="desktop-image" title="" />
							<img src={img11} alt=""  className="mobile-image" title="" />
						</div>
					</div>
					<div className="item">
						<div className="banner-image">
						<img src={img2} alt="" className="desktop-image" title="" />
							<img src={img21} alt=""  className="mobile-image" title="" />
						</div>
					</div>
					<div className="item">
						<div className="banner-image">
						<img src={img3} alt="" className="desktop-image" title="" />
							<img src={img31} alt=""  className="mobile-image" title="" />
						</div>
					</div>
					<div className="item">
						<div className="banner-image">
						<img src={img4} alt="" className="desktop-image" title="" />
							<img src={img41} alt=""  className="mobile-image" title="" />
						</div>
					</div>
					<div className="item">
						<div className="banner-image">
						<img src={img5} alt="" className="desktop-image" title="" />
							<img src={img51} alt=""  className="mobile-image" title="" />
						</div>
					</div>
				</div>
			</section>

			{/* <OwlCarousel className='owl-theme' loop  nav>
			<div class='item'>
        <h4>1</h4>
    </div>
	<div class='item'>
        <h4>6</h4>
    </div>
    <div class='item'>
        <h4>7</h4>
    </div>
    <div class='item'>
        <h4>8</h4>
    </div>
    <div class='item'>
        <h4>9</h4>
    </div>
    <div class='item'>
        <h4>10</h4>
    </div>
    <div class='item'>
        <h4>11</h4>
    </div>
    <div class='item'>
        <h4>12</h4>
    </div>
			</OwlCarousel> */}
         <a href="" className="my-cart-trigger" id="myCartTrigger" onClick={showCart}><img src={cartlogo} alt="" /></a>
			
    </>
  )
}

export default Slider
