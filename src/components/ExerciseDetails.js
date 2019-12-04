import React from 'react'

const ExerciseDetails = ( { exerciseObj: {muscle_group, name, video_url, exercise_type} } ) => {
  return (
    <div>
      <h1>{name}</h1>
      <iframe src={video_url} frameborder="0"></iframe>
      <h3>Muscle Group</h3>
      <p>{muscle_group}</p>

      <h3>Exercise Type</h3>
      <p>{exercise_type}</p>
    </div>
  )
}

export default ExerciseDetails

