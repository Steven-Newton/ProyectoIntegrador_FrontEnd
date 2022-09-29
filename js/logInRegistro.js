const signInBtn = document.getElementById("signIn");
const signInB = document.getElementById("realSignIn");
const signUpBtn = document.getElementById("realSignUp");
const Password = document.getElementById("pass");
const RepeatPassword = document.getElementById("pass2");
const Name = document.getElementById("nombre");
const Phone = document.getElementById("tel");
const Email = document.getElementById("email");
const signUpB = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const containerc = document.querySelector(".containerc");
Name.value="",Phone.value="",email.value="",RepeatPassword.value="",Password.value="";


let campoNombre = document.getElementById("nombre");
let campoTel = document.getElementById("tel");
let campoEmail = document.getElementById("email");
let campoContraseña = document.getElementById("pass");
let validaContraseña = document.getElementById("pass2"); 

signInBtn.addEventListener("click", () => {
  containerc.classList.remove("right-panel-active");
});  //desliza    

signInBtn.addEventListener("click", () => {
	containerc.classList.remove("right-panel-active");
});  //desliza a la derecha al formulario "Regístrate"

signUpB.addEventListener("click", () => {
	containerc.classList.add("right-panel-active");
}); //desliza a la izquierda al formulario "Accede"

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

signUpBtn.addEventListener("click", function(e){
	e.preventDefault();
    ValidateAll(Name.value,Email.value,Phone.value,Password.value,RepeatPassword.value);
});
function ValidateAll(name,email,tel,password,repeatPassword){
    if(name=="" && email=="" && tel=="" && password=="" && repeatPassword==""){
        Alerta("error","Debes llenar todos los campos.")
    }else{
        if(ValidateName(name)){
            AddValid(Name);
            if(ValidateTel(tel)){
                AddValid(Phone);
                if(ValidateEmail(email)){
                    AddValid(Email);
                    if(ValidatePassword(password,repeatPassword)){
                        AddValid(Password);
                        AddValid(RepeatPassword);
                        Alerta("success","Registro exitoso.","rgba(00,20,10,0.2)");
                    }else{
                        AddInvalid(Password);
                        AddInvalid(RepeatPassword);
                        Alerta("error","Contraseña incorrecta.");
                    }
                }else{
                    AddInvalid(Email);
                    Alerta("error","Email inválido.");
                }
            }else{
                AddInvalid(Phone);
                Alerta("error","Teléfono inválido.");
            }
        }else{
            AddInvalid(Name);
            Alerta("error", "Nombre Inválido.");
        }
    }

}

function ValidatePassword(pass1,pass2){
    if(pass1===pass2 && pass1.length>=5){
        return true;
    }else{
        return false;
    }
}

function ValidateEmail(email) {
	let valid =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	if (email.match(valid)) {
	  return true;
	} else {
	  return false;
	}
}

function ValidateTel(tel){
    if (tel.length == 10 && !isNaN(tel)&& tel>1000000000){
        return true;
    }else{
        return false;
    }
}

function ValidateName(name){
    if(typeof name === 'string' && name.length>=3 && name.length<=35){
        return true;
    }else{
        return false;
    }
}

function Alerta(estado,mensaje, color="rgba(10,20,30,1)"){
    Swal.fire({
        icon: estado,
        title: mensaje,
        width: 600,
        padding: '3em',
        color: color,
        background: 'rgba(0,0,0,0.2)'})
}

function AddInvalid(campo){
    campo.classList.remove("is-valid");
	campo.classList.add("is-invalid"); 
}
function AddValid(campo){
    campo.classList.remove("is-invalid");
    campo.classList.add("is-valid");
}
