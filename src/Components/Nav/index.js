import React, {Component} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import '../../CSS/style.css';
import {Link} from 'react-router-dom'
import '../../CSS/style.css'
import Button from '../Button'

export default class Nav extends Component{
    render(){
        let header
        let logo = <svg xmlns="http://www.w3.org/2000/svg" width="150" height="83" viewBox="0 0 368 83">
                    <text id="Health_UX_Kit_" data-name="Health UX Kit™" transform="translate(0 62)" fill="#205072" fontSize="59.257" fontFamily="Poppins-Regular, Poppins"><tspan x="0" y="0" letterSpacing="-0.015em">Crowd</tspan><tspan y="0" fontFamily="Poppins-Bold, Poppins" fontWeight="700" letterSpacing="-0.015em">Zero</tspan><tspan y="0" fill="#56c596">™</tspan></text>
                    </svg>
                
        if (this.props.user)
        {
            header = (
                <header className="myHeader">
                    <div className="header--elements">
                        <div className="header--info">
                            <p className="header--userName">{this.props.user.nome}</p>
                            <p className="header--admin">Administrador</p>
                        </div>                
                        
                        <img className="header--userPhoto" src={`${this.props.user.userImg}`}/>

                        <div className="header--dropdown">
                            <ExpandMoreIcon/>
                        </div>

                        <div className="header--notifications">
                            <NotificationsIcon/>
                        </div>
                    </div>
                </header>
            )
        }else{
            header = (
                <header className="header">
                    <div className="overlay has-fade"></div>
                    <nav className="mycontainer--pall flex flex-jc-sb flex-ai-c">
                        <a className="header__logo" href="/">{logo}</a>
                        
                        <a id="btnHamburger" href="#" className="header__toggle hide-for-desktop">
                            <span></span>
                            <span></span>
                            <span></span> 
                        </a>
                    
                        <div className="header__links hide-for-mobile">
                            <a href="/">Home</a>
                            <a href="#comofunciona">Como Funciona</a>
                            <a href="#aequipa">A Equipa</a>
                            <Link to="/login">Fazer Login</Link>
                        </div>

                        <Link to={"/registar"}><Button name="requisitar acesso" onClick={this.onClick}/></Link>
                    </nav>
                
                    <div className="header__menu container has-fade">
                        <a href="#">Home</a>
                        <a href="#">Sobre</a>
                        <a href="#">Contactos</a>
                    </div>
                </header>
            )
        }
        return (
            <div>
                {header}
            </div>
        );
    }
}