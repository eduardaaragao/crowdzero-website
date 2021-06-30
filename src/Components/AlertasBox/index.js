import '../../CSS/style.css';
import List from '../AlertasBox/component'
import Button from '../Button'
import Wrapper from '../Whiteboard'
import {Link} from 'react-router-dom'

/* Componente Alerta */

export default({data, onDelete, show}) => {
  const labels = [
    "Local",
    "Horário",
    "Data",
    "Tipo",
    "Ocupação",
    "Marcar como resolvido"
  ]

  const statusColors = new Map();

  statusColors.set('DESOCUPADO', 'desinfec')
  statusColors.set('ALTA', 'altaocupacao')
  statusColors.set('MÉDIA', 'mediaocupacao')
  statusColors.set('BAIXA', 'baixaocupacao')

  const pageData = [
    <div key="alerta-data">
        <div className="table-labels">
                {labels.map((l) =>
                  <p key={l} className="table-title">{l}</p>
                )}
        </div>
        
        <List
          list={data}
          statusColors={statusColors}
          onDelete={onDelete}
        />
        
        <div className="button-align">
          {show === '1' ? <Link to="/home/alertas"><Button name="Ver mais" colorFrom="#7BE495" colorTo="#329D9C"/></Link> : null}
        </div>
    </div>
  ]

  return <Wrapper data={pageData} width='fit-content' padding='20px' height='fit-content'/>
}