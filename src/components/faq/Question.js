import React from 'react'
import {faq} from '../Data/Data'
function Question() {
  return (
    <>
      				<div className="entertainment box">
					<div className="addon-page-accordion accordion" id="accordionExample">
  {/* {faq.map((item , index)=>{
    return(
        <div key={index} className="accordion-item">
        <h2 className="accordion-header" id="heading1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
            {item.question}
            </button>
        </h2>
        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
            <div className="accordion-body">
               {item.answer}
            </div>
        </div>
    </div>
    )
  })} */}
  						<div className="accordion-item">
							<h2 className="accordion-header" id="heading1">
								<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
									Are swimming pools temperature controlled?
								</button>
							</h2>
							<div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes, the public pools in the Dana Club and the Ladies Club are temperature controlled.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading2">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
									Is there a Club car to move between facilities?
								</button>
							</h2>
							<div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes, you can rent a Club car during official working hours to move between resort facilities.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading3">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
									Are there special pools for women?
								</button>
							</h2>
							<div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes, there is a women’s club which has 2 Ladies pools & Ladies private beach. The club/facility is entirely private and operated by women. Please check this page – https://www.dbr.sa/en/spa/
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading4">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
									Is there water sports in the resort?
								</button>
							</h2>
							<div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes, there is a Marina, and visitors can rent jet skis, speed boat as well as banana boats. Click here for more unformation
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading5">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
									Is there a diving club?
								</button>
							</h2>
							<div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes, we offer Diving courses. For more info please contact 0549955544
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading6">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
									Is there a special track for women in the equestrian club?
								</button>
							</h2>
							<div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes, there’s a private area for Ladies horse riding. Click here to learn more
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="heading7">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
									Do you have something exclusively for kids?
								</button>
							</h2>
							<div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes, we have the kids aqua play just for our little guests. Entry to the kids aqua play is complimentary to all Dana Beach Resort guests. Click here to know more
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingEight">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
									Are women allowed to ride jet skis?
								</button>
							</h2>
							<div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes, according to the conditions applicable at the Marina.
								</div>
							</div>
						</div>
						<div className="accordion-item">
							<h2 className="accordion-header" id="headingNine">
								<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
									Is there a gym for men?
								</button>
							</h2>
							<div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
								<div className="accordion-body">
									Yes we have gym but the entry is limited to the villa  guests only.
								</div>
							</div>
						</div>

					</div>
				</div>
    </>
  )
}

export default Question
