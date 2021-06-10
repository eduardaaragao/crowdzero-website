import React from 'react'
import Dropdown from './dropdown'

const DropdownComponent = (props) => {
   return (
        <div className="dropdowns">
            <Dropdown options={props.options} id={props.id} label={props.label} value={props.value} onChange={val => {props.onChange(val)}} prompt={props.prompt}/>
            {
             props.value != null ? props.value['filtro'] === 'Selecionar dia' ? <input type="date" className="inputData" value={props.datevalue}  onChange={val =>{props.onDateChange(val.target.value)}}/> : '': ''
            }
        </div>
    )
}

export default DropdownComponent
