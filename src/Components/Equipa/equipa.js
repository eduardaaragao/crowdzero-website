import React, {Component} from 'react'

export default class EquipaCard extends Component{
    render(){
        const style = {
            backgroundImage: `url(${this.props.img})`,
            width: "189px",
            height: "189px",
            backgroundSize: "cover",
            borderRadius: '50%',
            transition: '0.3s all ease'
        }

        return(
            <div className="equipa-card-wrapper">
                <div style={style} className="equipa--imagem"/>
                
                <div className="equipa--items">
                    <b><div className="equipa--item nome">{this.props.nome}</div></b>
                    <div className="equipa--item">{this.props.descricao}</div>
                </div>
            </div>
        )
    }
}