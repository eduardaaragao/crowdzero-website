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

    getStatus = async () => {
        let status = this.props.data.status

        if (status === 0){
            return "Sem Ocupação"
        }else if (status === 1){
            return "Baixa"
        }else if (status === 2){
            return "Média"
        }else if (status === 3){
            return "Alta"
        }else if (status ===4){
            return "Em Desinfeção"
        }
    }

    getOcupacao = async () => {
        let alto = this.props.data.qtde_reporte_alto 
        let medio = this.props.data.qtd_reporte_baixo 
        let baixo = this.props.data.qtd_reporte_medio
        let maior = alto

        if (medio > maior){
            maior = medio
        }else if (baixo > maior){
            maior = baixo
        }

        return maior
    }

    getPorcentagem = async() => {
        let soma = this.props.data.qtde_reporte_alto + this.props.data.qtd_reporte_baixo + this.props.data.qtd_reporte_medio
        let maior = this.getOcupacao()

        return (maior / soma) * 100
    }

    render(){
        return (
            <div className="card-wrapper">
                <h4 style={{color: '#2C6975'}}>{this.props.data.nome}</h4>
                <p style={{color: '#2C6975'}}>{this.props.data.descricao}.</p>
                <div className="df sb">
                    <p>Ocupação</p>
                    <p>{this.getOcupacao}</p>
                </div>
                <Linha estado={this.getStatus}/>
                
                <div className="df"><p style={{color: '#205072', fontWeight: 700}}>Status: </p><p>{this.props.data.status}</p></div>
                <div className="df sb">
                    <Button name="apagar" onClick={this.onDelete} colorFrom="#F57272" colorTo="#8D2424" padding='10px'/>
                </div>
            </div>
        )
    }

}
