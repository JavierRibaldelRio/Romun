import Boton from './Boton';
import Fecha from './ClaseFecha';

var React = require('react');

//Se ocupa de agrupar los componentes del boton

class PanelControl extends React.Component {

    constructor(props) {
        super(props)

        this.state = { objetoFecha: new Fecha() }
    }


    //Al ejecutar ejecuta la fucnion de autodate
    fechaDeHoy() {

        this.state.objetoFecha.autodate();

        this.props.mandarTexto(this.state.objetoFecha.getFecha());  //Envia la fecha A  app



    }


    fechaDefinida(e) {

        const fechaCalendario = this.state.fechaCalendario;
        //Compreuba si hay algún dato dentro de fecha calendario
        if (fechaCalendario === undefined) {
            alert("Inserte algún valore en el selector de fechas")
        }
        else {

            this.state.objetoFecha.fechaDefinida(fechaCalendario);

            this.props.mandarTexto(this.state.objetoFecha.getFecha());  //Envia la fecha A  app

        }

    }

    //Funcion que se ocupa de actualizar el valor de la fecha definida poreu usuario

    actualizarEstadoCalendario(e) {

        this.setState({ fechaCalendario: e.target.value });
    }

    render() {
        return (
            <div className="Panel_de_Control">

                <h1>ROMUN</h1>

                <Boton funcionPasada={this.fechaDeHoy.bind(this)} textoBoton="Fecha de Hoy"></Boton>
                <Boton type="submit" funcionPasada={this.fechaDefinida.bind(this)} textoBoton='Fecha insertada'></Boton>
                <form>
                    {/*Calendario  */}
                    <input onChange={this.actualizarEstadoCalendario.bind(this)} id='calendario' name='calendario' type='date' step='1' ></input>
                </form>
            </div>
        );
    }
}

export default PanelControl;