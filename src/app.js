import React from 'react'
import ReactDOM from 'react-dom'

import Router from './Router/Router'
import Header from './Components/Header'

const App = () => 
    (
        <div>
            <Router />
        </div>
    )

const root = document.getElementById('root')

ReactDOM.render(<App />, root)