document.addEventListener("scroll", function() {
    let productos = document.querySelectorAll(".producto");

    productos.forEach(producto => {
        let position = producto.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            producto.classList.add("visible");
        }
    });
});
