import React from 'react'
import PropTypes from 'prop-types';

const Block = (props) => {
    return (
        <>
          <div className="overview--wrapper">
                <div className={`overview--item light-${props.color}`}>
                    <div className="overview--title">{props.description}</div>
                    <div className={`overview--number ${props.color}`}>{props.quantity}</div>
                </div>
                {props.hasRectangle && <div className="rectangle"></div>}
                
            </div>
        </>
    )
}

Block.propTypes = {
    quantity: PropTypes.number,
    color: PropTypes.string
}

Block.defaultProps = {
    hasRectangle: true
}

export default Block
