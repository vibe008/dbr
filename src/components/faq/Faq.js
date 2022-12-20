import React from 'react'
import Question from './Question'

function Faq() {
  return (
    <>
	<section className="faq-section">
		<div className="container">
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
     <Question/>
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
    </>
  )
}

export default Faq
