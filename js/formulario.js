key = "data";
let lista = [];
if (localStorage.getItem(key)) {
 lista = (JSON.parse(localStorage.getItem(key)));
}
id = document.getElementById("sku");
id.value=(lista.length+11)
title = document.getElementById("product");
category = document.getElementById("inputGroupSelect01");
price = document.getElementById("price");
Description = document.getElementById("Description");
urlk = document.getElementById("urlk");
descuento = document.getElementById("Descuento");

btn =  document.getElementById("registrar");
btn.addEventListener("click", function (e) {
    e.preventDefault();

   let check = true;
    if ((isNaN(title.value))&&(title.value.replace(/ /g, "").length>4)){
        title.classList.remove("is-invalid");
        title.classList.add("is-valid");
      } else {
        title.classList.remove("is-valid");
        title.classList.add("is-invalid");
        check = false;
      }
    if ((!isNaN(price.value))&&(price.value>0)) {
        price.classList.remove("is-invalid");
        price.classList.add("is-valid");
      } else {
        price.classList.remove("is-valid");
        price.classList.add("is-invalid");
        check = false;
      }
    if ((!isNaN(descuento.value))&&(descuento.value>=0)) {
        descuento.classList.remove("is-invalid");
        descuento.classList.add("is-valid");
      } else {
        descuento.classList.remove("is-valid");
        descuento.classList.add("is-invalid");
        check = false;
      }
     if(Description.value.replace(/ /g, "").length>10) {
      Description.classList.remove("is-invalid");
      Description.classList.add("is-valid");
    } else {
      Description.classList.remove("is-valid");
      Description.classList.add("is-invalid");
      check = false;
    }
    if(urlk.value.replace(/ /g, "").length>10){      
      urlk.classList.remove("is-invalid");
      urlk.classList.add("is-valid");
  } else {
    urlk.classList.remove("is-valid");
    urlk.classList.add("is-invalid");
    check = false;
  }
    if (check) {
        let ContenidoTabla ={"id":id.value,"title":title.value,"price":(price.value),"description":Description.value,"category":category.value,"image":urlk.value,"rating":{"rate":3+Math.random*2,"count":Math.floor(Math.random*1000) },"descuento":descuento.id+"%"}
        lista.push(ContenidoTabla);
        localStorage.setItem(key,JSON.stringify(lista));
    }   

})