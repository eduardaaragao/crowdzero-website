
import '../../CSS/style.css';
import React, {Component} from 'react';
import Alertas from '../AlertasBox';
import dataAlertas from '../../Files/alertas.json'
import DataOverview from './dataoverview'
import dataoverview from '../../Files/dataoverview.json'
import Dropdown from '../Dropdown/'
import GraficoReportes from '../Charts/BarChart'
import NoAlerts from '../AlertasBox/noalerts'
import pieData from '../../Files/reportados.json'
import GraficoMaisReportados from '../Charts/PieChart'
import GraficoLocal from '../Charts/LineChart'
import DataLineChart from '../../Files/lineChart.json'
import axios from 'axios'

const filtros = [{
    "id": 1,
    "filtro": "Semana passada"
},
{
    "id": 2,
    "filtro": "Mês passado"
},
{
    "id": 3,
    "filtro": "Selecionar dia"
}
]


export default class OverviewPage extends Component{ 
    constructor(props){
        super(props)
        this.state = {
            input_filter: '',
            filter: null,
            date: '',
            alertas: [],
            data_reportes: [],
            pieChartData: pieData,
            lineChartData: DataLineChart,
            updated: false
        }
    }

    // Deletar alerta
    deleteAlerta = (id) =>{
       // setAlertas(alertas.filter((alerta)=> alerta.id !== id))
    }

    setAlertas = (e) => {
        this.setState({
            alertas: e
        })
    }

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
            console.log("ERRO => ", e)
        }

    }

    getGraficoReporte = async () => {
        let id = localStorage.getItem('instituicao')
        let filter = this.state.filter
        let date = this.state.date

        if (this.state.filter){
            filter = this.state.filter
        }

        if (this.state.date){
            date = this.state.date
        }

        const data = {
            id: id,
            filtro: filter,
            date: date
        }

        try{
            const res = await axios.get('reporte/getGrafico', {params: data})
            if (res.data.success){
                this.setGraficoReporte(res.data.data)
            }
        }catch(e){
            console.log("ERRO => ", e)
        }
    }

    setGraficoReporte = (e) => {
        this.setState({
            data_reportes: e
        })
    }

    handleUpdate =(e) => {
        this.setState({
            updated: !this.state.updated
        })
    }

    componentDidMount(){
        this.getGraficoReporte()
        this.getAlertas()
    }

    componentDidUpdate(){
        if (this.state.updated){
            this.getGraficoReporte()
            this.getAlertas()
            this.handleUpdate()
        }
    }

    onClick = () =>{
        console.log('Clicked')
    }

    setFiltro = (e) => {
        this.setState({filter: e}, () =>{
            if(this.state.filter && this.state.filter.id !== 3){
                this.handleUpdate()
           }
        })
    }

    setDataFiltro = (e) => {
        this.setState({
            date: e
        })
         this.handleUpdate()
    }

    render(){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        return(
            <section className="overview--section">
                <h1>Dados em Tempo real</h1>
                <p>Você pode filtrar por <b>locais</b>, <b>ocupação</b> (baixa, média, alta) e por <b>período</b> (semana, mês).</p>
    
                <DataOverview data={dataoverview}/>
    
                <Dropdown options={filtros} id="id" label="filtro" value={this.state.filter} onChange={this.setFiltro} prompt="Selecionar filtro" onDateChange={this.setDataFiltro}/>
    
                <div className="overview--charts">
                    <GraficoReportes data={this.state.data_reportes}/>
    
                    <GraficoLocal data={this.state.lineChartData}/>
                </div>
    
                <hr className="divisor-horizontal"/>
                
                <h2>Alertas</h2>
    
                <div className="overview--statistics">
                    {this.state.alertas.length > 0 ? 
                    <Alertas data={this.state.alertas} onDelete={this.deleteAlerta} onClick={this.onClick}/> 
                    : <NoAlerts/>}
                    <GraficoMaisReportados data={this.state.pieChartData}/>
                </div>
            </section>
        )

    }
}