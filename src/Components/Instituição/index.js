import React, {Component} from 'react'
import Whiteboard from '../Whiteboard'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Circulo from '../Circulo'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import RoomIcon from '@material-ui/icons/Room';
import MapIcon from '@material-ui/icons/Map';
import PeopleIcon from '@material-ui/icons/People';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import axios from 'axios'

export default class Instituicao extends Component {
    constructor(props){
        super(props)
        this.state = ({
            nome: '',
            endereco: '',
            cep: '',
            associados: '',
            espacos: ''
        })
    }

    getInstituicao = async () => {
        const id = localStorage.getItem('instituicao')

        try{
            const res = await axios.get('instituicao/get', {params: {id}})
            this.setState({
                nome: res.data.data.nome_instituicao,
                associados: res.data.data.qnt_associados,
                espacos: res.data.data.qnt_espacos,
                endereco: res.data.data.latitude,
                cep: res.data.data.longitude
            })
        }catch(e){
            console.log(e)
        }
    }


    componentDidMount(){
        this.getInstituicao()
    }

    render(){
        return (
            <div className="configuracoes--page">
                <h3>Detalhes da instituição</h3>
                <hr className="divisor-horizontal"/>
                <div className="whiteboard">
                    <div className="df sb" key="dataDetalhes">       
                    <div>
                        <div className="df">
                            <Circulo icon={AccountBalanceIcon} color="#FFBE88" key="2"/>
                                <div>
                                    <div style={{color: "#2C6975", fontWeight:"600"}}>{this.state.nome}</div>
                                    <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Nome da Instituição</div>
                                </div>
                        </div>
    
                        <div className="df">
                            <Circulo icon={MapIcon} color="#E7B7C8" key="2"/>
                                <div>
                                    <div style={{color: "#2C6975", fontWeight:"600"}}>{this.state.endereco}</div>
                                    <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Endereço</div>
                                </div>
                        </div>
    
                        <div className="df">
                        <Circulo icon={RoomIcon} color="#47CACC" key="3"/>
                                <div>
                                    <div style={{color: "#2C6975", fontWeight:"600"}}>{this.state.cep}</div>
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
                                <div style={{color: "#2C6975", fontWeight:"600"}}>{this.state.associados}</div>
                                <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Número de Associados</div>
                            </div>
                        </div>
                        <div className="df">
                            <Circulo icon={MeetingRoomIcon} color="#CDB3D4" key="6"/>
                            <div>
                                <div style={{color: "#2C6975", fontWeight:"600"}}>{this.state.espacos}</div>
                                <div style={{color: "#6D7278", fontSize: "0.875rem"}}>Quantidade de Espaços</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
    
}