const pizzas = [
  {
    nombre: "Pizza de Muzzarella",
    id: 1,
    ingredientes: [" Sus ingredientes son", "muzzarella","oregano","aceitunas"],
    precio: 750
},
{
  nombre: "Pizza de Cebolla",
  id:2,
  ingredientes: [ " Sus ingredientes son", "muzzarella", "cebolla"],
  precio:800
},
{
  nombre: "Pizza de 4 quesos",
  id:3,
  ingredientes: [ " Sus ingredientes son","queso Fontina", "queso Muzzarella", "queso Azul", "queso Parmesano"],
  precio:1100
},
{
  nombre:"Pizza  de Anchoas",
  id:4,
  ingredientes: [ " Sus ingredientes son","Muzzarella", "tomate", "morron", "anchoas"],
  precio:1150
},
{
  nombre: "Pizza de Panceta",
  id:5,
  ingredientes: ["Sus ingredientes son:","queso", "panceta", "tomate"],
  precio: 1320
},
{
  nombre: "Pizza Bomba",
  id: 6,
  ingredientes: ["Sus ingredientes son:", "Muzzarella","Cebolla","Jamon","Morron","Panceta","Palmito","Anchoas", "Aceitunas"],
  precio: 2000
}]
const pizzasContainer = document.getElementById("pizzas-container")
 const inputNumber = document.getElementById("idPizza")
 
 const error = (input, mensaje) => {
 const inputError = input.parentElement;
 const errorMensaje = inputError.querySelector("small")
 errorMensaje.textContent = mensaje;
 }
 
 const getPizzaHtml = (e) => {
  e.preventDefault()
  if (inputNumber.value === pizzas.id) {
    return `<h2>${pizzas.nombre}</h2>
            <h3>${pizzas.precio}</h3>`
  } else{
    error(inputNumber, "el id de su pizza no es valido")
  }
 } 

 const pizzasHtml = pizzas.map((pizzas)=>getPizzaHtml(pizzas)).join("")

 pizzasContainer.innerHTML = pizzasHtml

 pizzasContainer.addEventListener("submit", getPizzaHtml)


 //Hola Profe llo intente pero no me sale disculpen gracias