//Este objeto de ocupa de gestionar las fechas


import pasarALetra from "./PasarALetra";
import pasarMesARomano from "./RomanoMes";
class Fecha {

    constructor(_letra, _dia, _mes, _anyo) {

        this._letra = _letra;

        this._dia = _dia;

        this._mes = _mes;

        this._anyo = _anyo;

    }


    //Set, edita las propiedades de la fecha

    setFecha(fecha) {

        this._letra = pasarALetra(fecha.getDay());  //Coge el día de la semana y lo pasa a 

        this._dia = fecha.getDate();

        this._mes = pasarMesARomano((1 + fecha.getMonth()));    //Pedimos el més de hoy, le sumamos uno para que corresponda bien, ya que el més 0 es enero

        this._anyo = fecha.getFullYear();
    }
    //Devuelve la fecha en formato aitana
    getFecha() {

        //VAriable que almacena la fecha (J-2-XI-21)
        let s = this._letra + "-" + this._dia + '-' + this._mes + '-' + this._anyo;
        return s;

    }

    //Funcion que sirbe para definir la fecha

    fechaDefinida(textoFecha) {

        this.setFecha(new Date(textoFecha));    //Change the object properties wiwth the data that came from de user
    }


    //Define la fecha automática

    autodate() {

        this.setFecha(new Date());  //Utiliza el set fecha para de finir la fecha actual, al crear new Date, se hac e con la fecha actual
    }


}


export default Fecha;