import React, {useState} from "react"

function ReservationForm({onAddEntry, vehicles}){
  const [isReserved, setIsReserved] = useState(false)
    const [reservationData, setReservationData] = useState({
        full_name: "",
        driving_license: "",
        payment_method: "",
        vehicle_id: 0
      });
     
      // function handleReserved(e){
      //   setIsReserved(!isReserved)
      //   vehicles.find(car=> console.log( e.target.id))
      // }


      function handleChange(e){
       setReservationData({...reservationData,
         [e.target.id] : e.target.value,
       });
       console.log(reservationData) 
      }
    
      function handleSubmit(e){
        e.preventDefault();
        const newFormItem= {  full_name: reservationData.full_name,
                              driving_license: reservationData.driving_license,
                              payment_method: reservationData.payment_method,
                              vehicle_id: parseInt(reservationData.vehicle_id),
                            };  //new info to be added
        fetch("http://localhost:9292/vehicles/reservations",{  //POST request
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newFormItem)
        }) 
        .then(res => res.json())
        .then((newItem)=>{ onAddEntry(newItem)  //add new form information
          setReservationData({ full_name: "",
                               driving_license: "",
                               payment_method: "",
                               vehicle_id: "",})  // resets form after handled submission
        })
      }

      
return(
    <div className=" formPage-text " >
        
    <div className="container"   style={{ marginTop: "35px"}} >
      <div style={{fontSize: "25px" , margin: "15px"}}> <b> Reserve Your Vehicle Below </b> </div>
      <form onSubmit={handleSubmit}>
          <label style={{ marginLeft: "50px"}}>  
          Full Name :  <input placeholder="Enter Full Name" 
                              type="text" 
                              id="full_name" 
                              value={reservationData.full_name} 
                              onChange={handleChange}
                              >

                      </input>
          </label><br/>

          <label> 
          Driver's License :  <input placeholder="Enter Driver's License" 
                              type="text" 
                              id="driving_license" 
                              value={reservationData.driving_license} 
                              onChange={handleChange}>
                            {/*   style={{marginLeft : "10px"}} */}
                        </input>
          </label><br/>

          <label> 
            Payment Method :  <input placeholder="Enter Payment Method" 
                              type="text" 
                              id="payment_method" 
                              value={reservationData.payment_method} 
                              onChange={handleChange}>
                        </input>
          </label><br/>
          {/* <label id="reserved" style={{padding: 0}}>  {`${isReserved}` ? "Reserved" : " Not Reserved"}
              <input type="checkbox" id={vehicles.find(vehicle=>vehicle.id)} value={isReserved} onClick={handleReserved} style={{margin: "auto"}}></input> 
          </label><br/> */}

        <label> Select Your Vehicle :  
            <select id="vehicle_id" value={reservationData.vehicle_id} onChange={handleChange}> 
             
             {vehicles.map(vehicle=> <option key={vehicle.id} id="vehicle_id" value={vehicle.id}> {!vehicle.reserved  ? `${vehicle.id}- ${vehicle.make_and_model}` : null} </option> )}
            </select> 
        </label><br/>
          <button type="submit">Reserve It</button> 
      </form> 
     
    </div>
  </div>
)
}
export default ReservationForm;