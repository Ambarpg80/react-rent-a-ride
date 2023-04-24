import React from "react"
import { NavLink } from "react-router-dom";


function NavBar(){
return(
    <div className="App-header active" >
            <NavLink className="navlink"   exact to="/">Home</NavLink>
            <NavLink className="navlink"  exact to="/vehicles"> Reservations</NavLink>
            {/* <NavLink className="navlink" to="/reserved">Quiz</NavLink> */}
            <NavLink  className="navlink" to="/form">Make a Reservation</NavLink>
        </div>
)
}
export default NavBar