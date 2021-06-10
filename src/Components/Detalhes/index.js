import React from 'react'
import user from '../../Files/user.json'
import Whiteboard from '../Whiteboard'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import Calendar from '@material-ui/icons/DateRange';
import Circulo from '../Circulo'
import LanguageIcon from '@material-ui/icons/Language';
import TranslateIcon from '@material-ui/icons/Translate';
import PhoneIcon from '@material-ui/icons/Phone';

const Detalhes = () => {
    const data = [
        <div className="df sb" key="dataDetalhes">       
            <div>
                <div className="df">
                    <Circulo icon={PersonIcon} color="#FFBE88" key="2"/>
                        <div>
                            <div style={{color: "#2C6975", fontWeight:"600"}}>Joana Oliveira</div>
                            <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Nome Completo</div>
                        </div>
                </div>

                <div className="df">
                    <Circulo icon={EmailIcon} color="#E7B7C8" key="2"/>
                        <div>
                            <div style={{color: "#2C6975", fontWeight:"600"}}>joanaoliveira@gmail.com</div>
                            <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Endereço de e-mail</div>
                        </div>
                </div>

                <div className="df">
                <Circulo icon={Calendar} color="#47CACC" key="3"/>
                        <div>
                            <div style={{color: "#2C6975", fontWeight:"600"}}>18/03/2021</div>
                            <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Data de aquisição</div>
                        </div>
                </div>
            </div>

            <div>
                <div className="df">
                    <Circulo icon={LanguageIcon} color="#CDE0C9" key="4"/>
                     <div>
                         <div style={{color: "#2C6975", fontWeight:"600"}}>Portugal</div>
                         <div style={{color: "#6D7278", fontSize: "0.875rem"}}>País/Região</div>
                    </div>
                </div>

                <div className="df">
                    <Circulo icon={TranslateIcon} color="#F57272" key="5"/>
                     <div>
                         <div style={{color: "#2C6975", fontWeight:"600"}}>Português</div>
                         <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Idioma</div>
                    </div>
                </div>
                <div className="df">
                    <Circulo icon={PhoneIcon} color="#CDB3D4" key="6"/>
                     <div>
                         <div style={{color: "#2C6975", fontWeight:"600"}}>922 922 922</div>
                         <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Telemóvel para contacto</div>
                    </div>
                </div>
            </div>
        </div>
    ]

    return (
        <div className="configuracoes--page">
            <h3>Detalhes da Conta</h3>
            
            <div className="imagem-perfil">
                <img className="header--userPhoto" src={`${user.userImg}`}/>
            </div>
           
           <Whiteboard width="100%" height="400px" data={data} padding="40px"/>
        </div>
    )
}

export default Detalhes
