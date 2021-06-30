import React, { Component } from 'react'
import Hero from '../Hero'
import ComoFunciona from '../ComoFunciona'
import Equipa from '../Equipa'
import Nav from '../Nav'

export default class WelcomePage extends Component {
    render() {
        return (
            <section>
                <Nav/>
                <Hero/>
                <ComoFunciona/>
                <Equipa/>
            </section>
        )
    }
}
