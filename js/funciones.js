//Funciones de mi programas

let a=20;

function holaMundo() {
    let mensaje1='<h1> MI PRIMERA FUNCION </h1';
    console.log(mensaje1);
   console.log("en la funcion:"+a);
}

function pintar_mensaje(mensaje)
{   
     console.log(mensaje);

}

// Ros Garcia Perez   --> R.G.P.

function iniciales(a,b,c)
{       
    console.log(a.charAt(0)+"."+b.charAt(0)+"."+c.charAt(0)+"." );
    console.log(`${a.charAt(0)}.${b.charAt(0)}.${c.charAt(0)}.`);

}

/*
const iniciales=(a,b,c)=>{
    console.log(a.charAt(0)+"."+b.charAt(0)+"."+c.charAt(0)+"." );
}
*/

function f1(nombre_cliente,provincia='Madrid')
{
    if (nombre_cliente===undefined)
    {
        nombre_cliente="sin nombre";
    }
    console.log(nombre_cliente+" "+provincia);
}


//Funciona declarativa
function suma(n1=0,n2=0) {
    return n1+n2;    
}

//Con expresion
let suma1=function (n1=0,n2=0) {
    return n1+n2; 
}

let suma2=suma1;
let suma3=suma;
