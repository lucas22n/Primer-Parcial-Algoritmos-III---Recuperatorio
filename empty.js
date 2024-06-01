window.onload = function () {
  //Creo el elemento h3
  const h3 = document.createElement("h3");
  h3.innerText = "Recuperatorio - Ejercicio 3";
  document.body.appendChild(h3);

  //Creo el elemento h3
  const button = document.createElement("button");
  button.innerText = "Click me";
  document.body.appendChild(button);

  button.onclick = function () {
    alert("Botón cliqueado!");
  };
};
