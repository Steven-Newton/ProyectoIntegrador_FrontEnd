    let carrito = [];
    if(localStorage.getItem(localStorage.getItem('login'))){
         carrito = localStorage.getItem(localStorage.getItem('login')).split(',');
    }
    key = "data";
    productodiv = document.getElementById('productos');
    let lista = [];
    if (localStorage.getItem(key)) {
     lista = (JSON.parse(localStorage.getItem(key)));
    }
    lista.forEach(element => {
        additem(element);
    });
    document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('loading')) {
    button.classList.add('loading');
    setTimeout(() => button.classList.remove('loading'), 3700);
    }
    e.preventDefault();
    }));

      const getData = () => {
        let promesa =  fetch("http://127.0.0.1:5505/../js/data.json",{
              method:"GET"
          });
          promesa.then((response)=>{
              response.json().then((data)=>{
                  data.forEach(e => {
                    lista.push(e);
                    additem(e);
              })
              }).catch((error)=>{
                  console.error("Error al recopilar datos "+error);
              })
          }).catch((error)=>{
              console.error("error en la solicitud "+error);
          });
      }
      getData();
      function additem(e) {

        var carta = document.createElement("div")
        carta.classList.add("col-md-3")
        carta.classList.add(e.category);
        carta.id = `SKU${e.id}`;
        productodiv.append(carta);
        var carta1 = document.createElement("div")
        carta1.classList.add("card");
        carta.append(carta1);
        carta1.innerHTML += 
        `       <div class="image-container">
                    <div class="first">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="discount">-${e.descuento}</span>
                            <span class="wishlist"><i class="fa fa-heart-o"></i></span>
                        </div>
                    </div>
                    <img src="${e.image}" class="img-fluid rounded thumbnail-image imgtest" id="foto">
                </div>
         `  
         ;
         var carta2 = document.createElement("div")
         carta2.classList.add("product-detail-container");
         carta2.classList.add("p-2")
         carta1.append(carta2)
         carta2.innerHTML += `
                    <div class="d-flex justify-content-between align-items-center"
                        <h5 class="dress-name">${e.title}</h5>
                        <div class="d-flex flex-column mb-2">
                            <span class="new-price">${e.price}</span>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center pt-1">
                        <div class="color-select d-flex ">
                            <h5 class="dress-name">${e.category}</h5>
                        </div> 
                    </div>
         `;
         var carta3 = document.createElement("div")
         carta3.classList.add("d-flex");
         carta3.classList.add("justify-content-between");
         carta3.classList.add("align-items-center");
         carta3.classList.add("pt-1");
         carta2.append(carta3);
        carta3.innerHTML = `         <div>
        <i class="fa fa-star-o rating-star"></i>
        <span class="rating-number">${e.rating.rate}</span>
        </div>`
        var botonCarrito = document.createElement("button")
        botonCarrito.id = "boton-borrar"
        botonCarrito.classList.add('button')
        botonCarrito.innerHTML = `<span>Add to cart</span>`;
        carta3.append(botonCarrito)
        botonCarrito.onclick = function() {
            addToCart(e.id)
        }
      }
      let checked1 = (document.getElementById("customCheck1")) ;
      let checked2 = (document.getElementById("customCheck2")) ;
      let checked3 = (document.getElementById("customCheck3")) ;
      let checked4 = (document.getElementById("customCheck4")) ;
      checked1.addEventListener("click",filtro);
      checked2.addEventListener("click",filtro);
      checked3.addEventListener("click",filtro);
      checked4.addEventListener("click",filtro);

      function filtro(e){
          let elementos =  Array.from(document.getElementsByClassName(e.target.value));
          elementos.forEach(element => {
              if (e.target.checked) {
                  console.log("checked");
                  element.style.display = "block";
                  
              }else{
                  console.log("unchecked");
                  element.style.display = "none";
              } 
          });

      } 

    btn = document.getElementById("search");     

    btn.addEventListener("click",function(e) {
        e.preventDefault();
        lista.forEach(element => {
           if(JSON.stringify(element).toLowerCase().includes(document.getElementById("searchtxt").value.toLowerCase())){
                console.log(`${element.title} incluye el texto ${document.getElementById("searchtxt").value}`);
                document.getElementById("SKU"+element.id).style.display = "block";
           }else{
            document.getElementById("SKU"+element.id).style.display = "none";
        }});
    })

    function addToCart(id) {
        if(localStorage.getItem('login')){
            if(carrito.includes(id)){
                console.log('elemento ya esta en la lista');
            }else{
                carrito.push(id)
            }
            localStorage.setItem(localStorage.getItem('login'),carrito);
        }
        else{
            window.location.href = "loginRegistro.html";
        }
    }  