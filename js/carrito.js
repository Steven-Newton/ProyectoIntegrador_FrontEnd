
let PreV = document.getElementById("preVisualizacion");
let CTotal = document.getElementById("CTotal");
let total = 0;
Mapa = new Map;
const tbody = document.querySelector(".tbody")
tbody.innerHTML = ''
let carrito = [];
if (localStorage.getItem(localStorage.getItem('login'))) {
    carrito = localStorage.getItem(localStorage.getItem('login')).split(',');
}
let lista = [];
if (localStorage.getItem('data')) {
    lista = (JSON.parse(localStorage.getItem('data')));
}

console.log();
const getData = () => {
    let promesa = fetch("http://127.0.0.1:5505/../js/data.json", {
        method: "GET"
    });
    promesa.then((response) => {
        response.json().then((data) => {
            data.forEach(e => {
                if (carrito.includes(`${e.id}`)) {
                    addProduct(e)
                }
            })
        }).catch((error) => {
            console.error("Error al recopilar datos " + error);
        })
    }).catch((error) => {
        console.error("error en la solicitud " + error);
    });
}
getData();
lista.forEach(e => {
    if (carrito.includes(`${e.id}`)) {
        addProduct(e)
    }
})


function addProduct(e) {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    tbody.append(tr)
    tr.innerHTML += `
    <td>${e.id}</td>
    <td class="table__productos">
            <img src=${e.image}  alt="">
            </td>
    <td> ${e.title}</td>       
    <td class="table__price"><p>$${e.price} MXN</p></td>`;
    let td2 = document.createElement("td");
    let td2Div = document.createElement("div");
    tr.append(td2);
    td2.append(td2Div);
    let botonElminar = document.createElement("button");
    let btnagregar = document.createElement("button");
    let btnMenos = document.createElement("button");
    btnagregar.innerHTML = `<i class="bi bi-plus-square"></i> `;
    btnMenos.innerHTML = `<i class="bi bi-dash-square"></i> `;
    let cantidad = 1;
    let contador = document.createElement("button")
    contador.innerHTML = (`${cantidad}`)
    btnagregar.onclick = function () {
        console.log('click');
        total += parseFloat(e.price);
        cantidad++;
        setTotal()

        contador.innerHTML = (`${cantidad}`)
    }
    btnMenos.onclick = function () {
        if (cantidad != 1) {
            cantidad--;
            total -= parseFloat(e.price);
            setTotal()
        }
        console.log('click');
        contador.innerHTML = (`${cantidad}`)
    }
    td2Div.append(btnMenos);
    td2Div.append(contador);
    td2Div.append(btnagregar);
    botonElminar.id = "boton-borrar"
    botonElminar.classList.add('delete')
    botonElminar.classList.add('btn-danger')
    botonElminar.innerHTML = `<i class="bi bi-trash-fill"></i>`;
    botonElminar.onclick = function () {
        tr.remove()
        RemovefromCart(carrito, e.id)
        localStorage.setItem(localStorage.getItem('login'), carrito);
        total -= parseFloat(e.price * cantidad);
        setTotal(e.price)
    }
    let td3 = document.createElement("td")
    tr.append(td3)
    td3.append(botonElminar);
    tr.onclick = function () {
        showItem(e);
    }
    total += parseFloat(e.price);
    setTotal()


};

function setTotal() {
    CTotal.innerText = `Total : $${total.toFixed(2)} MXN`;


}
function showItem(e) {
    PreV.innerHTML = `
    <center>
    <h1 class="card-title">${e.title}</h1>
    <img class=" img-carta" src="${e.image}" alt="Card image cap">
    <p class="card-text"> ${e.description}.</p>
    <strong>   ${e.price} $MXN</strong> 
    </center>
    `;

}
function RemovefromCart(arreglo, id) {
    arreglo2 = [];
    arreglo.forEach(v => {
        if (v != id) {
            arreglo2.push(v);
        }
    })
    carrito = arreglo2;

}