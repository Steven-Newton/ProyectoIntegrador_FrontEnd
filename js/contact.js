let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let campoNombre = document.getElementById("nombre");
  let campoEmail = document.getElementById("email");
  let campoTel = document.getElementById("tel");
  let campoMensaje = document.getElementById("mensaje");
  let check = true;

  if (
    campoNombre.value.length >= 3 &&
    campoNombre.value.length <= 35 &&
    isNaN(campoNombre.value)
  ) {
    //validación nombre
    campoNombre.value.toUpperCase();
    campoNombre.classList.remove("is-invalid");
    campoNombre.classList.add("is-valid");
  } else {
    campoNombre.classList.remove("is-valid");
    campoNombre.classList.add("is-invalid");
    check = false;
  }

  //validación email

  if (ValidateEmail(campoEmail.value)) {
    campoEmail.classList.remove("is-invalid");
    campoEmail.classList.add("is-valid");
  } else {
    campoEmail.classList.remove("is-valid");
    campoEmail.classList.add("is-invalid");
    check = false;

  }

  //validación teléfono
  if (campoTel.value.length == 10 && !isNaN(campoTel.value)&& campoTel.value>1000000000) {
    campoTel.classList.remove("is-invalid");
    campoTel.classList.add("is-valid");
  } else {
    campoTel.classList.remove("is-valid");
    campoTel.classList.add("is-invalid");
    check = false;

    }
    

    if (campoMensaje.value.length >= 10 &&
      campoMensaje.value.length <= 250
      && campoMensaje.value.replace(/ /g, "").length>10) {
      campoMensaje.classList.remove("is-invalid");
      campoMensaje.classList.add("is-valid");
    } else {
      campoMensaje.classList.remove("is-valid");
      campoMensaje.classList.add("is-invalid");
      check = false;
  
      }
   
  if(check){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "elorgullodelmono@gmail.com",
      Password : "B741E7D48F8DA0F5E26F55EEA9C05EB63E2F",
      To : 'elorgullodelmono@gmail.com',
      From : 'elorgullodelmono@gmail.com',
      Subject : "Contacto",
      Body : `${campoNombre.value}(${campoEmail.value}): ${520000000000+campoTel.value} dice:  ${campoMensaje.value} `
  }).then(
    message => alert(message)
  ); 
  }

});

//Función para validar e-mail
function ValidateEmail(input) {
  let valid =
    /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;

  if (input.match(valid)) {
    return true;
  } else {
    return false;
  }
}
