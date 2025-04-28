document.querySelector(".boton-compra").addEventListener("click", function() {
    let talla = document.getElementById("talla").value;
    let cantidad = document.getElementById("cantidad").value;
    alert(`Has agregado ${cantidad} camiseta(s) talla ${talla} al carrito.`);
});


document.getElementById("incrementar").addEventListener("click", function() {
    let cantidad = document.getElementById("cantidad");
    let nuevaCantidad = parseInt(cantidad.innerText) + 1;
    cantidad.innerText = nuevaCantidad;
});

document.getElementById("decrementar").addEventListener("click", function() {
    let cantidad = document.getElementById("cantidad");
    let nuevaCantidad = parseInt(cantidad.innerText) - 1;
    
    if (nuevaCantidad >= 1) { // Evita que el número sea menor a 1
        cantidad.innerText = nuevaCantidad;
    }
});

