// Función para calcular el factorial de un número utilizando un bucle "for"
function factorialFor(numero) {
  let resultado = 1;

  // Verificar si el número es 0 o 1, en ese caso el factorial es 1
  if (numero == 1 || numero == 0) {
    return resultado; 
  } else {
    // Realizar el cálculo del factorial utilizando un bucle "for"
    for (let i = 2; i <= numero; i++) {
      resultado = resultado * i; // Multiplica el resultado por cada número en el rango (2 hasta el número dado)
    }
  }

  return resultado; // Retorna el resultado del factorial
}

// Función para calcular el factorial de un número de forma recursiva
function factorialRecursion(numero) {
  if (numero == 0 || numero == 1) {
    return 1; // Retorna 1 si el número es 0 o 1
  } else {
    // Realizar el cálculo del factorial de forma recursiva
    return numero * factorialRecursion(numero - 1); // Llama a la función nuevamente con un número decrementado y multiplica el resultado por el número original
  }
}

// Función para mostrar el menú y procesar las opciones
function mostrarMenu() {
  var option = prompt(
    "Selecciona una opción:\n" +
    "1. Calcular factorial con FOR\n" +
    "2. Calcular factorial con Recursión"
  );

  switch (option) {
    case "1":
      var numero = prompt("Introduce un número");
      var res = factorialFor(numero); // Llama a la función factorialFor() para calcular el factorial utilizando un bucle "for"
      alert("El factorial es: " + res); // Muestra el resultado del factorial en una ventana emergente
      mostrarMenu(); 
      break;
    case "2":
      var numero = prompt("Introduce un número");
      var res = factorialRecursion(numero); // Llama a la función factorialRecursion() para calcular el factorial de forma recursiva
      alert("El factorial es: " + res); // Muestra el resultado del factorial en una ventana emergente
      mostrarMenu(); 
      break;
    default:
      alert("Opción inválida"); // Muestra un mensaje de alerta si se selecciona una opción inválida
      break;
  }
}

// Llamamos a la función mostrarMenu para comenzar el programa
mostrarMenu();