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
const passwordV = document.getElementById("passwordIngresar");
const emailV = document.getElementById("mailIngresar");
const registratecss = document.getElementById("registratecss");
const signincss = document.getElementById("signincss");

signincss.addEventListener("click", () => {
	containerc.classList.add("right-panel-active");
});

registratecss.addEventListener("click", () => {
    containerc.classList.remove("right-panel-active");
  });

const mapaUsuario = new Map();
key = "user";
let lista = [];
if (localStorage.getItem(key)) {
    lista = (JSON.parse(localStorage.getItem(key)));
        lista.forEach(e => {
        mapaUsuario.set(e.email,e);
        }); 
}

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
 
/*boton login*/
signInB.addEventListener("click",function(e) {
    e.preventDefault();
    if (mapaUsuario.has(emailV.value)&&(mapaUsuario.get(emailV.value).password==passwordV.value)) {
        localStorage.setItem('login',emailV.value);
        window.location.href = "index.html";

    }else{
        Alerta("error","Contraseña o Usuario Incorrecto")
    }
});

/*boton registro de usuario*/
signUpBtn.addEventListener("click", function(e){
	e.preventDefault();
    ValidateAll(Name.value,Email.value,Phone.value,Password.value,RepeatPassword.value);
});

/* funcion validacion para registro de usuario */
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
                        user = new usuario(Name.value,Email.value,Password.value,Phone.value,lista.length);
                        console.log(user);
                        lista.push(user)
                        mapaUsuario.set(user.email,user.password);
                         localStorage.setItem(key,JSON.stringify(lista));
                         Name.value="",Phone.value="",Email.value="",RepeatPassword.value="",Password.value="";

                    }else{
                        AddInvalid(Password);
                        AddInvalid(RepeatPassword);
                        Alerta("error","Contraseña incorrecta.");
                    }
                }else{
                    AddInvalid(Email);
                    Alerta("error","Email inválido o ya registrado");
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
	if (email.match(valid)&&!mapaUsuario.has(email)) {
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


class usuario {
        name = "";
        email = "";
        password = "";
        phoneNumber = "";
/*         id = 0;
 */    constructor (name,email,password,phoneNumber,id)
    {
         this.name = name
         this.email = email
         this.password = password
         this.phoneNumber = phoneNumber
/*          this.id = id;
 */    }//constructor
}