import React from 'react'

const Etiqueta = ({nome, description, color, textColor}) => {
    const style = {
        backgroundColor: `${color}33`,
        fontSize: '0.8125rem',
        marginBottom: '20px'
    }

    const headingStyle = {
        fontSize: '0.9375rem',
        color: textColor ? textColor : color,
        fontWeight: '600',
        padding: '5px 0 0 5px'
    }

    const descriptionStyle = {
        fontSize: '0.75rem',
        color: '#2C6975',
        padding: '5px 3px 5px 5px'
    }

    const verticalStyle = {
        height: '100%',
        backgroundColor: `${ textColor ? textColor : color}`,
        minWidth: '6px',
    }

    const wrapperStyle = {
        display: 'flex',
        width: '100%',
    }

    return (
        <div style={wrapperStyle}>
            <div style={style} className="df">
                <div>
                    <div style={headingStyle}>{nome}</div>
                    <div style={descriptionStyle}>{description}</div>
                </div>
                
                 <div style={verticalStyle}/>
                
            </div>
        </div>
    )
}

export default Etiqueta
