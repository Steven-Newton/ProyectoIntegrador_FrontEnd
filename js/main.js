
window.addEventListener("load", function(){
  barra.innerHTML += `
 <header class="sticky-top headerA"> 
  <nav class="navbar navbar-expand-lg navbar-light   ">
      <a  class="navbar-brand" href="../pages/index.html"><img class="ecoinclusive" src="../src/logoei.png" alt="" srcset=""></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ol class="navbar-nav ml-auto ">
          <li class="nav-item">
            <a class="nav-link" href="./products.html">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./carrito.html">Carrito de compras</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" href="./login.html">Inicio de sesión</a>
           </li>
        </ol>
      </div>
  </nav>
</header><hr>`
;

barra2.innerHTML +=`
<hr>
    <div class="container text-center ">
       <ul class="list-inline">
              <li class="list-inline-item"><a style="color:black;" href="./about.html">Nosotros</a></li>
              <li class="list-inline-item"><a style="color:black;" href="./donaciones.html">Donaciones</a></li>
              <li class="list-inline-item"><a style="color:black;" href="./contact.html">Contacto</a></li>
          </ul>
           <small>Copyright &copy; JavaMonos</small>
      </div> `
});

/* $(document).ready(function () {

$('.first-button').on('click', function () {

  $('.animated-icon1').toggleClass('open');
});
$('.second-button').on('click', function () {

  $('.animated-icon2').toggleClass('open');
});
$('.third-button').on('click', function () {

  $('.animated-icon3').toggleClass('open');
});
}); */