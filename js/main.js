
class Pelicula {
    constructor (nombre,descripcion,duracion,puntaje) {

        this.nombre=nombre.toUpperCase();
        this.descripcion=descripcion;
        this.duracion=duracion;
        this.puntaje=puntaje;
    }
}

const peliculas=[];

peliculas.push (new Pelicula ("Spider-Man","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quis aperiam commodi voluptate nihil iste quos dolore quam quas ipsam, blanditiis consectetur est. Eos, saepe eligendi unde porro corrupti temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsa mollitia ut, laboriosam earum nemo exercitationem numquam sint eligendi repudiandae natus sed, voluptatem aliquam perferendis qui illum eaque blanditiis iusto."
,"2:20 Hs","80%"));

peliculas.push (new Pelicula ("Kingsman","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quis aperiam commodi voluptate nihil iste quos dolore quam quas ipsam, blanditiis consectetur est. Eos, saepe eligendi unde porro corrupti temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsa mollitia ut, laboriosam earum nemo exercitationem numquam sint eligendi repudiandae natus sed, voluptatem aliquam perferendis qui illum eaque blanditiis iusto."
,"1:30 Hs","67%"));


peliculas.push (new Pelicula ("Gucci","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea quis aperiam commodi voluptate nihil iste quos dolore quam quas ipsam, blanditiis consectetur est. Eos, saepe eligendi unde porro corrupti temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ipsa mollitia ut, laboriosam earum nemo exercitationem numquam sint eligendi repudiandae natus sed, voluptatem aliquam perferendis qui illum eaque blanditiis iusto."
,"2:45 Hs","50%"));



let eleccionPelicula=document.getElementById("eleccion");

eleccionPelicula.innerHTML=`
<option value=${peliculas[0].nombre}>Spider-Man</option> \n<option value=${peliculas[1].nombre}>Kingsman</option> \n<option value=${peliculas[2].nombre}>Gucci</option>`;

let peliculaElegida =(eleccionPelicula).value;

/* INFO PELICULA */

let h2Pelicula=document.getElementById("h2Pelicula");
h2Pelicula.innerHTML=peliculaElegida;


eleccionPelicula.onchange = () => {
    console.log(document.getElementById('eleccion').value);
    h2Pelicula.innerHTML=(eleccionPelicula).value;


/* IMG PELICULAS */
    let imagen=document.getElementById("imgPelicula");

    switch ((eleccionPelicula).value) {

    case peliculas[0].nombre:
        imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJRcFYvXOyOSmVN7hgDzjqUQdjuPY69RiSzA&usqp=CAU";
        
        break;

    case peliculas[1].nombre:
        imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUk59x5lku8_7Ks2mrdDPchbnxdW_8F0IxQ&usqp=CAU"
        break;

    case peliculas[2].nombre:
        imagen.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhT-ajomRbIHGFB4_gYQu9m41ghLSAUz5EVUlzyJZT-Ti_haJmU1Ak3rjJ_X9_DkTwkjc&usqp=CAU";
        break
}
(eleccionPelicula).value = "";

}


/* BOTONES DE DIAS DE LA SEMANA */

let botonesDias = document.getElementsByClassName("btn-dia");

for (const boton of botonesDias) {
    boton.addEventListener("click", function () {
        console.log(`Día: ${this.id}, Pelicula: ${peliculaElegida}`);
        /* diaElegido=this.id; */

    })
}


class Seleccion {
    constructor (pelicula,dia,horario,asiento,comida) {

        this.pelicula=this.pelicula;
        this.dia=this.dia;
        this.horario=this.horario;
        this.asiento=this.asiento;
        this.comida=this.comida;
    }
}

const seleccionTotal = [];

seleccionTotal.push(new Seleccion (peliculaElegida,/* diaElegido, horarioElegido,asientoElegido,comidaElegida)*/));

localStorage.setItem('seleccion1', `${seleccionTotal}`);
let select= JSON.parse( localStorage.getItem(`${seleccionTotal}`));

/* No logre pasar mi array de objetos a string */
