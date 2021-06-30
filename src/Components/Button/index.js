import React from 'react'

/* Props = colorFrom, colorTo, onClick, name */
const Button = (props) => {
    const style = {
        cursor: 'pointer',
        borderRadius: '21px',
        fontSize: '0.725rem',
        border: 'none',
        textTransform: 'uppercase',
        color: '#fff',
        fontWeight: '600',
        padding: `${props.padding}`,
        minWidth:' 94px',
        background: `linear-gradient(to right, ${props.colorFrom}, ${props.colorTo})`,
        transition: 'opacity 300ms ease-in-out'
    }
    return (
        <button onClick={props.onClick} style={style} className="btn-botao">
            {props.name}
        </button>
    )
}

Button.defaultProps = {
    colorFrom: "#7BE495",
    colorTo: "#329D9C",
    padding: '0.875rem 2.1875rem'
}

export default Button
