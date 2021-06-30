import React from 'react'

const LinhaOcupacao = ({estado}) => {

    /*function getColor(){
        if (ocupacao === 'alto'){
            return '#82D197'
        }else if(ocupacao === 'medio'){
            return '#FFCF5C'
        }else{
            return '#F57272'
        }
    }*/

    function getColor(){
        if (estado === 1){
            return '#F57272'
        }else if (estado === 2){
            return '#FFCF5C'
        }else{
            return '#82D197'
        }
    }

    const styleLine = {
        zindex: '8',
        borderTop: `6px solid ${getColor()}`,
        borderRadius: '6px',
        marginBottom: '22px',
        position: 'relative',
        width: '100%'
       // width: `${width}`
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
