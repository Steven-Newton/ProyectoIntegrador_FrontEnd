
key = "data";
let lista = [];
if (localStorage.getItem(key)) {
 lista = (JSON.parse(localStorage.getItem(key)));
}
btn =  document.getElementById("registrar");

btn.addEventListener("click", function (e) {
    e.preventDefault();
    id = document.getElementById("sku").value;
    title = document.getElementById("product").value;
    category = document.getElementById("inputGroupSelect01").value;
    price = document.getElementById("price").value;
    Description = document.getElementById("Description").value;
    urlk = document.getElementById("urlk").value;

    console.log();
    let ContenidoTabla ={"id":id,"title":title,"price":price,"description":Description,"category":category,"image":urlk,"rating":{"rate":23,"count":23}}
    lista.push(ContenidoTabla);
    localStorage.setItem(key,JSON.stringify(lista));
})