import React from 'react'
import ReactDOM from 'react-dom'

const Header = () => (
    <div>
        <h3>MaxMate</h3>
    </div>
)

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)

    }

    increment() {
        this.setState(prevState => ({ count: prevState.count+1 }), () => {
            console.log(this.state.count)
        })
    }

    decrement() {
        this.setState(prevState => ({ count: prevState.count-1 }))
    }

    reset() {
        this.setState(() => ({ count: 0 }))
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

const App = () => 
    (
        <div>
            <Header />
            <Counter />
        </div>
    )

const root = document.getElementById('root')

ReactDOM.render(<App />, root)