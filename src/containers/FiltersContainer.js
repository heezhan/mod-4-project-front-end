import React from 'react'

class FiltersContainer extends React.Component {
  render() {

    let { selectedMuscleGroup, handleMuscleGroupChange } = this.props

    // ui vertical left sidebar menu visible
    return (
      <div>
        <form>
          <div className="input-option">
            <label>
              <input 
                type="radio" 
                value="All" 
                checked={selectedMuscleGroup === "All"} 
                onChange={(event) => handleMuscleGroupChange(event)}
              />
              All Muscle Groups
            </label>
          </div>
          <br/>

          <h1 className="input-label">Upper Body</h1>
          <br/>
                
          <div className="input-option">
            <label>
              <input 
              type="radio" 
              value="Abs" 
              checked={selectedMuscleGroup === "Abs"} 
              onChange={(event) => handleMuscleGroupChange(event)} 
            />
              Abs
            </label>
          </div>
          <br/>

          <div className="input-option">
            <label>
              <input 
                type="radio" 
                value="Chest" 
                checked={selectedMuscleGroup === "Chest"}
                onChange={(event) => handleMuscleGroupChange(event)} 
                />
              Chest
            </label>
          </div>
          <br/>

          <div className="input-option">
            <label>
              <input 
                type="radio" 
                value="Back" 
                checked={selectedMuscleGroup === "Back"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Back
            </label>
          </div>
          <br/>

          <div className="input-option">
            <label>
              <input 
                type="radio" 
                value="Shoulders" 
                checked={selectedMuscleGroup === "Shoulders"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Shoulders
            </label>
          </div>
          <br/>

          <div className="input-option">
              <label>
                <input 
                  type="radio" 
                  value="Biceps" 
                  checked={selectedMuscleGroup === "Biceps"}
                  onChange={(event) => handleMuscleGroupChange(event)} 
                />
                Biceps
              </label>
          </div>
          <br/>

          <div className="input-option">
            <label>
              <input 
                type="radio" 
                value="Triceps" 
                checked={selectedMuscleGroup === "Triceps"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Triceps
            </label>    
          </div>  
          <br/>    

          <h1 className="input-label">Lower Body</h1>

          <div className="input-option">
            <label>
              <input 
                type="radio" 
                value="Quadriceps" 
                checked={selectedMuscleGroup === "Quadriceps"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Quadriceps
            </label>
          </div>
          <br/>

          <div className="input-option">
            <label>
              <input 
                type="radio" 
                value="Hamstrings" 
                checked={selectedMuscleGroup === "Hamstrings"}
                onChange={(event) => handleMuscleGroupChange(event)} 
              />
              Hamstrings
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default FiltersContainer 