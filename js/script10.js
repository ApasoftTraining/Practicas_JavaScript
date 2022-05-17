// Pedir un nombre y ponerlo al reves

let nombre = prompt("Dime tu nombre:");

document.write("<h1>PONER NOMBRE AL REVES</h1>")

for (let i = nombre.length-1; i >= 0; i--) {
    //document.write(nombre.charAt(i));
    document.write("<p>" + nombre.charAt(i) + "</p>")
}
//en mdo tabla
/*
document.write("<table border=1px>");
document.write("<tr>");
document.write("<th>");
document.write("Inicial");
document.write("</tr>");
document.write("</th>");

for (let i = nombre.length; i >= 0; i--) {
    document.write("<tr>");
    document.write("<td>" + nombre.charAt(i) + "</td>")
    document.write("</tr>");

}
document.write("</table>");
/*
< table >
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
