//simulador de presupuestador, en donde se elijan distintpos productos para armar un presupuesto
//y luego enviar dicho presupuesto por mail

//creo un constructor para luego poder agregar más productos

class Producto {
    constructor (id, instrumental, precio, stock, disponibilidad){
        this.id = id
        this.instrumental = instrumental.toLowerCase() ;
        this.precio = parseInt(precio);
        this.stock = parseFloat(stock)
        this.disponibilidad = true;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

const productos = [
    {id:1, instrumental: "aspirador", precio: 20000, stock: 5, disponibilidad: true},
    {id:2, instrumental: "tubos", precio: 55000, stock: 1, disponibilidad: true},
    {id:3, instrumental: "kerrison", precio: 120000, stock:10, disponibilidad: true},
    {id:4, instrumental: "disector", precio:10000, stock:40, disponibilidad: true},
    {id:5, instrumental: "gubia", precio: 45000, stock: 0, disponibilidad: false },
    {id:6, instrumental: "cureta", precio: 15000, stock:25, disponibilidad: true},
    {id:7, instrumental: "separador", precio: 7000, stock: 30, disponibilidad: true},
    {id:8, instrumental: "espatula", precio: 17000, stock:0, disponibilidad: false}
]

productos.push (new Producto (9, "pinza", 6000, 10, true))
productos.push (new Producto(10, "bipolar", 50000, 0, false))

const presupuestados = [ ]

//elimino el último elemento
productos.pop()
console.log(productos)



//De acá para abajo código para agregar productos al presupuestador y archivarlos en localStorage
let pr = document.getElementById("pr")
console.log(pr)

let pr2 = document.getElementById("pr2")

let btn1 = document.querySelector(".btn1")
btn1.addEventListener('click', presupuestar1);

let btn2 = document.querySelector(".btn2")
btn2.addEventListener('click', presupuestar2);

let btn3 = document.querySelector(".btn3")
btn3.addEventListener('click', presupuestar3);

let btn4 = document.querySelector(".btn4")
btn4.addEventListener('click', presupuestar4);

let btn5 = document.querySelector(".btn5")
btn5.addEventListener('click', presupuestar5);

let btn6 = document.querySelector(".btn6")
btn6.addEventListener('click', presupuestar6);

let btn7 = document.querySelector(".btn7")
btn7.addEventListener('click', presupuestar7);

let btn8 = document.querySelector(".btn8")
btn8.addEventListener('click', presupuestar8);

let btn9 = document.querySelector(".btn9")
btn9.addEventListener('click', presupuestar9);

function presupuestar1(e){
   window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
   e.preventDefault();
   let div = document.createElement("div");
   div.innerHTML = `<div class="card" style="width: 9rem;">
   <img src="Imagenes/DQ1.jpg" class="card-img-top" alt="Aspirador">
   <div class="card-body">
     <h5 class="card-title">Aspirador</h5>
     <p class="card-text"></p>
     <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
   </div>
 </div>
   `
    pr.append(div)
    //incluyo el elemento presupuestado en un nuevo array
    const producto1 = {id:1, instrumental: "aspirador", precio: 20000, stock: 5, disponibilidad: true}
    presupuestados.push (producto1)
    //convierto el objeto a JSON para luego almacenarlo en localStorage
    const producto1JSON = JSON.stringify(producto1)
    localStorage.setItem("producto1", producto1JSON)    
}

function presupuestar2(e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
    e.preventDefault();
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 9rem;">
    <img src="Imagenes/DQ4.jpg" class="card-img-top" alt="Tubos">
    <div class="card-body">
      <h5 class="card-title">Tubos</h5>
      <p class="card-text"></p>
      <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
    </div>
  </div>
    `
     pr.append(div)
     //incluyo el elemento presupuestado en un nuevo array
     const producto2 = {id:2, instrumental: "tubos", precio: 55000, stock: 1, disponibilidad: true}
     presupuestados.push (producto2)
     //convierto el objeto a JSON para luego almacenarlo en localStorage
     const producto2JSON = JSON.stringify(producto2)
     localStorage.setItem("producto2", producto2JSON)    
 }

 function presupuestar3(e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
    e.preventDefault();
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 9rem;">
    <img src="Imagenes/DQ5.jpg" class="card-img-top" alt="Kerrison">
    <div class="card-body">
      <h5 class="card-title">Kerrison</h5>
      <p class="card-text"></p>
      <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
    </div>
  </div>
    `
     pr.append(div)
     //incluyo el elemento presupuestado en un nuevo array
     const producto3 = {id:3, instrumental: "kerrison", precio: 120000, stock:10, disponibilidad: true}
     presupuestados.push (producto3)
     //convierto el objeto a JSON para luego almacenarlo en localStorage
     const producto3JSON = JSON.stringify(producto3)
     localStorage.setItem("producto3", producto3JSON)    
 }

 function presupuestar4(e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
    e.preventDefault();
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 9rem;">
    <img src="Imagenes/DQ7.jpg" class="card-img-top" alt="Disector">
    <div class="card-body">
      <h5 class="card-title">Disector</h5>
      <p class="card-text"></p>
      <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
    </div>
  </div>
    `
     pr.append(div)
     //incluyo el elemento presupuestado en un nuevo array
     const producto4 = {id:4, instrumental: "disector", precio:10000, stock:40, disponibilidad: true}
     presupuestados.push (producto4)
     //convierto el objeto a JSON para luego almacenarlo en localStorage
     const producto4JSON = JSON.stringify(producto4)
     localStorage.setItem("producto4", producto4JSON)    
 }

 function presupuestar5(e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
    e.preventDefault();
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 9rem;">
    <img src="Imagenes/DQ1.jpg" class="card-img-top" alt="Gubia">
    <div class="card-body">
      <h5 class="card-title">Gubia
      <p class="card-text"></p>
      <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
    </div>
  </div>
    `
     pr.append(div)
     //incluyo el elemento presupuestado en un nuevo array
     const producto5 = {id:5, instrumental: "gubia", precio: 45000, stock: 0, disponibilidad: false }
     presupuestados.push (producto5)
     //convierto el objeto a JSON para luego almacenarlo en localStorage
     const producto5JSON = JSON.stringify(producto5)
     localStorage.setItem("producto5", producto5JSON)    
 }

 function presupuestar6(e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
    e.preventDefault();
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 9rem;">
    <img src="Imagenes/DQ5.jpg" class="card-img-top" alt="Cureta">
    <div class="card-body">
      <h5 class="card-title">Cureta</h5>
      <p class="card-text"></p>
      <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
    </div>
  </div>
    `
     pr.append(div)
     //incluyo el elemento presupuestado en un nuevo array
     const producto6 = {id:6, instrumental: "cureta", precio: 15000, stock:25, disponibilidad: true}
     presupuestados.push (producto6)
     //convierto el objeto a JSON para luego almacenarlo en localStorage
     const producto6JSON = JSON.stringify(producto6)
     localStorage.setItem("producto6", producto6JSON)    
 }

 function presupuestar7(e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
    e.preventDefault();
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 9rem;">
    <img src="Imagenes/DQ8.jpg" class="card-img-top" alt="Separador">
    <div class="card-body">
      <h5 class="card-title">Separador</h5>
      <p class="card-text"></p>
      <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
    </div>
  </div>
    `
     pr.append(div)
     //incluyo el elemento presupuestado en un nuevo array
     const producto7 = {id:7, instrumental: "separador", precio: 7000, stock: 30, disponibilidad: true}
     presupuestados.push (producto7)
     //convierto el objeto a JSON para luego almacenarlo en localStorage
     const producto7JSON = JSON.stringify(producto7)
     localStorage.setItem("producto7", producto7JSON)    
 }

 function presupuestar8(e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
    e.preventDefault();
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 9rem;">
    <img src="Imagenes/DQ3.jpg" class="card-img-top" alt="Espatula">
    <div class="card-body">
      <h5 class="card-title">Espátula</h5>
      <p class="card-text"></p>
      <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
    </div>
  </div>
    `
     pr.append(div)
     //incluyo el elemento presupuestado en un nuevo array
     const producto8 = {id:8, instrumental: "espatula", precio: 17000, stock:0, disponibilidad: false}
     presupuestados.push (producto8)
     //convierto el objeto a JSON para luego almacenarlo en localStorage
     const producto8JSON = JSON.stringify(producto8)
     localStorage.setItem("producto8", producto8JSON)    
 }

 function presupuestar9(e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#presupuestador' 
    e.preventDefault();
    let div = document.createElement("div");
    div.innerHTML = `<div class="card" style="width: 9rem;">
    <img src="Imagenes/DQ8.jpg" class="card-img-top" alt="Pinza">
    <div class="card-body">
      <h5 class="card-title">Pinza</h5>
      <p class="card-text"></p>
      <a href="productos.html#prodInicio" class="btn btn-primary">Seguir viendo productos</a>
    </div>
  </div>
    `
     pr.append(div)
     //incluyo el elemento presupuestado en un nuevo array
     const producto9 = {id:9, instrumental: "pinza", precio: 6000, stock: 10, disponibilidad: true}
     presupuestados.push (producto9)
     //convierto el objeto a JSON para luego almacenarlo en localStorage
     const producto9JSON = JSON.stringify(producto9)
     localStorage.setItem("producto9", producto9JSON)    
 }

 
//código para confirmar compra de acá para abajo 
const btnConfirma = document.querySelector('#btnConfirma')
console.log(btnConfirma)
btnConfirma.addEventListener('click', comprar)



function comprar (e){
    window.location.href = 'http://127.0.0.1:5500/productos.html#pr2'
    let h4 = document.createElement("h4")
    h4.innerHTML = `<h4 > Los instrumentales seleccionados para presupuestar son:</h4>
                           `
    pr2.append(h4)
    for (producto of presupuestados){
        let p = document.createElement("p")
        p.innerHTML = `<p> - ${producto.instrumental} </p>
        `
        pr2.append(p)
    }
    
    let disponible = presupuestados.some((item) => item.disponibilidad == false)
    console.log(disponible)
    if(disponible){
        const faltantes = presupuestados.filter((item) => item.disponibilidad == false)
        let h4 = document.createElement("h4")
        h4.innerHTML = `<h4 > No contamos con disponibilidad para los siguientes productos:</h4>
                           `
        pr2.append(h4)
        for (producto of faltantes){
        let p2 = document.createElement("p")
        p2.innerHTML = `<p> - ${producto.instrumental} </p>
                        <button class="btn-primary" id="btnReiniciar">Hacer nuevo presupuesto </button>
        `
        pr2.append(p2)
        let btnReiniciar = document.querySelector('#btnReiniciar')
        btnReiniciar.addEventListener('click', reiniciar)
        function reiniciar(){
          window.location.href = 'http://127.0.0.1:5500/productos.html' 
        }
    }
        
    } else {
        let p2 = document.createElement("p")
        p2.innerHTML = `<p>Contamos con disponibilidad para los productos seleccionados</p>
                       <p> El presupuesto ha sido enviado a su mail </p>

        `
        pr2.append(p2)
        let montoTotal = presupuestados.reduce((acc, item) => acc + item.precio, 0)
        let h4_2 = document.createElement("h4") 
        h4_2.innerHTML = `<h4 class="text-center">El monto total a pagar es:
                    <p>Sin iva: ${montoTotal} pesos</p>
                    <p>Con iva: ${montoTotal * 1.21} pesos</p>
                    <button class="btn-primary" id="btnIndex">Gracias por consultarnos</button>
                   
    `
        pr2.append(h4_2)
        let btnIndex = document.querySelector('#btnIndex')
        btnIndex.addEventListener('click', index)
        function index(){
          window.location.href = 'http://127.0.0.1:5500/index.html' 
        }
    }
}



