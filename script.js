//validaciones en inicio de sesion
var f=document.getElementById('formRegis');

f.addEventListener('submit', function(event){
    var inputEmail = document.getElementById("email").value;
    var inputContra = document.getElementById("password").value;

    if(inputEmail=="" || inputContra==""){
        alert("Complete los campos vacios")
    }else{
       alert("Bienvenido");
}});



