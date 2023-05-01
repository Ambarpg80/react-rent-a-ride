import React , {useState} from "react"
// import Reservation from "./Reservation";

function Vehicles({vehicle}){
  const [showReservation, setShowReservation] = useState(false)
  
  
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
        <b>Reserved:</b> {vehicle.reserved} <br/>
        <hr/>
          <button onClick={showReserved} value={vehicle.reservation}> Reservation Info</button> <br/>
        <div style={{padding: "15px"}}> 
          {showReservation ? <div style={{padding: "15px"}}> {vehicle.reservation} </div>  : null}
        </div>
        
        {/* If car is reserved OnClick you will be able to see the reservation */}
   
    </div>
    )

}
export default Vehicles;