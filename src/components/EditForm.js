import React , {useState} from 'react'

function EditForm({reservation, onItemUpdate, showEditForm}){
const [editData, setEditData]= useState({
    full_name: reservation.full_name,
    driving_license: reservation.driving_license,
    payment_method: reservation.payment_method,
    vehicle_id: reservation.vehicle_id
})

    function editName(e){
         setEditData({...editData,
            [e.target.id] : e.target.value})
    }
    function editLicense(e){
        setEditData({...editData,
    [e.target.id] : e.target.value})
    }
    function editPayment(e){
        setEditData({...editData,
            [e.target.id] : e.target.value})
    }

    function handleUpdate(e){
         e.preventDefault();      
        fetch(`http://localhost:9292/reservations/${reservation.id}`,{  //PATCH request
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ full_name: editData.full_name,
                                   driving_license: editData.driving_license,
                                   payment_method: editData.payment_method,
                                   vehicle_id: editData.vehicle_id,
                                }),
        })
        .then(res => res.json())
        .then(updatedItem => { onItemUpdate(updatedItem)
                               showEditForm()
                             }) //clear form information
        }
    

    return(
        <div style={{marginTop: "50px"}}>
        <form onSubmit={handleUpdate} style={{float: "left", width: "100px"}}>
            <label>Full Name:
                <input style={{float: "left", width: "250px"}} 
                       type="text"
                       id="full_name" 
                       value={editData.full_name} 
                       onChange={editName}>
                </input>
            </label>
            <label>Driver's License:
                <input style={{float: "left", width: "250px"}} 
                       type="text"
                       id="driving_license" 
                       value={editData.driving_license} 
                       onChange={editLicense}>
                </input>
            </label>
            <label>Payment_Method:
                <input style={{float: "left", width: "250px"}} 
                       type="text" 
                       id="payment_method"
                       value={editData.payment_method} 
                       onChange={editPayment}>
                </input>
            </label>
          <button type="Submit" > Done Editing </button>
        </form>
        </div>
    )
}
export default EditForm