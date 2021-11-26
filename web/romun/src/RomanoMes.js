//Esta función se ocupa de pasar el més en número décimal a número romano (String)

function pasarMesARomano(mes) {

    var mesARomano;

    switch (mes) {
        case 1:
            mesARomano = "I"
            break;
        case 2:
            mesARomano = "II"
            break;
        case 3:
            mesARomano = "III"
            break;
        case 4:
            mesARomano = "IV"
            break;
        case 5:
            mesARomano = "V"
            break;
        case 6:
            mesARomano = "VI"
            break;
        case 7:
            mesARomano = "VII"
            break;
        case 8:
            mesARomano = "VIII"
            break;
        case 9:
            mesARomano = "IX"
            break;
        case 10:
            mesARomano = "X"
            break;
        case 11:
            mesARomano = "XI"
            break;
        case 12:
            mesARomano = "XII"
            break;
        default:
            break;

    }
    return mesARomano;
}

export default pasarMesARomano;