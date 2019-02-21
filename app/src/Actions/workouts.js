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

export const callToAPIGetWorkouts = () => {
    return dispatch => axios.get('http://localhost:8008/api/getWorkouts')
        .then(response => 
            dispatch({
                type: "GET_WORKOUTS_THUNK",
                payload: {
                    data: response.data
                }
            })
        )
        .catch(error => error)
}