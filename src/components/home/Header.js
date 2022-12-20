import React,{useState} from 'react'

import cart from '../Images/cart-svgrepo-com.png'
import logo from '../Images/logo.png'
function Header() {
	const [show , setShow] = useState(false)
	const openmenu = () =>{

	}



	const changelog = ()=>{
	  if(window.scrollY >= 100){
		setShow(true)
	  }
	  else{
		setShow(false)
	  }
	}
	window.addEventListener( 'scroll' , changelog )
  return (
    <>




      	<header className="banner-has-images">
			<div className="header-left"> 
				<a aria-label="Toggle Menu" href="/" className="nav-toggle invert" id="nav-toggle"  onClick={openmenu} ><i><span></span><span></span><span></span></i></a>
				<p className="lang-select custom-select"> 
					<select className="">
						<option value="0">EN</option>
						<option value="1">EN</option>
						<option value="2">ARA</option>
					</select>
				</p>
				<a href="tel:+966138999900" className="whatsapp"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><title>Whatsapp Us</title><path d="m4.65499997 4.11999997c-1.30500001.5-2.15500001 2.38000001-2.33500001 3.63500001-.63 4.14500002 2.63000001 7.74500002 5.63500002 10.14000002 2.66500002 2.105 7.78500002 5.605 10.84500002 2.285.4681936-.4140467.7643142-.9884492.83-1.61-.065-1-5.215-3.145-5.63-2.735l-.73.72c-.12.12-1.66-.905-1.825-1.025-.6251941-.4083201-1.2125427-.8718402-1.75500001-1.385-.52224229-.5027152-.99599904-1.0534784-1.41500001-1.645-.12-.17-1.1-1.65-1-1.77 0 0 .85-.91000001 1.09-1.27000001.51500001-.775-3.61000001-5.38500002-3.71000001-5.34000002zm15.15500003 8.45000003h-1.69c0-3.86599326-3.1340067-7.00000003-7-7.00000003v-1.69c4.79707.00551071 8.6844893 3.89293 8.69 8.69000003zm3.19 0h-1.69c-.0082672-5.62354397-4.5664527-10.17949283-10.19-10.18500004v-1.69000001c6.5569077.00550943 11.8717304 5.31809522 11.88 11.87500005z" fill="#B9975B"></path></svg> <span><span className="display-only-desk">Call us 24/7 - </span> <strong>013 8999900</strong></span></a>
			</div>

			<div  id="logo_sticky" className= {show ? "logo-down sticky" : "logo-down"}>
				{/* issue */}
				<a href="/"><img src={logo} alt="" /></a>
			</div>

			<div className="header-right"> 
				<a href="/" className="icon"><img src={cart} alt="" /></a>

			</div>
		</header>
    </>
  )
}

export default Header
