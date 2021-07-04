import React from 'react'

const LinhaOcupacao = ({estado, width}) => {

    function getColor(){
        if (estado === 'Baixa'){
            return '#82D197'
        }else if(estado === 'Média'){
            return '#FFCF5C'
        }else if (estado === 'Alta'){
            return '#F57272'
        }else if (estado === 'Em Desinfeção'){
            return '#F57272'
        }
    }

    const styleLine = {
        zindex: '8',
        borderTop: `6px solid ${getColor()}`,
        borderRadius: '6px',
        marginBottom: '22px',
        position: 'relative',
        width: `${width}%`
    }

    const styleUpperLine = {
        zindex: '9',
        borderTop: '6px solid #E0ECDE',
        borderRadius: '6px',
        width: '250px',
        position: 'absolute'
    }

    return (
        <>
            <div style={styleUpperLine}></div>
            <div style={styleLine}></div>
        </>
    )
}

export default LinhaOcupacao
