import logo from './logo.svg';

import Fecha from './Fecha';
import PanelControl from './PanelControl';


var React = require('react');   //Activa REACt

class App extends React.Component {
  constructor(props) {

    super(props);
  }

  funcion() {
    var romano = new Fecha();

    romano.autodate();

    console.log(romano.getFecha());

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.funcion.bind(this)}>fsad</button>

        <PanelControl />



      </div>
    );
  }
}

export default App;
