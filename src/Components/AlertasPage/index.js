import React, {Component} from 'react'
import AlertasBox from '../AlertasBox'
import Whiteboard from '../Whiteboard'
import Etiquetas from '../Etiquetas'
import axios from 'axios'

/* Card de Informações */

const desinfecaoUrgente = 'Este alerta define que um local está a receber vários reportes de "alta ocupação". Talvez seja melhor realizar uma desinfeção no local.'
const emDesinfecao = 'Esta etiqueta é automática, sendo adicionada a um local a partir do momento que um alerta é resolvido.'
const atencao = 'Este alerta é enviado quando um local encontra-se com uma grande quantidade de reportes altos ao longo do tempo.'

const styleTitle = {
    fontSize: '1.25rem',
    color: '#205072',
    textAlign: 'center',
    padding: '20px',
    fontWeight: '700'
}

const dataEtiquetas = [
    <div key="etiquetas">
        <div style={styleTitle}>Guia de Alertas</div>
        
        <Etiquetas nome="Desinfeção Urgente" description={desinfecaoUrgente} color='#F57272'/>
        <Etiquetas nome="Em Desinfeção" description={emDesinfecao} color='#CDB3D4'/>
        <Etiquetas nome="Atenção" description={atencao} color='#FFCF5C'/>
    </div>
]
export default class AlertasPage extends Component {
    constructor(props){
        super(props)

        this.state = ({
            alertas: [],
        })
    }

    setAlertas = (e) => {
        this.setState({
            alertas: e
        })
    }

    deleteAlerta = async (id) =>{
        try{
            const res = await axios.post('alerta/checkAlerta', {id})
            console.log(res)
        }catch(e){
            console.log(e)
        }
    }

    onResolve = (id) => {
        this.setState({
            alertas: this.state.alertas.filter((alerta)=> alerta.id !== id)
        })
        this.deleteAlerta(id)
    }
    
        // Obter dados dos alertas
        getAlertas = async () => {
            let id = localStorage.getItem('instituicao')
            const data = {
                id: id
            }
            
            try{
                const res = await axios.get('alerta/list', {params: data})
                if (res.data.success){
                    this.setAlertas(res.data.data)
                }
            }catch(e){
                alert("ERRO => ", e)
            }
    
        }

    componentDidMount(){
        this.getAlertas()
    }

    render(){
    
        return (
            <div className="overview--section">
                <h1>Alertas de Locais</h1>
                <p>A cada vez que um local atingir uma alta ocupação você receberá um alerta de desinfeção.</p>
    
                <div className="df sb">
                    <AlertasBox data={this.state.alertas} onDelete={this.onResolve}/>
                    <Whiteboard width="300px" data={dataEtiquetas} padding='0xp' marginRight='20px' height='fit-content'/>
                </div>
            </div>
        )

    }
}
