
let nota = prompt('Nota');

switch (parseInt(nota)) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        document.write('Suspenso');
        break;
    case 5:
        document.write('Aprobado');
        break;
    case 6:
        document.write('Bien');
        break;
    case 7:
    case 8:
        document.write('Notable');
        break;
    case 9:
    case 10:
        document.write('Sobresaliente');
        break;
    default:
        document.write("no se que has puesto");
}