import React from 'react'
import Row from './row'
import Checkbox from './checkbox'

class AlertaComponent extends React.Component{
    displayAlerts(){
        return (       
                <ul>
                {this.props.list.map((item, index) =>
                <div key={item.id} className="table-items">
                    <Row props={item.local} bold={true}/>
                    <Row props={item.horario} />
                    <Row props={item.data}/>
                    <Row props={item.tipoAlerta}/>
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

export default AlertaComponent

/** class AlertaComponent extends React.Component{
    displayAlerts(){
        return (       
                <ul>
                {this.props.list.map((item) =>
                    <div key={item.id} className="table-items">
                        <Row props={item.local} bold={true}/>
                        <Row props={item.horario} />
                        <Row props={item.data}/>
                        <Row props={item.tipoAlerta}/>
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

export default AlertaComponent*/