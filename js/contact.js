let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  let campoNombre = document.getElementById("nombre");
  let campoEmail = document.getElementById("email");
  let campoTel = document.getElementById("tel");
  let campoMensaje = document.getElementById("mensaje");

  console.log(campoNombre.value, campoEmail.value);
  console.log(typeof campoNombre.value, typeof campoEmail.value);
  console.log(campoNombre.value.length, campoEmail.value.length);

  if (
    campoNombre.value.length >= 3 &&
    campoNombre.value.length <= 15 &&
    isNaN(campoNombre.value)
  ) {
    //validación nombre
    campoNombre.classList.remove("is-invalid");
    campoNombre.classList.add("is-valid");
  } else {
    campoNombre.classList.remove("is-valid");
    campoNombre.classList.add("is-invalid");
  }

  //validación email

  if (ValidateEmail(campoEmail.value)) {
    campoEmail.classList.remove("is-invalid");
    campoEmail.classList.add("is-valid");
  } else {
    campoEmail.classList.remove("is-valid");
    campoEmail.classList.add("is-invalid");
  }

  //validación teléfono
  if (campoTel.value.length == 10 && !isNaN(campoTel.value)) {
    campoTel.classList.remove("is-invalid");
    campoTel.classList.add("is-valid");
  } else {
    campoTel.classList.remove("is-valid");
    campoTel.classList.add("is-invalid");
  }
});

//Función para validar e-mail
function ValidateEmail(input) {
  let valid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(valid)) {
    return true;
  } else {
    return false;
  }
}
