// Pedir un nombre y ponerlo al reves

let nombre = prompt("Dime tu nombre:");

document.write("<h1>PONER NOMBRE AL REVES</h1>")
 document.write("<p>")
for (let i = nombre.length-1; i >= 0; i--) {
    //document.write(nombre.charAt(i));  
    document.write(nombre.charAt(i)+"<br/>");    
}
document.write("</p>")
//en mdo tabla

document.write("<table border=1px>");
document.write("<tr>");
document.write("<th>");
document.write("Inicial");
document.write("</th>");
document.write("</tr>");


for (let i = nombre.length; i >= 0; i--) {
    document.write("<tr>");
    document.write("<td>" + nombre.charAt(i) + "</td>")
    document.write("</tr>");
}
document.write("</table>");
/*
< table border=1px>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
</table >
*/
