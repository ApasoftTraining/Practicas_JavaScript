
//Primera version
/*
a = prompt("Introduzca cadena");
b = prompt("Introduzca carácter a buscar");

var posicion = a.indexOf(b);
if (posicion == -1) {
    document.write("No se encuentra");
    //code
}
else {
    document.write("Esta en la posicion:" + String(posicion));
}
*/

//Segunda version. Comprobar que no se pasa más de un caractert
/*
a = prompt("Introduzca cadena");
b = prompt("Introduzca carácter a buscar");

var posicion = a.indexOf(b);
if (b.length > 1) {
    document.write('Solo un caracter');
}
else if (posicion == -1) {
    document.write("No se encuentra");
    //code
}
else {
    document.write("Esta en la posicion:" + String(posicion));
}
*/


//Tercera version . Mayusculas y mi nusculas indiferentes
let a = prompt("Introduzca cadena").toUpperCase();
let b = prompt("Introduzca carácter a buscar").toUpperCase();
//a=a.toUpperCase();
//b=b.toUpperCase();
var posicion = a.indexOf(b);
if (b.length > 1) {
    document.write('Solo un caracter');
}
else if (posicion == -1) {
    document.write("No se encuentra");
    //code
}
else {
    document.write("Esta en la posicion:" + String(posicion));
}
