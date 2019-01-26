import uuid from 'uuid'

export const addWorkout = ({ exercises = [], createdAt, scheduledFor = 0 }) => ({
    type: "ADD_WORKOUT",
    workout: {
        id: uuid(),
        exercises,
        createdAt,
        scheduledFor
    }
})

export const removeWorkout = ({id} = {}) => ({
    type: "REMOVE_WORKOUT",
    id
})

export const editWorkout=({ id, exercises, scheduledFor }) => ({
    type: "EDIT_WORKOUT",
    id,
    exercises,
    scheduledFor
})