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

    clearInputs = ({ exerciseName, reps, sets }) => {
        exerciseName.value = ""
        reps.value = "1"
        sets.value = "1"
    }
    
    validateForm = values => {
        return {warning: values !== "val" ? 'Please give the exercise a name!' : null}
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
            }), () => console.log(this.state))
    
            this.clearInputs({exerciseName, sets, reps})
        }
    }

    submitWorkout = () => {
        console.log('Request to submit workout received.')
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
                <Link to={{ pathname: '/workouts', state: [...this.state.exercises] }}>
                    <button onClick={this.submitWorkout}>Submit Workout</button>
                </Link>
            }
        </div>
    )
    
}