import React from "react"
import Reservation from "./Reservation";


function ReservationList({reservations, onDelete, onItemUpdate}){
    // console.log(reservation)
return(
    <div className="reservation grid-container">
      <div style={{backgroundColor: "whitesmoke", margin:"30px", borderRadius: "20px"}}>
       {reservations.map(reserved=>  
          <div className="divStyle grid-item" key={reserved.id}>
            <Reservation  rental={reserved} onDelete={onDelete} onItemUpdate={onItemUpdate} />
          </div>
        )}
      </div>
      
    </div>
)
}
export default ReservationList;