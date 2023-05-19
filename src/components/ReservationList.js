import React from "react"
import Reservation from "./Reservation";


function ReservationList({reservations,vehicles, isReserved, onDelete, onItemUpdate, onVehicleUpdate }){
    // console.log(reservation)
return(
    <div className="reservation grid-container">
      <div style={{backgroundColor: "#fdffffd5", margin:"30px", borderRadius: "20px"}}>
       {reservations.map(reserved=>  
          <div className="divStyle grid-item" key={reserved.id}>
            <Reservation  rental={reserved}  
                          vehicles={vehicles}
                          isReserved= {isReserved}
                          onDelete={onDelete} 
                          onItemUpdate={onItemUpdate} 
                          onVehicleUpdate={onVehicleUpdate}
            />
          </div>
        )}
      </div>
      
    </div>
)
}
export default ReservationList;