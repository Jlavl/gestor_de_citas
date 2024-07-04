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
      <div className="contenedor">
        <div className="one-half column">
          <h2 className="titulo">CREAR MI CITA</h2>
          <div className="Formulario">
            <label>Nombre Mascota
            <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" ></input></label>
            <label>Nombre Dueño
            <input type="text" name="dueño" class="u-full-width" placeholder="Nombre dueño de la mascota" ></input></label>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <label>Fecha
            <input type="date" name="fecha" class="u-full-width" ></input></label>
            <label>Hora
            <input type="time" name="fecha" class="u-full-width" ></input></label>
            <label>Sintomas
            <input type="text" name="sintoma" class="u-full-width" ></input></label>
            <input type="button" name="mandar" class="botonform" value="Enviar"></input>
          </div>
        </div>
        <div className="one-half column">
          <h2 className="titulo">ADMINISTRA TUS CITAS</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
