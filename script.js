//Validaciones en inicio de sesion
var f=document.getElementById('formRegis');
if(f!==null){
    f.addEventListener('submit', function(event){
        var inputEmail = document.getElementById("email").value;
        var inputContra = document.getElementById("password").value;
    
        if(inputEmail=="" || inputContra==""){
            alert("Complete los campos vacios")
        }else{
           alert("Bienvenido");
        }});
    }

//Seccion Tendencias usando API

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const contenedor = document.getElementById("contenedor");

let pagina = 1;

btnAnterior.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
});

btnSiguiente.addEventListener("click", ()=>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async()=>{

   try{

    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=191528030c357419329af1198edbcb24&language=es-MX&page=${pagina}`)
    console.log(respuesta);

    if(respuesta.status === 200){

        const datos = await respuesta.json();
        console.log(datos);

        let peliculas = [];

        datos.results.forEach(pelicula => {
            peliculas += `
            <div class="item">
            <a href="Detalles.html"> <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></a>
            </div>
            `;            
        });

        contenedor.innerHTML = peliculas;

    }

   }
   
   catch(error){
    console.log(error.message);

   }

}

cargarPeliculas();