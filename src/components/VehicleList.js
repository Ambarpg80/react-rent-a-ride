import React  from "react"
import Vehicles from "./Vehicle";
// import ReservationList from "./ReservationList";
// import ReservationForm from "./ReservationForm"


function VehicleList({vehicles, onVehicleUpdate, isReserved, onAddEntry}){
  //  , , onDelete, setIsReserved

  
return(
   <div>
    
    <div className="reservation grid-container">
      <div style={{backgroundColor: "#fdffffd5", margin:"30px", borderRadius: "20px"}}>
        { vehicles.map(vehicle =>  
        <div className="divStyle grid-item" key={vehicle.id}>  
            <Vehicles vehicle={vehicle} 
                      reservations={vehicle.reservations} 
                      onVehicleUpdate={onVehicleUpdate} 
                       onAddEntry={onAddEntry} 
                      // onDelete={onDelete}
                      isReserved={isReserved}
                      // setIsReserved= {setIsReserved}
            />
        </div> )}
      </div>
    </div>
</div>
)
}
export default VehicleList;