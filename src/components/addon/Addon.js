import React from 'react'
import Header from '../home/Header'
import Sidebar from '../home/Sidebar'
import addon from "../Images/add-on-banner.jpg"
import addonmobile from "../Images/addon-mobile-banner.png"
import back from "../Images/back.png"
import sport from '../Images/sports-packeg.jpg'
import family from '../Images/private-family-pool.jpg'
import speed from '../Images/speed-boat.jpg'

function Addon() {
  return (
    <>
        <Sidebar/>
        <div className="outer-wraper">
        <Header/>
        <div class="main add-on-page">
			<div class="page-banner">
          <img src={addon} class="desktop-banner" width="100%" alt="" />
          <img src={addonmobile} alt=""  class="mobile-banner" width="100%"/>
			</div>
			
			
			<div class="container">
				<div class="addon-page-head">
					<a href="#"><img src={back} alt="" /></a>
					<h2>Add More On Your Stay</h2>
				</div>
				<div class="row">
					<div class="col-md-8 mycart-col-8">
						<div class="addon-row-main">
							<div class="row">
								<div class="col-md-4">
									<div class="addon-page-image">
										<a href="#"><img src={sport} alt="" width='100%' /></a>
									</div>
								</div>
								<div class="col-md-8">
									<div class="addon-page-text">
										<h2>Sports package</h2>
										<p>Special offer 25% Discount<br/> 
											Soothe and unwind your body and mind with an elite Sports Massage<br/>
										package at our beautiful day spa....</p>
										<a href="#">More </a>

										<div class="row btn-rate-row">
											<div class="col-md-9 col-7">
												<div class="rate-text">
													<span class="addon-page-rate">SAR 52</span>
													<span class="addon-page-taxes">Each, Including Taxes and Fees</span>
												</div>
											</div>
											<div class="col-md-3 col-5">
												<div class="addon-page-btn">
													<a href="" target="_blank" class="button">Add on</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="addon-row-main">
							<div class="row">
								<div class="col-md-4">
									<div class="addon-page-image">
                    <a href="">
                      <img src={family} alt="" width="100%" />
                    </a>
									</div>
								</div>
								<div class="col-md-8">
									<div class="addon-page-text">
										<h2>Private Family Pool</h2>
										<p>This relaxing massage session will be followed by a revitalising body scrub, 
											removing build-ups of skin cells to reveal a brighter, youthful complexion 
										and tone, before you head for some time.</p>
										<a href="#">More </a>

										<div class="row btn-rate-row">
											<div class="col-md-9 col-7">
												<div class="rate-text">
													<span class="addon-page-rate">SAR 52</span>
													<span class="addon-page-taxes">Each, Including Taxes and Fees</span>
												</div>
											</div>
											<div class="col-md-3 col-5">
												<div class="addon-page-btn">
													<a href="" target="_blank" class="button">Add on</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="addon-row-main">
							<div class="row">
								<div class="col-md-4">
									<div class="addon-page-image">
										<a href="#"><img src={speed} width="100%" alt=''/></a>
									</div>
								</div>
								<div class="col-md-8">
									<div class="addon-page-text">
										<h2>Speed Boat</h2>
										<p>This relaxing massage session will be followed by a revitalising body scrub, 
											removing build-ups of skin cells to reveal a brighter, youthful complexion 
										and tone, before you head for some time.</p>
										<a href="#">More </a>

										<div class="row btn-rate-row">
											<div class="col-md-9 col-7">
												<div class="rate-text">
													<span class="addon-page-rate">SAR 52</span>
													<span class="addon-page-taxes">Each, Including Taxes and Fees</span>
												</div>
											</div>
											<div class="col-md-3 col-5">
												<div class="addon-page-btn">
													<a href="" target="_blank" class="button">Add on</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					

			
					<div class="col-md-4 mycart-col-4">
						<div class="mycart-card-addon" id="myCart">
							<h4>My Cart</h4>
						<a href="javascript:void(0)" class="my-cart-trigger"><img src="../images/mycart-close.png"/></a>
							<div class="selected-card-list">
								<span class="card-title">A Day visit to Dana Bay for a full day</span>
								<span class="date-selected">Tue, Sept 23, 2022</span>
								<div class="member-sar-list">
									<span class="member-number">Adult 2</span>
									<span class="sar-detail">SAR 360 <a href=""><img src="../images/delete-svgrepo-icon.png"/></a></span>
								</div>
								<div class="member-sar-list">
									<span class="member-number">Children 1</span>
									<span class="sar-detail">SAR 110 <a href=""><img src="../images/delete-svgrepo-icon.png"/></a></span>
								</div>
							</div>
							<div class="selected-card-list">
								<span class="card-title">Loopagoon</span>
								<span class="date-selected">Wed, Sept 24, 2022</span>
								<div class="member-sar-list">
									<span class="member-number">Adult 2</span>
									<span class="sar-detail">SAR 160 <a href=""><img src="../images/delete-svgrepo-icon.png"/></a></span>
								</div>
								<div class="member-sar-list">
									<span class="member-number">Children 1</span>
									<span class="sar-detail">SAR 35 <a href=""><img src="../images/delete-svgrepo-icon.png"/></a></span>
								</div>
							</div>

							<div class="add-on-tex-remove">
								<div class="addon-text">
									<span class="addon-head">Add On</span>
									<p>Soothe & unwind your body & mind with an elite Sports Massage package at our beautiful day.</p>
									<span class="addon-rate">SAR 52</span>
								</div>

								<div class="taxes-fees">
									<span class="taxes-fees-head">Taxes & Fees</span>
									<span class="addon-rate">SAR 52</span>
								</div>

								<div class="edit-remove">
									<span class="cart-edit"><a href="#"><img src="../images/edit.png"/> Edit</a></span>
									<span class="cart-remove"><a href="#"><img src="../images/delete-svgrepo-icon.png"/> Remove</a></span>
								</div>
							</div>
							
							<div class="total-amount mt-2">
								<span class="total-amount-text">Total Amount</span>
								<span class="total-amount-number">SAR 742.00</span>
									<span class="total-amount-text">(SAR tax included )</span>
								</div>
								
								<button>Book Now</button>
							</div>
						</div>
					</div>
				</div>

			<a href="javascript:void(0)" class="my-cart-trigger" id="myCartTrigger" onclick="showCart()"><img src="../images/my-cart-img.png"/></a>
		

			<section class="faq-section">
				<div class="container">
					<h4>Frequently Asked Questions</h4>

				<select class="faq-category-select-box">
					<option value="entertainment">Entertainment</option>
					<option value="events">Events</option>
					<option value="general">General</option>
					<option value="villas">Villas</option>
					<option value="making">Making a booking</option>
					<option value="change">Cancel or change booking</option>
					<option value="membership">Membership</option>
				</select>
				
				<div class="entertainment box">
					<div class="addon-page-accordion accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading1">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
									Are swimming pools temperature controlled?
								</button>
							</h2>
							<div id="collapse1" class="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes, the public pools in the Dana Club and the Ladies Club are temperature controlled.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading2">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
									Is there a Club car to move between facilities?
								</button>
							</h2>
							<div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes, you can rent a Club car during official working hours to move between resort facilities.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading3">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
									Are there special pools for women?
								</button>
							</h2>
							<div id="collapse3" class="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes, there is a women’s club which has 2 Ladies pools & Ladies private beach. The club/facility is entirely private and operated by women. Please check this page – https://www.dbr.sa/en/spa/
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading4">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
									Is there water sports in the resort?
								</button>
							</h2>
							<div id="collapse4" class="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes, there is a Marina, and visitors can rent jet skis, speed boat as well as banana boats. Click here for more unformation
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading5">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
									Is there a diving club?
								</button>
							</h2>
							<div id="collapse5" class="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes, we offer Diving courses. For more info please contact 0549955544
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading6">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
									Is there a special track for women in the equestrian club?
								</button>
							</h2>
							<div id="collapse6" class="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes, there’s a private area for Ladies horse riding. Click here to learn more
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading7">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
									Do you have something exclusively for kids?
								</button>
							</h2>
							<div id="collapse7" class="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes, we have the kids aqua play just for our little guests. Entry to the kids aqua play is complimentary to all Dana Beach Resort guests. Click here to know more
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingEight">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
									Are women allowed to ride jet skis?
								</button>
							</h2>
							<div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes, according to the conditions applicable at the Marina.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingNine">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
									Is there a gym for men?
								</button>
							</h2>
							<div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
								<div class="accordion-body">
									Yes we have gym but the entry is limited to the villa  guests only.
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="events box">
					<div class="addon-page-accordion accordion" id="#accordionExample1">
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading11">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="true" aria-controls="collapse11">
									Are swimming pools temperature controlled?
								</button>
							</h2>
							<div id="collapse11" class="accordion-collapse collapse show" aria-labelledby="heading11" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes, the public pools in the Dana Club and the Ladies Club are temperature controlled.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading12">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
									Is there a Club car to move between facilities?
								</button>
							</h2>
							<div id="collapse12" class="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes, you can rent a Club car during official working hours to move between resort facilities.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading13">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse3">
									Are there special pools for women?
								</button>
							</h2>
							<div id="collapse13" class="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes, there is a women’s club which has 2 Ladies pools & Ladies private beach. The club/facility is entirely private and operated by women. Please check this page – https://www.dbr.sa/en/spa/
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading14">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
									Is there water sports in the resort?
								</button>
							</h2>
							<div id="collapse14" class="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes, there is a Marina, and visitors can rent jet skis, speed boat as well as banana boats. Click here for more unformation
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading15">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
									Is there a diving club?
								</button>
							</h2>
							<div id="collapse15" class="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes, we offer Diving courses. For more info please contact 0549955544
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading16">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
									Is there a special track for women in the equestrian club?
								</button>
							</h2>
							<div id="collapse16" class="accordion-collapse collapse" aria-labelledby="heading16" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes, there’s a private area for Ladies horse riding. Click here to learn more
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading17">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
									Do you have something exclusively for kids?
								</button>
							</h2>
							<div id="collapse17" class="accordion-collapse collapse" aria-labelledby="heading17" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes, we have the kids aqua play just for our little guests. Entry to the kids aqua play is complimentary to all Dana Beach Resort guests. Click here to know more
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading18">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse18" aria-expanded="false" aria-controls="collapse18">
									Are women allowed to ride jet skis?
								</button>
							</h2>
							<div id="collapse18" class="accordion-collapse collapse" aria-labelledby="heading18" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes, according to the conditions applicable at the Marina.
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading19">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse19" aria-expanded="false" aria-controls="collapse9">
									Is there a gym for men?
								</button>
							</h2>
							<div id="collapse19" class="accordion-collapse collapse" aria-labelledby="heading19" data-bs-parent="#accordionExample1">
								<div class="accordion-body">
									Yes we have gym but the entry is limited to the villa  guests only.
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="general box">
					<div class="addon-page-accordion accordion" id="#accordionExample2">
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading21">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse21" aria-expanded="true" aria-controls="collapse21">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.?
								</button>
							</h2>
							<div id="collapse21" class="accordion-collapse collapse show" aria-labelledby="heading21" data-bs-parent="#accordionExample2">
								<div class="accordion-body">
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading22">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse22" aria-expanded="false" aria-controls="collapse22">
									Lorem Ipsum is simply dummy text of the printing?
								</button>
							</h2>
							<div id="collapse22" class="accordion-collapse collapse" aria-labelledby="heading22" data-bs-parent="#accordionExample2">
								<div class="accordion-body">
									 The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="villas box">
					<div class="addon-page-accordion accordion" id="#accordionExample3">
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading31">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse31" aria-expanded="true" aria-controls="collapse31">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.?
								</button>
							</h2>
							<div id="collapse31" class="accordion-collapse collapse show" aria-labelledby="heading31" data-bs-parent="#accordionExample3">
								<div class="accordion-body">
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading32">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse32" aria-expanded="false" aria-controls="collapse32">
									Lorem Ipsum is simply dummy text of the printing?
								</button>
							</h2>
							<div id="collapse32" class="accordion-collapse collapse" aria-labelledby="heading32" data-bs-parent="#accordionExample3">
								<div class="accordion-body">
									 The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading33">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse33" aria-expanded="false" aria-controls="collapse33">
									Lorem Ipsum is simply dummy text of the printing?
								</button>
							</h2>
							<div id="collapse33" class="accordion-collapse collapse" aria-labelledby="heading33" data-bs-parent="#accordionExample3">
								<div class="accordion-body">
									 The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="making box">
					<div class="addon-page-accordion accordion" id="#accordionExample4">
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading41">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse41" aria-expanded="true" aria-controls="collapse41">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.?
								</button>
							</h2>
							<div id="collapse41" class="accordion-collapse collapse show" aria-labelledby="heading41" data-bs-parent="#accordionExample4">
								<div class="accordion-body">
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading42">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse42" aria-expanded="false" aria-controls="collapse42">
									Lorem Ipsum is simply dummy text of the printing?
								</button>
							</h2>
							<div id="collapse42" class="accordion-collapse collapse" aria-labelledby="heading42" data-bs-parent="#accordionExample4">
								<div class="accordion-body">
									 The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="change box">
					<div class="addon-page-accordion accordion" id="#accordionExample5">
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading51">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse51" aria-expanded="true" aria-controls="collapse51">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.?
								</button>
							</h2>
							<div id="collapse51" class="accordion-collapse collapse show" aria-labelledby="heading51" data-bs-parent="#accordionExample5">
								<div class="accordion-body">
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading52">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse52" aria-expanded="false" aria-controls="collapse52">
									Lorem Ipsum is simply dummy text of the printing?
								</button>
							</h2>
							<div id="collapse52" class="accordion-collapse collapse" aria-labelledby="heading52" data-bs-parent="#accordionExample5">
								<div class="accordion-body">
									 The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading53">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse53" aria-expanded="false" aria-controls="collapse53">
									Lorem Ipsum is simply dummy text of the printing?
								</button>
							</h2>
							<div id="collapse53" class="accordion-collapse collapse" aria-labelledby="heading53" data-bs-parent="#accordionExample5">
								<div class="accordion-body">
									 The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="membership box">
					<div class="addon-page-accordion accordion" id="#accordionExample6">
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading61">
								<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse61" aria-expanded="true" aria-controls="collapse61">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.?
								</button>
							</h2>
							<div id="collapse61" class="accordion-collapse collapse show" aria-labelledby="heading61" data-bs-parent="#accordionExample6">
								<div class="accordion-body">
									It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="heading62">
								<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse62" aria-expanded="false" aria-controls="collapse62">
									Lorem Ipsum is simply dummy text of the printing?
								</button>
							</h2>
							<div id="collapse62" class="accordion-collapse collapse" aria-labelledby="heading62" data-bs-parent="#accordionExample6">
								<div class="accordion-body">
									 The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</section>

	</div>
        </div>
    </>
  )
}

export default Addon
