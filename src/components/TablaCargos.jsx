import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TablaCargos() {
  const [cargo, setCargo] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/cargos')
      .then((response) => {
        setCargo(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener empleados:', error);
      });
  }, []);
  console.log(cargo)
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {cargo.map((item) => (
            <tr key={item.idcargo}>
              <td>{item.idcargo}</td>
              <td>{item.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaCargos;
