/* const saltarLinea= () => {
    document.write("<br>");    
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}



function imprimir(frase) {

    document.write(frase);
    saltarLinea();
} 


let peliculas = parseInt(prompt(" Escriba 1 si usted desea ver una pelicula de accion  \n Escriba 2 si usted desea ver una pelicula de terror \n Escriba 3 si usted desea ver una pelicula de comedia"));

const genero =["accion","terror","comedia"];

while (peliculas !=0 & peliculas <=3) {

    if (peliculas==1) {
        imprimir ("Usted eligio ver una pelicula de " + genero[0] + ".");
    } 
    
    else if (peliculas==2) {
        imprimir ("Usted eligio ver una pelicula de " + genero[1] + ".");
    }
    
    else {
        imprimir ("Usted eligio ver una pelicula de " + genero[2] + ".");
    }
    
    break;
}

if (peliculas ==0 || peliculas > 3) {

    imprimir ("NO tenemos");

}





/* const peliculaNueva = ["Old ","1 hora y 45 minutos "," 95% "];

console.log("Proximamente : " + peliculaNueva);

peliculaNueva.pop();
peliculaNueva.push(" 75%");

pelicula4 =new pelicula (peliculaNueva);


console.log(pelicula1,pelicula2,pelicula3);

console.log("Nueva Puntuacion : " + peliculaNueva); */


