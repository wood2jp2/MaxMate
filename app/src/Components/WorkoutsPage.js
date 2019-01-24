import React, { Component } from 'react'
import Workout from './Workout'
import { connect } from 'react-redux'

class WorkoutsPage extends Component {

    state = {
        // This is going to need to be an array of workouts (consisting of exercises). A workout is an array of objects (exercises)
        workouts: this.props.workouts || []
    }

    navigateToAddWorkout = () => this.props.history.push('/workouts/addWorkout')

    render = () => (
        <div>
            <h2>Workouts</h2>
                <div>             
                    <h4>Today's Workout</h4>
                    <button onClick={this.navigateToAddWorkout}>Add Workout</button>
                    {
                        this.state.workouts.length > 0 ?
                        this.state.workouts.map((workout, index) => (
                            <div key={index}>
                                <Workout
                                    id={workout.id}
                                    index={index+1}
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

export default connect(mapStateToProps)(WorkoutsPage)