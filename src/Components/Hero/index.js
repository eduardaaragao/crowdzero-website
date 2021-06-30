import React, {Component} from "react";
import '../../CSS/style.css'
import Button from '../Button'
import {Link} from 'react-router-dom'

export default class Hero extends Component {
    render(){
        return(
            <section className="hero">
                <div className="mycontainer">
                    <div className="hero__image"></div>
                    <div className="hero__text container--pall">
                        <h1>Organize o fluxo de pessoas da sua empresa.</h1>
                        <p>Um software capaz de monitorar em tempo real. CrowdZero é uma aplicação
                            que te permite ter acesso à quantidade de pessoas presentes em um espaço.</p>
                        <Link to={"/registar"}><Button name="Requisitar acesso"/></Link>
                    </div>
                </div>
            </section>
        )
    }
}