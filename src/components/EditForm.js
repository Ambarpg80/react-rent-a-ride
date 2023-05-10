import React , {useState} from 'react'

function EditForm({rental, onItemUpdate}){
const [editData, setEditData]= useState({
    full_name: rental.full_name,
    driving_license: rental.driving_license,
    payment_method: rental.payment_method,
    vehicle_id: rental.vehicle_id
})

    function editName(e){
         setEditData({...editData,
            [e.target.id] : e.target.value})
        console.log(editData)
    }
    function editLicense(e){
        setEditData({...editData,
    [e.target.id] : e.target.value})
        console.log(editData)
    }
    function editPayment(e){
        setEditData({...editData,
            [e.target.id] : e.target.value})
        console.log(editData)
    }
    function editVehicleId(e){
        setEditData({...editData,
            [e.target.id] : e.target.value})
        console.log(editData)
    }

    function handleUpdate(e){
         e.preventDefault();
       
        fetch(`http://localhost:9292/vehicles/reservations/${rental.id}`,{  //PATCH request
            method: "PATCH",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ full_name: editData.full_name,
                                   driving_license: editData.driving_license,
                                   payment_method: editData.payment_method,
                                   vehicle_id: parseInt(editData.vehicle_id)
                                }),
        })
        .then(res => res.json())
        .then(updatedItem => { onItemUpdate(updatedItem)
            setEditData({ full_name: "",
                          driving_license: "",
                          payment_method: "",
                          vehicle_id: "",}) 
                        }) //clear form information
        }
    

    return(
        <div >
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
            <label>Vehicle ID:
                <input style={{float: "left", width: "250px"}} 
                       type="text" 
                       id="vehicle_id"
                       value={editData.vehicle_id} 
                       onChange={editVehicleId}>
                </input>
            </label>
           <button type="Submit" > Done Editing </button>
        </form>
        </div>
    )
}
export default EditForm