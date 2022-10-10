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

key = "user";
let lista = [];
if (localStorage.getItem(key)) {
    lista = (JSON.parse(localStorage.getItem(key)));
    lista.forEach(e => {
    });
}

signUpBtn.addEventListener("click", function (e) {
    e.preventDefault();
<<<<<<< HEAD

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
        let ContenidoTabla =
        {"id":id.value,"title":title.value,"price":(price.value),
        "description":Description.value,"category":category.value,
        "image":urlk.value,"rating":{"rate": 4.5,
        "count":Math.floor(Math.random*1000) },"descuento":descuento.value+"%"}
        lista.push(ContenidoTabla);
        localStorage.setItem(key,JSON.stringify(lista));
    }   

})


const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');

const cargarImagen = (entradas, observador) => {
   // console.log('Ejecuta!');         //calcula cuando la imagen esta dentro de viewport
  // console.log(entradas);
  // console.log(observador);
  entradas.forEach((entrada) =>{
    if(entrada.isIntersecting){
      entrada.target.classList.add('visible');
    //console,console.log('La imagen esta en el viewport');    //aqui la imagen esta adentro 
    }
  });
};

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '350px 0px 0px 0px',
    threshold: 0.5
});

observador.observe(imagen1);
observador.observe(imagen2);
=======
    user = new usuario(Name.value,Email.value,Password.value,Phone.value,lista.length);
    console.log(user);
    lista.push(user)
   localStorage.setItem(key,JSON.stringify(lista));
})
class usuario {
        name = "";
        email = "";
        password = "";
        phoneNumber = "";
        id = 0;
    constructor (name,email,password,phoneNumber,id)
    {
         this.name = name
         this.email = email
         this.password = password
         this.phoneNumber = phoneNumber
         this.id = id;
    }//constructor
}
>>>>>>> d7d333898b9deddba770e587accd8af5992625a6
