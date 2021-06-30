import React, {useState, useRef} from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import options from '../../Files/configuracoes.json'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Detalhes from '../Detalhes'
import EditarPerfil from '../EditarPerfil'
import Instituicao from '../Instituição'
import Seguranca from '../Segurança'

const ConfiguracoesPage = () => {
    const [open, setOpen] = useState(options[0])
    const ref = useRef(null);

    const estilo = {
        width: "fit-content"
    }

    return (
        <Router>
            <Route path="/detalhes" component={Detalhes}></Route>
            <Route path="/editarPerfil" component={EditarPerfil}></Route>
            <Route path="/instituicao" component={Instituicao}></Route>
            <Route path="/alterarPassword" component={Seguranca}></Route>
            <div className="overview--section">
                <h1 style={{color: '#2C6975'}}>Configurações</h1>
                {
                    options.map(op =>
                        <div style={estilo} key={op.id}>
                        <Link to={op.rota}>
                            <div key={op.id} className={`menu--configuracoes ${open === op ? 'clicked' : null}`} onClick={() =>setOpen(op)}>
                                <h4  ref={ref}>{op.titulo}</h4>
                                <div className="df sb">
                                    <div className={`paragraph`}>{op.descricao}</div>
                                    <ArrowForwardIosIcon className="icone-configuracoes"/>
                                </div>
                                <hr/>
                            </div>
                        </Link>
                        </div>
                    )
                }
            </div>

            <div className="vertical-line"></div>
        </Router>
    )
}

export default ConfiguracoesPage 
