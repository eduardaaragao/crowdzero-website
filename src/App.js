import Envelope from './API Requests/Envelope';
import OverviewPage from './Components/OverviewPage';
import Header from './Components/Header';
import Menu from './Components/Menu'
import '../src/CSS/style.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Espacos from './Components/EspacosPage'
import CadastrarLocal from './Components/CadastrarEspaco'
import AlertasPage from './Components/AlertasPage';
import Associados from './Components/AssociadosPage'
import Configuracoes from './Components/ConfiguracoesPage'
import user from './Files/user.json'

export default() => {
  // A obter os dados da API

  return (
    <Router>
      <div className="wrapper">
        <Header user={user}/>
        <Menu/>
        <div className="paths">
          <Route path="/" exact component={OverviewPage}></Route>
          <Route path="/espacos" component={Espacos}></Route>
          <Route path="/cadastrarEspaco" component={CadastrarLocal}></Route>
          <Route path="/alertas" component={AlertasPage}></Route>
          <Route path="/associados" component={Associados}></Route>
          <Route path="/configuracoes" component={Configuracoes}></Route>
        </div>
      </div>
    </Router>
  );
}