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
    padding:' 5px 20px 5px 20px',
    minWidth:' 94px',
    background: `linear-gradient(to right, ${props.colorFrom}, ${props.colorTo})`,
    transition: 'all 0.3s ease'
    }
    return (
        <button onClick={props.onClick} style={style}>
            {props.name}
        </button>
    )
}

Button.defaultProps = {
    colorFrom: "#7BE495",
    colorTo: "#329D9C"
}

export default Button
