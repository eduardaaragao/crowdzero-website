import React, {Component} from 'react'
import kalu from '../../Files/images/kalu.png'
import gustavo from '../../Files/images/gustavo.jpeg'
import marialice from '../../Files/images/marialice.PNG'
import mariaeduarda from '../../Files/images/mariaeduarda.jpeg'
import EquipaCard from './equipa'

export default class Equipa extends Component{
    render(){
        return(
            <section id="aequipa" className="equipa--wrapper">
                <h1>A Equipa</h1>
                <div className="df sb">
                    <EquipaCard img={gustavo} nome="Gustavo Miranda" descricao="Desenvolvedor Mobile"/>
                    <EquipaCard img={marialice} nome="Maria Holanda" descricao="Desenvolvedora Backend"/>
                    <EquipaCard img={mariaeduarda} nome="Maria Aragão" descricao="Desenvolvedora Frontend"/>
                    <EquipaCard img={kalu} nome="António Kalumana" descricao="Analista do Sistema"/>
                </div>
            </section>
            
        )
    }
}