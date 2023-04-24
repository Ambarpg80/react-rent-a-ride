import React from "react"
import Vehicles from "./Vehicles"

function ReservationList({viewRentals}){
    console.log(viewRentals)
return(
    <div>
       { viewRentals.map(rental=>  <ul><Vehicles key={rental.id} rental={rental}/></ul>) }
    </div>
)
}
export default ReservationList;