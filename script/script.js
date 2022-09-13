

let contenedor = document.getElementById("contenedor");
let seccion = prompt("ingrese la seccion deseada");
let contenedorDos = document.getElementById("contenedorDos")









let respuesta = () => {
    console.log ("click de compra New Balance azul");
}
let boton = document.getElementById("principal");
boton.addEventListener("click", respuesta);

let respuestaDos = () => {
    console.log ("click de compra New Balance rojo");
}
let botonDos = document.getElementById("principalDos");
botonDos.addEventListener("click", respuestaDos);

let respuestaTres = () => {
    console.log ("click de compra New Balance gris");
}
let botonTres = document.getElementById("principalTres");
botonTres.addEventListener("click", respuestaTres);








        
        if(seccion === "zapatillas"){
  
            contenedor.innerHTML = "<h2>Ofertas De Zapatillas</h2>";
             contenedor.className = "ofertas";
             let contenedorDos = document.getElementById("contenedorDos")
             let productos = [
             
             {id: 1, nombre:"zapatillas fila", precio: 9000 },
             {id: 2, nombre:"zapatillas adidas", precio: 9000 },
             {id: 3, nombre:"zapatillas nike", precio: 8000 },
             {id: 4, nombre:"zapatillas topper", precio: 1000 },
            ]
     
            let precio = parseInt(prompt("ingrese precio maximo"));
            let productosFiltrados = productos.filter(item =>item.precio <= precio);
     
            for( const producto of productosFiltrados){
             let item = document.createElement("div");
             item.innerHTML=`<h2> ID: ${producto.id}</h2>
                           <b class="zapatillas">Producto: ${producto.nombre}</b>
                           <p class="zapatillas">Precio$: ${producto.precio}</p>
                           <img class="fotos"src="/fotos/section/zapatillas-hombre-new-balance-3.jpg " alt="">`;
                           
                           
     
                           contenedorDos.append(item);                
     
            }
     
            
        }
        else if(seccion ==="remeras") {
            contenedor.innerHTML = "<h2>Ofertas De Remeras</h2>";
            contenedor.className = "ofertas";

           
            let contenedorDos = document.getElementById("contenedorDos")
            let productos = [
            
            {id: 1, nombre:"remeras fila", precio: 3000 },
            {id: 2, nombre:"remeras adidas", precio: 2500 },
            {id: 3, nombre:"remeras nike", precio: 2000 },
            {id: 4, nombre:"remeras topper", precio: 3000 },
           ]
    
           let precio = parseInt(prompt("ingrese precio maximo"));
           let productosFiltrados = productos.filter(item =>item.precio <= precio);
    
           for( const producto of productosFiltrados){
            let item = document.createElement("div");
            item.innerHTML=`<h2> ID: ${producto.id}</h2>
                          <b class="zapatillas">Producto: ${producto.nombre}</b>
                          <p class="zapatillas">Precio$: ${producto.precio}</p>
                          <img class="fotos"src="/fotos/section/zapatillas-hombre-new-balance-3.jpg " alt="">`;
                          
                          
    
                          contenedorDos.append(item);                
    
           }
    
        }
        else if(seccion ==="pantalones") {
            contenedor.innerHTML = "<h2>Ofertas De Pantalones</h2>";
            contenedor.className = "ofertas";

            let contenedorDos = document.getElementById("contenedorDos")
            let productos = [
            
            {id: 1, nombre:"pantalones fila", precio: 9000 },
            {id: 2, nombre:"pantalones adidas", precio: 9000 },
            {id: 3, nombre:"pantalones nike", precio: 8000 },
            {id: 4, nombre:"pantalones topper", precio: 8000 },
           ]
    
           let precio = parseInt(prompt("ingrese precio maximo"));
           let productosFiltrados = productos.filter(item =>item.precio <= precio);
    
           for( const producto of productosFiltrados){
            let item = document.createElement("div");
            item.innerHTML=`<h2> ID: ${producto.id}</h2>
                          <b class="zapatillas">Producto: ${producto.nombre}</b>
                          <p class="zapatillas">Precio$: ${producto.precio}</p>
                          <img class="fotos"src="/fotos/section/zapatillas-hombre-new-balance-3.jpg " alt="">`;
                          
                          
    
                          contenedorDos.append(item);                
    
           }
        }
        else{
            contenedor.innerHTML = "<h2>Super Ofertas</h2>";
            contenedor.className = "ofertas";

            let contenedorDos = document.getElementById("contenedorDos")
            let productos = [
            
            {id: 1, nombre:"remera fila", precio: 2000 },
            {id: 2, nombre:"pantalones adidas", precio: 8000 },
            {id: 3, nombre:"zapatilla nike", precio: 8000 },
            {id: 4, nombre:"boxer topper", precio: 1000 },
           ]
    
           let precio = parseInt(prompt("ingrese precio maximo"));
           let productosFiltrados = productos.filter(item =>item.precio <= precio);
    
           for( const producto of productosFiltrados){
            let item = document.createElement("div");
            item.innerHTML=`<h2> ID: ${producto.id}</h2>
                          <b class="zapatillas">Producto: ${producto.nombre}</b>
                          <p class="zapatillas">Precio$: ${producto.precio}</p>
                          <img class="fotos"src="/fotos/section/zapatillas-hombre-new-balance-3.jpg " alt="">`;
                          
                          
    
                          contenedorDos.append(item);   
        }
    }
    


    let formulario = document.getElementById("formulario")
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        let inputs = e.target.children;
        if(!inputs[0].value.includes("@")){
            inputs[0].value ="";
        }
        else console.log(inputs [0].value);
            console.log(inputs [1].value);
    })
    
  
