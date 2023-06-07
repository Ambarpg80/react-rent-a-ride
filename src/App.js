import React, {useEffect, useState} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import VehicleList from "./components/VehicleList";
import ReservationForm from "./components/ReservationForm"

function App() {
  const [vehicles, setVehicles] = useState([])

useEffect(()=>{
      fetch('http://localhost:9292/vehicles')
      .then(res => res.json())
        .then(cars => {setVehicles(cars)
                      console.log(cars)})
  },[]) 

     
  function addNewReservation(newRental){  //create request for new reservation
    // console.log(vehicles, newRental)
    const vehicleReservations = vehicles.find(vehicle=> vehicle.id === newRental.vehicle_id ? vehicle.reservations : null) 
      console.log(vehicleReservations.reservations)
    const newReservationsList = [...vehicleReservations.reservations, newRental]
    console.log(newReservationsList)
    console.log(vehicles)
    setVehicles([...vehicles, newReservationsList])
    console.log(vehicles)
  }

  function deleteReservation(deletedRes){ //delete request
    console.log(deletedRes)
    // const deletedReservation = viewRentals.filter(rental => rental.id !== deletedRes.id) 
    // setVehicles(deletedReservation) 
   }

  function handleResUpdate(updatedItem){  //update request
    console.log(updatedItem)
    // const updatedItems = viewRentals.map(rental => rental.id === updatedItem.id ? updatedItem : rental)
    // setVehicles(updatedItems)
   }

   function addNewVehicle(newVehicle){ //post request for new vehicle
    console.log(newVehicle)  
    setVehicles([...vehicles, newVehicle])
   }


  // JSX to be returned
  return (
    <div className="App">
       <header className="App-header">
        <NavBar />
      </header>
      <Switch> 
        <Route path="/form"> 
          <ReservationForm onAddReservation={addNewReservation} 
                           vehicles={vehicles}
          /> 
        </Route>
        <Route  path="/">
          <VehicleList vehicles={vehicles} 
                       onNewVehicle={addNewVehicle}
                       onDelete={deleteReservation} 
                       onItemUpdate={handleResUpdate}
           />
        </Route> 
      </Switch>        
    </div>
  );
}

export default App;
