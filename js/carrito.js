
let CTotal = document.getElementById("CTotal");
let total = 0;
 Mapa = new Map;
const tbody = document.querySelector(".tbody")
tbody.innerHTML = ''
let carrito = [];
if(localStorage.getItem(localStorage.getItem('login'))){
    carrito = localStorage.getItem(localStorage.getItem('login')).split(',');
}
let lista = [];
if (localStorage.getItem('data')) {
 lista = (JSON.parse(localStorage.getItem('data')));
}
lista.forEach(e => {
    if (carrito.includes(`${e.id}`)) {
                addProduct(e)
        } 
})
console.log();
const getData = () => {
    let promesa =  fetch("http://127.0.0.1:5505/../js/data.json",{
          method:"GET"
      });
      promesa.then((response)=>{
          response.json().then((data)=>{
              data.forEach(e => {
                if (carrito.includes(`${e.id}`)) {
                            addProduct(e)
                        
                    } 
          })
          }).catch((error)=>{
              console.error("Error al recopilar datos "+ error);
          })
      }).catch((error)=>{
          console.error("error en la solicitud "+ error);
      });
  }
getData();


function addProduct(e){

    const tr = document.createElement('tr')
                    tr.classList.add('ItemCarrito')
                    tbody.append(tr)

                    tr.innerHTML += `
                            <th scope="row">${e.id}</th>
                                <td class="table__productos">
                                    <img src=${e.image}  alt="">
                                    <h6 class="title">${e.title}</h6>
                                </td>
                                <td class="table__price"><p>$${e.price} MN</p></td>`   
                                const td2Btn = document.createElement("td")
                                tr.append(td2Btn)
                                var botonElminar = document.createElement("button")
                                td2Btn.append(botonElminar);
                                botonElminar.id = "boton-borrar"
                                botonElminar.classList.add('delete')
                                botonElminar.classList.add('btn-danger')
                                botonElminar.innerHTML = `X`;
                                botonElminar.onclick = function() {
                                    tr.remove()
                                    carrito.splice(carrito.indexOf(e.id),1)
                                    localStorage.setItem(localStorage.getItem('login'),carrito);
                                    setTotal(-e.price)
                                }        
                                setTotal(e.price)

};

function setTotal(subtotal) {
    total +=  parseFloat(subtotal);
    CTotal.innerText =`Total : $${total} MXN`;


}