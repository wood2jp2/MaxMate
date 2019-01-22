import React, { Component } from 'react'
import { Form, Text } from 'react-form'
import Exercise from './Exercise'
import { Link } from 'react-router-dom'

export default class AddWorkoutPage extends Component {
    state = {
        formError: false,
        // Exercises is an array of objects
        exercises: []
    }

    componentWillMount = () => {
        // console.log(this.props.location.state)
        // if (this.props.location.state.workouts !== undefined) {
        //     this.setState(() => {
        //         return {
        //             exercises: [...this.props.location.state.workouts[0]]
        //         }
        //     })
        // }
    }

    clearInputs = ({ exerciseName, reps, sets }) => {
        exerciseName.value = ""
        reps.value = "1"
        sets.value = "1"
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

    clearStateOnSubmit = () => {
        this.setState(() => ({
            exercises: []
        }))
    }

    render = () => (
        <div>
            { this.state.exercises.length > 0 ? 
                this.state.exercises.map(
                    ({ exerciseName, sets, reps }, index) => 
                        <Exercise 
                            key={index}
                            exerciseName={exerciseName} 
                            sets={sets} 
                            reps={reps}
                        />)
                :
                <p>There are no exercises added to this workout yet!</p>
            }

            <h3>Add Workout Form</h3>
            <Form>
                { formApi => (
                    <form onSubmit={this.submitExercise} id="addWorkoutForm">
                        <label htmlFor="exercise">Exercise: </label>
                        <Text field="exercise" id="exerciseName" validate={this.validateForm} placeholder="ex. Bench" />
                        <label htmlFor="sets">Sets: </label>
                        <input type="number" defaultValue="1" min="1" max="20" field="sets" id="sets" />
                        <label htmlFor="reps">Reps: </label>
                        <input type="number" defaultValue="1" min="1" max="20" field="reps" id="reps" />
                        <button type="submit">Add Exercise to Workout</button>
                    </form>
                )}
            </Form>
            {this.state.formError && <p>Please provide a name for the exercise!</p>}
            { this.state.exercises.length > 0 && 
                <div>
                    <Link to={{
                        pathname: '/workouts',
                        state: {
                            exercises: [...this.state.exercises]
                        }
                    }}>
                    <button onClick={this.clearStateOnSubmit}>
                        Submit Workout
                    </button>
                    </Link>
                </div>
            }
            </div>
    )
    
}