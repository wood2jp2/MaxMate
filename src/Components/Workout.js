import React, { Component } from 'react'
import Exercise from './Exercise'

 const Workout = props => (
    <div>
        { props.exercises.map((exercise, index) => (
            <Exercise 
                key={index}
                {...exercise}
            />
        )) }
    </div>
)

export default Workout