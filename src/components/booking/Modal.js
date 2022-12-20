import React from 'react'
import closebtnb from '../Images/gallery-close-btn.png'

import sun from '../Images/Sun-set-gallery-img.png'
import sunmobile from '../Images/Sun-set-gallery-img-mobile.png'



function Modal() {
  return (
    <>
      							<div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div class="modal-dialog gallery-modal">
									<div class="modal-content">

										<div class="modal-body">
											<div class="modal-header-gallery">
												<h5 class="modal-title" id="exampleModalLabel">Explore Dana Bay Gallery</h5>

												<div class="countNtext">
													<div id="counters"></div>
												</div>
												<div>
													<span class="pagingInfo1"></span><span class="pagingInfo2"></span>
													<button type="button" class="close-modal" data-bs-dismiss="modal">
														<img src={closebtnb} alt="" />
														</button>
												</div>
											</div>
											<div class="gallery-sliders owl-carousel owl-theme">
												<div class="item">
													<div class="gallery-image">
													<img src={sun} alt="" className="desktop-image" title="" />
					                        		<img src={sunmobile} alt=""  className="mobile-image" title="" />
													</div>
												</div>
												<div class="item">
													<div class="gallery-image">
													<img src={sun} alt="" className="desktop-image" title="" />
					                        		<img src={sunmobile} alt=""  className="mobile-image" title="" />
													</div>
												</div>
												<div class="item">
													<div class="gallery-image">
													<img src={sun} alt="" className="desktop-image" title="" />
					                        		<img src={sunmobile} alt=""  className="mobile-image" title="" />
													</div>
												</div>
												<div class="item">
													<div class="gallery-image">
													<img src={sun} alt="" className="desktop-image" title="" />
					                        		<img src={sunmobile} alt=""  className="mobile-image" title="" />
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

export default Modal
