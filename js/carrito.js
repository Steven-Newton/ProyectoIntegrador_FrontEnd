let carrito = [];
if(localStorage.getItem(localStorage.getItem('login'))){
     carrito = localStorage.getItem(localStorage.getItem('login')).split(',');
}
divcarrito = document.getElementById("carrito");
const getData = () => {
    let promesa =  fetch("http://127.0.0.1:5505/../js/data.json",{
          method:"GET"
      });
      promesa.then((response)=>{
          response.json().then((data)=>{
              data.forEach(e => {
                if (carrito.includes(`${e.id}`)) {
                    divcarrito.innerHTML += `${e.title}<br>`;
                }
          })
          }).catch((error)=>{
              console.error("Error al recopilar datos "+error);
          })
      }).catch((error)=>{
          console.error("error en la solicitud "+error);
      });
  }
getData();
