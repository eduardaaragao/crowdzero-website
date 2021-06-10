import React from 'react'

const Row = ({props, statusColors, bold}) => {
    return (
        <>
        <div className="table-row">
            <p className={`table-row title ${statusColors != null && statusColors.get(props)} ${bold && 'place'}`}>{props}</p>
        </div> 
        </>
    )
}

Row.defaultProps = {
    bold: false
}

export default Row
