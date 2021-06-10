import React from 'react'

const Checkbox = ({onDelete, id}) => {
    return (
        <label className="container">
            <input type="checkbox" onClick={() => onDelete(id)}/>
            <span className="checkmark"></span>
         </label>
    )
}

export default Checkbox
