import React , {useState} from "react"
import EditForm from "./EditForm"

function Reservation({rental, onDelete, onItemUpdate}){
  const [showEdit, setShowEdit] = useState(false)
  const  {full_name, driving_license, payment_method, vehicle_id } = rental
   
  function showEditForm(){
    setShowEdit(!showEdit)
  }

  function cancelReservation(){
    fetch(`http://localhost:9292/vehicles/reservations/${rental.id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(()=>onDelete(rental))
  }


return(
  
    <div >
      <div >
        <b>Full Name:</b> {full_name} <br/> 
        <b>Driver's License:</b> {driving_license}<br/>
        <b>Payment_Method: </b>{payment_method}<br/>
        <b>Vehicle ID:</b> {vehicle_id}<br/>
        <button type="Submit" onClick={cancelReservation} style={{float: "left", width: "100px"}}>Cancel</button>
        <button onClick={showEditForm} style={{float: "right",  width: "100px"}}>Edit </button> <br/>
     </div>  
     <div >
         {showEdit ? <div> <EditForm  rental={rental} onItemUpdate={onItemUpdate} showEditForm={showEditForm}/> </div> : null }
       </div>
    </div>
 
)
}
export default Reservation;