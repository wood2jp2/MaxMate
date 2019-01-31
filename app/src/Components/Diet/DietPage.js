import React from 'react'

const DietPage = props => (
    <div>
        <p>This is the Diet page</p>
        <button onClick={() => props.history.push('/diet/logMeal')}>Log a meal</button>
    </div>
)

export default DietPage