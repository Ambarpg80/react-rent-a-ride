import React, {useState} from "react"

function ReservationForm({onAddEntry, vehicles}){
    const [reservationData, setReservationData] = useState({
        fullName: "",
        driversLicense: "",
        paymentMethod: "",
        vehicleId: 0
      });
    
      function handleChange(e){
        setReservationData({...reservationData,
               [e.target.id]: e.target.value,
            }); 
      }
    
      function handleSubmit(e){
        e.preventDefault();
        const newFormItem= {  fullName: reservationData.fullName,
                              driversLicense: reservationData.driversLicense,
                              paymentMethod: reservationData.paymentMethod,
                              vehicleId: parseInt(reservationData.vehicleId)
                            };  //new info to be added
        fetch("http://localhost:3000/reservations",{  //POST request
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newFormItem)
        }) 
        .then(res => res.json())
        .then((newFormItem)=>{
          onAddEntry(newFormItem)  //add new form information
          setReservationData({ fullName: "",
                               driversLicense: "",
                               paymentMethod: "",
                               vehicleId: "",})  // resets form after handled submission
        })
      }
return(
    <div className=" formPage-text " >
        
    <div className="container"   style={{ marginTop: "35px"}} >
      <div style={{fontSize: "25px" , margin: "15px"}}> <b> Reserve Your Vehicle Below </b> </div>
      <form onSubmit={handleSubmit}>
          <label style={{ marginLeft: "50px"}}>  
          Full Name :  <input placeholder="Enter Full Name" 
                              type="text" 
                              id="fullName" 
                              value={reservationData.fullName} 
                              onChange={handleChange}
                              >

                      </input>
          </label><br/>

          <label> 
          Driver's License :  <input placeholder="Enter Driver's License" 
                              type="text" 
                              id="driversLicense" 
                              value={reservationData.driversLicense} 
                              onChange={handleChange}>
                            {/*   style={{marginLeft : "10px"}} */}
                        </input>
          </label><br/>

          <label> 
            Payment Method :  <input placeholder="Enter Payment Method" 
                              type="text" 
                              id="paymentMethod" 
                              value={reservationData.paymentMethod} 
                              onChange={handleChange}>
                        </input>
          </label><br/>
        <label> Select Your Vehicle :  
            <select id={reservationData.vehicleId} value={reservationData.vehicleId} onChange={handleChange}> 
             
             {vehicles.map(vehicle=> <option id={vehicle.id} value={vehicle.reserved}> {vehicle.reserved == "No" ? vehicle.make_and_model : null} </option> )}

            </select> 
          </label><br/>
          <button type="submit">Submit</button> 
      </form> 
     
    </div>
  </div>
)
}
export default ReservationForm;