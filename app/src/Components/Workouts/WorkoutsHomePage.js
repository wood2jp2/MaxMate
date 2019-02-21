import React, { Component } from 'react'
import Workout from './Workout'
import { connect } from 'react-redux'
import moment from 'moment'

class WorkoutsHomePage extends Component {
    state = {
        workouts: []
    }

    componentWillMount() {
        console.log("MOUNT: ", this.props.workouts)
    }

    render = () => (
        <div>
            <h2>Workouts</h2>
                <div>             
                    <h4>Today's Workout</h4>
                    <button onClick={() => {
                        this.props.history.push('/workouts/addWorkout')
                    }}>Add Workout</button>
                    {
                        this.props.workouts.length > 0 ?
                        this.props.workouts.map((workout, index) => (
                            <div key={index}>
                                <Workout
                                    id={workout._id}
                                    index={index+1}
                                    scheduledFor={moment(workout.scheduledFor).format("MMM Do YYYY")}
                                    createdAt={workout.createdAt}
                                    exercises={[...workout.exercises]}
                                />
                            </div>
                            )
                        )
                        :
                        <p>There are currently no workouts to show!</p>
                    }
                </div>
        </div>
    )
}

const mapStateToProps = store => ({
    workouts: store.workouts
}) 

// const mapDispatchToProps = dispatch => ({
//     getWorkouts: (dbWorkouts) => (dispatch(getWorkouts(dbWorkouts)))
// })

export default connect(mapStateToProps)(WorkoutsHomePage)