const piepag = document.getElementById("telefono")
piepag.innerText = "02324-1111111"



// let texto ="Hola. Estás en la sección de Productos."
// const hablar = (texto)=> speechSynthesis.speak(new SpeechSynthesisUtterance(texto))

// hablar(texto)


let parrafo = document.getElementsByClassName("CentrarDiseñador")
parrafo.innerHTML= 
console.log(parrafo.innerhtml)

function crearProd() {
  // Obtener los elementos del formulario
  let CodProducto = document.getElementById("CodProducto");
  let DescripProd = document.getElementById("DescProd");
  let CapacidadProd = document.getElementById("Capacidad");
  let PrecioProd = document.getElementById("Precio");
  // Crear un objeto JSON con los valores de los elementos
  let json = {
    CodProducto: CodProducto.value,
    DescripProd: DescripProd.value,
    CapacidadProd: CapacidadProd.value,
    PrecioProd: PrecioProd.value,
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
  boton.addEventListener("click", crearProd);

    console.log('Producto creado:', json.CodProducto,json.DescripProd,json.CapacidadProd,json.PrecioProd);
    console.log("Precio IVA incluido: "+ "$ " + (parseFloat(producto.precioIva) + parseFloat(producto.precio)))

// Mostrar la lista de productos
console.table('Lista de productos:', productos);

console.dir(document)
