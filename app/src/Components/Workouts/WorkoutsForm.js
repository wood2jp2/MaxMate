import React from 'react'
import { Form, Text } from 'react-form'
import { SingleDatePicker } from 'react-dates'

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
        <SingleDatePicker
                    date={props.scheduledFor} // momentPropTypes.momentObj or null
                    onDateChange={props.onDateChange} // PropTypes.func.isRequired
                    focused={props.datepickerFocused} // PropTypes.bool
                    onFocusChange={props.onDateFocusChange} // PropTypes.func.isRequired
                    id="scheduledFor" // PropTypes.string.isRequired,
                />
        { props.formError && <p>Please provide a name for the exercise!</p> }

        <br />
        <br />
        <button disabled={!(props.exercises.length > 0)} onClick={props.onSubmitWorkout}>
            Submit Workout
        </button>
    
    </div>
)


export default WorkoutsForm