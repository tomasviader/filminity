
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

console.log(peliculas);

        
let eleccionPelicula=document.getElementById("eleccion");

eleccionPelicula.innerHTML=`
<option value=${peliculas[0]}>Spider-Man</option> \n<option value=${peliculas[1]}>Kingsman</option> \n<option value=${peliculas[2]}>Gucci</option>`;





let peliculaElegida=document.getElementById("peliculaElegida");

peliculaElegida.innerHTML=``;




let tituloPagina = document.getElementById("h1Index");

tituloPagina.remove();



function opcion() {
    console.log(document.getElementById('eleccion').value);
}

console.log(document.getElementById('eleccion').value);


