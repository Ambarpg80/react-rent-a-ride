// import logo from './logo.svg';
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

useEffect(()=>{
        fetch('http://localhost:9292/vehicles/reservations')
        .then(res => res.json())
        .then(reserved=> setViewRentals(reserved) )
    },[])

useEffect(()=>{
      fetch('http://localhost:9292/vehicles')
      .then(res => res.json())
      .then(cars=> setViewVehicles(cars))
  },[])
  // console.log(viewVehicles)
  // console.log(viewRentals)
  
  function handleNewEntry(newRental)   {  //post request sends new item info here
    setViewRentals([...viewRentals, newRental])
    viewVehicles.map(car=> car.id === newRental.vehicle_id ? car.reserved = "Yes" : null)
  }

  function deleteReservation(deletedReservation){
    const filteredReservations = viewRentals.filter(rental => rental.id !== deletedReservation.id)
      return setViewRentals(filteredReservations) 
   }

   function handleItemUpdate(updatedItem){
    const updatedItems = viewRentals.map(rental => rental.id === updatedItem.id ? updatedItem : rental)
    setViewRentals(updatedItems)
   }

  // JSX to be returned
  return (
    <div className="App">
       <header className="App-header">
        <NavBar />
      </header>
      <Switch> 
        <Route path="/form"> 
          <ReservationForm onAddEntry={handleNewEntry} vehicles={viewVehicles} /> 
        </Route>
        <Route path="/vehicles/reservations"> 
          <ReservationList reservations={viewRentals} onDelete={deleteReservation} onItemUpdate={handleItemUpdate}/>  
        </Route> 
        <Route  path="/vehicles">
          <VehicleList vehicles={viewVehicles} 
                      //  reservations={viewRentals}
                       onAddEntry={handleNewEntry} 
                       />
        </Route> 
        {/* <Route exact path="/">  
          
        </Route>  */}
      </Switch>        
    </div>
  );
}

export default App;
