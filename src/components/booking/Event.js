import React,{useState, useEffect}  from 'react'
// import getEvents from '../../api/events/getEvents';
// import logo from '../Images/logo.png'
import DatePicker from "react-datepicker";


const Event = (props) => {
	
	const [open , setOpen] = useState(false)

	const [ popup , setPopup] = useState (false)

	const [counter, setCounter] = useState(1)

	const [counter1, setCounter1] = useState(1)

	const [startDate, setStartDate] = useState(new Date());

	const opentc = () =>{
			setOpen(!open)
	}

	const click = () => {
     setPopup(!popup)
	}

	
  

	const handleClick2 = () => {

	  setCounter(counter + 1)
	}
	

	const handleClick1 = () => {

	  if (counter > 0) {
		setCounter(count => count - 1);
	  }
	  
	//   setCounter(counter - 1)
	}

	const handleClick4 = () => {

		setCounter1(counter1 + 1)
	  }
	  
  
	  const handleClick3 = () => {
  
		if (counter1 > 0) {
		  setCounter1(count => count - 1);
		}
		
	  //   setCounter(counter - 1)
	  }
    return (
        <div className="book-card">
						<div className="d-flex">
							<div className="img-hover-zoom book-card-thumb">
								<img src={props.data.img} alt="" />
							</div>
							<a className="gallery-trigger" href="/" data-bs-toggle="modal" data-bs-target="#exampleModal" >
								<img src={props.data.imgicon} alt="" /></a>
							<div className="card-inner">
								<div className="">
									<div className="book-card-heading">
										<h5>{props.respdata[0].title_en}</h5>
										<button className="info-trigger" onClick={opentc}><img src={props.data.logo} alt="" /></button>
										<div className={open ? "info-container expand" :"info-container " }>
											<div className="info-card-title">
												<h5>{props.data.logoheading} </h5> <button className="info-block-close" onClick={opentc}>
													<img src={props.data.plussign} alt="" /></button>
											</div>
											<ul>
												<li>{props.data.lpara1} </li>
												<li>{props.data.lpara2} </li>
												<li>{props.data.lpara3} </li>
												<li>{props.data.lpara4}</li>
											</ul>
										</div>
									</div>
									<span className="tick-description">{props.data.cardpara}
									<br className="display-only-desk" /> {props.data.cardpara1}
									</span>
									<div className="aminities-list">
										<ul>
											<li>{props.data.service1}</li>
											<li>{props.data.service2}</li>
											<li>{props.data.service3}</li>
											<li>{props.data.service4}</li>
										</ul>
									</div>
								</div>
								<div className="">
									<div className="card-form">
										<form>
											<div className="row">
												<div className="col-4 mw-100">
													<label>{props.data.date}</label>
													{/* <input inputMode='none' type="text" className="date-picker" name="start" placeholder="DD-MM-YYYY" /> */}

												    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

												</div>
												<div className="col-4 mw-50">
													<label>{props.data.adultlabel}</label>
													<div className="number">
														<span className="minus"  onClick={handleClick1} >{props.data.minus}</span>
														{/* <input type="text" defaultValue="1"  /> */}
														<a className='counter'>{counter}</a>
														<span className="plus" onClick={handleClick2} >{props.data.plus}</span>
													</div>
													<span className="limit-info">{props.data.years}</span>
												</div>
												<div className="col-4 mw-50">
													<label>{props.data.childrensrt}</label>
													<div className="number">
														<span className="minus" onClick={handleClick3}>{props.data.minus}</span>
														<a className='counter'>{counter1}</a>
														<span className="plus" onClick={handleClick4}>{props.data.plus}</span>
													</div>
													<span className="limit-info">{props.data.years1}</span>
												</div>
												<div className="col-8 mw-100">
													<label className="promo-code-label">{props.data.promo}</label>
													<div className="input-group mb-1">
														<input type="password" className="form-control" placeholder="*******" aria-label="Recipient's username" aria-describedby="basic-addon2" />
														<div className="input-group-append">
															<button className="btn btn-outline-secondary" type="button">{props.data.apply}</button>
														</div>
													</div>
												</div>
												<div className="col-4 mw-50">
													<button className="submit-btn" type="submit" >{props.data.button}</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex share-card">

							{/* <a href="" className="view-modal" > <img src={props.data.Shareimg} alt="" onClick={click} /></a> */}
							<img src={props.data.Shareimg} alt="" onClick={click} />
				

						</div>
						<div className= {popup ? "popup show" : "popup"}>
							<header>
								<span>Share</span>
								<div className="close" onClick={click}><i className="uil uil-times"><img src={props.data.Shareimg1} alt="" /></i></div>
							</header>
							<div className="content">
								<p>{props.data.Sharevia}</p>
								<ul className="icons">
									<a href="#">
										<img src={props.data.Embedimg} alt="" />
										<span>{props.data.Embed}</span>
									</a>
									<a href="#">
										<img src={props.data.WhatsAppimg} alt="" />
										<span>{props.data.WhatsApp}</span>
									</a>
									<a href="#">
										<img src={props.data.Gmailimg} alt="" />
										<span>{props.data.Gmail}</span>
									</a>
								</ul>
								
								<div className="field copy-field">
									<input type="text" readOnly defaultValue="example.com/share-link" />
									<button>{props.data.Copy}</button>
								</div>
							</div>
						</div>
					</div>
    );
}

export default Event;
