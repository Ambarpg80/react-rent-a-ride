import React from "react"

function Vehicles({rental}){
  const  {id,full_name,  driving_license, payment_method,vehicle_id } = rental

return(
    <div>
        <li> <b>Full Name:</b> {full_name}</li>
        <li> <b>Driver's License:</b> {driving_license}</li>
        <li> <b>Payment_Method: </b>{payment_method}</li>
        <li> <b>Vehicle ID:</b> {vehicle_id}</li>
        {/* <li> Reserved: {reserved ? "Yes" : "No"}</li>   */}
        {/* If car is reserved OnClick you will be able to see the reservation */}
        
    </div>
)
}
export default Vehicles;