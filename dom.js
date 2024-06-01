window.onload = function () {
  // Selecciono el ul  y almacenarla en una constante:
  const ingredientes = document.getElementById("ingredientes");

  for (let i = 0; i <= 2; i++) {
    // Crear un elemento li
    const Li = document.createElement("li");
    // Inserto el texto
    Li.innerText = prompt("Ingrese un texto");
    Li.value = ingredientes.value;
    ingredientes.appendChild(Li);
  }
};
