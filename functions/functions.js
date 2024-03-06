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
const cuentaRegresiva = (numero) => {
  if (numero === 0) {
    return;
  }
  console.log(numero);
  numero = numero - 1;
  return cuentaRegresiva(numero);
};

module.exports = {
  invertirLetras,
  cuentaRegresiva,
};
