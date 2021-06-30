import React, { Component }  from 'react'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import Button from '../Button'
import axios from 'axios'

export default class Seguranca extends Component{
    constructor(props){
        super(props)

        this.state = {
            pass: '',
            novaPass: '',
            icone: false
        }
    }

    onValidar = () => {
        let isValid = true
        if (this.state.pass === '' || this.state.novaPass === ''){
            isValid = false
        }

        return isValid
    }

    onSubmit = async () => {
        const pass = this.state.pass
        const nova = this.state.novaPass
        const data = {
            pass: pass,
            nova: nova
        }
        const id = localStorage.getItem('id')

        if (this.onValidar()){
            try{
                const res = await axios.post('gestor/alterarPassword', data, {params: {id}})
                console.log(res.data)
            }catch(e){ 
                alert(e)
            }
        }else{
            alert('passe nao pode ser vazia')
        }

    }

    onClear = () => {
        this.setState({
            pass: ''
        })
    }

    setIcone = () => {
        this.setState(({
            icone: !this.state.icone
          }));
    }

    setPass = (e) => {
        this.setState({
            pass: e.target.value
        })
    }

    setConfirm = (e) => {
        this.setState({
            novaPass: e.target.value
        })
    }


    setNovaPass = (e) => {
        this.setState({
            novaPass: e.target.value
        })
    }

    render(){
        return (
            <div className="configuracoes--page">
                <h3>Alterar password</h3>
    
                <div className="inputContainer">
                    <div onClick={this.setIcone}>
                        {this.state.icone ? <VisibilityOutlinedIcon className="icone"/> : <VisibilityOffOutlinedIcon className="icone"/>}
                    </div>
                    
                    <input  value={this.state.pass} onChange={this.setPass}  className="password-field" type={`${this.state.icone ? 'text' : 'password'}`} placeholder="Digite sua password atual"/>
                    <br/>
                    <input value={this.state.novaPass} onChange={this.setNovaPass} className="password-field" type={`${this.state.icone ? 'text' : 'password'}`} placeholder="Digite sua nova password"/>
                </div>
    
                <div style={{display:"flex", alignItems:"center", paddingBottom:"100px"}}>
                    <p style={{textTransform:"uppercase", fontWeight:"bold", cursor:"pointer", fontSize:"0.725rem", marginRight:"20px", color:"#329D9C"}} onClick={this.onClear}>Descartar Alterações</p>
                    <Button name="salvar alterações" onClick={this.onSubmit}/>
                </div>
                
            </div>
        )
    }

}
