import React from "react"
import Vehicles from "./Vehicles";
// import ReservationList from "./ReservationList";
// import ReservationForm from "./ReservationForm"


function VehicleList({vehicles}){
   
return(
   <div>
    
    <div className="reservation grid-container">
      <div style={{backgroundColor: "whitesmoke", margin:"30px", borderRadius: "20px"}}>
        { vehicles.map(vehicle =>  
        <div className="divStyle grid-item" key={vehicle.id}>  
            <Vehicles vehicle={vehicle} reservations={vehicle.reservations} />
        </div> )}
      </div>
    </div>
</div>
)
}
export default VehicleList;