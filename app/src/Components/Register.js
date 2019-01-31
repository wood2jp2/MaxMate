import React, { Component } from 'react'
import { Form, Text } from 'react-form'

export default class Register extends Component {
    state = {
        firstName: null,
        lastName: null, 
        email: null,
        password: null,
        passwordMatchError: false
    }

    submitRegisterForm = e => {
        e.preventDefault()

        if (e.target.password.value !== e.target.confirmPassword.value) {
            this.setState(() => ({passwordMatchError: true}))
            return 
        }
        
        console.log(e.target.firstName.value)
        console.log(e.target.lastName.value)
        console.log(e.target.email.value)

        
    }

    render = () => (
        <div>
            <h4>This is the register page. Register below!</h4>
            <Form>
                {
                    formApi => (
                    <form onSubmit={this.submitRegisterForm} id="registerForm">
                        <label htmlFor="firstName">
                            First name: 
                        </label>
                        <Text 
                            field="firstName"
                            id="firstName" 
                            placeholder="ex. Joe" 
                        />
                        <label htmlFor="lastName">
                            Last name: 
                        </label>
                        <Text 
                            field="lastName"
                            id="lastName" 
                            placeholder="ex. Doe" 
                        />
                        <label htmlFor="email">
                            Email: 
                        </label>
                        <input 
                            type="email"
                            id="email" 
                            placeholder="ex. abc123@gmail.com" 
                        />
                        <label htmlFor="password">
                            Password: 
                        </label>
                        <input 
                            type="password"
                            id="password" 
                        />
                        <label htmlFor="confirmPassword">
                            Confirm Password: 
                        </label>
                        <input 
                            type="password"
                            id="confirmPassword" 
                        />
                        <button type="submit">
                            Register
                        </button>
                    </form>
                    )
                }
            </Form>
            {
                this.state.passwordMatchError && <p>Please make sure that your passwords match!</p>
            }
        </div>
    )
}