import uuid from 'uuid'

export const addWorkout = ({ exercises = [], scheduledFor = 0, createdAt = 0}) => ({
    type: "ADD_WORKOUT",
    workout: {
        id: uuid(),
        exercises,
        scheduledFor, 
        createdAt
    }
})

export const removeWorkout = ({id} = {}) => ({
    type: "REMOVE_WORKOUT",
    id
})

export const editWorkout=({ id, exercises }) => ({
    type: "EDIT_WORKOUT",
    id,
    exercises
})