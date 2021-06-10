import Whiteboard from '../Whiteboard'
const NoAlerts = () => {
    const data = [
        <h2 className="table-title">Não há alertas para mostrar</h2>
    ]
    return (
        <Whiteboard width='60%' padding='20px' height='fit-content' data={data} textAlign='center'/>
    )
}

export default NoAlerts
