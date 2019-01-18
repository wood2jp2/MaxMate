import React, { Component } from 'react'
import { Form, Text } from 'react-form'
import Workout from './Workout'

export default class AddWorkoutPage extends Component {
    state = {
        formError: false,
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

    onSubmit = e => {
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

    render = () => (
        <div>

            { this.state.exercises.length > 0 ? 
                this.state.exercises.map(({ exerciseName, sets, reps }, index) => 
                    <Workout 
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
                    <form onSubmit={this.onSubmit} id="addWorkoutForm">
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
        </div>
    )
    
}