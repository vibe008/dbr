import React from 'react'

function Footer() {
  return (
	<>
	  	<footer>
		<div className="footer-top footer-container">
			<div className="footer-signup">
				<p className="h3">Register your data and find out what's new</p>
				<div>
					<form>
						<div>
							<label>Full Name</label>
							<div className="input">
								<input placeholder="Enter your full name" type="text"/>
							</div>
						</div>
						<div>
							<label>Email *</label>
							<div className="input">
								<input placeholder="Enter your Email" type="email"/>
							</div>
						</div>
						<div>
							<label>Mobile Number *</label>
							<div className="input">
								<input placeholder="Enter your Mobile Number " type="text"/>
							</div>
						</div>
						<div className="hs_submit hs-submit">
							<div className="actions">
								<input type="submit" className="hs-button"/>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="footer-location">
				<div className="footer-address">
					<p className="h3">Our Location</p>
					<span className="">Half Moon Beach, P.O. 2423 News 31952 <br/><br/>The Kingdom of Saudi Arabia</span>
					<p className="email"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.49 8.295-8.29500001v10.68500001h-5.91-4.77000001-5.91000002v-10.68500001zm0-16.61500005 8.295 8.32000004h-16.59000003z" fill="#fff"></path></svg><a href="mailto:reservations@dbr.sa">reservations@dbr.sa</a></p>
					<p className="tel"> <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m4.65499997 4.11999997c-1.30500001.5-2.15500001 2.38000001-2.33500001 3.63500001-.63 4.14500002 2.63000001 7.74500002 5.63500002 10.14000002 2.66500002 2.105 7.78500002 5.605 10.84500002 2.285.4681936-.4140467.7643142-.9884492.83-1.61-.065-1-5.215-3.145-5.63-2.735l-.73.72c-.12.12-1.66-.905-1.825-1.025-.6251941-.4083201-1.2125427-.8718402-1.75500001-1.385-.52224229-.5027152-.99599904-1.0534784-1.41500001-1.645-.12-.17-1.1-1.65-1-1.77 0 0 .85-.91000001 1.09-1.27000001.51500001-.775-3.61000001-5.38500002-3.71000001-5.34000002zm15.15500003 8.45000003h-1.69c0-3.86599326-3.1340067-7.00000003-7-7.00000003v-1.69c4.79707.00551071 8.6844893 3.89293 8.69 8.69000003zm3.19 0h-1.69c-.0082672-5.62354397-4.5664527-10.17949283-10.19-10.18500004v-1.69000001c6.5569077.00550943 11.8717304 5.31809522 11.88 11.87500005z" fill="#fff"></path></svg> <a href="tel:+966 13 8999900">+966 13 8999900</a></p>
					<p className="tel spacer"><svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14.82 13.5c-.335 0-1 1.255-1.365 1.255-.101231-.0045879-.1994934-.0356182-.285-.09-.714441-.3299995-1.3724922-.7703876-1.95-1.305-.5374354-.5094774-.9823711-1.1083642-1.31500001-1.77-.03940564-.0576774-.06191808-.1252147-.065-.195 0-.295.89000001-.85.89000001-1.34 0-.13000001-.66-1.88500002-.75000001-2.10500002-.13-.335-.195-.44-.54-.44-.17 0-.325-.04-.5-.04-.2524352.00169706-.49369778.10432368-.67000001.285-.59923855.50923126-.94772747 1.2536474-.955 2.04000001v.105c.04984028.90573381.36838859 1.77608441.915 2.50000001 1.13000001 1.65 2.27000002 3.1 4.12500002 3.92.7717688.3937021 1.5999545.665266 2.455.805.735 0 1.935-.465 2.235-1.19.1324746-.317517.2069853-.6562018.22-1 .0040633-.0663976-.006167-.1328941-.03-.195-.7577557-.4995081-1.5674995-.9152771-2.415-1.24zm-2.64 6.85c-1.5844922-.0084708-3.13233095-.4775128-4.45500002-1.35l-3.12500001 1 1-3c-2.19700588-3.0326751-2.03028542-7.17566576.403301-10.02199857 2.43358642-2.84633282 6.50034133-3.65483258 9.83758243-1.95578127 3.337241 1.69905131 5.0759623 5.46322664 4.2060104 9.10563474s-4.1220445 6.2145786-7.8668938 6.2221451zm0-17.85000004c-3.51127354.00132604-6.7500458 1.89246121-8.47694061 4.94972762-1.72689482 3.05726642-1.67457413 6.80737312.13694058 9.81527242l-1.75500001 5.235 5.38500002-1.73c3.56239032 1.9542907 7.96388692 1.490471 11.04067522-1.1634412 3.0767884-2.6539122 4.1816511-6.9396537 2.771428-10.75031594-1.4102232-3.81066229-5.038885-6.34465421-9.1021032-6.3562429z" fill="#fff"></path></svg><a target="_blank" href="https://wa.me/966500516177" rel="noopener">+966 500516177</a></p>

					<a href="/" className="button transparent">call us</a>
				</div>
				<iframe id="iframe_id" title="Dana Beach Resort" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14334.932197040542!2d50.00462099118052!3d26.074979345831352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf76d32bb7774758d!2z2YXZhtiq2KzYuSDYtNin2LfYpiDYp9mE2K_Yp9mG2KkgfCBEYW5hIEJlYWNoIFJlc29ydA!5e0!3m2!1sen!2suk!4v1545905540275" width="600" height="350" frameBorder="0"  style={{border:"0"}} allofwullscreen=""></iframe>
			</div>
		</div>
		<div className="footer-menu footer-container">
			<ul>
				<li className=""><a href="/">Terms & Conditions</a></li>
				<li className=""><a href="/">Return Policy</a></li>
				<li className=""><a href="/">Ticket Cancellation</a></li>
			</ul>
		</div>
	</footer>
	hii
	</>
  )
}

export default Footer
