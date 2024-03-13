import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Menu from './ProvaFinal/Menu/Menu'
import Senador from './ProvaFinal/Senador'
import Cargos from './ProvaFinal/Cargos'
import Filiacoes from './ProvaFinal/Filiacoes'
import Mandatos from './ProvaFinal/Mandatos'
import Profissoes from './ProvaFinal/Profissoes'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div>
          {/* <Route path="/" exact component={Senador} /> */}
          <Route path="/politicos" exact component={Senador} />
          <Route path="/politicos/Senador" exact component={Senador} />
          <Route path="/politicos/Cargos" component={Cargos} />
          <Route path="/politicos/Filiacoes" component={Filiacoes} />
          <Route path="/politicos/Mandatos" component={Mandatos} />
          <Route path="/politicos/Profissoes" component={Profissoes} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
