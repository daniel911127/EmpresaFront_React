import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TablaSedes() {
  const [sede, setSede] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/sedes')
      .then((response) => {
        setSede(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener sedes:', error);
      });
  }, []);
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
          {sede.map((item) => (
            <tr key={item.idsede}>
              <td>{item.idsede}</td>
              <td>{item.descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TablaSedes