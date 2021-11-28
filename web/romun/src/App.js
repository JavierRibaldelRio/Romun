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
      </div>
    );
  }
}

export default App;
