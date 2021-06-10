import React from 'react'
import { Link } from "react-router-dom";

const MenuIcon = (props) => {
    const Icon = props.icon 
    
    const activeIcon = <svg className="menu--activeborder" xmlns="http://www.w3.org/2000/svg" width="123.528" height="127.452" viewBox="0 0 123.528 127.452">
    <path id="Combined_Shape" data-name="Combined Shape" d="M117.259,118.9c0-18.374-13.933-22.375-20.232-23.245H31.5a31.5,31.5,0,0,1,0-63H94s23.284-.368,23.284-24.107,6.244,9.487,6.244,9.487l-3.077,19.758H120V89.658h.427l3.077,19.758s-3.39,18.038-5.175,18.037C117.692,127.452,117.259,125.15,117.259,118.9Z" transform="translate(0 0)" fill="#feffff"/>
    </svg>

    return (
        <Link className={`menu--item ${props.active ? 'active' : ''}` } to={props.route} onClick={props.onClick}>
            <Icon className={`menu--icon ${props.active ? 'active' : ''}`} />
            <p className="menu--tab" >{props.name}</p>
            {props.active && activeIcon}
        </Link>
    )
}

export default MenuIcon
