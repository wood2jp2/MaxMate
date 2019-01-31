import React, { Component } from 'react'
import axios from 'axios'
import { Form, Text, Select } from 'react-form'
import SearchResults from './SearchResults'

export default class SearchForm extends Component {
    state = {
        results: null,
        items: [],
        blankFormError: false
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
        
        if (!!e.target.foodSearch.value && Number(e.target.searchBy.value) !== 0) {
            const searchValue = e.target.foodSearch.value
            const searchByIndexValue = e.target.searchBy.value - 1
            const searchByValue = this.dropdownOptions[searchByIndexValue]

            axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${searchValue}`, {
                headers: {
                    "x-app-id": "0544f594",
                    "x-app-key":"258964f98d7d4b63733ba12454ca35f3"
                }
            })
            .then(response => 
                this.setState(() => 
                    ({
                        results: response.data[searchByValue.value],
                        blankFormError: false
                    }), () => console.log(this.state.results)
                )
            )
            .catch(err => console.log(err))
        } else {
            this.setState(() => ({blankFormError: true}))
        }
    }

    render = () => (
        <div>
            <Form>
                {formApi => (
                    <form onSubmit={this.submitSearchForm} id="dietSearchForm">
                        <label htmlFor="foodSearch">
                            Search a food: 
                        </label>
                        <Text 
                            field="searchBox" 
                            id="foodSearch" 
                            placeholder="ex. Steak" 
                        />
                        <label htmlFor="searchBy">
                            Search by: 
                        </label>
                        <Select 
                            id="searchBy" 
                            field="searchBy" 
                            options={this.dropdownOptions} 
                        />
                        <button 
                            type="submit">
                            Search
                        </button>
                    </form>
                )
                }
            </Form>

            {
                this.state.blankFormError && <p>Please both enter a search term as well as choose a search parameter!</p>
            }
            {
                !!this.state.results && <SearchResults results={this.state.results} />
            }


        </div>
    )
    
}