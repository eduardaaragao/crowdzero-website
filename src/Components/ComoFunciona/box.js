import React, {Component} from 'react'

export default class BoxContainer extends Component {
    render(){    
        const style = {
            backgroundImage: `url(${this.props.img})`,
            backgroundSize: '122%',
            marginLeft: '0px',
            backgroundSize: "cover",
            width: '128px',
            height: '128px'
        }

        return (
            <div className="box--container">
                <div style={style}/>
                <div className="box--titulo">{this.props.titulo}</div>
                <div className="box--descricao">{this.props.descricao}</div>
            </div>
        )
    }
}

/** className="box--container" */