

window.addEventListener("load", function(){
    barra.innerHTML += `<nav class="navbar navbar-expand-lg navbar-light bg-light">  
    <a class="navbar-brand">EcoInclusive</a>
  
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
            <a class="nav-link" href="./index.html">Home<span class="sr-only"></span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./tshirts.html">T-Shirts</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./jeans.html">Jeans</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./shoes.html">Shoes</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="./accesories.html">Accesories</a>
          </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><a href="./login.html"><i class="bi bi-person-circle"></i>Login</a></button>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><a href="./carrito.html"><i class="bi bi-cart4"></i>Cart</a></button>
      </form>
    </div>
  </nav>`;

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