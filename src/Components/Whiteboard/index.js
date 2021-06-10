import React from 'react'

const Whiteboard = (props) => {
    const style = {
        boxShadow: '34px 34px 89px rgba(50, 157, 156, 0.13), 34px 34px 89px rgba(50, 157, 156, 0.13)',
        width: props.width,
        height: props.height,
        backgroundColor: '#fff',
        borderRadius: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: props.padding,
        marginRight: props.marginRight,
        textAlign: props.textAlign
    }

    return (
        <div style={style}>
            {props.data}
        </div>
    )
}

Whiteboard.defaultProps = {
    padding: '10px',
}

export default Whiteboard
