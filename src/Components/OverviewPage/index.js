
import '../../CSS/style.css';
import React, {useState} from 'react';
import filtros from '../../Files/opcoesfiltrodata.json'
import chartData from '../../Files/teste.json'
import Alertas from '../AlertasBox';
import dataAlertas from '../../Files/alertas.json'
import DataOverview from './dataoverview'
import dataoverview from '../../Files/dataoverview.json'
import Dropdown from '../Dropdown/'
import ResponsiveChart from '../Charts/BarChart'
import NoAlerts from '../AlertasBox/noalerts'
import pieData from '../../Files/reportados.json'
import PieChart from '../Charts/PieChart'
import LineChart from '../Charts/LineChart'
import DataLineChart from '../../Files/lineChart.json'

export default() =>{ 
    const [fil, setFiltro] = useState(null)
    const [date, setDate] = useState(null)
    const [alertas, setAlertas] = useState(dataAlertas)
    const [dataChart, setDataChart] = useState(chartData)
    const [pieChartData, setPieChart] = useState(pieData)
    const [lineChartData, setLineChart] = useState(DataLineChart)

    // Deletar alerta
    const deleteAlerta = (id) =>{
        setAlertas(alertas.filter((alerta)=> alerta.id !== id))
    }

    const onClick = () =>{
        console.log('Clicked')
    }

    return(
        <section className="overview--section">
            <h1>Dados em Tempo real</h1>
            <p>Você pode filtrar por <b>locais</b>, <b>ocupação</b> (baixa, média, alta) e por <b>período</b> (semana, mês).</p>

            <DataOverview data={dataoverview}/>

            <Dropdown options={filtros} id="id" label="filtro" value={fil} onChange={setFiltro} prompt="Selecionar filtro" onDateChange={setDate}/>

            <div className="overview--charts">
                <ResponsiveChart data={dataChart}/>

                <LineChart data={DataLineChart}/>
            </div>

            <hr className="divisor-horizontal"/>
            
            <h2>Alertas</h2>

            <div className="overview--statistics">
                {alertas.length > 0 ? 
                <Alertas data={alertas} onDelete={deleteAlerta} onClick={onClick}/> 
                : <NoAlerts/>}
                <PieChart data={pieChartData}/>
            </div>
        </section>
    )
}