import React from 'react'
import RoutineCard from '../components/RoutineCard'

const RoutinesContainer = ( {currentUser} ) => {
  return (
    <div>
      {
        currentUser.routines.map( routine => <RoutineCard routine={routine} /> )
      }
    </div>
  )
}

export default RoutinesContainer