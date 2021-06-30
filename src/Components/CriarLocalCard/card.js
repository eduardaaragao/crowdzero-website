import React, {Component} from 'react'
import Button from '../Button'
import Linha from '../OcupacaoLine'
import axios from 'axios'

export default class Card extends Component{
    onDelete = async () => {
       try{
           await axios.post('local/delete', this.props.data)
       }catch(e){
           alert(e)
       }
       this.props.updated()
    }

    render(){
        return (
            <div className="card-wrapper">
                <h4 style={{color: '#2C6975'}}>{this.props.data.nome}</h4>
                <p style={{color: '#2C6975'}}>{this.props.data.descricao}.</p>
                <div className="df sb">
                    <p>Ocupação</p>
                    <p>{this.props.data.status}</p>
                </div>
                <Linha estado={this.props.data.status}/>
                
                <div className="df"><p style={{color: '#205072', fontWeight: 700}}>Status: </p><p>{this.props.data.status}</p></div>
                <div className="df sb">
                    <Button name="apagar" onClick={this.onDelete} colorFrom="#F57272" colorTo="#8D2424" padding='10px'/>
                </div>
            </div>
        )
    }

}
