var React = require('react');

class Boton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    //Funcion que se ejecuta al hacer click el el boto

    alPulsar() {

        this.props.funcionPasada();
    }

    render() {
        return (

            <button onClick={this.alPulsar.bind(this)} className="boton" >{this.props.textoBoton.trim()}</button>
        );
    }
}

export default Boton;