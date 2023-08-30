var cuentas = [
  {
    nombre: "Persona1",
    saldo: 200,
    password: "persona1",
  },
  {
    nombre: "Persona2",
    saldo: 290,
    password: "persona2",
  },
  {
    nombre: "Persona3",
    saldo: 67,
    password: "persona3",
  },
];

const username = document.getElementById("form-select");
const password = document.getElementById("input-password");

const advertencia = document.getElementById("advertencia");
const button = document.getElementById("iniciar");
const validacion = function () {
  if (
    username.value === cuentas[0].nombre &&
    password.value === cuentas[0].password
  ) {
    advertencia.style.color = "green";
    advertencia.textContent = "Correcto";
  } else if (
    username.value === cuentas[1].nombre &&
    password.value === cuentas[1].password
  ) {
    advertencia.style.color = "green";
    advertencia.textContent = "Correcto";
  }
  else if (
    username.value === cuentas[2].nombre &&
    password.value === cuentas[2].password
  ) {
    advertencia.style.color = "green";
    advertencia.textContent = "Correcto";
  } else{
    advertencia.style.color = "red";
    advertencia.textContent = "Intenta de nuevo";
  }
};
button.addEventListener("click",validacion);

console.log(username);
console.log(password);
console.log(button);
