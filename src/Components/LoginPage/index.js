import React , {Component} from 'react'
import Button from '../Button'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import Nav from '../Nav'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            loggedIn: false,
            errors: {}
        }
    }

    handleValidation = () => {
        let isValid = true
        let errors = {}
        if (!this.email)
        {
            isValid = false
            errors["email"] = "Por favor, digite o e-mail"
        }

        if (!this.password){
            isValid = false
            errors["password"] = "Por favor, digite a password"
        }

        this.setState(
            {
                errors: errors
            }
        )

        return isValid
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        if (this.handleValidation())
        {
            const data = {
                email: this.email,
                password: this.password
            }

            try{
            // Realizar pedido à API
            const res = await axios.post('auth/loginGestor', data)

            if (res.data.token)
            {
                 localStorage.setItem('token', res.data.token)
                 localStorage.setItem('id', res.data.user.id)
                 localStorage.setItem('instituicao', res.data.user.InstituiçõeId)
                this.setState({
                    loggedIn: true
                })
                this.props.setUser(res.data.user)
            }else{
                alert('Dados inválidos, tente novamente.')
            }
            }catch(e){
                alert('Dados inválidos, tente novamente.')
            }
        }
    }

    handleChange (e) {
        this.email = e.target.value
        if (this.state.errors["email"]){
            this.setState({
                errors: ''
            })
        }
    }

    render(){
        if (this.state.loggedIn){
            return <Redirect to={{pathname: '/home/overview'}}/>
        }

        return (
            <div>
                <Nav/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-login--wrapper">

                    <h3>Fazer Login</h3>
                    <p>Digite suas credenciais que foram enviadas por e-mail para ter acesso ao dashboard.</p>
                    
                    <div className="form-error">{this.state.errors["email"]}</div>
                    <div className="form-group-login">
                        <input type="text" placeholder="Digite o Email" onChange={e => this.handleChange(e)} className={` ${this.state.errors["email"] ? 'input--error' : null}`}/>
                    </div>

                    <div className="form-group-login">
                        <div className="form-error">{this.state.errors["password"]}</div>    
                        <input type="password" placeholder="Digite a password" onChange={e => this.password = e.target.value} className={` ${this.state.errors["password"] ? 'input--error' : null}`}/>
                    </div>

                    <Button name="Login"/>
                    </div>
                </form>
            </div>
        )
    }
}