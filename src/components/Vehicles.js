import React from "react"

function Vehicles({rental}){
  const  {car_type, id, license_plate, make_and_model ,reserved ,vin} = rental

return(
    <div>
        <li> Make and Model: {make_and_model}</li>
        <li> Type: {car_type}</li>
        <li> VIN: {vin}</li>
        <li> License Plate: {license_plate}</li>
        <li> Reserved: {reserved ? "Yes" : "No"}</li>  
        {/* If car is reserved OnClick you will be able to see the reservation */}
        
    </div>
)
}
export default Vehicles;