import React from 'react'
import Cart from '../cart/Cart'

import cardvila from '../Images/card-villa-img.png'
import iconpng from '../Images/image-icon.png'
import Card from './Card'
import Modal from './Modal'
import Ticket from './Ticket'
import { Link } from "react-router-dom"
function Booking() {
    return (
        <> 
            <section className="booking-section">
          <div className="container">
            <div className="row">
                <div className="col-md-8">
                <div className="book-types">
                                <a className="book-types-link active" href="index.html">General Admission</a>
                                <a className="book-types-link" href="offers.html">Offers</a>
                                <Link to='/corporate' className="book-types-link" >Corporate</Link>
                            </div>
              <Card/>
              <Ticket/>
              <Modal/>
                </div>
                <Cart/>
            </div>
          </div>
          <div className="terms-conditions container pt-2">
					<ul>
						<li><p>*Terms and Conditions apply" means they apply, i.e. are in effect.</p></li>
						<li><p>"Terms and Conditions applied" may mean they applied in the past, which would be wrong. Or it may mean an ellipsis on</p> </li>
						<li><p>"Terms and Conditions are applied," which doesn't sound so bad. </p></li>
					</ul>
					<span>All prices include VAT (TRN: 100214079400003)</span>
				</div>
            </section>
        </>
    )
}

export default Booking
