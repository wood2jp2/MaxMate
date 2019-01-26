import React from 'react'
import Workout from './Workout'
import { connect } from 'react-redux'
import moment from 'moment'

const WorkoutsHomePage = props => (
        <div>
            <h2>Workouts</h2>
                <div>             
                    <h4>Today's Workout</h4>
                    <button onClick={() => {
                        props.history.push('/workouts/addWorkout')
                    }}>Add Workout</button>
                    {
                        props.workouts.length > 0 ?
                        props.workouts.map((workout, index) => (
                            <div key={index}>
                                <Workout
                                    id={workout.id}
                                    index={index+1}
                                    scheduledFor={moment(workout.scheduledFor._d).format("MMM Do YYYY")}
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


const mapStateToProps = store => ({
    workouts: store.workouts
}) 

export default connect(mapStateToProps)(WorkoutsHomePage)