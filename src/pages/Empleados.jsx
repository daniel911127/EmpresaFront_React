import React from 'react';
import NavBar from '../components/NavBar';
import TablaEmpleados from '../components/TablaEmpleados';
import '../styles/pages/Empleados.css';
import axios from 'axios';

function Empleados() {
  const HandleSubmit = (event) => {
    if (event.nativeEvent.submitter.name === 'agregar') {
      agregar(event);
    } else if (event.nativeEvent.submitter.name === 'actualizar') {
      actualizar(event);
    } else if (event.nativeEvent.submitter.name === 'eliminar') {
      eliminar(event);
    }
  };
  const agregar = async (e) => {
    let info = {
      Id: 0,
      Nombre: e.target.nombre.value,
      Correo: e.target.correo.value,
      Telefono: e.target.telefono.value,
      IdCargo: e.target.idCargo.value,
      IdSede: e.target.idSede.value,
    };
    console.log(info)
    try {
      const response = await axios.post(
        'http://localhost:5000/empleados',
        info
      );
      console.log('respuesta: ', response.data);
      alert('Se agrego empleado!');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('no agregado');
    }
  };
  const actualizar = async (e) => {
    let id=parseInt(e.target.id.value)
    let info = {
      Nombre: e.target.nombre.value,
      Correo: e.target.correo.value,
      Telefono: e.target.telefono.value,
      IdCargo: parseInt(e.target.idCargo.value),
      IdSede: parseInt(e.target.idSede.value),
    };
    console.log(info);
    try {
      const response = await axios.put(
         `http://localhost:5000/empleados/${id}`,
        info
      );
      console.log('respuesta: ', response.data);
      alert('Se actualizo el empleado!');
    } catch (err) {
      console.log('error al agregar: ', err);
      alert('no pudimos actualizar al empleado');
    }
  };
  const eliminar = async (e) => {
    let id = parseInt(e.target.id.value);

    try {
      const response = await axios.delete(
        `http://localhost:5000/empleados/${id}`
      );
      console.log('respuesta: ', response.data);
      alert('Se elimino el empleado ');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('no pudimos eliminarlo');
    }
  };
  return (
    <div>
      <NavBar />
      <form className='formulario' onSubmit={HandleSubmit}>
        <input type='number' name='id' placeholder='id' />
        <input type='text' name='nombre' placeholder='Nombre' />
        <input type='text' name='correo' placeholder='correo' />
        <input type='text' name='telefono' placeholder='telefono' />
        <input type='number' name='idCargo' placeholder='id cargo' />
        <input type='number' name='idSede' placeholder='id sede' />
        <div className='botones'>
          <button type='submit' className='agregar' name='agregar'>
            Agregar
          </button>
          <button type='submit' className='actualizar' name='actualizar'>
            Actualizar
          </button>
          <button type='submit' className='eliminar' name='eliminar'>
            Eliminar
          </button>
        </div>
      </form>
      <TablaEmpleados />
    </div>
  );
}

export default Empleados;
