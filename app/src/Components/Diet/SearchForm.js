import React, { Component } from 'react'
import axios from 'axios'
import { Form, Text, Select } from 'react-form'

export default class SearchForm extends Component {
    state = {

    }

    dropdownOptions = [
        {
            label: 'Brand', 
            value: 'branded'
        }, 
        {
            label: 'Keyword', 
            value: 'common'
        }
    ]

    submitSearchForm = e => {
        e.preventDefault()
        const searchValue = e.target.foodSearch.value
        const searchByIndexValue = e.target.searchBy.value - 1
        const searchByValue = this.dropdownOptions[searchByIndexValue]
        console.log()

        axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${searchValue}`, {
            headers: {
                "x-app-id": "0544f594",
                "x-app-key":"258964f98d7d4b63733ba12454ca35f3"
            }
        })
        .then(response => console.log(response.data[searchByValue.value]))
        .catch(err => console.log(err))
    }

    render = () => (
        <div>
            This will be the search form.
            <Form>
                {formApi => (
                    <form onSubmit={this.submitSearchForm} id="dietSearchForm">
                        <label htmlFor="foodSearch">Search a food: </label>
                        <Text field="searchBox" id="foodSearch" placeholder="ex. Steak" />

                        <label htmlFor="searchBy">Search by: </label>
                        <Select id="searchBy" field="searchBy" options={this.dropdownOptions} />
                        <button type="submit">Search</button>
                    </form>
                )
                }
            </Form>
        </div>
    )
    
}