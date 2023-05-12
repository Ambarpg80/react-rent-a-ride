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
  },[])
  
  function handleNewEntry(newRental)   {  //post request sends new item info here
    setViewRentals([...viewRentals, newRental])
  }

  function deleteReservation(deletedReservation){
    const filteredReservations = viewRentals.filter(rental => rental.id !== deletedReservation.id)
      return setViewRentals(filteredReservations) 
   }

  function handleResUpdate(updatedItem){
    const updatedItems = viewRentals.map(rental => rental.id === updatedItem.id ? updatedItem : rental)
    setViewRentals(updatedItems)
   }

  function handleVehicleUpdate(updatedItem){
    const updatedCars = viewVehicles.map(car => car.id === updatedItem.id ? updatedItem : car)
    setIsReserved(!isReserved)
    setViewRentals(updatedCars)
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
                           onVehicleUpdate={handleVehicleUpdate}
                           
          /> 
        </Route>
        <Route path="/vehicles/reservations"> 
          <ReservationList reservations={viewRentals} onDelete={deleteReservation} onItemUpdate={handleResUpdate}/>  
        </Route> 
        <Route  path="/vehicles">
          <VehicleList vehicles={viewVehicles} 
                       onAddEntry={handleNewEntry}
                       onDelete={deleteReservation}
                       isReserved={isReserved}
                      //  setIsReserved= {setIsReserved}
          />
        </Route> 
        {/* <Route exact path="/">  
          
        </Route>  */}
      </Switch>        
    </div>
  );
}

export default App;
