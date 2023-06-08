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
        .then(cars => setVehicles(cars) )
  },[]) 

     
  function addNewReservation(newRental){  //create request for new reservation
    const singleVehicle = vehicles.find(vehicle=> vehicle.id === newRental.vehicle_id ? vehicle.reservations : null) 
    const newReservationsList = [...singleVehicle.reservations, newRental]
    singleVehicle.reservations = newReservationsList
    setVehicles([...vehicles, newReservationsList])
  }

  function deleteReservation(deletedRes){ //delete request
    const singleVehicle = vehicles.find(vehicle => vehicle.id === deletedRes.vehicle_id ? vehicle.reservations : null)  
    const filteredReservations = singleVehicle.reservations.filter(reservation=> reservation.id !== deletedRes.id)
    singleVehicle.reservations =  filteredReservations 
    const allVehicles = [...vehicles, singleVehicle]
    setVehicles(allVehicles) 
   }

  function handleResUpdate(updatedItem){  //update request
    const singleVehicle = vehicles.find(vehicle => vehicle.id === updatedItem.vehicle_id ? vehicle.reservations : null) 
    const updatedItems = singleVehicle.reservations.map(rental => rental.id === updatedItem.id ? updatedItem : rental)
    singleVehicle.reservations = updatedItems
    setVehicles([...vehicles])
   }

   function addNewVehicle(newVehicle){ //post request for new vehicle  
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
