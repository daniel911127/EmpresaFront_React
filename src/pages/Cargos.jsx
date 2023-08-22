import React from 'react'
import NavBar from '../components/NavBar'
import TablaCargos from '../components/TablaCargos'
import axios from 'axios';

function Cargos() {
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
      Descripcion: e.target.descripcion.value,
    };
    console.log(info)
    try {
      const response = await axios.post(
        'http://localhost:5000/cargos',
        info
      );
      console.log('respuesta: ', response.data);
      alert('Se agrego cargo!');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('no agregado');
    }
  };
  const actualizar = async (e) => {
    let id=parseInt(e.target.id.value)
    let info = {
      Descripcion: e.target.descripcion.value,
    };
    console.log(info);
    try {
      const response = await axios.put(
         `http://localhost:5000/cargos/${id}`,
        info
      );
      console.log('respuesta: ', response.data);
      alert('Se actualizo el cargo!');
    } catch (err) {
      console.log('error al agregar: ', err);
      alert('no pudimos actualizar al empleado');
    }
  };
  const eliminar = async (e) => {
    let id = parseInt(e.target.id.value);

    try {
      const response = await axios.delete(
        `http://localhost:5000/cargos/${id}`
      );
      console.log('respuesta: ', response.data);
      alert('Se elimino el cargo ');
    } catch (err) {
      console.log('error al agregar: ', err.data);
      alert('no pudimos eliminarlo');
    }
  };
  return (
    <div>
      <NavBar/>
      <form className='formulario' onSubmit={HandleSubmit}>
        <input type='number' name='id' placeholder='id' />
        <input type='text' name='descripcion' placeholder='Nombre cargo' />
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
      <TablaCargos/>
    </div>
  )
}

export default Cargos