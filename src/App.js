// import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import { Switch, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ReservationList from "./components/ReservationList";
import ReservationForm from "./components/ReservationForm"
import Vehicles from "./components/Vehicles"

function App() {
  const [viewRentals, setViewRentals] = useState([])

useEffect(()=>{
        fetch('http://localhost:9292/reservations')
        .then(res => res.json())
        .then(data=> console.log(setViewRentals(data)) )
    },[])

  //   function handleNewEntry(newQuestion){
  //     setTriviaQuestions([...triviaQuestions, newQuestion])
  // }

  // function deleteQuestion(deletedQuestion){
  //   const filteredQuestionList = triviaQuestions.filter(trivia => trivia.id !== deletedQuestion.id)
  //     return setTriviaQuestions(filteredQuestionList) 
  //  }


  // JSX to be returned
  return (
    <div className="App">
      {/* <header className="App-header">
        <NavBar />
      </header>
      <Switch> 
        <Route path="/"> 
        </Route>
        <Route path="/reserved"> */}
          <ReservationList viewRentals={viewRentals} />  
       {/* </Route>
        <Route exact path="/vehicles"> 
          <Vehicles />
        </Route> 
        <Route path="/form">  
          <ReservationForm  /> 
        </Route> 
      </Switch>         */}
    </div>
  );
}

export default App;
