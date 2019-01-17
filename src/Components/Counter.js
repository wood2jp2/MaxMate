import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count+2 }), () => {
            console.log(this.state.count)
        })
    }

    decrement = () => {
        this.setState(prevState => ({ count: prevState.count-1 }))
    }

    reset = () => {
        this.setState(() => ({ count: 0 }))
    }

    render = () => (
        <div>
            <p>Count: {this.state.count}</p>
            <button onClick={this.reset}>Reset</button>
            <button onClick={this.decrement}>Decrement</button>
            <button onClick={this.increment}>Increment</button>
        </div>
    )
}