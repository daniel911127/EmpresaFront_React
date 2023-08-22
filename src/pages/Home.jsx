import React from 'react';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <div>
      <NavBar />
      <img
        src='https://blog.wasi.co/wp-content/uploads/2020/04/como-iniciar-un-negocio-inmobiliario.jpg'
        class='img-fluid d-block w-100'
        alt='imagen'
      ></img>
    </div>
  );
}

export default Home;
