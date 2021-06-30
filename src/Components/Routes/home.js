import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OverviewPage from '../OverviewPage'
import Header from '../Nav';
import '../../CSS/style.css';
import Menu from '../Menu'
import Espacos from '../EspacosPage'
import CadastrarLocal from '../CadastrarEspaco'
import AlertasPage from '../AlertasPage';
import Associados from '../AssociadosPage'
import Configuracoes from '../ConfiguracoesPage'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default class UserHomePage extends Component{
    render(){
        return (
            <Router>
                <header className="myHeader">
                    <div className="header--elements">
                        <div className="header--info">
                            <p className="header--userName">{this.props.user.nome}</p>
                            <p className="header--admin">Administrador</p>
                        </div>                
                        
                        <img className="header--userPhoto"/>

                        <div className="header--dropdown">
                            <ExpandMoreIcon/>
                        </div>

                        <div className="header--notifications">
                            <NotificationsIcon/>
                        </div>
                    </div>
                </header>
                    <div className="wrapper">
                    <Menu setUser={this.props.setUser}/>
                    <div className="paths">
                        <Route exact path="/home/overview" component={OverviewPage}/>
                        <Route path="/home/espacos" component={Espacos}></Route>
                        <Route path="/home/espaco/cadastrarEspaco" component={CadastrarLocal}></Route>
                        <Route path="/home/alertas" component={AlertasPage}></Route>
                        <Route path="/home/associados" component={Associados}></Route>
                        <Route path="/home/configuracoes" component={Configuracoes}></Route>
                    </div>
                </div>
        </Router>
        )
    }
}

/**
                  <header className="myHeader">
                    <div className="header--elements">
                        <div className="header--info">
                            <p className="header--userName">Hey</p>
                            <p className="header--admin">Administrador</p>
                        </div>                
                        
                        <img className="header--userPhoto"/>

                        <div className="header--dropdown">
                            <ExpandMoreIcon/>
                        </div>

                        <div className="header--notifications">
                            <NotificationsIcon/>
                        </div>
                    </div>
                </header> */