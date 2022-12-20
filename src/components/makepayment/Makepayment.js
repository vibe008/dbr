import React from 'react'
import Header from '../home/Header'
import Sidebar from '../home/Sidebar'

function Makepayment() {
  return (
    <>
    hii
    <Sidebar/>
    <div className="outer-wraper">
        <Header/>
   
        <div className="main make-payment-page">
	<div className="container">
		<div className="make-payment-head">
			{/* <a href="/"><img src="../images/back.png" alt=""/></a> */}
			<h2>Add Guest Details</h2>
		</div>
		<div className="row">
			<div className="col-md-8 mycart-col-8">
				<div className="make-payment-form">
					<div className="payment-form-head">
						<h2>Contact Info</h2>
						<span>Required*</span>
					</div>
					<div className="row">
						<div className="col-md-2 col-3" style={{paddingRight: "0;"}}>
							<div className="make-payment-select">
								<label>Prefix*</label>
								<select>
									<option value='' selected>Mr</option>
									<option value="Mrs">Mrs</option>
								</select>
							</div>
						</div>
						<div className="col-md-4 col-9">
							<div className="make-payment-select">
								<label>First name*</label>
								<input type="text" name="" placeholder="Shamsh"/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="make-payment-select">
								<label>Last name*</label>
								<input type="text" name="" placeholder="Shaikh"/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="make-payment-select">
								<label>Phone number*</label>
								<input type="text" name="" value="+971" className="number-code"/>
								<input type="text" name="" placeholder="Add number" className="add-number"/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="make-payment-select">
								<label>Email address*</label>
								<input type="text" name="" placeholder="Enter email"/>
								<p>This is the email we will send your confirmation to.</p>
							</div>
						</div>
						<div className="col-md-6">
							<div className="make-payment-select">
								<label>Country*</label>
								<select>
									<option value='' selected>Select</option>
									<option value="Dubai">Dubai</option>
									<option value="India">India</option>
								</select>
							</div>
						</div>
						<div className="col-md-6">
							<div className="make-payment-select">
								<label>City*</label>
								<select>
									<option value='' selected>Select</option>
									<option value="Mumbai">Mumbai</option>
									<option value="Gujarat">Gujarat</option>
								</select>
							</div>
						</div>
					</div>
						<div className="row ">
							<div className="time-slot">
							  <div className="time-slot-inner">
								  <h2>Payment Info</h2>
								  <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
									<input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
									{/* <label className="btn btn-outline-primary" for="btnradio1"><img src="../images/visa.jpg"/></label> */}

									<input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
									{/* <label className="btn btn-outline-primary" for="btnradio2"><img src="../images/mastercard.jpg"/></label> */}

								  </div>
							  </div>
				            </div>
							<div className="col-md-4">
								<div className="make-payment-select">
									<label>Card Number *</label>
									<input type="text" name="" placeholder="1222323763823"/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="make-payment-select">
									<label>Expiration Date (MM/YY) *</label>
									<input type="text" name="" placeholder="02/2025"/>
								</div>
							</div>
							<div className="col-md-4">
								<div className="make-payment-select">
									<label>CVV *</label>
									<input type="text" name="" placeholder="123"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="make-payment-select">
									<label>Name on Card *</label>
									<input type="text" name="" placeholder="Shamhs shaikh"/>
								</div>
							</div>
						</div>
					</div>
				

				<div className="policy-box">
					<h3>Policies:</h3>
					<p className="first-para">A Day visit to Dana Bay for a full day</p>

					<h4>Guarantee Policy</h4>
					<p>Non Refundable - Full Payment. please present the family card or identification cards upon check in.</p>

					<h4>Cancel Policy</h4>
					<p>Non Refundable </p>
				</div>
				<div className="continue-btn">
					<a href="/" target="_blank" className="button">Continue sar 742</a>
				</div>
			</div>
			<div className="col-md-4 mycart-col-4">
				<div className="mycart-card-addon" id="myCart">
                        <h4>My Cart</h4>
						{/* <a href="javascript:void(0)" className="my-cart-trigger"><img src="../images/mycart-close.png"/></a> */}
                        <div className="selected-card-list">
                            <span className="card-title">A Day visit to Dana Bay for a full day</span>
                            <span className="date-selected">Tue, Sept 23, 2022</span>
                            <div className="member-sar-list">
                                <span className="member-number">Adult 2</span>
                                {/* <span className="sar-detail">SAR 360 <a href=""><img src="../images/delete-svgrepo-icon.png"/></a></span> */}
                            </div>
                            <div className="member-sar-list">
                                <span className="member-number">Children 1</span>
                                {/* <span className="sar-detail">SAR 110 <a href=""><img src="../images/delete-svgrepo-icon.png"/></a></span> */}
                            </div>
                        </div>
                        <div className="selected-card-list">
                            <span className="card-title">Loopagoon</span>
                            <span className="date-selected">Wed, Sept 24, 2022</span>
                            <div className="member-sar-list">
                                <span className="member-number">Adult 2</span>
                                {/* <span className="sar-detail">SAR 160 <a href=""><img src="../images/delete-svgrepo-icon.png"/></a></span> */}
                            </div>
                            <div className="member-sar-list">
                                <span className="member-number">Children 1</span>
                                {/* <span className="sar-detail">SAR 35 <a href=""><img src="../images/delete-svgrepo-icon.png"/></a></span> */}
                            </div>
                        </div>

                        <div className="add-on-tex-remove">
                        	<div className="addon-text">
	                        	<span className="addon-head">Add On</span>
	                        	<p>Soothe & unwind your body & mind with an elite Sports Massage package at our beautiful day.</p>
	                        	<span className="addon-rate">SAR 52</span>
	                        </div>

	                        <div className="taxes-fees">
	                        	<span className="taxes-fees-head">Taxes & Fees</span>
	                        	<span className="addon-rate">SAR 52</span>
	                        </div>

	                        <div className="edit-remove">
	                        	{/* <span className="cart-edit"><a href="/"><img src="../images/edit.png"/> Edit</a></span> */}
	                        	{/* <span className="cart-remove"><a href="/"><img src="../images/delete-svgrepo-icon.png"/> Remove</a></span> */}
	                        </div>
                        </div>
                        
                        <div className="total-amount mt-2">
                            <span className="total-amount-text">Total Amount</span>
                            <span className="total-amount-number">SAR 742.00</span>
                            <span className="total-amount-text">(SAR tax included )</span>
                        </div>
                        
                        <button>Book Now</button>
                    </div>
                </div>
			</div>
		</div>
	</div>
        
    </div>
    </>
  )
}

export default Makepayment
