import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

class Logout extends Component{
    state = {
        navigate: false
    }

    logout = () => {
        localStorage.clear("token")
        this.setState({navigate: true})
    }

    render(){
        const {navigate} = this.state

        if (navigate){
            return <Redirect to="/login" push={true}/>
        }
        return (
                <div className={`menu--item`}  onClick={this.logout}>
                    <ExitToAppIcon className={`menu--icon`} />
                    <p className="menu--tab" >Encerrar Sessão</p>
                </div>
        )
    }
}

export default Logout