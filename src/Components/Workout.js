import React, { Component } from 'react'
import Exercise from './Exercise'

export default props => (
    <div>
        { props.exercises.map((exercise, index) => (
            <Exercise 
                key={index}
                {...exercise}
            />
        )) }
    </div>
)