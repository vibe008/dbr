import React from 'react'
import { Link } from "react-router-dom"
function Sidebar() {

	const closeLeftMenu = () =>{
		console.log("eqde")
	}
  return (
    <>
      	  	<div className="sidebar-menu-wrapper" id="leftMenu">
		<a href="/" className="nav-close" value='' onClick={closeLeftMenu}><svg height="43" width="43" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.21 9.71000003v-4.96000003c0-.41421356-.3357864-.75-.75-.75-.4142135 0-.75.33578644-.75.75v4.96000003c0 1.10456947-.8954305 1.99999997-1.99999997 1.99999997h-4.96000003c-.41421356 0-.75.3357865-.75.75 0 .4142136.33578644.75.75.75h4.96000003c1.10456947 0 1.99999997.8954305 1.99999997 2v4.9600001c0 .4142135.3357865.75.75.75.4142136 0 .75-.3357865.75-.75v-4.9600001c0-1.1045695.8954305-2 2-2h4.9600001c.4142135 0 .75-.3357864.75-.75 0-.4142135-.3357865-.75-.75-.75h-4.9600001c-1.1045695 0-2-.8954305-2-1.99999997z" fill="#fff" transform="matrix(.70710678 .70710678 -.70710678 .70710678 12.46 -5.161101)"/></svg></a>
		<div className="sidebar-menu-inner">
			<h3>Menu</h3>  
			<ul id="menu-main-menu-en" className="primary-menu">
				<li id="" className="menu-item menu-item-type-post_type">
					<a >General Admission</a>
					</li>

				<li id="" className="menu-item menu-item-type-post_type">
					<Link to='/Offer' >Offers</Link>
					</li>

				<li id="" className="menu-item menu-item-type-post_type">
					<Link to='/corporate'  aria-current="page">Corporate
					</Link></li>

				<li id="" className="menu-item menu-item-type-post_type">
					<Link to="/Addon" >Add On</Link>
					</li>

				<li id="" className="menu-item menu-item-type-post_type">
					<Link to='/Makepayment' >Make Payment</Link>
				</li>
			</ul>
			<ul id="menu-secondary-menu-en" className="secondary-menu">
				<li id="" className="menu-item menu-item-type-post_type"><a href="https://www.dbr.sa/en/terms-conditions/">Terms &amp; Conditions</a></li>
				<li id="" className="menu-item menu-item-type-post_type"><a href="https://www.dbr.sa/en/privacy/">Privacy</a></li>
				<li id="" className="menu-item menu-item-type-post_type"><a href="https://www.dbr.sa/en/vat-registration-certificate/">VAT Registration Certificate</a></li>
			</ul>
			<p><a href="https://reservations.dbr.sa/?chain=18052&amp;hotel=65186" target="_blank" rel="noreferrer" className="button transparent">Book now</a></p>
			<div className="contact-info">
				<h5>Reservations</h5>
				<p className="tel-email"> <a className="tel" href="tel:+966 13 8999900">+966 13 8999900</a> <br/> 
					<a href="mailto:reservations@dbr.sa">reservations@dbr.sa</a>
				</p>
				<pre id="tw-target-text" className="tw-data-text tw-text-large tw-ta" dir="ltr" data-placeholder="Translation"><span className="Y2IQFc" lang="en">Half Moon Beach, P.O. 2423 <br/>News 31952<br/><br/> The Kingdom of Saudi Arabia</span></pre>
			</div>

		</div>
	</div>
    </>
  )
}

export default Sidebar
