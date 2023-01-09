import PanelControl from './PanelControl';
import ZonaFecha from './ZonaFecha';



var React = require('react');   //Activa REACt

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = { textoAMostrar: '' } //Almacene el texto que se va a mostrar
  }


  actualizarTexto(texto) {
    this.setState({ textoAMostrar: texto });
  }

  render() {
    return (
      <div className="App">

        <PanelControl mandarTexto={this.actualizarTexto.bind(this)} />

        <ZonaFecha texto={this.state.textoAMostrar}></ZonaFecha>

{/*  <a href='https://github.com/JavierRibaldelRio' target='_blank'><img className="GitHub_Logo" src="./GitHub-Mark/PNG/GitHub-Mark-120px-plus.png"></img></a>*/}
      </div >
    );
  }
}

export default App;
