const signInBtn = document.getElementById("signIn");
const signInB = document.getElementById("realSignIn");
const signUpBtn = document.getElementById("realSignUp");
const signUpB = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

let campoNombre = document.getElementById("nombre");
let campoTel = document.getElementById("tel");
let campoEmail = document.getElementById("email");
let campoContraseña = document.getElementById("pass");
let validaContraseña = document.getElementById("pass2"); //variables

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});  //desliza a la derecha al formulario "Regístrate"

signUpB.addEventListener("click", () => {
	container.classList.add("right-panel-active");
}); //desliza a la izquierda al formulario "Accede"

signUpBtn.addEventListener("click", function(e) {
	e.preventDefault();
	//let check = true;  
	console.log(campoNombre.value);
	
 	if (
		campoNombre.value.length >= 3 &&
		campoNombre.value.length <= 35 &&
		isNaN(campoNombre.value)
	  ) {
		document.getElementById("nombre").style.borderColor = "#00FF00";
		campoNombre.value.toUpperCase();
		campoNombre.classList.remove("is-invalid");
		campoNombre.classList.add("is-valid");
	  } else {
		document.getElementById("nombre").style.borderColor = "#FF0000";
		campoNombre.value.toUpperCase();
		campoNombre.classList.remove("is-valid");
		campoNombre.classList.add("is-invalid");  
		
		Swal.fire({
			icon: 'info',
			title: 'Por favor ingrese un nombre válido',
			width: 400,
			padding: '1.5em',
			color: '#102030',
			
			background: 'rgba(255,255,255,0.4)',
			backdrop: `
			  rgba(0,0,0,0.2)
			  url("https://sweetalert2.github.io/images/nyan-cat.gif")
			  1cm no-repeat`});
	  } //validación nombre


  if (campoTel.value.length == 10 && !isNaN(campoTel.value)&& campoTel.value>1000000000) {
	document.getElementById("tel").style.borderColor = "#00FF00";
    campoTel.classList.remove("is-invalid");
    campoTel.classList.add("is-valid");
  } else {
	document.getElementById("tel").style.borderColor = "#FF0000";
	  campoTel.classList.remove("is-valid");
      campoTel.classList.add("is-invalid");

	Swal.fire({
        icon: 'error',
        title: 'Ingrese número válido',
        width: 600,
        padding: '3em',
        color: 'rgba(10,20,30,1)',
        background: 'rgba(0,0,0,0.2)',
        backdrop: `
          rgba(83,56,67,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          right
          no-repeat`})
    } 	  //validación teléfono

	if (ValidateEmail(campoEmail.value)) {
		document.getElementById("email").style.borderColor = "#00FF00";
		campoEmail.classList.remove("is-invalid");
		campoEmail.classList.add("is-valid");
	  } else {
		document.getElementById("email").style.borderColor = "#FF0000";
		campoEmail.classList.remove("is-valid");
        campoEmail.classList.add("is-invalid");

	Swal.fire({
        icon: 'error',
        title: 'Ingrese email válido',
        width: 600,
        padding: '3em',
        color: 'rgba(10,20,30,1)',
        background: 'rgba(0,0,0,0.2)',
        backdrop: `
          rgba(83,56,67,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left
          no-repeat`})
	  }		//validación email 



    if(ValidateContraseña(campoContraseña.value)){
        document.getElementById("pass").style.borderColor = "#00FF00";
        campoContraseña.classList.remove("is-invalid");
        campoContraseña.classList.add("is-valid");
    }else{
        document.getElementById("pass").style.borderColor = "#FF0000";
        campoContraseña.classList.remove("is-valid");
        campoContraseña.classList.add("is-invalid");
        
    }//else 1er if
        
    if(ValidateContraseña(validaContraseña.value)){
        document.getElementById("pass2").style.borderColor = "#00FF00";
        validaContraseña.classList.remove("is-invalid");
        validaContraseña.classList.add("is-valid");
    } else {
        document.getElementById("pass2").style.borderColor = "#FF0000";
        validaContraseña.classList.remove("is-valid");
        validaContraseña.classList.add("is-invalid");
        }
    
        if(SameContraseña(campoContraseña.value, validaContraseña.value)
        /* && ValidateContraseña(campoContraseña.value) 
        && ValidateContraseña(validaContraseña.value) */){

        Swal.fire({
        icon: 'success',
        title: 'Contraseña Valida',
        width: 600,
        padding: '3em',
        color: 'rgba(00,20,10,0.2)',
        background: 'rgba(0,0,0,0.2)',
        backdrop: `
        rgba(83,56,67,0.4)
        url("https://i.pinimg.com/originals/64/a9/c6/64a9c6610e3a6748b65eb372ecfb703c.gif")
        left
        no-repeat`})

    } else {

        document.getElementById("pass").style.borderColor = "#FF8000";
        campoContraseña.classList.remove("is-valid");
        campoContraseña.classList.add("is-invalid");
        document.getElementById("pass2").style.borderColor = "#FF8000";
        validaContraseña.classList.remove("is-valid");
        validaContraseña.classList.add("is-invalid"); 

        Swal.fire({
        icon: 'error',
        title: 'Los campos no coinciden',
        width: 600,
        padding: '3em',
        color: 'rgba(10,20,30,1)',
        background: 'rgba(0,0,0,0.2)',
        backdrop: `
        rgba(83,56,67,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        right
        no-repeat`})
        }
}); //botón SignUp


  signInB.addEventListener("click", function(e)  {
	e.preventDefault();

	if (ValidateEmail(campoEmail.value)) {
		document.getElementById("email").style.borderColor = "#00FF00";
		campoEmail.classList.remove("is-invalid");
		campoEmail.classList.add("is-valid");
	  } else {
		document.getElementById("email").style.borderColor = "#FF0000";
		campoEmail.classList.remove("is-valid");
        campoEmail.classList.add("is-invalid");
	Swal.fire({
        icon: 'error',
        title: 'Ingrese email válido',
        width: 600,
        padding: '3em',
        color: 'rgba(10,20,30,1)',
        background: 'rgba(0,0,0,0.2)',
        backdrop: `
          rgba(83,56,67,0.4)
          url("https://i.pinimg.com/originals/64/a9/c6/64a9c6610e3a6748b65eb372ecfb703c.gif")
          center
          repeat`})
	  }		//validación email 

});  //botón Sign In


//FUNCIONES

function ValidateEmail(input) {
	let valid =
	  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
	if (input.match(valid)) {
	  return true;
	} else {
	  return false;
	}
  } // validar Email

  function ValidateContraseña(input) {
    let valid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/; 
    
    if (input.match(valid)) {
      return true;
    } else {
      return false;
    }
    }// Valida contraseña

    function SameContraseña(input1, input2) {
        let valid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/; 
        if (input1===input2 && input1.match(valid) && input2.match(valid)) {
          return true;
        } else {
          return false;
        }// SameContraseña
  
  
fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

	}
