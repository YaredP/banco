/*const operations = document.querySelector(".operations");*/
const operations = document.getElementById("operations");
operations.style.display = "block";
/*const caja1 = document.querySelector(".caja1");*/
/*const caja1 = document.getElementById("caja1");
caja1.style.display = "none";*/
const consultar = document.getElementById("consultar");
const depositar = document.getElementById("depositar");
const retirar = document.getElementById("retirar");
const cerrar = document.getElementById("cerrar-sesión");
const saldo = document.getElementById("saldo")

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

let max = 990;
let min = 10;

const username = document.getElementById("form-select");
const password = document.getElementById("input-password");

const advertencia = document.getElementById("advertencia");
const button = document.getElementById("iniciar");
const saludo = document.getElementById("saludo");
const validacion = function (event) 
{
  event.preventDefault();
  if (
    username.value === cuentas[0].nombre &&
    password.value === cuentas[0].password
    ) {
      advertencia.style.color = "green";
      advertencia.textContent = "Correcto";
      /*caja1.classList.add("ocultar");*/
      /*operations.classList.remove("ocultar");*/
      caja1.style.display = "none";
      operations.style.display = "block";
    saludo.textContent = `Hola ${username.value}`;
    saldo.textContent = cuentas[0].saldo;
  } else if (
    username.value === cuentas[1].nombre &&
    password.value === cuentas[1].password
    ) {
      advertencia.style.color = "green";
      advertencia.textContent = "Correcto";
      /*caja1.style.display = "none";*/
      caja1.style.display = "none";
      operations.style.display = "block";
    saludo.texContent = `Hola ${username.value}`;
    saldo.textContent = cuentas[1].saldo;

  } else if (
    username.value === cuentas[2].nombre &&
    password.value === cuentas[2].password
    ) {
      advertencia.style.color = "green";
      advertencia.textContent = "Correcto";
      /*caja1.style.display = "none";*/
      caja1.style.display = "none";
    operations.style.display = "block";
    saludo.texContent = `Hola ${username.value}`;
    saldo.textContent = cuentas[2].saldo;
  } else {
    advertencia.style.color = "red";
    advertencia.textContent = "Intenta de nuevo";
  }};

button.addEventListener("click", validacion);
button.addEventListener("click", consultar);
button.addEventListener("click", depositar);
button.addEventListener("click", retirar);
button.addEventListener("click", cerrar-sesión);



operations.style.display = "block";


console.log(username);
console.log(password);
console.log(button);
