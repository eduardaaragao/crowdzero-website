import React from 'react'
import Whiteboard from '../Whiteboard'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Circulo from '../Circulo'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import RoomIcon from '@material-ui/icons/Room';
import MapIcon from '@material-ui/icons/Map';
import PeopleIcon from '@material-ui/icons/People';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const Instituicao = () => {
    const data = [
        <div className="df sb" key="dataDetalhes">       
            <div>
                <div className="df">
                    <Circulo icon={AccountBalanceIcon} color="#FFBE88" key="2"/>
                        <div>
                            <div style={{color: "#2C6975", fontWeight:"600"}}>Instituto Politécnico de Viseu</div>
                            <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Nome da Instituição</div>
                        </div>
                </div>

                <div className="df">
                    <Circulo icon={MapIcon} color="#E7B7C8" key="2"/>
                        <div>
                            <div style={{color: "#2C6975", fontWeight:"600"}}>Av. Cor. José Maria Vale de Andrade</div>
                            <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Endereço</div>
                        </div>
                </div>

                <div className="df">
                <Circulo icon={RoomIcon} color="#47CACC" key="3"/>
                        <div>
                            <div style={{color: "#2C6975", fontWeight:"600"}}>3530-133</div>
                            <div style={{color: "#6D7278", fontSize: "0.875rem"}}>CEP</div>
                        </div>
                </div>
            </div>

            <div>
                <div className="df">
                    <Circulo icon={AccountBoxIcon} color="#CDE0C9" key="4"/>
                     <div>
                         <div style={{color: "#2C6975", fontWeight:"600"}}>Privada</div>
                         <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Tipo de Associação</div>
                    </div>
                </div>

                <div className="df">
                    <Circulo icon={PeopleIcon} color="#F57272" key="5"/>
                     <div>
                         <div style={{color: "#2C6975", fontWeight:"600"}}>63</div>
                         <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Número de Associados</div>
                    </div>
                </div>
                <div className="df">
                    <Circulo icon={MeetingRoomIcon} color="#CDB3D4" key="6"/>
                     <div>
                         <div style={{color: "#2C6975", fontWeight:"600"}}>6</div>
                         <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Quantidade de Espaços</div>
                    </div>
                </div>
            </div>
        </div>
    ]

    return (
        <div className="configuracoes--page">
            <h3>Detalhes da instituição</h3>
            <Whiteboard width="100%" height="400px" data={data} padding="40px"/>
            <hr className="divisor-horizontal"/>
        </div>
    )
}

export default Instituicao
