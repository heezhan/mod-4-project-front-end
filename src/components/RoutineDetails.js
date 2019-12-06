import React from 'react';
import RoutineExercise from './RoutineExercise';
import {Link} from 'react-router-dom'

const RoutineDetails = ( {id, currentUser: {routines}, rmvRoutinefromCurrentUser} ) => {
    let foundRoutine = routines.find(routine => routine.id === id)

    let deleteRoutine = () => {
        fetch(`http://localhost:3000/routines/${id}`, {
            method: "DELETE"
        })
        .then(() => rmvRoutinefromCurrentUser(id))
    }

    return (
        <div className="ui grid container">

        <Link to="/routines">
            <button onClick={deleteRoutine}>
                Delete Routine
            </button>
        </Link>
  
            {foundRoutine.exercises.map(exercise => <RoutineExercise key={exercise.id} exercise={exercise}/>)}
        </div>
    )
}

export default RoutineDetails