//let btnTotal=document.getElementById("btnTotal");
//let cantidadCont=document.getElementById("")

const tbody = document.querySelector(".tbody")
tbody.innerHTML = ''
let carrito = [];
if(localStorage.getItem(localStorage.getItem('login'))){
     carrito = localStorage.getItem(localStorage.getItem('login')).split(',');
}
//let divcarrito = document.getElementById("divTable");
const getData = () => {
    let promesa =  fetch("http://127.0.0.1:5505/../js/data.json",{
          method:"GET"
      });
      promesa.then((response)=>{
          response.json().then((data)=>{
              data.forEach(e => {
                if (carrito.includes(`${e.id}`)) {
                    //let tabla1=document.getElementById("divTable");
                    
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
                                
                                const td1Input = document.createElement("td")
                                td1Input.classList.add("table__cantidad");
                                tr.append(td1Input)
                                td1Input.innerHTML +=
                                `<input type="number" min="1" value=1 class="input__elemento">`
                                
                             
                                const td2Btn = document.createElement("td")
                                td1Input.append(td2Btn)
                                td2Btn.innerHTML +=
                                `
                                <button class="delete btn btn-danger">Eliminar</button>` 
                            
                        //btnTotal.addEventListener("click", )    
                            
                        
                      
                        //ya funciona el delete
                        let botonElminar= tr.querySelector(".delete");
                        botonElminar.addEventListener("click", function(e){
                            e.preventDefault();
                            tr.remove()
                        })//ya funciona el delete

                        
                    } //if
          })
          }).catch((error)=>{
              console.error("Error al recopilar datos "+ error);
          })
      }).catch((error)=>{
          console.error("error en la solicitud "+ error);
      });
  }
getData();



