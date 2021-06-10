import React from 'react'

const Circulo = ({color, icon}) => {
    const Icon = icon

    const style = {
        width: '84px',
        height: '84px',
        backgroundColor: `${color}`,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div className="circulo" style={style}><Icon className="icone--circulo"/></div>
    )
}

export default Circulo
