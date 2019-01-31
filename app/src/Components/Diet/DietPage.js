import React from 'react'
import SearchForm from './SearchForm'

const DietPage = props => (
    <div>
        <p>This is the Diet page</p>
        <button onClick={() => props.history.push('/diet/buildMeal')}>Build a meal</button>
        <SearchForm />
    </div>
)

export default DietPage