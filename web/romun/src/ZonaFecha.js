
var React = require('react');
class ZonaFecha extends React.Component {


    render() {
        return (

            <div className="ZonaFecha">

                <p>La fecha es: <br /> <span id="FechaFinal">{this.props.texto}</span></p>
            </div>
        );
    }
}

export default ZonaFecha;