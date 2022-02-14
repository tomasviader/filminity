
class Pelicula {
    constructor (nombre,duracion,puntaje) {

        this.nombre=nombre.toUpperCase();
        this.duracion=duracion;
        this.puntaje=puntaje;
    }
}

const peliculas=[];

peliculas.push (new Pelicula ("Spider-Man","2:20 Hs","80%"));
peliculas.push (new Pelicula ("Kingsman","1:30 Hs","67%"));
peliculas.push (new Pelicula ("Gucci","2:45 Hs","50%"));



let eleccionPelicula=document.getElementById("eleccion");

eleccionPelicula.innerHTML=`
<option value=${peliculas[0].nombre}>Spider-Man</option> \n<option value=${peliculas[1].nombre}>Kingsman</option> \n<option value=${peliculas[2].nombre}>Gucci</option>`;

let peliculaElegida =(eleccionPelicula).value;

let h2Pelicula=document.getElementById("h2Pelicula");
h2Pelicula.innerHTML=peliculaElegida;


eleccionPelicula.onchange = () => {
    console.log(document.getElementById('eleccion').value);
    h2Pelicula.innerHTML=(eleccionPelicula).value;
}




let tituloPagina = document.getElementById("h1Index");

tituloPagina.remove();





/* BOTONES DE DIAS DE LA SEMANA */

let botonesDias = document.getElementsByClassName("btn-dia");

for (const boton of botonesDias) {
    boton.addEventListener("click", function () {
        console.log(`Día: ${this.id}`);
    })
}


