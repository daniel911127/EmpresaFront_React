import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TablaEmpleados() {
  const [emp, setEmp] = useState([]);
  const [cargo, setCargo] = useState([]);
  const [sede, setSede] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/empleados')
      .then((response) => {
        setEmp(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener empleados:', error);
      });
  }, []);
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
  useEffect(() => {
    axios
      .get('http://localhost:5000/sedes')
      .then((response) => {
        setSede(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener empleados:', error);
      });
  }, []);
  const tabla = emp.map((item) => {
    const cargoEncontrado = cargo.find((car) => car.idcargo === item.idcargo);
    const sedeEncontrada = sede.find((sed) => sed.idsede === item.idsede);
    const nombreCargo = cargoEncontrado ? cargoEncontrado.descripcion : 'N/A';
    const nombreSede = sedeEncontrada ? sedeEncontrada.descripcion : 'N/A';

    return {
      id: item.idempleado,
      Nombre: item.nombre,
      Correo: item.correo,
      Telefono: item.telefono,
      Cargo: nombreCargo,
      Sede: nombreSede,
    };
  });
  console.log(tabla)
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Correo</th>
            <th scope='col'>Telefono</th>
            <th scope='col'>Cargo</th>
            <th scope='col'>Sede</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Nombre}</td>
              <td>{item.Correo}</td>
              <td>{item.Telefono}</td>
              <td>{item.Cargo}</td>
              <td>{item.Sede}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaEmpleados;
