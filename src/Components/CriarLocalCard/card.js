import React, {Component} from 'react'
import Button from '../Button'
import Linha from '../OcupacaoLine'
import axios from 'axios'

export default class Card extends Component{
    constructor(props){
        super(props)

        this.state = {
            percentagem: 0,
            status:  'Sem Status',
            width: '0'
        }
    }
    onDelete = async () => {
       try{
           await axios.post('local/delete', this.props.data)
       }catch(e){
           alert(e)
       }
       this.props.updated()
    }

    getWidth = () => {
        let status = '0'
        let estado = this.props.data.status
        if (estado === 0){
            status = '0'
        }else if (estado === 1){
            status =  '25'
        }else if (estado === 2){
            status = '60'
        }else if (estado === 3){
            status =  '90'
        }else if (estado === 4){
            status = '100'
        }

        this.setState({
            width: status
        })
    }

    getStatus = async () => {
        let status = this.props.data.status
        let verificar = status

        if (status === 0){
            verificar = "Sem Ocupação"
        }else if (status === 1){
            verificar = "Baixa"
        }else if (status === 2){
            verificar = "Média"
        }else if (status === 3){
            verificar = "Alta"
        }else if (status ===4){
            verificar = "Em Desinfeção"
        }

        this.setState({
            status: verificar
        })
    }

    componentDidMount(){
        this.getStatus()
        this.getWidth()
    }

    render(){
        return (
            <div className="card-wrapper">
                <h4 style={{color: '#2C6975'}}>{this.props.data.nome}</h4>
                <p style={{color: '#2C6975'}}>{this.props.data.descricao}.</p>
                <div className="df sb">
                    <p>Ocupação</p>
                    <b><p>{this.state.width}%</p></b>
                </div>
                <Linha estado={this.state.status} width={this.state.width}/>
                
                <div className="df"><p style={{color: '#205072', fontWeight: 700}}>Status: </p><p>{this.state.status}</p></div>
                <div className="df sb">
                    <Button name="apagar" onClick={this.onDelete} colorFrom="#F57272" colorTo="#8D2424" padding='10px'/>
                </div>
            </div>
        )
    }

}
