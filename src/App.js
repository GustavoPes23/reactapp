import Home from './components/home/Home';
import Login from './components/login/Login';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


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
            </Routes>
      </BrowserRouter>
  );
}

export default App;