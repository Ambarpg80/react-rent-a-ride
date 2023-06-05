import React , {useState} from "react"
import Reservation from "./Reservation"

function Vehicle({vehicle, onDelete, onItemUpdate}){         
  const [showReservation, setShowReservation] = useState(false)
  const reserved = !vehicle.reservations?.length 
  function showReserved(){
    setShowReservation(!showReservation)
  }

  
return(
    <div>
        <b>VIN:</b> {vehicle.vin} <br/>
        <b>Car Type:</b> {vehicle.car_type} <br/>
        <b>Make and Model: </b>{vehicle.make_and_model}<br/>
        <b>License Plate:</b> {vehicle.license_plate}<br/>
         <b>Reserved:</b> { reserved ? "No" : "Yes" } <br/>  
        <hr/>
          <button onClick={showReserved} value={vehicle.id}> Reservation Info</button> <br/>
        <div style={{padding: "15px"}}> 
          {showReservation ? (vehicle.reservations).map(reservation => 
            <div  key={reservation.id}  style={{marginTop:"40px"}}>
              <Reservation  reservation={reservation}
                            onDelete={onDelete} 
                            onItemUpdate={onItemUpdate} 
              />
            </div>)
            : null
          } 
        </div>
    </div>
    )
}
export default Vehicle;