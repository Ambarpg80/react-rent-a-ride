import React, {useState} from 'react';

function AddVehicleForm({onNewVehicle}){
    const [vehicleInfo, setVehicleInfo] =  useState({
        vin: "",
        car_type: "",
        make_and_model: "",
        license_plate: "",
        reserved: false,
    })

    function handleNewCar(e){
        setVehicleInfo({...vehicleInfo,
                        [e.target.name] : e.target.value,})
    }

    function newVehicleSubmit(e){
        e.preventDefault()
       const newCar = { vin: vehicleInfo.vin,
                        car_type: vehicleInfo.car_type,
                        make_and_model: vehicleInfo.make_and_model,
                        license_plate: vehicleInfo.license_plate,
                        reserved: vehicleInfo.reserved,};
        fetch('http://localhost:9292/vehicles',{  //POST request
      method: "POST",
      headers:{
              "Content-Type" : "application/json"
              },
      body: JSON.stringify(newCar)
    }) 
    .then(res => res.json())
    .then((newVehicle)=>{onNewVehicle(newVehicle)
                        setVehicleInfo({ vin: "",
                        car_type: "",
                        make_and_model: "",
                        license_plate: "",
                        reserved: false,
                    })
    })
    }


    return(
        <div>
            <form onSubmit={newVehicleSubmit}>
                <label>VIN:
                    <input placeholder="VIN" 
                           type="text" 
                           name="vin" 
                           value={vehicleInfo.vin} 
                           onChange={handleNewCar} 
                    >
                    </input>
                </label>
                <label>Car Type:
                    <input placeholder="Car Type" 
                           type="text" 
                           name="car_type" 
                           value={vehicleInfo.car_type} 
                           onChange={handleNewCar}
                    >
                    </input>
                </label><br/>
                <label>Make And Model:
                    <input placeholder="Make And Model" 
                           type="text" 
                           name="make_and_model" 
                           value={vehicleInfo.make_and_model} 
                           onChange={handleNewCar}
                    >
                    </input>
                </label>
                <label>License Plate:
                    <input placeholder="License Plate" 
                           type="text" 
                           name="license_plate" 
                           value={vehicleInfo.license_plate} 
                           onChange={handleNewCar}
                    >
                    </input>
                </label><br/>
                <label>Reserved:
                    <input placeholder="Reserved" 
                           type="text" 
                           name="reserved" 
                           value={vehicleInfo.reserved ? "Yes" : "No" } 
                           onChange={handleNewCar}
                    >
                    </input>
                </label><br/>
                <button type="submit">Add Vehicle</button> 
            </form>
        </div>
    )
}
export default AddVehicleForm;