import React, {Component} from 'react'
import Row from './row'
import Checkbox from './checkbox'

export default class AlertaComponent extends Component{
    displayAlerts(){
        return (       
                <ul>
                {this.props.list.map((item, index) =>
                <div key={item.id} className="table-items">
                    <Row props={item.local} bold={true}/>
                    <Row props={`${item.horas}:${item.minutos}`}/>
                    <Row props={`${item.dia}/${item.mes}`}/>
                    <Row props={item.tipoalerta}/>
                    <Row props={item.status} statusColors={this.props.statusColors}/>
                    <Checkbox onDelete={this.props.onDelete} id={item.id}/>
                </div>
                )}
            </ul>
        )
    }

    render(){
        return(
            this.displayAlerts()
        )
    }
}