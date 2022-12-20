import React from 'react'
import leftarrow from '../Images/paginate-left-arrow.png'
import rightarrow from '../Images/paginate-right-arrow.png'
function Ticket() {
  return (
    <>
      							<div class="ticket-nav">
								<nav aria-label="Page navigation">
									<ul class="pagination">
										<li class="page-item">
											<a class="page-link" href="#" aria-label="Previous">
												
                                                <img src={leftarrow} alt="" />
											</a>
										</li>
										<li class="page-item"><a class="page-link" href="/">1</a></li>
										<li class="page-item active"><a class="page-link" href="/">2</a></li>
										<li class="page-item"><a class="page-link" href="/">3</a></li>
										<li class="page-item"><a class="page-link" href="/">4</a></li>
										<li class="page-item"><a class="page-link" href="/">5</a></li>
										<li class="page-item">
											<a class="page-link" href="/" aria-label="Next">
												
                                                <img src={rightarrow} alt="" />
											</a>
										</li>
									</ul>
								</nav>
							</div>
    </>
  )
}

export default Ticket

