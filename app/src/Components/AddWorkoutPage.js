import React, { Component } from 'react'
import Exercise from './Exercise'
import { connect } from 'react-redux'
import { addWorkout } from '../Actions/workouts'
import WorkoutsForm from './WorkoutsForm'

class AddWorkoutPage extends Component {
    state = {
        formError: false,
        // Exercises is an array of objects
        exercises: 
            this.props.workouts
                .filter(workout => {
                    return workout.id === this.props.match.params.id
                }) || []
    }

    clearInputs = ({ exerciseName, reps, sets }) => {
        exerciseName.value = ""
        reps.value = "1"
        sets.value = "1"
    }

    onSubmitWorkout = () => {
        this.props.addWorkout({exercises: [...this.state.exercises]})
        this.props.history.push('/workouts')
    }

    submitExercise = e => {
        e.preventDefault()

        const { exerciseName, sets, reps } = e.target
        
        if (!exerciseName.value) {
            this.setState(() => ({ formError: true }))
        } 
        
        else {
            const exercise = {
                [exerciseName.id]: exerciseName.value,
                [sets.id]: Number(sets.value),
                [reps.id]: Number(reps.value),
            }
    
            this.setState( prevState => ({
                exercises: [...prevState.exercises, exercise],
                formError: false
            }))
    
            this.clearInputs({exerciseName, sets, reps})
        }
    }

    render = () => (
        <div>
            { this.state.exercises.length > 0 ? 
                this.state.exercises.map((exercise, index) => (
                    <div key={index}>
                        <Exercise {...exercise}/>
                    </div>
                ))
                :
                <p>There are no exercises added to this workout yet!</p>
            }

            <h3>Add Workout Form</h3>
            <WorkoutsForm onSubmitWorkout={this.onSubmitWorkout} exercises={this.state.exercises} formError={this.state.formError} submitExercise={this.submitExercise}/>
        </div>
    )
}

const mapStateToProps = store => ({
    workouts: store.workouts
}) 

const mapDispatchToProps = dispatch => ({
    addWorkout: workout => ( dispatch(addWorkout(workout)) )
})

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutPage)