document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if(!button.classList.contains('loading')) {
    button.classList.add('loading');
    setTimeout(() => button.classList.remove('loading'), 3700);
    }
    e.preventDefault();
    }));

      const getData = () => {
        let promesa =  fetch("http://127.0.0.1:5500/ProyectoIntegrador/js/data.json",{
              method:"GET"
          });
          promesa.then((response)=>{
              response.json().then((data)=>{
                  console.log(data);
                  data.forEach(e => {
                      console.log(e.price);
                  document.getElementById("productos").innerHTML += 
          `  
       
          <div class="col-md-3">
              <div class="card">
                  <div class="image-container">
                      <div class="first">
                          <div class="d-flex justify-content-between align-items-center">
                              <span class="discount">-25%</span>
                              <span class="wishlist"><i class="fa fa-heart-o"></i></span>
                          </div>
                      </div>
                      <img src="${e.image}"
                          class="img-fluid rounded thumbnail-image" id="foto">
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
                              <h5 class="dress-name">T-shirts</h5>
                          </div> 
                      </div>
                      <div class="d-flex justify-content-between align-items-center pt-1">
                          <div>
                              <i class="fa fa-star-o rating-star"></i>
                              <span class="rating-number">4.8</span>
                          </div>
                          <button class="button">
                              <span>Add to cart</span>
                              <div class="cart">
                                  <svg viewBox="0 0 36 26">
                                      <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
                                      <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
                                  </svg>
                              </div>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
    `  
      ;
              })
              }).catch((error)=>{
                  console.error("Error al recopilar datos "+error);
              })
          }).catch((error)=>{
              console.error("error en la solicitud "+error);
          });
      }
      /* window.addEventListener("load",function(){
          getData();
      }); */
      getData();
      
      function getClassCategory(cat) {
          let c = "";
          switch (cat) {
              case "men's clothing":
                  c="men"
                  break;
      
              case "women's clothing":
                  c="women"
      
                   break;
      
              case "jewelery":
                  c="jewelery"
                  
                   break;
              case "electronics":
                  c="electronics"
                   break;
          
              default:
                  break;
          }
          return c;
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