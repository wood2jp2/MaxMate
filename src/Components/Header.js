import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div>
        <h3>MaxMate</h3>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/exercises'>Exercises</Link>
            <Link to='/schedule'>Schedule</Link>
            <Link to='/diet'>Diet</Link>
        </div>
    </div>
)

