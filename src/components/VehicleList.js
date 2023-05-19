import React  from "react"
import Vehicle from "./Vehicle";

function VehicleList({vehicles}){

  
return(
   <div> 
    
    <div  className="reservation grid-container">
      <div  style={{color:"whitesmoke", textAlign: "center" , fontSize: "25px"}}>
        <b>Welcome to Rent-a-Ride Car Rental Service</b> 
      </div>
      <div style={{backgroundColor: "#fdffffd5", margin:"20px", borderRadius: "20px"}}>
        { vehicles.map(vehicle => 
            <div className="divStyle grid-item" key={vehicle.id}>  
                <Vehicle vehicle={vehicle} 
                         reservations={vehicle.reservations} 
                />
            </div> 
            )}
      </div>
    </div>
</div>
)
}
export default VehicleList;