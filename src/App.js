import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import FiltersContainer from './containers/FiltersContainer';
import ExercisesContainer from './containers/ExercisesContainer';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      allExercises: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/exercises")
    .then(response => response.json())
    .then(exerciseArray => this.setState({
      allExercises: exerciseArray
    })
    )
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <FiltersContainer />
        <ExercisesContainer allExercises={this.state.allExercises}/>
      </div>
    );
  }
}

export default App;
