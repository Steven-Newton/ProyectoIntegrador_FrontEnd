
window.addEventListener("load", function(){
    barra.innerHTML += `
    <nav class="navbar navbar-expand-lg ">  
    <a class="navbar-brand" href="./index.html">EcoInclusive</a>
    
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
            <a class="nav-link" href="./products.html">productos</a>
        </li>

      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><a href="./login.html"><i class="bi bi-person-circle"></i>Login</a></button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><a href="./carrito.html"><i class="bi bi-cart4"></i>Cart</a></button>
      </form>
  </nav><hr>`
  ;

  barra2.innerHTML +=`
      <div class="container text-center ">
         <ul class="list-inline">
                <li class="list-inline-item"><a style="color:black;" href="./about.html">About us</a></li>
                <li class="list-inline-item"><a style="color:black;" href="./donaciones.html">Donations</a></li>
                <li class="list-inline-item"><a style="color:black;" href="./contact.html">Contact</a></li>
            </ul>
             <small>Copyright &copy; JavaMonos</small>
        </div> `
});