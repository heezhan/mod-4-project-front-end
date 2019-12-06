import React from 'react'
import ExerciseCard from '../components/ExerciseCard'
import {Link} from 'react-router-dom'

class ExercisesContainer extends React.Component {
  render() {
    let { shownExercises, routineTitle, changeRoutineTitle, createNewRoutine, addToSelectedExercises, removeFromSelectedExercises } = this.props
    return (
      <div>
        <input 
          type="text"
          value={routineTitle}
          onChange={changeRoutineTitle}
          placeholder="Title your exercise"
        />

        <Link to="/routines">
          <button
            onClick={createNewRoutine}
          >
            Create New Routine
          </button>
        </Link>

        <div className="ui grid container">
          {shownExercises.map(exercise => <ExerciseCard key={exercise.id} exerciseObj={exercise} addToSelectedExercises={addToSelectedExercises} removeFromSelectedExercises={removeFromSelectedExercises} />)}
        </div>

      </div>
    )
  }
}

export default ExercisesContainer 