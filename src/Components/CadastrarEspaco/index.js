import React from 'react'
import Whiteboard from '../Whiteboard'
import Etiqueta from '../Etiquetas'
import CadastrarLocalBox from './component'

const CadastrarLocal = () => {

    /* Card de Informações */
    const styleTitle = {
        fontSize: '1.25rem',
        color: '#205072',
        textAlign: 'center',
        padding: '20px',
        fontWeight: '700'
    }

    const descricaoNome = 'Escolha um nome curto e direto que descreva o local de sua instituição. Ex: refeitório, sala de aula 1, auditório 1...'
    const descricaoFoto = 'Esta será a foto que os usuários irão ver para reconhecer o local antes de reportá-lo. Use uma foto da entrada do local.'
    const descricao3 = 'Escolha uma descrição que resuma este local. Ex: biblioteca, espaço com mais de 1000 livros. Aberto de segunda à sexta.'

    const dataEtiqueta = [
        <div key="dataEtiqueta">
            <div style={styleTitle}>Como criar um local</div>
            <Etiqueta nome='Nome' description={descricaoNome} color='#82D197'/>
            <Etiqueta nome='Foto do local' description={descricaoFoto} color='#68B2A0'/>
            <Etiqueta nome='Descrição' description={descricao3} color='#E0ECDE' textColor='#2C6975'/>
        </div>
    ]
    
    return (
        <div className="overview--section">
            <h1>Cadastrar novo espaços</h1>
            
            <div className="df sb"> 
                <Whiteboard width="1000px" data={<CadastrarLocalBox/>} padding='25px'/>
                <Whiteboard width="300px" data={dataEtiqueta} padding='0xp' marginRight='20px'/>
            </div>
        </div>
    )
}

export default CadastrarLocal
