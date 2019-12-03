import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FiltersContainer from './containers/FiltersContainer';
import ExercisesContainer from './containers/ExercisesContainer';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      allExercises: [],
      selectedMuscleGroup: "All",
      shownExercises: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/exercises")
    .then(response => response.json())
    .then(exerciseArray => this.setState({
      allExercises: exerciseArray,
      shownExercises: exerciseArray
    })
    )


  }

  handleMuscleGroupChange = (event) => {
    let filteredExercises = []

    if (event.target.value === "All") {
      filteredExercises = this.state.allExercises
    } else {
      filteredExercises = this.state.allExercises.filter( exercise => exercise.muscle_group === event.target.value )
    }

    this.setState({
      selectedMuscleGroup: event.target.value,
      shownExercises: filteredExercises
    })
  }





  

  render() {
    return (
      <div className="App">
        <NavBar />
        <FiltersContainer 
          selectedMuscleGroup={this.state.selectedMuscleGroup}
          handleMuscleGroupChange={this.handleMuscleGroupChange}
        />
        <ExercisesContainer shownExercises={this.state.shownExercises}/>
      </div>
    );
  }
}

export default App;
