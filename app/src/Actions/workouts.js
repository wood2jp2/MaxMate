import uuid from 'uuid'

export const addWorkout = ({ exercises = [], createdAt, scheduledFor = 0 }) => ({
    type: "ADD_WORKOUT",
    workout: {
        _id: uuid(),
        exercises,
        createdAt,
        scheduledFor
    }
})

export const removeWorkout = ({ _id } = {}) => ({
    type: "REMOVE_WORKOUT",
    _id
})

export const editWorkout=({ _id, exercises, scheduledFor }) => ({
    type: "EDIT_WORKOUT",
    _id,
    exercises,
    scheduledFor
})

export const getWorkouts = dbWorkouts => ({
    type: "GET_WORKOUTS",
    dbWorkouts
})