import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FiltersContainer from './containers/FiltersContainer';
import ExercisesContainer from './containers/ExercisesContainer';
import ExerciseCard from './components/ExerciseCard';
import {Route, Redirect} from "react-router-dom";
import ExerciseDetails from './components/ExerciseDetails';
import Login from './components/Login';
import RoutinesContainer from './containers/RoutinesContainer';
import RoutineDetails from './components/RoutineDetails';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
      loggedin: false,
      allExercises: [],
      selectedMuscleGroup: "All",
      shownExercises: [],
      routineTitle: "",
      selectedExercises: []
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
        user_id: this.state.currentUser.id,
        title: this.state.routineTitle 
      } )
    } )
      .then( resp => resp.json() )
      .then( routineObj => {
        this.addExercisesToRoutine(routineObj.id)} )
  }

  addExercisesToRoutine = (routineId) => {
    let newArray = this.state.selectedExercises.map( exercise => {
      return fetch( "http://localhost:3000/routine_exercises", {
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
    })

    Promise.all(newArray)
    .then( () => {
      fetch("http://localhost:3000/finduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          id: this.state.currentUser.id
        })
      }).then(resp => resp.json())
      .then(userObj => this.setState({
        currentUser: userObj,
        selectedExercises: [],
        routineTitle: "",
        selectedMuscleGroup: "All",
      }))
    })
  }

  addToSelectedExercises = (id) => {
    this.setState({
      selectedExercises: [...this.state.selectedExercises, id]
    })
  }

  removeFromSelectedExercises = (id) => {
    let copy = [...this.state.selectedExercises]
    let updatedCopy = copy.filter(copy => copy !== id )

    this.setState({
      selectedExercises: updatedCopy
    })
  }

  fetchUser = (loginState) => {
    fetch( "http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify( {
        username: loginState.username,
        password: loginState.password
      } )
    } )
      .then(resp => resp.json())
      .then(responseObj =>{
          this.setState({
            currentUser: responseObj,
            loggedin: !this.state.loggedin
          })
      })
  }

  rmvRoutinefromCurrentUser = (id) => {
    let copyRoutines = [...this.state.currentUser.routines]
    
    let updatedCopyRoutines = copyRoutines.filter(routine => routine.id !== id)

    this.setState({
      currentUser: {...this.state.currentUser, routines:
        updatedCopyRoutines}
    })
  }

  handleLogOut = () => {
    this.setState({
      currentUser: null,
      loggedin: false 
    })
  }
  
  render() {
    return (
      <div className="App">
        <NavBar handleLogOut={this.handleLogOut}/>

        <Route exact path="/login">
          <Login fetchUser={this.fetchUser}/>
        </Route>

        {
          this.state.currentUser ? ( 
            this.state.currentUser.routines.length > 0 ? (<Redirect to={`/routines`}/>) : (<Redirect to={`/`}/>)
          ) : null
        }

        { this.state.loggedin ? (
          <div>
            <Route exact path={`/routines`}>
              <RoutinesContainer currentUser={this.state.currentUser}/>
            </Route>
  
            <Route exact path="/">
              <div className="ui grid">
                
                <div className="ui four wide column">
                  <FiltersContainer 
                    selectedMuscleGroup={this.state.selectedMuscleGroup}
                    handleMuscleGroupChange={this.handleMuscleGroupChange}
                  />
                </div>
  
                <div className="ui twelve wide column">
                  <ExercisesContainer 
                    shownExercises={this.state.shownExercises}
                    routineTitle={this.state.routineTitle}
                    changeRoutineTitle={this.changeRoutineTitle}
                    createNewRoutine={this.createNewRoutine}
                    addToSelectedExercises={this.addToSelectedExercises}
                    removeFromSelectedExercises={this.removeFromSelectedExercises}
                  />
                </div>
  
              </div>
            </Route>
  
            <Route exact path="/routine_details/:id" render={
              (props) => 
              {
                let id = parseInt(props.match.params.id)
                return <RoutineDetails id={id} currentUser={this.state.currentUser} rmvRoutinefromCurrentUser={this.rmvRoutinefromCurrentUser}/>
              }
            }/>
            
            <Route exact path="/exercises/:id" render={(props) => {
              let id = parseInt(props.match.params.id)
              let foundExercise = this.state.allExercises.find(exercise => exercise.id === id)
              if (foundExercise === undefined) {
                return null
              } else {
                return <ExerciseDetails exerciseObj={foundExercise}/>
              }
            }}/>
          </div>) : (
            <Redirect to={"/login"} />
          )
        }
      
      </div>
    );
  }
}

export default App;