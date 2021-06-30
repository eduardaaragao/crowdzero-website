
import '../../CSS/style.css';
import React, {Component} from 'react';
import Alertas from '../AlertasBox';
import DataOverview from './dataoverview'
import Dropdown from '../Dropdown/'
import GraficoReportes from '../Charts/BarChart'
import NoAlerts from '../AlertasBox/noalerts'
import GraficoMaisReportados from '../Charts/PieChart'
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
            pieChartData: [],
            updated: false,
            dataoverview: []
        }
    }

    onResolve = (id) => {
        this.setState({
            alertas: this.state.alertas.filter((alerta)=> alerta.id !== id)
        })
        this.deleteAlerta(id)
    }

    getMaisReportados = async () => {
        const id = localStorage.getItem('instituicao')

        try{
            const res = await axios.get('local/locaisMaisReporte', {params: {id}})
            if (res){
                this.setState({
                    pieChartData: res.data.data
                })
            }
        }catch(e){
            alert(e)
        }
    }
 
    // Deletar alerta
    deleteAlerta = async (id) =>{
        try{
            const res = await axios.post('alerta/checkAlerta', {id})
            console.log(res)
        }catch(e){
            console.log(e)
        }
    }

    setAlertas = (e) => {
        this.setState({
            alertas: e
        })
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

    // Obter dados do gráfico
    getGraficoReporte = async () => {
        let id = localStorage.getItem('instituicao')
        let filter = this.state.filter
        let date = this.state.date

        if (this.state.filter){
            filter = this.state.filter.id
        }

        if (this.state.date){
            date = this.state.date
        }

        const data = {
            data: date
        }

        try{
            const res = await axios.post('reporte/getGrafico', {data}, {params: {filter, id}})
            if (res.data.success){
                this.setGraficoReporte(res.data.data)
            }
        }catch(e){
            alert("ERRO => ", e)
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

    getOverview = async () => {
        const id = localStorage.getItem('instituicao')

        try{
           const data = await axios.get('instituicao/getDadosOverview', {params: {id}})
           this.setState({
               dataoverview: data.data.data
           })

        }catch(e){
            alert(e)
        }
    }

    componentDidMount(){
        this.getGraficoReporte()
        this.getMaisReportados()
        this.getOverview()
        this.getAlertas()
    }

    componentDidUpdate(){
        if (this.state.updated){
            this.getGraficoReporte()
            this.getAlertas()
            this.handleUpdate()
        }
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
    
                
                <DataOverview data={this.state.dataoverview}/>
                
                <Dropdown options={filtros} id="id" label="filtro" value={this.state.filter} onChange={this.setFiltro} prompt="Selecionar filtro" onDateChange={this.setDataFiltro}/>
    
                <div className="overview--charts">
                    <GraficoReportes data={this.state.data_reportes}/> 

                    {this.state.pieChartData.length > 0 ? 
                     <GraficoMaisReportados data={this.state.pieChartData}/>
                    : <NoAlerts text="Não há dados suficientes para este gráfico" width='290px'/>}
                </div>
    
                <hr className="divisor-horizontal"/>
                
                <h2>Alertas</h2>
    
                <div className="overview--statistics">
                    {this.state.alertas.length > 0 ? 
                    <Alertas data={this.state.alertas} onDelete={this.onResolve} show='1'/> 
                    : <NoAlerts text="Não há alertas" width='60%'/>}                   
                </div>
            </section>
        )

    }
}