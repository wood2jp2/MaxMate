import React from 'react'
import { NavLink } from 'react-router-dom'

 const activeStyle = {
     fontWeight: "bold",
     color: 'blue'
 }

 const Header = () => (
    <div>
        <h1>MaxMate</h1>
        <div>
            <NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink>
            <NavLink to='/exercises' activeStyle={activeStyle}>Exercises</NavLink>
            <NavLink to='/workouts' activeStyle={activeStyle}>Workouts</NavLink>
            <NavLink to='/diet' activeStyle={activeStyle}>Diet</NavLink>
        </div>
    </div>
)

export default Header

