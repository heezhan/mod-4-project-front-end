import React from 'react';
import RoutineExercise from './RoutineExercise';

const RoutineDetails = ( {id, currentUser: {routines}} ) => {
    let foundRoutine = routines.find(routine => routine.id === id)

    return (
        <div className="ui grid container">
            {foundRoutine.exercises.map(exercise => <RoutineExercise key={exercise.id} exercise={exercise}/>)}
        </div>
    )
}

export default RoutineDetails