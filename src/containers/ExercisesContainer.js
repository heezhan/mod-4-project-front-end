import React from 'react'
import ExerciseCard from '../components/ExerciseCard'

class ExercisesContainer extends React.Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.allExercises.map(exercise => <ExerciseCard key={exercise.id} exerciseObj={exercise}/>)}
      </div>
    )
  }
}

export default ExercisesContainer 