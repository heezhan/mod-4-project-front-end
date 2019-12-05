import React from 'react'
import { Link } from 'react-router-dom'

const RoutineCard = ( { routine } ) => {
  return (
    <div>
      <Link to={"/routine_details"}>
        <h1>{routine.title}</h1>
      </Link>
    </div>
  )
}

export default RoutineCard