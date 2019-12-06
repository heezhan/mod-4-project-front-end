import React from 'react'
import RoutineCard from '../components/RoutineCard'

const RoutinesContainer = ( {currentUser} ) => {
  return (
    <div>

      <div className="ui inverted segment">
        <div>
          <img className="resize" src={require('./weights.png')}/>
          <h1 className="exo-font">YOUR ROUTINES</h1>
        </div>
      </div>

      <br/>
      
        {
          currentUser.routines.map( routine => <RoutineCard key={routine.id} routine={routine} /> )
        }
 
    </div>
  )
}

export default RoutinesContainer