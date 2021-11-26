import Boton from './Boton';

var React = require('react');

//Se ocupa de agrupar los componentes del boton

class PanelControl extends React.Component {


    render() {
        return (
            <div className="Panel_de_Control">


                <Boton textoBoton="Fecha de Hoy"></Boton>
            </div>
        );
    }
}

export default PanelControl;