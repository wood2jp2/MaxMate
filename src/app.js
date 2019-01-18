import React from 'react'
import ReactDOM from 'react-dom'

import Router from './Router/Router'

const App = () => 
    (
        <div>
            <Router />
        </div>
    )

const root = document.getElementById('root')

ReactDOM.render(<App />, root)