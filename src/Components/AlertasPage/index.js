import React from 'react'
import AlertasBox from '../AlertasBox'
import dataAlertas from '../../Files/alertas.json'
import Whiteboard from '../Whiteboard'
import Etiquetas from '../Etiquetas'

const AlertasPage = () => {
    const onClick = () => {
        console.log("Clicked")
    }

    const onDelete = () => {
        console.log("Deleted")
    }

    const desinfecaoUrgente = 'Este alerta define que um local está a receber vários reportes de "alta ocupação". Talvez seja melhor realizar uma desinfeção no local.'
    const emDesinfecao = 'Esta etiqueta é automática, sendo adicionada a um local a partir do momento que um alerta é resolvido.'
    const atencao = 'Este alerta é enviado quando um local encontra-se com uma grande quantidade de reportes altos ao longo do tempo.'
    
    /* Card de Informações */
    
    const styleTitle = {
        fontSize: '1.25rem',
        color: '#205072',
        textAlign: 'center',
        padding: '20px',
        fontWeight: '700'
    }

    const dataEtiquetas = [
        <div key="etiquetas">
            <div style={styleTitle}>Guia de Alertas</div>
            
            <Etiquetas nome="Desinfeção Urgente" description={desinfecaoUrgente} color='#F57272'/>
            <Etiquetas nome="Em Desinfeção" description={emDesinfecao} color='#CDB3D4'/>
            <Etiquetas nome="Atenção" description={atencao} color='#FFCF5C'/>
        </div>
    ]
    

    return (
        <div className="overview--section">
            <h1>Alertas de Locais</h1>
            <p>A cada vez que um local atingir uma alta ocupação você receberá um alerta de desinfeção.</p>

            <div className="df sb">
                <AlertasBox data={dataAlertas} onClick={onClick} onDelete={onDelete}/>
                <Whiteboard width="300px" data={dataEtiquetas} padding='0xp' marginRight='20px' height='fit-content'/>
            </div>
        </div>
    )
}

export default AlertasPage
