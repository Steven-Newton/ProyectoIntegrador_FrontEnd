
const getData = () => {
    let promesa =  fetch("http://127.0.0.1:5504/data.json",{
          method:"GET"
      });
      promesa.then((response)=>{
          response.json().then((data)=>{
              console.log(data);
              data.forEach(e => {
                  console.log(e.price);
              document.getElementById("productos").innerHTML += 
      `<div class=" card col-md-3 ${getClassCategory(e.category)} " ; background-color:#eeeeee;">
          <div class="border card-body align-items-center ">
                  <h5 class="card-title">${e.title.slice(0,20)}</h5>
                  <h6 class="card-subtitle mb-2 "${e.price}</h6>
                  <img src="${e.image}" class="" alt="...">
                  <p class="card-text">${e.description.slice(0,100)}...</p>
                  <!-- Button trigger modal -->
                      <button type="button" class="btn " data-toggle="modal" data-target="#modal_${e.id}">
                              read more
                             </button>
                  <!-- Modal -->
                  <div class="modal fade" id="modal_${e.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                   <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLabel">               ${e.title}
                           </h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                      <div class="modal-body">
                      ${e.category}
                      <br>
                      ${e.description}
                  </div>
                      <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
           </div>
                  <li class="list-group-item"><strong>${e.price}</strong>$</li>

      </div>
  </div>`;
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
    
  