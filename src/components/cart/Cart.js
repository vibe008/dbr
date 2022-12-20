import React from 'react'
import cartclose from '../Images/mycart-close.png'
import deleticon from '../Images/delete-svgrepo-icon.png'
function Cart() {
  return (
	<>
	  						<div class="col-md-4">
							<div class="mycart-card" id="myCart">
								<h4>My Cart</h4>
								<a href="javascript:void(0)" class="my-cart-trigger"><img src={cartclose} alt="" /></a>
								<div class="selected-card-list">
									<span class="card-title">A Day visit to Dana Bay for a full day</span>
									<span class="date-selected">Tue, Sept 23, 2022</span>
									<div class="member-sar-list">
										<span class="member-number">Adult 2</span>
										<span class="sar-detail">SAR 360 <a href=""><img src={deleticon} alt="" /></a></span>
									</div>
									<div class="member-sar-list">
										<span class="member-number">Children 1</span>
										<span class="sar-detail">SAR 110 <a href=""><img src={deleticon} alt="" /></a></span>
									</div>
								</div>
								<div class="selected-card-list">
									<span class="card-title">Loopagoon</span>
									<span class="date-selected">Wed, Sept 24, 2022</span>
									<div class="member-sar-list">
										<span class="member-number">Adult 2</span>
										<span class="sar-detail">SAR 160 <a href=""><img src={deleticon} alt="" /></a></span>
									</div>
									<div class="member-sar-list">
										<span class="member-number">Children 1</span>
										<span class="sar-detail">SAR 35 <a href=""><img src={deleticon} alt="" /></a></span>
									</div>
								</div>

								<div class="total-amount mt-2">
									<p class="discount-applied">
										<span class="discount-name">Discount</span>
										<span class="discount-amount">- SAR 50</span>
									</p>
									<span class="total-amount-text">Total Amount</span>
									<span class="total-amount-number">SAR 615.00</span>
								</div>

								<button>CONTINUE</button>
							</div>
						</div>
	</>
  )
}

export default Cart
