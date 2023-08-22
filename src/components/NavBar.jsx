import React from 'react';

function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark' data-bs-theme="dark">
        <div className='container-fluid'>
          <a className='navbar-brand text-light' href='/'>
            EMPRESA
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a className='nav-link text-light' href='empleados'>
                  Empleados
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-light' href='cargos'>
                  Cargos
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-light' href='sedes'>
                  Sedes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
