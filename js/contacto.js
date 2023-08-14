
const piepag = document.getElementById("telefono")
piepag.innerText = "02324-1111111"

const enviar = document.getElementById("enviar")
enviar.addEventListener("click", alert("Página de Contacto"))

// const texto ="Hola. Estás en la sección de Contacto."
// const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
// hablar(texto)

// Función para crear un objeto JSON con los datos del formulario
function crearContacto() {
  // Obtener los elementos del formulario
  let nombre = document.getElementById("nombre");
  let edad = document.getElementById("edad");
  let celular = docuemnt.getElementById("celular");
  let email = document.getElementById("email")

  // Crear un objeto JSON con los valores de los elementos
  let json = {
    nombre: nombre.value,
    edad: edad.value,
    celular: celular.value,
    email: email.value,
  };
  // Convertir el objeto JSON a una cadena
  let jsonStr = JSON.stringify(json);
  // Mostrar la cadena JSON en un elemento p
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = jsonStr;
}
  // Obtener el elemento botón
  let boton = document.getElementById("boton");
  // Añadir un evento listener al botón para llamar a la función crearJSON
  boton.addEventListener("click", crearContacto);