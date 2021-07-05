import React, {Component} from 'react'
import Button from '../Button'
import axios from 'axios'
import Nav from '../Nav'

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            errors: {},
            isSent: false,
        }
    }

    handleValidation = () => {
        let errors = {}
        let isValid = true
        
        if (!this.password) {
            isValid = false
            errors["password"] = "Digite uma password"
        }else{
            if (this.password.length < 5){
                isValid = false
                errors["password"] = "Password deve conter mais de 5 caracteres"
            }
        }

        if (!this.email_empresa){
            isValid = false
            errors["email_empresa"] = "Este campo é obrigatório"
        }

        if (!this.nome_empresa){
            isValid = false
            errors["nome_empresa"] = "Este campo não pode ficar em branco"
        }

        if (!this.contacto_empresa){
            isValid = false
            errors["contacto_empresa"] = "Este campo não pode ficar vazio"
        }

        if (!this.latitude || !this.longitude){
            isValid = false
            errors["coordenadas"] = "O campo de coordenadas deve ser preenchido"
        }

        if (!this.primeiroNome || !this.ultimoNome){
            isValid = false
            errors["nome"] = "Este campo não pode ficar em branco"
        }

        if (!this.email || !this.email.search("@")){
            isValid = false
            errors["email"] = "Digite um email válido"
        }

        if (this.password !== this.confirmarPassword){
            isValid = false
            errors["password"] = "As passwords devem corresponder"
        }

        this.setState({
            errors: errors
        })
        return isValid;
    }
    
    clearFields = () => {
        this.setState({
            primeiroNome: '',
            ultimoNome: '',
            password: '',
            nome_empresa: '',
            contacto_empresa: '',
            email_empresa: '',
            latitude: '',
            longitude: ''
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.handleValidation()){
            const data = {
                nome: this.primeiroNome + ' ' + this.ultimoNome,
                email: this.email,
                password: this.password,
                nome_empresa: this.nome_empresa,
                contacto_empresa: this.contacto_empresa,
                email_empresa: this.email_empresa,
                lat: this.latitude,
                lon: this.longitude
            }
            // Fazer Pedido à API
            axios.post('auth/registoGestor', data).then(
                res => {
                    if (res.data.data){
                        this.setState({
                            isSent: true
                        })
                    }
                }
            ).catch(err =>{
                alert(err)
            })
        }
        
        this.clearFields()
    }

    handleChange (e) {
        this.primeiroNome = e.target.value
        if (this.state.errors["nome"]){
            this.setState({
                errors: ''
            })
        }
    }

    render() {
        let corpo
        if (this.state.isSent)
        {
            corpo =   (
                <div className="form--wrapper">
                    <h1>Dados enviados com sucesso</h1>
                    <p style={{textAlign:'center'}}>Você receberá um e-mail de confirmação para continuar com seu registo.</p>
                </div>
            )
        }else{
            corpo = (
                <form onSubmit={this.handleSubmit}>
                    <div className="form--wrapper">
                        <div className="form--header">
                            <h3>Solicitar Acesso</h3>
                            <p>Solicite acesso para ter disponível o painel de gerenciamento de nosso software.</p>
                        </div>

                        <div className="form-box">
                            <div className="form--item">
                            <p>Dados Pessoais</p>
                            <div className="form-error">{this.state.errors["nome"]}</div>

                                <div className="form-group">
                                    <input type="text" placeholder="Primeiro Nome" onChange={(e) => this.handleChange((e), (this.primeiroNome))} className={` ${this.state.errors["nome"] ? 'input--error' : null}`}/>
                                    <div className="form-error">{this.state.errors["nome"]}</div>
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" placeholder="Último Nome" onChange={e => this.ultimoNome = e.target.value} className={` ${this.state.errors["nome"] ? 'input--error' : null}`}/>
                                    <div className="form-error">{this.state.errors["email"]}</div>
                                </div>

                                <div className="form-group">
                                    <input type="text" placeholder="Email" onChange={e => this.email = e.target.value} className={` ${this.state.errors["email"] ? 'input--error' : null}`}/>
                                    <div className="form-error">{this.state.errors["password"]}</div>
                                </div>

                                <div className="form-group">
                                    <input type="password" placeholder="Senha" onChange={e => this.password = e.target.value} className={` ${this.state.errors["nome"] ? 'input--error' : null}`}/>
                                    <div className="form-error">{this.state.errors["password"]}</div>
                                </div>

                                <div className="form-group">
                                    <input type="password" placeholder="Confirmar senha" onChange={e => this.confirmarPassword = e.target.value} className={` ${this.state.errors["nome"] ? 'input--error' : null}`}/>
                                </div>
                            </div>

                            <div className="form--item">
                                <p>Dados da Empresa</p>
                                <div className="form-error">{this.state.errors["nome_empresa"]}</div>
                                <div className="form-group">
                                    <input type="text" placeholder="Nome da empresa" onChange={e => this.nome_empresa = e.target.value} className={` ${this.state.errors["nome"] ? 'input--error' : null}`}/>
                                    <div className="form-error">{this.state.errors["contacto_empresa"]}</div>
                                </div>

                                <div className="form-group">
                                    <input type="text" placeholder="Contacto da empresa" onChange={e => this.contacto_empresa = e.target.value} className={` ${this.state.errors["contacto_empresa"] ? 'input--error' : null}`}/>
                                    <div className="form-error">{this.state.errors["email_empresa"]}</div>

                                </div>

                                <div className="form-group">
                                    <input type="text" placeholder="Email da empresa" onChange={e => this.email_empresa = e.target.value} className={` ${this.state.errors["email_empresa"] ? 'input--error' : null}`}/>
                                    <div className="form-error">{this.state.errors["coordenadas"]}</div>
                                </div>

                                <div className="form-group">
                                    <input type="number" step="any" placeholder="Latitude" onChange={e => this.latitude = e.target.value} className={` ${this.state.errors["coordenadas"] ? 'input--error' : null}`}/>
                                    <div className="form--link"><b><a target="_blank" href="https://www.gps-coordinates.net/">Não sei as coordenadas</a></b></div>
                                    <div className="form-error">{this.state.errors["coordenadas"]}</div>
                                </div>

                                <div className="form-group">
                                    <input type="number" step="any" placeholder="Longitude" onChange={e => this.longitude = e.target.value} className={` ${this.state.errors["coordenadas"] ? 'input--error' : null}`}/>
                                </div>
                            </div>
                        </div>

                            <Button name="Solicitar Acesso"/>
                    </div>
                </form>
            )
        }
        return (
            <div>
                <Nav/>
                {corpo}
            </div>
        )
    }
}