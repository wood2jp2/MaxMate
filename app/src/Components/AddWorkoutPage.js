import React, { Component } from 'react'
import Exercise from './Exercise'
import { connect } from 'react-redux'
import { addWorkout, removeWorkout } from '../Actions/workouts'
import WorkoutsForm from './WorkoutsForm'

class AddWorkoutPage extends Component {
    state = {
        formError: false,
        // Exercises is an array of objects
        exercises: []
    }

    componentWillMount = () => {
        if (!!this.props.match.params.id) {
            const workoutExercisesToEdit = this.props.workouts.filter(workout => workout.id === this.props.match.params.id)[0].exercises
            this.setState(() => ({
                exercises: workoutExercisesToEdit
            }))
        }
    }

    clearInputs = ({ exerciseName, reps, sets }) => {
        exerciseName.value = ""
        reps.value = "1"
        sets.value = "1"
    }

    onSubmitWorkout = () => {
        // addWorkout action is added to the props of this component. We can access it and pass in the correct params by just accessing props.
        this.props.addWorkout({exercises: [...this.state.exercises]})
        this.props.history.push('/workouts')
    }

    editExercise = () => {
        console.log('Request to edit exercise')
    }

    deleteWorkout = () => {
        console.log('request to delete exercise')
        this.props.removeWorkout({id: this.props.match.params.id})
        this.props.history.push('/workouts')
    }

    submitExercise = e => {
        // We don't need to track submitting exercises to the redux state. We can simply wait and add a full workout instead.
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
            <button disabled={this.state.exercises.length === 0} onClick={this.deleteWorkout}>Discard workout</button>
            { this.state.exercises.length > 0 ? 
                
                this.state.exercises.map((exercise, index) => (
                    <div key={index}>
                        <Exercise {...exercise}/>
                        <button onClick={this.editExercise}>Edit Exercise</button>
                    </div>
                ))
                
                :
                <p>There are no exercises added to this workout yet!</p>
            }

            <h3>Add exercises to workout!</h3>
            <WorkoutsForm onSubmitWorkout={this.onSubmitWorkout} exercises={this.state.exercises} formError={this.state.formError} submitExercise={this.submitExercise}/>
        </div>
    )
}

const mapStateToProps = store => ({
    workouts: store.workouts
}) 

const mapDispatchToProps = dispatch => ({
    addWorkout: workout => ( dispatch(addWorkout(workout)) ),
    removeWorkout: workout => ( dispatch(removeWorkout(workout)) )

})

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutPage)