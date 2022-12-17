import Home from './components/home/Home';
import Login from './components/login/Login';
import Pedidos from './components/pedidos/Pedidos';
import Conta from './components/conta/Conta';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Home /> }
                />
                <Route
                    path="/login"
                    element={ <Login /> }
                />
                <Route
                    path="/pedidos"
                    element={ <Pedidos /> }
                />
                <Route
                    path="/conta"
                    element={ <Conta /> }
                />
            </Routes>
      </BrowserRouter>
  );
}

export default App;