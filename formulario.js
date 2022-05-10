





var tabla = [
    {nombre:  "Real Madrid", puntos: 33},
    {nombre:  "Barcelona", puntos: 30},
    {nombre:  "Betis", puntos: 28},
    {nombre:  "Villa Real", puntos: 26},
    {nombre:  "La Coruña", puntos: 24},
]; 

window.onload = cargarEventos();

function cargarEventos (){

    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("nuevo-equipo").addEventListener("submit", nuevoEquipo, false);
}

function mostrarTabla() {
    var cuerpoTabla= document.getElementById("equipos-tabla");

    cuerpoTabla.innerHTML= "<tr><td>Real Madrid</td><td>33</td></tr>";
}
