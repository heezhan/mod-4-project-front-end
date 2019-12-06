import React from 'react'
import { Link } from 'react-router-dom'

class ExerciseCard extends React.Component {
  constructor() {
    super()
    this.state = {
      checked: false 
    }
  }

  toggleChecked = (event) => {
    event.persist()
    let id = event.target.value 

    this.setState({checked: !this.state.checked}, () => {
      if (this.state.checked) {
        this.props.addToSelectedExercises(id)
      } else {
        this.props.removeFromSelectedExercises(id)
      }
    })
  }

  render() {
    let {id, name, video_url, exercise_type, muscle_group} = this.props.exerciseObj
    
    return ( 
      <div className="ui card eight wide column margin-class">
        <input className="exercise-checkbox" type="checkbox" value={id} checked={this.state.checked} onChange={this.toggleChecked}/>
        <div className="content">
          <div className="header">
            {name}
          </div>
          <iframe src={video_url}></iframe>
          <p><em>{muscle_group}</em></p>
        </div>
          <Link to={`/exercises/${id}`}>
            <button
              class="ui inverted secondary button"
            >
              Show Details
            </button>
          </Link>
      </div> 
    ) 
  }
}

export default ExerciseCard 