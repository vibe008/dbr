import React,{useState,useEffect}  from 'react'
import { carddata } from '../Data/Data'
// import getEvents from '../../api/events/getEvents';
// import logo from '../Images/logo.png'
import Event from './Event';
import './Card.css'
// import calander from '../Images/calander.png'

import "react-datepicker/dist/react-datepicker.css";

function Card(props) {
	const [respdata,setrespData] = useState(null)
	useEffect(() => {
		fetch(`http://localhost:4000/api/event/eventslist`)
		  .then(response => response.json())
		  .then((usefulData) => {
			console.log(usefulData.message);
			// console.log(respdata[0])
			// let dynamicdata = usefulData.message.map((dyndata,index)=>{
			// 	return {
			// 		heading : dyndata.title_en,
			// 	}
			// })
			// console.log(...respdata)
			// setLoading(false);
			setrespData(usefulData.message);
		  })
		  .catch((e) => {
			console.error(`An error occurred: ${e}`)
		  });
	  }, []);
    
	
	// getEvents()
	// useEffect((data)=>{
	// 	let resp = null
	// 	async function fetchData(){
	// 		 resp = await getEvents()
	// 		 console.log(resp)
	// 	}
	// 	return {
	// 		...data,status : resp.status,message:resp.message
	// 	}
	// },[])
	return (
		<>
			{carddata.map((data, index) => {
				return (
					<Event key={index} data={data} respdata={respdata}/>
				)
			})}

		</>
	)
}

export default Card
