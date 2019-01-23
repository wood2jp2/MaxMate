import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count: 0
    }
    
    increment = () => {
        this.setState(prevState => ({count: prevState.count+1}))
    }

    decrement = () => {
        this.setState(prevState => ({count: prevState.count-1}))
    }

    reset = () => {
        this.setState(() => ({ count: 0 }))
    }

    render = () => {
        return (
            <div>
                <p>
                    Count: {this.state.count}
                </p>
                <button onClick={this.increment}>+1</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.reset}>Reset</button>

            </div>
        )
    }
}