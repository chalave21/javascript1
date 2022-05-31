class Producto{
    constructor(id,nombre,precio)
    {
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}
 
const productos = [];

titulo();

mostrarMenu();

function titulo () {
   const h1 = document.createElement("h1");
   h1.innerHTML = "<b>SISTEMA DE USUARIOS<b>";
   document.body.appendChild(h1);
}
 
function mostrarMenu()
{
    let opciones = ["Listar Productos","Agregar Productos", "Eliminar Producto"];
    opciones.forEach((opcion) => {

  const boton = document.createElement("button");
  if (opcion === "Listar Productos") {
      boton.addEventListener("click",()=>{
        listarProductos()
      })
  }else if (opcion === "Agregar Productos") {
    boton.addEventListener("click",()=>{
        agregarProducto();
    })
  }else if (opcion === "Eliminar Producto") {
    boton.addEventListener("click",()=>{
        eliminarProducto();
    })
  }
  boton.innerHTML = opcion;
  document.body.appendChild(boton);
    });

    
 }
  
 function agregarProducto()
 {      
     let id=1;
     if(productos.length>0)
     {
        id=productos[productos.length-1].id+1;
     }
     
     let nombre=prompt("ingrese un nombre");
     let precio = Number(prompt("ingrese un precio"));
     let producto = new Producto(id, nombre, precio);
  
     productos.push(producto);
 }
  
 function listarProductos()
 {
    console.log("LISTAR PRODUCTOS")
    
    productos.forEach(
        (producto)=>{
            
            console.log(producto.id+" "+producto.nombre+" "+producto.precio);
  
        }
    );
  
 }
  
 function eliminarProducto(){
  
    let id= Number(prompt("Ingrese el id del producto que quiere eliminar"));
  
    let encontrado = productos.find((producto)=>producto.id===id);
  
   if(!encontrado)
   {
       alert("Producto no Encontrado");
    }
    else{
   
         let index = productos.indexOf(encontrado);
   
         productos.splice(index,1);
   
         console.log("Borrar producto");
         console.log(productos);
   
    }
     
   
  }