import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from './Components/LoginPage'
import Registar from './Components/Register'
import Nav from './Components/Nav'
import HomePage from './Components/Home'
import React, {Component} from 'react'
import axios from 'axios'
import './CSS/style.css'
import OverviewPage from './Components/OverviewPage'
import EspacosPage from './Components/EspacosPage'
import AlertasPage from './Components/AlertasPage'
import AssociadosPage from './Components/AssociadosPage'
import ConfiguracoesPage from './Components/ConfiguracoesPage'
import ProtectedRoute from './Components/Routes/private'
import UserHome from './Components/Routes/home'
import WelcomePage from './Components/WelcomePage'

export default class App extends Component {
  state = {}
  setUser = user =>{
    this.setState({
        user: user
      })      
  }

  getUser = async (data) => {
      try{
       await axios.get('gestor/get', {params: data}).then(
          res => {
            this.setState({
              user: res.data.data
            })
          }
        )
      }catch(e){
        alert(e)
    }
  }

  componentDidMount(){
    const data = {
      id: localStorage.getItem("id")
    }
    
    if (data.id){
      this.getUser(data)
    }
  }

  render() {
    return (
      <Router>
          <div>
            <Switch>
              <Route exact path="/">
                {this.state.user ? <Redirect to='/home/overview'/> : <WelcomePage/>}
                
              </Route>

              <Route path="/login">
                <LoginPage setUser={this.setUser}/>
              </Route>

              <Route path="/registar">
                <Registar/>
              </Route>

              <ProtectedRoute path="/home" component={() => <UserHome user={this.state.user} setUser={this.setUser}/>} isAuth={this.state.user}/>
            </Switch> 
          </div>
      </Router>
    );
  }
}