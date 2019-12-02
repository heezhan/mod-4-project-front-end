import React from 'react'

class ExerciseCard extends React.Component {
  render() {
    let {id, name, video_url, exercise_type, muscle_group} = this.props.exerciseObj

    return (
      <div className="ui card eight wide column">
        <div className="content">
          <div className="header">
            {name}
          </div>
          <iframe src={video_url}></iframe>
        </div>
      </div>
    )
  }
}

export default ExerciseCard 