import React, {Component} from 'react'
import ImageUploader from '../ImageUploader'
import Button from '../Button'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

const styleInput = {
    fontSize: '0.8125rem',
    color: '#6f8ea4'
}

const styleLegend = {
    fontSize: '0.6875rem',
    color: 'rgba(44,105,117,0.34)',
    marginBottom: '15px'
}

const styleTextArea = {
    marginRight: '50px'
}

export default class CadastrarLocalBox extends Component {
    constructor(props){
        super(props)
        this.state = {
            nomeLocal: '',
            descricaoLocal: '',
            imagemLocal: '',
            cadastrado: false
        }
    }

    handleImage = (e) => {  
        this.setState({
            imagemLocal: e
        })
    }

    handleVerification = () => {
        let isValid = true
        if (this.state.descricaoLocal === ''){
            alert('Por favor, adicione uma descrição do local')
            isValid = false
        }
        else if (this.state.nomelocal === ''){
            alert('Por favor, adicione o nome do local')
            isValid = false
        }

        return isValid
    }

    sendLocal = async (data) =>{
        try{
            const res = await axios.post('local/create', data)
            this.setState({
                nomeLocal: '',
                descricaoLocal: '',
                imagemLocal: '',
                cadastrado: true
            })
        }catch(e){
            alert(e.data.message)
        }
    }
    
    criarLocal = () =>{
        if (this.handleVerification()){
            const instituicao = localStorage.getItem('instituicao')
            const data = {
                nomelocal: this.state.nomeLocal,
                descricaolocal: this.state.descricaoLocal,
                instituicaoID: instituicao
            }

            this.sendLocal(data)
        }
    }

    handleLocalName = (e) =>{
        this.setState({
            nomeLocal: e.target.value
        })
    }

    handleDescription = (e) =>{
        this.setState({
            descricaoLocal: e.target.value
        })
    }


    render(){
        if (this.state.cadastrado){
            return <Redirect to={{pathname: '/home/espacos'}}/>
        }
        return (
            <div key="addLocal">
                <div className="df sb">
                    <div>
                        <div style={styleInput}>Nome do Local (max caracteres: 20)</div>
                        <input value={this.state.nomeLocal} type="text" maxLength="20" placeholder="Digite o nome do local" className="inputWidth" onChange={(e) => this.handleLocalName(e)}/>
                        
                        <div style={styleInput}>Descrição (max caracteres: 70)</div>
                        <textarea value={this.state.descricaoLocal} style={styleTextArea} cols="50" rows="10" maxLength="70" placeholder="Digite uma breve sobre o local" onChange={(e) => this.handleDescription(e)}/>
                    </div>
                    
                    <div className="uploadFoto">
                        <div style={styleInput}>Foto do Local (max 5000MB)</div>
                        <div style={styleLegend}>Dimensões recomendadas: 800x400 (px)</div>
                        <ImageUploader image={this.state.imagemLocal} onChange={this.handleImage}/>
                    </div>
                </div>
                <Button name="adicionar local" onClick={this.criarLocal}/>
            </div>
        )
    }
}