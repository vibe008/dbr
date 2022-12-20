import React from 'react'
import Header from '../home/Header'
import Sidebar from '../home/Sidebar'
import payment from '../Images/payment.jpg'
function Payment() {
  return (
    <>
  <Sidebar/> 
<div className="outer-wraper">
    <Header/>
    <div class="main payment-page">
	<div class="container">
		<div class="payment-done">
			<h1>Thank You for Payment!</h1>
			<h2>SAR 742.00</h2>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div class="payment-left-image">
					<img src="../Images/payment.jpg" alt="" width="100%"/>
				</div>
			</div>
			<div class="col-md-8">
				<div class="payment-right-details">
					<div class="ticket-details">
						<h2>A Day visit to Dana Bay for a full day with your family </h2>
						<p>Loopagoon is a Ladies only water park which is located in the same property that Dana<br/> Beach Resort is.</p>
					</div>
					<div class="add-pacakge-box">
						<h2>Add on Pacakge</h2>
						<p>Soothe and unwind your body and mind  with an elite Sports Massage  package at our beautiful day.</p>
					</div>
					<div class="ticket-detail-box">
						<h2>Booking Details <span>(03)</span></h2>
						<div class="row">
							<div class="col-md-6">
								<div class="booking-detail">
									<h4>Contact Person</h4>
									<pp><span>Name :</span> Sadiya Shaikh (Promary Contact)</pp>
									<p><span>Email  :</span> shaikh007@gmail.com</p>
									<p><span>Phone :</span> 971 0000 0000 00000</p>
								</div>
							</div>
							<div class="col-md-6">
								<div class="row">
									<div class="col-md-5">
										<div class="booking-detail">
											<h4>Booking number</h4>
											<p># 927865881</p>
										</div>
									</div>
									<div class="col-md-7">
										<div class="booking-detail">
											<h4>Booking date</h4>
											<p>Today, 22 ,Sep, 2022    04:01:PM</p>
										</div>
									</div>
									<div class="col-md-12">
										<div class="booking-detail">
											<h4>Booking address</h4>
											<p>Keas 69 Str. 15234, Chalandri Athens, lorum ipsum,<br/> kandiwali west, Mumbai - 400067</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="pay-three-buttons">
						<a href="" target="_blank" class="button">Share via Email</a>
						<a href="" target="_blank" class="button">Share on Whatsapp</a>
						<a href="" target="_blank" class="button">Download Tickets</a>
					</div>
				</div>
			</div>
		</div>
	</div>

</div>
</div>


    </>
  )
}

export default Payment
