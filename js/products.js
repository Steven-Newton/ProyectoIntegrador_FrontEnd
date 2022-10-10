
    key = "data";
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
        document.getElementById("productos").innerHTML += 
        `  
        <div class="col-md-3 ${e.category}" id="SKU${e.id}">
            <div class="card">
                <div class="image-container">
                    <div class="first">
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="discount">-${e.descuento}</span>
                            <span class="wishlist"><i class="fa fa-heart-o"></i></span>
                        </div>
                    </div>
                    <img src="${e.image}" class="img-fluid rounded thumbnail-image imgtest" id="foto">
                </div>
                <div class="product-detail-container p-2">
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
                    <div class="d-flex justify-content-between align-items-center pt-1">
                        <div>
                            <i class="fa fa-star-o rating-star"></i>
                            <span class="rating-number">${e.rating.rate}</span>
                        </div>
                        <button class="button" >
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
  `  
    ;
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

    $(document).ready(function () {
        $("#itemslider").carousel({ interval: 3000 });
      
        $(".carousel-showmanymoveone .item").each(function () {
          var itemToClone = $(this);
      
          for (var i = 1; i < 6; i++) {
            itemToClone = itemToClone.next();
      
            if (!itemToClone.length) {
              itemToClone = $(this).siblings(":first");
            }
      
            itemToClone
              .children(":first-child")
              .clone()
              .addClass("cloneditem-" + i)
              .appendTo($(this));
          }
        });
      });
      