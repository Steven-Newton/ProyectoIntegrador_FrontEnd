
barra = document.getElementById("barra")

window.addEventListener("load", function(){
  barra.classList.add("sticky-top")
  barra.classList.add("headerA")
  barra.innerHTML += `
  <nav class="navbar navbar-expand-lg ">
      <a  class="navbar-brand" href="../pages/index.html"><img class="ecoinclusive" src="../src/logoSEI.png" alt="" srcset=""></a>
      <button  style="color:white;" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ol  class="navbar-nav ml-auto ">
          <li class="nav-item">
            <a style="color:white;" class="nav-link" href="./products.html">Productos</a>
          </li>
          <li class="nav-item"  id="carritoN">
            <a style="color:white;" class="nav-link" href="./carrito.html">Carrito de compras</a>
          </li>
          <li class="nav-item">
            <a style="color:white;" class="nav-link" href="./loginRegistro.html">Inicio de sesión</a>
           </li>
        </ol>
      </div>
  </nav>
`

document.getElementById("carritoN").style.display = "none";
if (localStorage.getItem('login')) {
  document.getElementById("carritoN").style.display = "block";
}

barra2.innerHTML +=`
<hr>
    <div class="containernav text-center ">
       <ul class="list-inline">
              <li class="list-inline-item"><a style="color:white;" href="./about.html">Nosotros</a></li>
              <li class="list-inline-item"><a style="color:white;" href="./donaciones.html">Donaciones</a></li>
              <li class="list-inline-item"><a style="color:white;" href="./contact.html">Contacto</a></li>
          </ul>
           <small>Copyright &copy; JavaMonos</small>
      </div> `
});









