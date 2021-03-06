import React, { Component } from 'react'
import Exercise from './Exercise'
import { connect } from 'react-redux'
import { addWorkout, removeWorkout, editWorkout } from '../../Actions/workouts'
import WorkoutsForm from './WorkoutsForm'
import moment from 'moment'

class WorkoutPage extends Component {
    state = {
        formError: false,
        // Exercises is an array of objects
        exercises: [],
        scheduledFor: moment(),
        datepickerFocused: false,
        _id: null
    }

    componentWillMount = () => {
        const routeIdParam = this.props.match.params.id

        if (!!routeIdParam) {
            const workoutToEdit = [...this.props.workouts].filter(workout => workout._id === routeIdParam)[0]

            this.setState(() => ({
                exercises: workoutToEdit.exercises,
                scheduledFor: workoutToEdit.scheduledFor,
                _id: routeIdParam
            }))
        }
    }

    clearInputs = ({ exerciseName, reps, sets }) => {
        exerciseName.value = ""
        reps.value = "1"
        sets.value = "1"
    }

    onDateChange = ({_d: date}) => {
        this.setState(() => ({
            scheduledFor: moment(date)
        }), () => console.log("SCHEDULED FOR DATE STATE: ", this.state.scheduledFor))
    }

    onDateFocusChange = ({ focused }) => {
        this.setState(() => ({
            datepickerFocused: focused
        }), () => console.log("FOCUS CHANGE: ", this.state.datepickerFocused))
    }

    onSubmitWorkout = () => {
        // addWorkout action is added to the props of this component thanks to redux. We can access it and pass in the correct params by just accessing props.
        console.log('submitting workot')
        
        if (this.state._id === null) {
            this.props.addWorkout({
                exercises: [...this.state.exercises], 
                scheduledFor: this.state.scheduledFor,
                createdAt: moment().format("MMM Do YYYY")
            })
        }
        else {
            this.editWorkout()
        }

        this.props.history.push('/workouts')
    }

    // Redux understands that an exercise on a new and not submitted workout is not reflected in the state. It also understands that editing an exercise in an un-submitted workout should not be reflected in the redux state.

    // It does NOT understand that editing an existing workout's exercise should NOT reflect in the redux state until the revised workout and exercise(s) is re-submitted, going through the action / reducer again. 

    // It is updating the redux state AND component state immediately on change of the exercise edit, but no where below in the function do I set the state of the component or do I call any of the dispatched functions.

    // Is this a feature of redux? Do connect components somehow immediately reflect change on the fields it's connected to? Even so, I'm making clones of state. How is it changing immediately?
    editExercise = (_event, value, id, field) => {

        const exerciseToEdit = [...this.state.exercises][id]
        const filteredState = [...this.state.exercises].filter((_, index) => index !== id)
        const clonedExercise = Object.assign({}, exerciseToEdit)

        if (isNaN(Number(value))) {
            clonedExercise[field] = value
        } else {
            clonedExercise[field] = Number(value)
        }
        
        filteredState.splice(id, 0, clonedExercise)

        this.setState(() => ({ 
            exercises: filteredState 
        }), () => {
            console.log("WorkoutPage Component State: ", this.state.exercises)
            console.log("REDUX STATE After: ", this.props.workouts)
        })
    }

    deleteExercise = e => {
        e.preventDefault()
        
        const exerciseIndexToDelete = Number(e.target.id)

        console.log('request to delete exercise: ', exerciseIndexToDelete)
        
        this.setState(prevState => ({
            exercises: prevState.exercises.filter((_, index) => index !== exerciseIndexToDelete)
        }), () => {
            if (this.state.exercises.length === 0) {
                this.deleteWorkout()
            }
        })
    }

    editWorkout = () => {
        console.log("SCHEDULED FOR EDIT: ", this.state.scheduledFor)
        this.props.editWorkout({
            _id: this.state._id, 
            exercises: [...this.state.exercises], 
            scheduledFor: this.state.scheduledFor
        })
    }

    deleteWorkout = () => {
        console.log('request to delete workout')
        this.props.removeWorkout({ _id: this.props.match.params.id })
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
                        <Exercise 
                            {...exercise} 
                            exercisesEditable={true} 
                            id={index}
                            onChange={(event, value, id, field) => this.editExercise(event, value, id, field)} 
                            />

                        <button id={index} onClick={e => this.deleteExercise(e)}>Delete Exercise</button>
                    </div>
                ))
                :
                <p>There are no exercises added to this workout yet!</p>
            }

            <h3>Add exercises to workout!</h3>
            <WorkoutsForm 
                onSubmitWorkout={this.onSubmitWorkout} 
                exercises={this.state.exercises} 
                formError={this.state.formError} 
                submitExercise={this.submitExercise}
                scheduledFor={this.state.scheduledFor}
                datepickerFocused={this.state.datepickerFocused}
                onDateChange={this.onDateChange}
                onDateFocusChange={this.onDateFocusChange}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutPage)