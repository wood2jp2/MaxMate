import React from 'react'
import { NavLink } from 'react-router-dom'

 const Header = () => (
    <div>
        <h1>MaxMate</h1>
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/exercises'>Exercises</NavLink>
            <NavLink to='/workouts'>Workouts</NavLink>
            <NavLink to='/diet'>Diet</NavLink>
        </div>
    </div>
)

export default Header

