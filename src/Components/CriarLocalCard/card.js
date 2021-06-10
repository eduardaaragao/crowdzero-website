import React from 'react'
import Button from '../Button'
import Linha from '../OcupacaoLine'

const Card = ({data}) => {
    const onClick = () =>{
        console.log('Clicked')
    }

    return (
        <div className="card-wrapper">
            <h4 style={{color: '#2C6975'}}>{data.id}</h4>
            <p style={{color: '#2C6975'}}>{data.descricao}.</p>
            <div className="df sb">
                <p>Ocupação</p>
                <p>{data.ocupacao}</p>
            </div>
            <Linha width={data.ocupacao}/>
            
            <div className="df"><p style={{color: '#205072', fontWeight: 700}}>Status: </p><p>{data.status}</p></div>
            <div className="df sb">
                <Button name="apagar" onClick={onClick} colorFrom="#F57272" colorTo="#8D2424"/>
                <Button name="editar" onClick={onClick}/>
            </div>
        </div>
    )
}

export default Card
