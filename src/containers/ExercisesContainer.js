import React from 'react'
import ExerciseCard from '../components/ExerciseCard'

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

        <button
          onClick={createNewRoutine}
        >
          Create New Routine
        </button>

        <div className="ui grid container">
          {shownExercises.map(exercise => <ExerciseCard key={exercise.id} exerciseObj={exercise} addToSelectedExercises={addToSelectedExercises} removeFromSelectedExercises={removeFromSelectedExercises} />)}
        </div>

      </div>
    )
  }
}

export default ExercisesContainer 