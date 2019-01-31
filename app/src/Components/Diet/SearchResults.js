import React from 'react'
import SearchResult from './SearchResult'

const SearchResults = props => (
    <div>
        {
            !!props.results && props.results.map( (result, index) => 
                <SearchResult 
                    key={index}
                    resultName={result.brand_name_item_name || result.food_name} 
                    resultImage={result.photo.thumb} 
                />
            )
        }
    </div>
)

export default SearchResults