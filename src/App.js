import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FiltersContainer from './containers/FiltersContainer';
import ExercisesContainer from './containers/ExercisesContainer';
import {Route} from "react-router-dom";

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      userId: 1, //DON'T HARD CODE THIS
      allExercises: [],
      selectedMuscleGroup: "All",
      shownExercises: [],
      routineTitle: "",
      selectedExercises: [1, 2, 3] //DON'T HARD CODE THIS
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

  changeRoutineTitle = (event) => {
    this.setState( { routineTitle: event.target.value } )
  }

  createNewRoutine = () => {
    console.log("POSTing to backend to create new routine")
    fetch( "http://localhost:3000/routines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( { 
        user_id: this.state.userId,
        title: this.state.routineTitle 
      } )
    } )
      .then( resp => resp.json() )
      .then( routineObj => this.addExercisesToRoutine(routineObj.id) )
  }

  addExercisesToRoutine = (routineId) => {
    this.state.selectedExercises.forEach( exercise => {
      fetch( "http://localhost:3000/routine_exercises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify( {
          routine_id: routineId,
          exercise_id: exercise
        } )
      } )
        .then( resp => resp.json() )
        .then( wtf => console.log(wtf) )
    } )
  }

  
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/">
        <FiltersContainer 
          selectedMuscleGroup={this.state.selectedMuscleGroup}
          handleMuscleGroupChange={this.handleMuscleGroupChange}
        />
        <ExercisesContainer 
          shownExercises={this.state.shownExercises}
          routineTitle={this.state.routineTitle}
          changeRoutineTitle={this.changeRoutineTitle}
          createNewRoutine={this.createNewRoutine}
        />
        </Route>
      </div>
    );
  }
}

export default App;