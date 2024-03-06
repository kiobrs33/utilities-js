// Funcion Recursiva
const invertirLetras = (palabra = "", acc = "") => {
  let cont = palabra.length - 1;
  let letra = palabra[cont];
  acc = acc + letra;

  if (cont === 0) {
    console.log(acc);
    return;
  }
  palabra = palabra.substring(0, cont);
  return invertirLetras(palabra, acc);
};

// Funcion Recursiva
const cuentaRegresiva = (numero = 0) => {
  if (numero === 0) {
    return;
  }
  console.log(numero);
  numero = numero - 1;
  return cuentaRegresiva(numero);
};

// Funcion Recuriva
const repeticionesDeUnaLetra = (palabra = "", letra = "", acc = 0) => {
  palabra = palabra.toUpperCase();
  letra = letra.toUpperCase();
  let cont = palabra.length - 1;

  if (palabra[cont] == letra) {
    acc = acc + 1;
  }

  if (cont === 0) {
    console.log(acc);
    return;
  }
  palabra = palabra.substring(0, cont);
  return repeticionesDeUnaLetra(palabra, letra, acc);
};

module.exports = {
  invertirLetras,
  cuentaRegresiva,
  repeticionesDeUnaLetra,
};
