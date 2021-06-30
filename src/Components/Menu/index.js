import React, {useState, useRef, Component}  from 'react';
import '../../CSS/style.css';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from './menuIcon'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import menu from '../../Files/menu.json'

export default class Menu extends Component{
    constructor(props){
        super(props)
        this.state = {
            open: menu[0].id
        }
    }

    handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.clear()
        this.props.setUser(null)
    }
    
    handleOpen(e) {
        this.setState({
            open: menu[e].id
        })
    }

    render(){
        return(
              <section className="menu--wrapper">
                  <nav>
                      <ul>
                        <MenuIcon icone={HomeIcon} id={menu[0].id} open={this.state.open} descricao={menu[0].descricao} rota={menu[0].rota} onClick={() => this.handleOpen(0)}/>  
                        <MenuIcon icone={RoomIcon} id={menu[1].id} open={this.state.open} descricao={menu[1].descricao} rota={menu[1].rota} onClick={() => this.handleOpen(1)}/>  
                        <MenuIcon icone={NotificationsIcon} id={menu[2].id} open={this.state.open} descricao={menu[2].descricao} rota={menu[2].rota} onClick={() => this.handleOpen(2)}/>  
                        <MenuIcon icone={PeopleIcon} id={menu[3].id} open={this.state.open} descricao={menu[3].descricao} rota={menu[3].rota} onClick={() => this.handleOpen(3) }/>  
                        <MenuIcon icone={SettingsIcon} id={menu[4].id} open={this.state.open} descricao={menu[4].descricao} rota={menu[4].rota} onClick={() => this.handleOpen(4)}/>
                        <div className="menu--item" onClick={this.handleLogout}>
                            <ExitToAppIcon className={"menu--icon"} />
                            <p className="menu--tab">{menu[5].descricao}</p>
                        </div>
                      </ul>
                  </nav>
                </section>
        )

    }
}