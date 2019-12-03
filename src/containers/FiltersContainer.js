import React from 'react'

class FiltersContainer extends React.Component {
  render() {

    let { selectedMuscleGroup, handleMuscleGroupChange } = this.props

    return (
      <div>
        <form>
          <label>
            <input 
              type="radio" 
              value="All" 
              checked={selectedMuscleGroup === "All"} 
              onChange={(event) => handleMuscleGroupChange(event)}
            />
            All Muscle Groups
          </label>
          
          <h1>Upper Body</h1>

            <label>
              <input 
              type="radio" 
              value="Abs" 
              checked={selectedMuscleGroup === "Abs"} 
              onChange={(event) => handleMuscleGroupChange(event)} 
            />
              Abs
            </label>

            <label>
              <input 
                type="radio" 
                value="Chest" 
                checked={selectedMuscleGroup === "Chest"}
                onChange={(event) => handleMuscleGroupChange(event)} 
                />
              Chest
            </label>

            <label>
              <input 
                type="radio" 
                value="Back" 
                checked={selectedMuscleGroup === "Back"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Back
            </label>

            <label>
              <input 
                type="radio" 
                value="Shoulders" 
                checked={selectedMuscleGroup === "Shoulders"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Shoulders
            </label>

            <label>
              <input 
                type="radio" 
                value="Biceps" 
                checked={selectedMuscleGroup === "Biceps"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Biceps
            </label>

            <label>
              <input 
                type="radio" 
                value="Triceps" 
                checked={selectedMuscleGroup === "Triceps"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Triceps
            </label>          

          <h1>Lower Body</h1>

            <label>
              <input 
                type="radio" 
                value="Quadriceps" 
                checked={selectedMuscleGroup === "Quadriceps"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Quadriceps
            </label>

            <label>
              <input 
                type="radio" 
                value="Hamstrings" 
                checked={selectedMuscleGroup === "Hamstrings"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Hamstrings
            </label>

        </form>
      </div>
    )
  }
}

export default FiltersContainer 