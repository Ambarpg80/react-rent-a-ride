import React, {useEffect, useState} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import VehicleList from "./components/VehicleList";
import ReservationForm from "./components/ReservationForm"

function App() {
  const [viewRentals, setViewRentals] = useState([])
  const [viewVehicles, setViewVehicles] = useState([])
  // const resCollection = viewVehicles.map(vehicle=>vehicle.reservations)

useEffect(()=>{
        fetch('http://localhost:9292/reservations')
        .then(res => res.json())
        .then(reserved=> setViewRentals(reserved) )
    },[])

useEffect(()=>{
      fetch('http://localhost:9292/vehicles')
      .then(res => res.json())
      .then(cars => setViewVehicles(cars))
  },[viewRentals])

    
  function handleNewReservation(newRental){  //create request for new reservation
   setViewRentals([...viewRentals, newRental])
  }

  function deleteReservation(deletedRes){ //delete request
    const deletedReservation = viewRentals.filter(rental => rental.id !== deletedRes.id) 
    setViewRentals(deletedReservation) 
   }

  function handleResUpdate(updatedItem){  //update request
    const updatedItems = viewRentals.map(rental => rental.id === updatedItem.id ? updatedItem : rental)
    setViewRentals(updatedItems)
   }

   function handleNewVehicle(newVehicle){ //post request for new vehicle
    console.log(newVehicle)  
    setViewVehicles([...viewVehicles, newVehicle])
   }


  // JSX to be returned
  return (
    <div className="App">
       <header className="App-header">
        <NavBar />
      </header>
      <Switch> 
        <Route path="/form"> 
          <ReservationForm onAddEntry={handleNewReservation} 
                           vehicles={viewVehicles}
          /> 
        </Route>
        <Route  path="/">
          <VehicleList vehicles={viewVehicles} 
                       onNewVehicle={handleNewVehicle}
                       onDelete={deleteReservation} 
                       onItemUpdate={handleResUpdate}
           />
        </Route> 
      </Switch>        
    </div>
  );
}

export default App;
