import React, {useState}  from "react"
import Vehicle from "./Vehicle";
import AddVehicleForm from "./AddVehicleForm";

function VehicleList({vehicles, onNewVehicle}){
  const [showNewCarForm, setShowNewCarForm] = useState(false)
  
  function handleVehicleForm(){
    setShowNewCarForm(!showNewCarForm)
  }
  
return(
   <div> 
    
    <div  className="reservation grid-container">
      <div  style={{color:"whitesmoke", textAlign: "center" , fontSize: "25px"}}>
        <b onClick={handleVehicleForm}>Click Here to Add a Vehicle to the Inventory</b> <br/>
          {showNewCarForm ? <div><AddVehicleForm onNewVehicle={onNewVehicle} />
                            </div> : null
          }
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