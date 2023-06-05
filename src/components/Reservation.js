import React , {useState} from "react"
import EditForm from "./EditForm"

function Reservation({reservation, onDelete, onItemUpdate}){
  const [showEdit, setShowEdit] = useState(false)
  const {full_name, driving_license, payment_method, vehicle_id } = reservation
  // console.log(reservation)
   
  function showEditForm(){
    setShowEdit(!showEdit)
  }

  function cancelReservation(){
    fetch(`http://localhost:9292/reservations/${reservation.id}`,{
      method: "DELETE"
    })
    .then(res => res.json())
    .then(()=>{onDelete(reservation)
  })
}


return(
  
    <div>
      <div >
        <b>Full Name:</b> {full_name} <br/> 
        <b>Driver's License:</b> {driving_license}<br/>
        <b>Payment_Method: </b>{payment_method}<br/>
        <b>Vehicle ID:</b> {vehicle_id}<br/>
        <button  onClick={cancelReservation} style={{float: "left", width: "100px"}}>Cancel</button>
        <button onClick={showEditForm} style={{float: "right",  width: "100px"}}>{showEdit ? "Close" : "Edit"} </button> <br/>
     </div>  
     <div >
         {showEdit ? <div> <EditForm  reservation={reservation} 
                                      onItemUpdate={onItemUpdate} 
                                      showEditForm={showEditForm}
                           /> 
                     </div> : null }
       </div>
    </div>
 
)
}
export default Reservation;