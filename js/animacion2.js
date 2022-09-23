





const ul = document.querySelector("ul")


function cuadro (){
    const an = ul.animate([    //función de js que regresa una animación.  
        //keyframes
        {transform: "TranslateY(0px)"},   // transform= propiedad que permite mover un elemento
        {transform: "TranslateY(-70px)"}  // utiliza las cordenadas, en este caso de Y, porque la animación se mueve en este eje.
    ],{ 
        //options
        easing:"Linear",  //movimiento lineal.
        iterations: 1,    // una transición por palabra, número de repetición de esta transición.
        duration: 1000, //milisegundos, velocidad

    });
    return an.finished;   //promesa de finalización de la animación
}

function desplazo (){      //llama función cuadro.
    cuadro()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll("ul > li")[0])
    })   //con appendChild, como el nombre lo dice, se le da un hijo al elemento ul, con este
         // y la ayuda de document.querySelectorAll podemos crear la repetición de la animación
}

setInterval(() =>{
    desplazo()
    }, 2000); //milisegundos del desplazo