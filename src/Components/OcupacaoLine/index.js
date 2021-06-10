import React from 'react'

const LinhaOcupacao = ({width}) => {

    function getColor(){
        let percentagem = width.replace('%', '')
        parseInt(percentagem)
        if (percentagem <= 40){
            return '#82D197'
        }else if(percentagem >= 50 && percentagem <=70){
            return '#FFCF5C'
        }else{
            return '#F57272'
        }
    }

    const styleLine = {
        zindex: '8',
        borderTop: `6px solid ${getColor()}`,
        borderRadius: '6px',
        marginBottom: '22px',
        position: 'relative',
        width: `${width}`
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
