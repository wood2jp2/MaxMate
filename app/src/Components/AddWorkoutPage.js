import React, { Component } from 'react'
import Exercise from './Exercise'
import { connect } from 'react-redux'
import { addWorkout, removeWorkout, editWorkout } from '../Actions/workouts'
import WorkoutsForm from './WorkoutsForm'

class AddWorkoutPage extends Component {
    state = {
        formError: false,
        // Exercises is an array of objects
        exercises: [],
        id: null
    }

    componentWillMount = () => {
        const routeIdParam = this.props.match.params.id
        if (!!routeIdParam) {
            const workoutExercisesToEdit = this.props.workouts.filter(workout => workout.id === routeIdParam)[0].exercises
            this.setState(() => ({
                exercises: workoutExercisesToEdit,
                id: routeIdParam
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
        if (this.state.id === null) {
            this.props.addWorkout({exercises: [...this.state.exercises]})
        }
        else {
            this.props.editWorkout({id: this.state.id, exercises: [...this.state.exercises]})
        }
        this.props.history.push('/workouts')

    }

    deleteExercise = e => {
        e.preventDefault()
        const exerciseIndexToDelete = Number(e.target.id)

        console.log('request to edit exercise: ', exerciseIndexToDelete)
        this.setState(prevState => ({
            exercises: prevState.exercises.filter((exercise, index) => index !== exerciseIndexToDelete)
        }), () => console.log(this.state.exercises))

        // I want to take the exercise being clicked on, temporarily remove it from state, and force the values into the editable fields below. From there, the user can edit the values, and resubmit the form and exercise to the state of this component.

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
                        <button id={index} onClick={e => this.deleteExercise(e)}>Delete Exercise</button>
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
    removeWorkout: workout => ( dispatch(removeWorkout(workout)) ),
    editWorkout: workout => ( dispatch(editWorkout(workout)) )
})

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkoutPage)