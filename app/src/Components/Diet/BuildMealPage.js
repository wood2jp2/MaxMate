import React, { Component } from 'react'
import SearchForm from './SearchForm'

export default class MealPage extends Component {

    state = {
        meals: []
    }

    componentWillMount = () => {
        // fetch meals from redux store here.
        this.setState(() => ({meals: []}))
    }

    render = () => (
        <div>
            <div>Build a Meal Page</div>
            <SearchForm />
        </div>
    )
}