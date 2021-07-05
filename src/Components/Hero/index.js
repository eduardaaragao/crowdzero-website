import React, {Component} from "react";
import '../../CSS/style.css'
import Button from '../Button'

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
                        <a target='__blank' href='https://drive.google.com/uc?export=download&id=1PBRL4vwodZZ4QtBPcrPkRH2Kg6D7_UWR'><Button name="FAZER DOWNLOAD DA APP"/></a>
                    </div>
                </div>
            </section>
        )
    }
}