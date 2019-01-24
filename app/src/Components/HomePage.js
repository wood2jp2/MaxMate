import React, { Component } from 'react'
import { connect } from 'react-redux'

class HomePage extends Component {

    componentWillMount = () => {
        console.log(this.props.workouts)
    }
    
    render = () => (
        <div>
            <p>This is the home page</p>
        </div>
    )
}

                
const mapStateToProps = store => ({
    workouts: store.workouts
}) 

export default connect(mapStateToProps)(HomePage)