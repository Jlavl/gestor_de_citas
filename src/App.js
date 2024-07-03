//import logo from './logo.svg';
import './App.css';
/*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer">
          Learn React - ESE
        </a>
      </header>*/

function App() {
  return (
    <div className="App">
      <div className="">
        <div className="contenedor">
          <div className="one-half column">
            <h2 className="titulo">CREAR MI CITA</h2>
            <div className="Formulario">
              <label>Nombre Mascota</label>
              <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" ></input>
              <label>Nombre Dueño</label>
              <input type="text" name="dueño" class="u-full-width" placeholder="Nombre dueño de la mascota" ></input>
              <label>Fecha</label>
              <input type="date" name="fecha" class="u-full-width" ></input>
              <label>Hora</label>
              <input type="time" name="fecha" class="u-full-width" ></input>
            </div>
          </div>
          <div className="one-half column">
            <h2 className="titulo">ADMINISTRA TUS CITAS</h2>
          <label>Nombre Mascota</label>
              <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota"></input>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
