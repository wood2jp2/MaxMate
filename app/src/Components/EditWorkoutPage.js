import React from 'react'
import WorkoutPage from './WorkoutPage';

const EditWorkoutPage = props => (
    <div>
        <h3>Edit Workout</h3>
        <WorkoutPage {...props}/>
    </div>
)

export default EditWorkoutPage