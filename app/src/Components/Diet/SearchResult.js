import React from 'react'

const SearchResult = props => (
    <div>
        <h4>{props.resultName}</h4>
        <img src={props.resultImage} />
    </div>
)