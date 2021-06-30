import React, {Component} from 'react'
import Box from './box'
import icon1 from '../../Files/images/check.png'
import icon2 from '../../Files/images/icon2.png'
import icon3 from'../../Files/images/icon3.png'
import icon4 from'../../Files/images/icon4.png'

export default class ComoFunciona extends Component{
    render(){
        return(
            <section id="comofunciona" className="comofunciona--wrapper">
                <h1>Como Funciona?</h1>
                <br/>
                <br/>
                <br/>
                <p>CrowdZero pode te ajudar a monitorar os espaços de sua empresa de forma eficiente.</p>
                <div className="df sb">
                    <Box img={icon1} descricao="Insira informações sobre sua empresa e você, para que possamos analisá-las." titulo="Registe-se em 2 minutos"/>
                    <Box img={icon2} descricao="Analisaremos seu pedido e as informações inseridas, enviaremos um e-mail." titulo="Análise do pedido"/>
                    <Box img={icon3} descricao="Todos de sua empresa podem baixar a app e inserir o token que lhe será enviado." titulo="Download da App"/>
                    <Box img={icon4} descricao="Tenha acesso 100% do tempo dos locais internos da sua instituição ao cadastrá-los" titulo="Acesso a dados"/>
                </div>
            </section>
        )
    }
} 