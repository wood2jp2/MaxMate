import React from 'react'
import AddWorkoutPage from './AddWorkoutPage';

const EditWorkoutPage = props => (
    <div>
        <h3>Edit Workout</h3>
        <AddWorkoutPage {...props}/>
    </div>
)

export default EditWorkoutPage