import React from "react"


function Reservation({rental}){
  const  {full_name,  driving_license, payment_method,vehicle_id } = rental

return(
  
    <div >
        <b>Full Name:</b> {full_name} <br/>
        <b>Driver's License:</b> {driving_license}<br/>
        <b>Payment_Method: </b>{payment_method}<br/>
        <b>Vehicle ID:</b> {vehicle_id}<br/>
    </div>
 
)
}
export default Reservation;