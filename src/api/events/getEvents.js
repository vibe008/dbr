const getEvents=async()=>{
    console.log('getEvents')
    try{
        let resp = await fetch("http://localhost:4000/api/event/eventslist")
        let resps= await resp.json()
        // console.log(resps.message)
    }catch(err){
        console.log(err)
    }  
}
// const getEvents=()=>{
//     let obj = null
//     fetch("http://localhost:4000/api/event/eventslist").then(resp=>resp.json()).then(data=>obj=data)
//     console.log(obj)
// }

export default getEvents