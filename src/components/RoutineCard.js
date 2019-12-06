import React from 'react'
import { Link } from 'react-router-dom'

const RoutineCard = ( { routine } ) => {

  let parseDate = () => {
    let slicedDate = routine.created_at.slice(0,10) 
    return slicedDate 
  }

  return (
    <div>
      <div className="item">
        <div className="content">
          <div className="header">
            <div className="left floated content">
              {parseDate()}
            </div>
            <Link to={`/routine_details/${routine.id}`}>  
              {routine.title}
            </Link>
          </div>
        </div>
      </div>

      <br/>

      <div class="ui divider"></div>

      <br/>

    </div>
  )
}

export default RoutineCard