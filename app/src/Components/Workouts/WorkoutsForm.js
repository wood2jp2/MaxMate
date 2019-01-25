import React from 'react'
import { Form, Text } from 'react-form'

const WorkoutsForm = props => (
    <div>
        <Form>
        { formApi => (
            <form onSubmit={props.submitExercise} id="addWorkoutForm">
                <label htmlFor="exercise">Exercise: </label>
                <Text field="exercise" id="exerciseName" placeholder="ex. Bench" />
                <label htmlFor="sets">Sets: </label>
                <input type="number" defaultValue="1" min="1" max="20" field="sets" id="sets" />
                <label htmlFor="reps">Reps: </label>
                <input type="number" defaultValue="1" min="1" max="20" field="reps" id="reps" />
                <button type="submit">Add Exercise to Workout</button>
            </form>
        )}
        </Form>
        { props.formError && <p>Please provide a name for the exercise!</p> }

        <button disabled={!(props.exercises.length > 0)} onClick={props.onSubmitWorkout}>
            Submit Workout
        </button>
    
    </div>
)


export default WorkoutsForm