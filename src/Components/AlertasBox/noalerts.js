import Whiteboard from '../Whiteboard'
const NoAlerts = ({text, width}) => {
    const data = [
        <h2 key="no-alerts" className="table-title">{text}</h2>
    ]
    return (
        <Whiteboard width={width} padding='20px' height='fit-content' data={data} textAlign='center'/>
    )
}

export default NoAlerts
