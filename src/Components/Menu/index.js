import React, {useState}  from 'react';
import '../../CSS/style.css';
import HomeIcon from '@material-ui/icons/Home';
import RoomIcon from '@material-ui/icons/Room';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from './menuIcon'

export default () => {
    const [activeHome, setactiveHome] = useState(true)
    const [activeRoom, setactiveRoom] = useState(false)
    const [activeAlertas, setactiveAlertas] = useState(false)
    const [activeAssociados, setActiveAssociados] = useState(false)
    const [activeConf, setActiveConf] = useState(false)

    const toggleHome = (e) => {
        setactiveHome(true)
        setactiveRoom(false)
        setactiveAlertas(false)
        setActiveAssociados(false)
        setActiveConf(false)
    }

    const toggleActiveRoom = () =>{
        setactiveRoom(true)
        setactiveHome(false)
        setactiveAlertas(false)
        setActiveAssociados(false)
        setActiveConf(false)
    }

    const toggleAlertas = () =>{
        setactiveAlertas(true)
        setactiveHome(false)
        setactiveRoom(false)
        setActiveAssociados(false)
        setActiveConf(false)
    }

    const toggleAssociados = () =>{
        setActiveAssociados(true)
        setactiveAlertas(false)
        setactiveHome(false)
        setactiveRoom(false)
        setActiveConf(false)
    }

    const toggleConf = () =>{
        setActiveConf(true)
        setActiveAssociados(false)
        setactiveAlertas(false)
        setactiveHome(false)
        setactiveRoom(false)
    }

    return(
        <section className="menu--wrapper">
            <nav>
                <ul>
                    <MenuIcon name="Overview" icon={HomeIcon} route="/" active={activeHome} onClick={toggleHome}/>
                    <MenuIcon name="Espaços" icon={RoomIcon} route="/espacos" active={activeRoom} onClick={toggleActiveRoom}/>
                    <MenuIcon name="Alertas" icon={NotificationsIcon} route="/alertas" active={activeAlertas} onClick={toggleAlertas} />
                    <MenuIcon name="Associados" icon={PeopleIcon} route="/associados" active={activeAssociados} onClick={toggleAssociados}/>
                    <MenuIcon name="Configurações" icon={SettingsIcon} route="/configuracoes" active={activeConf} onClick={toggleConf}/>
                    <MenuIcon name="Encerrar Sessão" icon={ExitToAppIcon} route="/sair"/>
                </ul>
            </nav>
        </section>
    )
}