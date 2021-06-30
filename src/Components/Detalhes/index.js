import React, {Component} from 'react'
import Whiteboard from '../Whiteboard'
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import Calendar from '@material-ui/icons/DateRange';
import Circulo from '../Circulo'
import LanguageIcon from '@material-ui/icons/Language';
import TranslateIcon from '@material-ui/icons/Translate';
import PhoneIcon from '@material-ui/icons/Phone';
import UserDetalhes from '../../Files/detalhes.json'
import axios from 'axios'

export default class Detalhes extends Component {
    constructor(props){
        super(props)

        this.state = {
            nome: '',
            email: '',
            data: ''
        }
    }

    getDados = async () => {
        const id = localStorage.getItem('id')

        const data = {
            id: id
        }

        try{
            const res = await axios.get('gestor/get', {params: data})
            if (res){
                this.setState({
                    nome: res.data.data.nome,
                    email: res.data.data.email,
                    data: res.data.data.createdAt
                })
            }
        }catch(e){
            console.log(e)
        }
    }


    componentDidMount(){
        this.getDados()
    }


render(){
    return (
        <div className="configuracoes--page">
            <h3>Detalhes da Conta</h3>
            
            <div className="imagem-perfil">
                <img className="header--userPhoto" src={`${UserDetalhes.imagem}`}/>
            </div>

            <div className="whiteboard">
            <div className="df sb" key="dataDetalhes">       
        <div>
            <div className="df">
                <Circulo icon={PersonIcon} color="#FFBE88" key="2"/>
                    <div>
                        <div style={{color: "#2C6975", fontWeight:"600"}}>{this.state.nome}</div>
                        <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Nome Completo</div>
                    </div>
            </div>

            <div className="df">
                <Circulo icon={EmailIcon} color="#E7B7C8" key="2"/>
                    <div>
                        <div style={{color: "#2C6975", fontWeight:"600"}}>{this.state.email}</div>
                        <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Endereço de e-mail</div>
                    </div>
            </div>

            <div className="df">
            <Circulo icon={Calendar} color="#47CACC" key="3"/>
                    <div>
                        <div style={{color: "#2C6975", fontWeight:"600"}}>{this.state.data}</div>
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
                     <div style={{color: "#2C6975", fontWeight:"600"}}>{UserDetalhes.telemovel}</div>
                     <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Telemóvel para contacto</div>
                </div>
            </div>
        </div>
    </div>
            </div>
        </div>
    )
}
}
