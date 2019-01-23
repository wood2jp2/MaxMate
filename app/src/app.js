import React from 'react'
import ReactDOM from 'react-dom'

import AppRouter from './Router/Router'

const App = () => 
    (
        <div>
            <AppRouter />
        </div>
    )

const root = document.getElementById('root')

ReactDOM.render(<App />, root)