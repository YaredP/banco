const operations = document.getElementById("operations");
/*caja1.style.display = "block";*/
/*const caja1 = document.getElementById("caja1");
caja1.style.display = "none";*/
/*const operations = document.getElementById("operations");
operations.style.display = "block";*/
/*const caja1 = document.querySelector(".caja1");*/
const consultar = document.getElementById("consultar");
const depositar = document.getElementById("depositar");
const retira = document.getElementById("retirar");
const cerrar = document.getElementById("cerrar-sesión");
const saldo = document.getElementById("saldo");
const cantidad = document.getElementById("cantidad");
let usuario = null;

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
const validacion = function (event){
event.preventDefault();
/*document.caja1.style.display = "none";
document.operations.style.display = "block"; */
  if (
    username.value === cuentas[0].nombre &&
    password.value === cuentas[0].password
  ) {
    usuario = cuentas[0];
    advertencia.style.color = "green";
    advertencia.textContent = "Correcto";
    caja1.style.display = "none";
    operations.style.display = "block";
    saludo.textContent = `Hola ${username.value}`;
    saldo.textContent = cuentas[0].saldo;
  } else if (
    username.value === cuentas[1].nombre &&
    password.value === cuentas[1].password
  ) {
    usuario = cuentas[1];
    advertencia.style.color = "green";
    advertencia.textContent = "Correcto";
    caja1.style.display = "none";
    operations.style.display = "block";
    saludo.textContent = `Hola ${username.value}`;
    saldo.textContent = cuentas[1].saldo;
  } else if (
    username.value === cuentas[2].nombre &&
    password.value === cuentas[2].password
  ) {
    usuario = cuentas[2];
    advertencia.style.color = "green";
    advertencia.textContent = "Correcto";
    caja1.style.display = "none";
    operations.style.display = "block";
    saludo.textContent = `Hola ${username.value}`;
    saldo.textContent = cuentas[2].saldo;
  } else {
    advertencia.style.color = "red";
    advertencia.textContent = "Intenta de nuevo";
  }
};

// vamos a probar ...

/*iniciar.addEventListener("click",(e) => {
  console.log("Si escuche tu click!")
  document.operations.style.display="block";
  document.caja1.style.display="none";
})*/

function consultarSaldo(event) {
  event.preventDefault();

  saldo.textContent = usuario.saldo;
}

function depositarSaldo(event) {
  event.preventDefault();
  if (usuario.saldo >= 990) {
    advertencia2.style.color = "red";
    advertencia2.textContent = "monto máximo";
  } else {
    const tmp = usuario.saldo + parseInt(cantidad.value);
    if (tmp >= 990) {
      advertencia2.style.color = "red";
      advertencia2.textContent = "monto máximo";
    } else {
      usuario.saldo += parseInt(cantidad.value);
    }
  }
}

function retirarSaldo(event) {
  event.preventDefault();
  if (usuario.saldo <= 10) {
    advertencia2.style.color = "red";
    advertencia2.textContent = "monto mínimo";
  } else {
    const tmp = usuario.saldo - parseInt(cantidad.value);
    if (tmp <= 10) {
      advertencia2.style.color = "red";
      advertencia2.textContent = "monto mínimo";
    } else {
      usuario.saldo -= parseInt(cantidad.value);
    }
  }
}
function cerrarSesion(event) {
  console.log("si entro peeeero no quiero funcionar :(")
  event.preventDefault();
  operations.style.display="none";
  caja1.style.display="block";
  
}

button.addEventListener("click", validacion);
consultar.addEventListener("click", consultarSaldo);
depositar.addEventListener("click", depositarSaldo);
retirar.addEventListener("click", retirarSaldo);
cerrarsesion.addEventListener("click", cerrarSesion);

/*operations.style.display = "block";
caja1.style.display = "none";*/

console.log(username);
console.log(password);
console.log(button);
