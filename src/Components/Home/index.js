import React, {Component} from 'react'
import HomeUser from '../Routes/home'
import WelcomePage from '../WelcomePage'

export default class Home extends Component{
    render(){
        if (this.props.user){
            return(
                <HomeUser setUser={this.props.setUser}/>
            )
        }        
        return(
            <WelcomePage/>
        )
    }
}