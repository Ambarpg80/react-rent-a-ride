import React, {useEffect, useState} from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import VehicleList from "./components/VehicleList";
import ReservationList from "./components/ReservationList";
import ReservationForm from "./components/ReservationForm"

function App() {
  const [viewRentals, setViewRentals] = useState([])
  const [viewVehicles, setViewVehicles] = useState([])
  const [isReserved, setIsReserved] = useState(false)

useEffect(()=>{
        fetch('http://localhost:9292/vehicles/reservations')
        .then(res => res.json())
        .then(reserved=> setViewRentals(reserved) )
    },[])

useEffect(()=>{
      fetch('http://localhost:9292/vehicles')
      .then(res => res.json())
      .then(cars=> setViewVehicles(cars))
  },[isReserved])
  
  function handleNewEntry(newRental){ //post request sends new item info here
    setViewRentals([...viewRentals, newRental])
  }

  function deleteReservation(deletedReservation){
    const filteredReservations = viewRentals.filter(rental => rental.id !== deletedReservation.id)
      return setViewRentals(filteredReservations) 
   }

  function handleResUpdate(updatedItem){
    const updatedItems = viewRentals.map(rental => rental.id === updatedItem.id ? updatedItem : rental)
    return setViewRentals(updatedItems)
   }

  function handleVehicleUpdate(updatedItem){
    const updatedCars = viewVehicles.map(car => updatedItem.id === car.id ? updatedItem : car)
   setViewVehicles(updatedCars)
   }


  // JSX to be returned
  return (
    <div className="App">
       <header className="App-header">
        <NavBar />
      </header>
      <Switch> 
        <Route path="/form"> 
          <ReservationForm onAddEntry={handleNewEntry} 
                           vehicles={viewVehicles}
                           isReserved= {isReserved}
                           setIsReserved={setIsReserved}
                           onVehicleUpdate={handleVehicleUpdate}
          /> 
        </Route>
        <Route path="/reservations"> 
          <ReservationList reservations={viewRentals} 
                           vehicles={viewVehicles}
                           isReserved= {isReserved} 
                           onDelete={deleteReservation} 
                           onVehicleUpdate={handleVehicleUpdate}
                           onItemUpdate={handleResUpdate}
          />  
        </Route> 
        <Route  path="/">
          <VehicleList vehicles={viewVehicles} 
           />
        </Route> 
      </Switch>        
    </div>
  );
}

export default App;
