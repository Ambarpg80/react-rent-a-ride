import React , {useState, useEffect} from "react"
// import Reservation from "./Reservation";

function Vehicle({vehicle, reservations, isReserved }){
  const [showReservation, setShowReservation] = useState(false)
  const reserved = reservations.map(res => res.vehicle_id === vehicle.id ? "Yes" : "No")
   // const [isReserved, setIsReserved] = useState(false)
  
  

  function showReserved(){
    setShowReservation(!showReservation)
  }

  
return(
    <div>
        <b>Vehicle ID:</b> {vehicle.id} <br/>
        <b>VIN:</b> {vehicle.vin} <br/>
        <b>Car Type:</b> {vehicle.car_type} <br/>
        <b>Make and Model: </b>{vehicle.make_and_model}<br/>
        <b>License Plate:</b> {vehicle.license_plate}<br/>
        <b>Reserved:</b> {reserved} <br/> 
        <hr/>
          <button onClick={showReserved} value={vehicle.id}> Reservation Info</button> <br/>
        <div style={{padding: "15px"}}> 
          {showReservation ? reservations.map(res=> {
                  return( 
                  <div style={{padding: "15px"}} key={res.id}>
                    <b>Full Name:</b> {res.full_name} <br/>   
                    <b>Driver's License:</b> {res.driving_license} <br/>  
                    <b>Payment Method:</b> {res.payment_method }<br/>  
                  </div> 
                  )
                  }) 
            : null
          } 
        </div>
    </div>
    )
}
export default Vehicle;