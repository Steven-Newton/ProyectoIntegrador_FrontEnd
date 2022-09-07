//"use strict" --> activa el modo estricto, en teoria evita errores de sintaxis, pero usarse con precausión
const ul = document.querySelector("ul"); //querySelector me permite traerlo con la etiqueta ul, y al solo tener esa etiqueta, no hay que llamarla de otra forma

function marco(){
    const ani = ul.animate([ //ul.animate nos regresa un objeto animación
// la funcion animate de JS tiene 2 parametros, keyframes que van dentro de corchetes y sus opciones que van dentro de llaves  
        //keyframes
        {transform: "TranslateY(0px)"}, //transform es una propiedad que me permite mover un elemento 
        {transform: "TranslateY(-40px)"} //dependiendo de sus coordenadas, en este caso se movera sobre el eje Y
    ],{                         //40 pixeles ya que es el tamaño de los elementos li en mi hoja de estilos
        //options
        easing: "linear", //se refiere a que el movimiento sera de manera linear, uniforme. 
        iterations: 1, //las veces que se va a repetir la animacion
        duration: 900 //milisegundos, la velocidad
    });
    
    return ani.finished; //la constante ani es quien esta almacenando al objeto animation que nos esta regresando la funcion anima de js
// ese objeto animado tiene una promesa que representa la terminacion de dicha animación, esa promesa se llama "finished".
}

function desplazando(){ //funcion que llamara a mi funcion "marco"
    marco()
    .then((res)=>{ //el .then representa lo que sucede despues de que una promesa termina correctamente
        console.log(res);//res es el parametro que nos regresa la funcion "marco", el consol debe mostrar la promesa "finsh"
        ul.appendChild(document.querySelectorAll("ul > li")[0])
    })/*appendChild coloca un nuevo hijo al elemento ul, y lo coloca hasta el final, o sea abajo de Be Ecoinclusive
    y con el document.querySelectroAll estoy seleccionando los hijos de la lista ul, lo cual me termina regresando un arreglo de todos 
    esos hijos(NodeList), y me pone el primer li (Be Proud) abajo de el ultimo li (Be Ecoinclusive) para que se vuelva a repetir*/
}

setInterval(() => { //Esta funcion setInterval repite una operacion cada cierto tiempo
    desplazando();
}, 1000); //se repetira cada 1000 milisegundo.
//appendChil-- be proud va a bajo de Be Ecoinclusive