import './App.css';
import Empleados from './pages/Empleados';
import Home from './pages/Home';
import Cargos from './pages/Cargos';
import { Routes, Route } from 'react-router-dom';
import Sedes from './pages/Sedes';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='empleados' element={<Empleados />} />
        <Route path='cargos' element={<Cargos />} />
        <Route path='sedes' element={<Sedes />} />
      </Routes>
    </div>
  );
}

export default App;
